document.body.style.margin = "0";

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let streaming = false;
let faceCascade;

let src;
let gray;
let faces;

function onOpenCvReady() {
  cv.onRuntimeInitialized = () => {
    faceCascade = new cv.CascadeClassifier();
    let faceCascadeFile = "haarcascade_frontalface_default.xml";
    createFileFromUrl(faceCascadeFile, faceCascadeFile, () => {
      faceCascade.load(faceCascadeFile);
    });
    startCamera();
  };
}

function startCamera() {
  if (streaming) return;
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
      streaming = true;
      video.addEventListener("canplay", onVideoCanPlay, false);
    });
}

function onVideoCanPlay() {
  if (streaming) {
    src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
    gray = new cv.Mat(video.height, video.width, cv.CV_8UC1);
    faces = new cv.RectVector();
    setTimeout(processVideo, 0);
  }
}

function processVideo() {
  try {
    if (!streaming) {
      src.delete();
      gray.delete();
      faces.delete();
      return;
    }

    ctx.drawImage(video, 0, 0, video.width, video.height);
    src.data.set(ctx.getImageData(0, 0, video.width, video.height).data);
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

    faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0);

    for (let i = 0; i < faces.size(); i++) {
      const face = faces.get(i);
      if (face) {
        let xy1 = new cv.Point(face.x, face.y);
        let xy2 = new cv.Point(face.x + face.width, face.y + face.height);
        cv.rectangle(src, xy1, xy2, [255, 0, 0, 255]);
      }
    }

    cv.imshow("canvas", src);

    requestAnimationFrame(processVideo);
  } catch (err) {}
}

function createFileFromUrl(path, url, callback) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";
  request.onload = function (ev) {
    if (request.readyState === 4) {
      if (request.status === 200) {
        let data = new Uint8Array(request.response);
        cv.FS_createDataFile("/", path, data, true, false, false);
        callback();
      } else {
        console.error("Failed to load " + url + " status: " + request.status);
      }
    }
  };
  request.send();
}

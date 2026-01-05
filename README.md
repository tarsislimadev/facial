# [Facial Detection Application](https://facial.tarsislima.com/)

This is a simple web application that uses your webcam to detect faces in real-time. It will draw a red rectangle around any faces it detects in the video feed.

## How to Use

1.  **Grant Camera Access:** When you open the application in your web browser, it will ask for permission to access your webcam. Please allow access.
2.  **See Your Face:** Once access is granted, you will see your live webcam feed on the screen. If a face is detected, a red rectangle will appear around it.

## Getting Started (For Running the Application)

To run this application, you will need a simple web server.

1.  **Download the Project:** Get a copy of this project (e.g., by downloading the ZIP file or cloning the repository if you're familiar with Git).
2.  **Open in Browser:** Navigate to the project folder on your computer. You can use a simple local web server to open the `index.html` file in your browser.
*   **Using Python (if installed):** Open your terminal or command prompt, navigate to the project directory, and run:
```bash
python -m http.server
```
Then, open your web browser and go to `http://localhost:8000`.
*   **Using a "Live Server" extension (e.g., in VS Code):** If you use a code editor like VS Code, you can often find extensions that provide a "Live Server" feature. Install one, right-click on `index.html`, and choose "Open with Live Server".

## About the Technology

This application is built using standard web technologies: HTML, CSS, and JavaScript. It leverages the power of **OpenCV.js**, which is a JavaScript version of the popular OpenCV library, for performing the real-time facial detection.

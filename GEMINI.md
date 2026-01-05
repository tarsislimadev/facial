# Project Overview

This project is a web-based facial detection application. It uses OpenCV.js to detect faces in a live video stream from a webcam and draws a rectangle around the detected face.

## Technologies

*   HTML
*   CSS
*   JavaScript
*   OpenCV.js

## Architecture

The application consists of three main files:

*   `index.html`: The main HTML file that sets up the video and canvas elements and includes the necessary scripts.
*   `index.js`: This file contains the core logic of the application. It initializes the camera, loads the Haar Cascade for face detection, and continuously processes the video stream to detect and highlight faces.
*   `index.css`: This file contains the styling for the application.

# Building and Running

To run this project, you need a web server. You can use any simple web server, like Python's `http.server` or the `Live Server` extension for VS Code.

1.  Clone the repository.
2.  Navigate to the project directory.
3.  Start a local web server. For example, using Python:

    ```bash
    python -m http.server
    ```

4.  Open your web browser and navigate to the local server's address (e.g., `http://localhost:8000`).

# Development Conventions

There are no explicit development conventions documented in the project. However, the code is well-structured and follows standard JavaScript practices.

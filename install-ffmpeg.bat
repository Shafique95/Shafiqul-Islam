@echo off
echo Installing FFmpeg for video conversion...
echo.
echo This will download and install FFmpeg so we can convert your video.
echo.
pause

REM Download FFmpeg using winget (Windows Package Manager)
winget install Gyan.FFmpeg

echo.
echo FFmpeg installation complete!
echo You can now convert videos directly from VS Code.
echo.
pause

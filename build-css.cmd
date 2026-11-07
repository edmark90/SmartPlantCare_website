@echo off
setlocal
cd /d "%~dp0"
if not exist "tools\tailwindcss-v3.exe" (
  if not exist "tools" mkdir "tools"
  powershell.exe -NoProfile -Command "Invoke-WebRequest -Uri 'https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-windows-x64.exe' -OutFile 'tools/tailwindcss-v3.exe' -UseBasicParsing"
  if errorlevel 1 exit /b 1
)
"tools\tailwindcss-v3.exe" -c "tailwind.config.js" -i "css/input.css" -o "css/tailwind.css" --minify %*
exit /b %errorlevel%
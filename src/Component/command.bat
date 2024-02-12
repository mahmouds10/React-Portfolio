@echo off
:loop
set /p input="Enter directory name: "
if "%input%"=="exit" goto :end
md "%input%" 2>nul
cd "%input%"
type nul > "%input%.jsx"
type nul > "%input%.css"
echo import'./%input%.css' > "%input%.jsx"
cd ..
goto :loop

:end

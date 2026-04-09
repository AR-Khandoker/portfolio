@echo off
REM 🚀 Quick Git Push Script for Windows
REM Double-click this file to push all changes to GitHub

echo 🚀 Starting Git Push Process...
echo.

REM Check if we're in a git repository
if not exist .git (
    echo ❌ Error: Not a git repository
    echo Run: git init
    pause
    exit /b 1
)

REM Show status
echo 📋 Current Status:
git status --short
echo.

REM Ask for confirmation
set /p confirm="⚠️  Push these changes to GitHub? (y/n): "
if /i not "%confirm%"=="y" (
    echo ❌ Push cancelled
    pause
    exit /b 1
)

REM Add all changes
echo 📦 Adding all changes...
git add .

REM Commit with message
echo 💾 Committing changes...
git commit -m "Fix: Comprehensive QA and bug fixes - Fixed white screen errors and null pointer exceptions - Added ErrorBoundary for global error handling - Added loading states and empty state handling - Added Admin link to navigation - Server-side and frontend null filtering - Complete documentation suite - Status: Production Ready"

REM Push to remote
echo 🚀 Pushing to GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ✅ Successfully pushed to GitHub!
    echo 🎉 All changes are now on GitHub
) else (
    echo.
    echo ❌ Push to 'main' failed. Trying 'master' branch...
    git push origin master
    
    if %errorlevel% equ 0 (
        echo ✅ Successfully pushed to GitHub (master branch^)!
    ) else (
        echo ❌ Push failed. Please check your remote configuration
        echo Run: git remote -v
    )
)

echo.
echo ✨ Done!
echo.
pause

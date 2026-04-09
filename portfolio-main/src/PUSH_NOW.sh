#!/bin/bash

# 🚀 Quick Git Push Script
# Run this to push all changes to GitHub

echo "🚀 Starting Git Push Process..."
echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository"
    echo "Run: git init"
    exit 1
fi

# Show status
echo "📋 Current Status:"
git status --short
echo ""

# Ask for confirmation
read -p "⚠️  Push these changes to GitHub? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Push cancelled"
    exit 1
fi

# Add all changes
echo "📦 Adding all changes..."
git add .

# Commit with message
echo "💾 Committing changes..."
git commit -m "Fix: Comprehensive QA and bug fixes

- Fixed white screen errors and null pointer exceptions
- Added ErrorBoundary for global error handling
- Added loading states and empty state handling
- Added Admin link to navigation
- Server-side and frontend null filtering
- Complete documentation suite
- Database cleanup and seeding utilities

Status: Production Ready ✅
QA: Complete ✅
All Critical Bugs: Fixed ✅"

# Push to remote
echo "🚀 Pushing to GitHub..."
git push origin main

# Check if push was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🎉 All changes are now on GitHub"
else
    echo ""
    echo "❌ Push failed. Trying 'master' branch..."
    git push origin master
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully pushed to GitHub (master branch)!"
    else
        echo "❌ Push failed. Please check your remote configuration"
        echo "Run: git remote -v"
    fi
fi

echo ""
echo "✨ Done!"

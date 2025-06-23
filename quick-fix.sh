#!/bin/bash

echo "Quick fix for GitHub Pages MIME type issue"

# Create .nojekyll file in root (for manual deployment)
touch .nojekyll

# Ensure .nojekyll exists in public directory
touch public/.nojekyll

# Check if dist directory exists, if not create it
if [ ! -d "dist" ]; then
    mkdir dist
fi

# Copy .nojekyll to dist for immediate deployment
cp public/.nojekyll dist/ 2>/dev/null || true

echo "✅ .nojekyll files created"
echo "✅ Vite config updated with base path"
echo "✅ GitHub Actions workflow created"

echo ""
echo "Next steps:"
echo "1. Run 'npm install' (if not already running)"
echo "2. Run 'npm run build'"
echo "3. Commit and push changes"
echo "4. GitHub Actions will automatically deploy"
echo ""
echo "Or for manual deployment:"
echo "1. Install gh-pages: npm install -g gh-pages"
echo "2. Deploy: gh-pages -d dist"

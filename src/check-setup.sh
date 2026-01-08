#!/bin/bash

echo "=================================="
echo "Cold Form Steel Canada - Setup Verification"
echo "=================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check postcss.config.js
echo "1. Checking postcss.config.js..."
if [ -f "postcss.config.js" ]; then
    echo -e "${GREEN}✓ postcss.config.js exists${NC}"
    echo "   Content:"
    cat postcss.config.js | head -5
else
    echo -e "${RED}✗ postcss.config.js NOT FOUND${NC}"
    echo -e "${YELLOW}   This is the critical missing file!${NC}"
    echo "   Creating it now..."
    cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
EOF
    echo -e "${GREEN}✓ Created postcss.config.js${NC}"
fi
echo ""

# Check package.json for Tailwind
echo "2. Checking package.json for Tailwind..."
if grep -q "tailwindcss" package.json; then
    echo -e "${GREEN}✓ Tailwind CSS found in package.json${NC}"
    grep -A1 "tailwindcss" package.json | head -2
else
    echo -e "${RED}✗ Tailwind CSS NOT in package.json${NC}"
fi
echo ""

# Check styles/globals.css
echo "3. Checking styles/globals.css..."
if [ -f "styles/globals.css" ]; then
    echo -e "${GREEN}✓ styles/globals.css exists${NC}"
    if grep -q "@import \"tailwindcss\"" styles/globals.css; then
        echo -e "${GREEN}✓ Tailwind import found${NC}"
    else
        echo -e "${RED}✗ Tailwind import missing${NC}"
    fi
    if grep -q "@source" styles/globals.css; then
        echo -e "${GREEN}✓ @source directive found${NC}"
        grep "@source" styles/globals.css | head -1
    fi
else
    echo -e "${RED}✗ styles/globals.css NOT FOUND${NC}"
fi
echo ""

# Check .gitignore
echo "4. Checking .gitignore..."
if [ -f ".gitignore" ]; then
    echo -e "${GREEN}✓ .gitignore exists${NC}"
    if grep -q "/app" .gitignore; then
        echo -e "${GREEN}✓ /app directory excluded${NC}"
    fi
else
    echo -e "${YELLOW}⚠ .gitignore not found${NC}"
fi
echo ""

# Check git status
echo "5. Checking Git status..."
if git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Git repository initialized${NC}"
    echo ""
    echo "Files not yet committed:"
    git status --short
    echo ""
else
    echo -e "${RED}✗ Not a Git repository${NC}"
fi

# Check if postcss.config.js is in git
if git ls-files --error-unmatch postcss.config.js > /dev/null 2>&1; then
    echo -e "${GREEN}✓ postcss.config.js is tracked by Git${NC}"
else
    echo -e "${YELLOW}⚠ postcss.config.js is NOT tracked by Git yet${NC}"
    echo "   You need to: git add postcss.config.js"
fi
echo ""

# Summary
echo "=================================="
echo "SUMMARY & NEXT STEPS"
echo "=================================="
echo ""

if [ ! -f "postcss.config.js" ]; then
    echo -e "${RED}ACTION REQUIRED:${NC}"
    echo "1. postcss.config.js was just created"
    echo "2. Run: git add postcss.config.js"
    echo "3. Run: git commit -m 'Add PostCSS config for Vercel'"
    echo "4. Run: git push origin main"
elif ! git ls-files --error-unmatch postcss.config.js > /dev/null 2>&1; then
    echo -e "${YELLOW}ACTION REQUIRED:${NC}"
    echo "postcss.config.js exists but is not committed yet"
    echo ""
    echo "Run these commands:"
    echo "  git add postcss.config.js"
    echo "  git commit -m 'Add PostCSS config for Vercel'"
    echo "  git push origin main"
else
    echo -e "${GREEN}✓ Everything looks good!${NC}"
    echo ""
    echo "If your site is still not styled:"
    echo "1. Check Vercel build logs for errors"
    echo "2. Try redeploying with cache cleared"
    echo "3. Verify postcss.config.js is in your GitHub repo"
fi

echo ""
echo "=================================="

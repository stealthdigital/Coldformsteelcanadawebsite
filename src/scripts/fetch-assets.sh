#!/bin/bash

# Fetch assets from the assets branch before building
echo "Fetching images from assets branch..."

# Create directories if they don't exist
mkdir -p public/assets

# Try to fetch the assets branch with more depth
git fetch --depth=1 origin assets:assets 2>/dev/null || echo "Could not fetch assets branch"

# Check if we successfully fetched the branch
if git show-ref --verify --quiet refs/heads/assets; then
  echo "Assets branch found, extracting files..."
  # Extract files from the assets branch
  git show assets:public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png > public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png 2>/dev/null && echo "✓ Piccolo image extracted"
  git show assets:public/assets/1a5df16654a4eb18c1d923f59d0175c816f96be8.png > public/assets/1a5df16654a4eb18c1d923f59d0175c816f96be8.png 2>/dev/null && echo "✓ FrameCAD logo extracted"
  git show assets:public/assets/308e1fbaa5498e6932bee902e6edee7720954263.png > public/assets/308e1fbaa5498e6932bee902e6edee7720954263.png 2>/dev/null && echo "✓ CFSC logo extracted"
  git show assets:public/assets/341e33826ef795d0cf2867c3001b627df15e31ff.png > public/assets/341e33826ef795d0cf2867c3001b627df15e31ff.png 2>/dev/null && echo "✓ SteelBuilt logo extracted"
  git show assets:public/assets/58f51d3f6fcfbb103c76adbc254fe9642bf10499.png > public/assets/58f51d3f6fcfbb103c76adbc254fe9642bf10499.png 2>/dev/null && echo "✓ Maple leaf icon extracted"
  git show assets:public/assets/be69edff5a1a525e997504d24005a866111a3d19.png > public/assets/be69edff5a1a525e997504d24005a866111a3d19.png 2>/dev/null && echo "✓ Medio image extracted"
  git show assets:public/assets/e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png > public/assets/e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png 2>/dev/null && echo "✓ Hero image extracted"
  git show assets:public/assets/e2e217c234df09ee63fb7874604664b6915f74ac.png > public/assets/e2e217c234df09ee63fb7874604664b6915f74ac.png 2>/dev/null && echo "✓ Logo extracted"
  echo "Assets fetched successfully!"
else
  echo "Warning: Could not access assets branch. Images may not display."
fi
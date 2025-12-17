#!/bin/bash

# Fetch assets from the assets branch before building
echo "Fetching images from assets branch..."

# Create directories if they don't exist
mkdir -p public/assets
mkdir -p public/images

# Fetch images from assets branch
git fetch origin assets

# Copy assets from the assets branch to the public folder
git checkout origin/assets -- public/assets/*.png 2>/dev/null || echo "No PNG files in public/assets on assets branch yet"
git checkout origin/assets -- public/images/*.jpg 2>/dev/null || echo "No JPG files in public/images on assets branch yet"
git checkout origin/assets -- public/images/*.png 2>/dev/null || echo "No PNG files in public/images on assets branch yet"

echo "Assets fetched successfully!"

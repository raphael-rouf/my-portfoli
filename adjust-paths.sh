#!/bin/bash

# Adjust paths in files
sed -i 's|/assets/|/my-portfolio/assets/|g' $(find . -type f -name "*.css")

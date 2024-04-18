#!/bin/bash

# Adjust paths in files
sed -i 's|/assets/|/my-portfolio/assets/|g' $(find . -type f -name "*.html")
sed -i 's|/assets/|/my-portfolio/assets/|g' $(find . -type f -name "*.css")
sed -i 's|/assets/|/my-portfolio/assets/|g' $(find . -type f -name "*.ts")

# Build your Angular project
ng build --configuration=production --base-href=/my-portfolio/

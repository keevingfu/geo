#!/bin/bash

echo "Starting GEO Dashboard Server..."

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Start the server
echo "Server starting on http://localhost:3000"
npm start
#!/bin/bash
# CouchBnB Quick Start Script

echo "🛋️  CouchBnB - Starting application..."
echo ""

# Check if virtual environment exists
if [ ! -d "venv" ] && [ ! -d ".venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
    echo "✓ Virtual environment created"
fi

# Activate virtual environment
if [ -d "venv" ]; then
    source venv/bin/activate
elif [ -d ".venv" ]; then
    source .venv/bin/activate
fi

# Install dependencies
echo "Installing dependencies..."
pip install -q -r requirements.txt
echo "✓ Dependencies installed"

# Start the application
echo ""
echo "Starting Flask application..."
echo "➜ Open http://localhost:5001 in your browser"
echo ""
python run.py

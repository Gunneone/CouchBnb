# CouchBnB - Quick Start Guide

## 🚀 Three Ways to Run

### Option 1: Quick Start Script (Easiest)
```bash
./start.sh
```
Then open http://localhost:5001

### Option 2: Docker (Recommended for Production)
```bash
docker-compose up
```
Then open http://localhost:5001

### Option 3: Manual Setup
```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run application
python run.py
```
Then open http://localhost:5001

## 📋 What's Included

✅ **Flask Web Application** - Lightweight Python backend  
✅ **Client-Side Processing** - No data stored on server  
✅ **Airbnb-Style Design** - Authentic looking reviews  
✅ **Three Templates** - Pre-written fun messages  
✅ **Custom Profile Pictures** - Upload your own or use default  
✅ **PNG Download** - High-quality image generation  
✅ **Docker Ready** - Easy deployment  
✅ **Mobile Responsive** - Works on all devices  

## 🎯 How to Use

1. **Enter Your Details**
   - Name, date, star rating (1-5)
   - Write your review or pick a template
   
2. **Customize**
   - Upload a profile picture (optional)
   - Edit the text to your liking
   
3. **Preview**
   - See real-time updates as you type
   
4. **Download**
   - Click "Download Review" button
   - Share your PNG with your host!

## 🛠️ Project Structure

```
CouchBnB/
├── app/
│   ├── __init__.py           # Flask initialization
│   ├── routes.py             # Routes (just homepage)
│   ├── static/
│   │   ├── css/style.css     # Airbnb-style design
│   │   ├── js/app.js         # Client-side logic
│   │   └── images/           # Default avatar
│   └── templates/
│       └── index.html        # Main page
├── config.py                 # Configuration
├── run.py                    # Application entry
├── requirements.txt          # Python dependencies
├── Dockerfile                # Docker image
├── docker-compose.yml        # Docker setup
└── start.sh                  # Quick start script
```

## 🎨 Customization

### Change Review Card Style
Edit `app/static/css/style.css`:
- Colors: Modify CSS variables at top
- Layout: Adjust `.review-card` styles
- Fonts: Change `font-family` properties

### Change Templates
Edit `app/static/js/app.js` - look for `template-btn` buttons

### Change Port
Edit in three places:
1. `run.py` - app.run(port=XXXX)
2. `docker-compose.yml` - ports section
3. `Dockerfile` - EXPOSE XXXX

## 🐳 Docker Commands

```bash
# Build image
docker build -t couchbnb .

# Run container
docker run -p 5001:5001 couchbnb

# Use Docker Compose
docker-compose up           # Start
docker-compose up -d        # Start detached
docker-compose down         # Stop
docker-compose logs         # View logs
```

## 🔧 Troubleshooting

### Port Already in Use
On macOS, port 5000 is often used by AirPlay. We use 5001 instead.

To change port, edit `run.py`:
```python
app.run(host='0.0.0.0', port=YOUR_PORT, debug=True)
```

### Module Not Found
Make sure virtual environment is activated:
```bash
source venv/bin/activate  # or .venv/bin/activate
pip install -r requirements.txt
```

### Image Won't Download
- Ensure you're using a modern browser (Chrome, Firefox, Safari)
- Check browser console for errors (F12)
- Try disabling browser extensions

### Profile Picture Won't Upload
- File must be an image (jpg, png, gif, etc.)
- File must be under 5MB
- Try a different image format

## 📝 Development

### Running in Debug Mode
Already enabled in `run.py` with `debug=True`

### Making Changes
1. Edit files in `app/` directory
2. Flask auto-reloads on file changes
3. Refresh browser to see updates

### Testing
```bash
# Test homepage
curl http://localhost:5001

# Test static files
curl http://localhost:5001/static/css/style.css
```

## 🔒 Privacy

- **No data storage** - Everything happens in your browser
- **No tracking** - No analytics or cookies
- **No external calls** - Works offline after loading
- **No database** - Pure client-side application

## 🎉 Features Checklist

- [x] Flask web application
- [x] Client-side image generation
- [x] Airbnb-style design
- [x] Star rating (1-5)
- [x] Three text templates
- [x] Custom text input
- [x] Date picker (defaults to today)
- [x] Profile picture upload
- [x] Default avatar
- [x] Live preview
- [x] PNG download
- [x] Mobile responsive
- [x] Docker support
- [x] No data storage

## 📞 Support

Questions or issues?
1. Check this guide
2. Read the main README.md
3. Check IMPLEMENTATION_PLAN.md for technical details
4. Open an issue on GitHub

## ⚠️ Reminder

This is for **entertainment only**. Not affiliated with Airbnb.  
Use responsibly and have fun! 🛋️

# 🛋️ CouchBnB - Mock Airbnb Review Generator

A fun Flask web application that lets you create mock Airbnb-style review images for thanking friends who let you crash on their couch. Perfect for sending a humorous and heartfelt thank-you!

![CouchBnB Banner](https://img.shields.io/badge/Python-3.9+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.0.0-green.svg)
![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🎯 What is CouchBnB?

CouchBnB is a client-side web application that generates realistic-looking Airbnb review images. It's designed for couch surfers who want to send their hosts a fun, shareable thank-you message that looks like an official Airbnb review.

**Important**: This is purely for entertainment purposes. There's no connection to Airbnb, and no actual reviews are posted anywhere.

## ✨ Features

- 🎨 **Airbnb-Style Design**: Authentic-looking review cards that mimic the real thing
- 📝 **Customizable Content**: Add your own text or use one of three fun templates
- ⭐ **Star Ratings**: Choose from 1-5 stars (5 stars by default)
- 👤 **Profile Pictures**: Upload your own or use the default avatar
- 📅 **Date Selection**: Defaults to today's date, but fully customizable
- 🖼️ **PNG Download**: Generate and download your review as a high-quality image
- 🔒 **Privacy First**: All processing happens in your browser - nothing is stored on any server
- 🎭 **Live Preview**: See your review update in real-time as you type
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🐳 **Docker Ready**: Easy deployment with Docker and Docker Compose

## 🚀 Quick Start

### Using Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/CouchBnB.git
   cd CouchBnB
   ```

2. **Run with Docker Compose**
   ```bash
   docker-compose up
   ```

3. **Open your browser**
   Navigate to `http://localhost:5001`

That's it! 🎉

### Manual Setup

1. **Clone and navigate to the project**
   ```bash
   git clone https://github.com/yourusername/CouchBnB.git
   cd CouchBnB
   ```

2. **Create a virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python run.py
   ```

5. **Open your browser**
   Navigate to `http://localhost:5001`

   > **Note**: Port 5001 is used by default. If port 5000 is blocked by macOS AirPlay, port 5001 avoids conflicts.

## 📖 How to Use

1. **Fill in the Review Details**
   - Enter your name (or the host's name)
   - Select the date (defaults to today)
   - Choose a star rating (1-5 stars)
   - Write your review or select a template

2. **Choose a Template (Optional)**
   - Click one of three fun pre-written templates
   - Or write your own custom message

3. **Add a Profile Picture (Optional)**
   - Upload your own photo
   - Or stick with the default avatar

4. **Preview Your Review**
   - See a live preview as you make changes
   - Ensure everything looks perfect

5. **Download**
   - Click the "Download Review" button
   - Your review image will be saved as a PNG file
   - Share it with your host!

## 🎨 Review Templates

CouchBnB comes with three built-in templates:

1. **"Thanks for letting me crash on your couch, Mate!"**
   - Casual and friendly

2. **"Your couch was more comfortable than most hotels! Thanks for the hospitality!"**
   - Appreciative and complimentary

3. **"10/10 would couch surf again. You're the best host!"**
   - Fun and rating-focused

Feel free to customize these or write your own!

## 🛠️ Technology Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Image Generation**: HTML2Canvas.js
- **Containerization**: Docker & Docker Compose
- **Design**: Custom CSS inspired by Airbnb's design system

## 📁 Project Structure

```
CouchBnB/
├── app/
│   ├── __init__.py           # Flask app initialization
│   ├── routes.py             # Application routes
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css     # Styles and Airbnb theme
│   │   ├── js/
│   │   │   ├── app.js        # Main application logic
│   │   │   └── html2canvas.min.js  # Image generation
│   │   └── images/
│   │       └── default-avatar.png  # Default profile pic
│   └── templates/
│       └── index.html        # Main page template
├── config.py                 # Configuration settings
├── run.py                    # Application entry point
├── requirements.txt          # Python dependencies
├── Dockerfile                # Docker image definition
├── docker-compose.yml        # Docker Compose configuration
└── README.md                 # This file
```

## 🔧 Configuration

The application works out of the box with sensible defaults. You can modify:

- **Port**: Change in `run.py`, `docker-compose.yml`, and `Dockerfile` (default: 5001)
- **Design**: Edit `app/static/css/style.css` to customize the review card appearance
- **Templates**: Modify `app/static/js/app.js` to change the predefined templates
- **Default Avatar**: Replace `app/static/images/default-avatar.png`

## 🎨 Customizing the Design

The review card styling is intentionally easy to modify:

1. **Colors**: Edit CSS variables in `style.css`
2. **Layout**: Modify the HTML structure in `index.html`
3. **Typography**: Change font families in `style.css`
4. **Dimensions**: Adjust the review card size for different output formats

All styling is contained in clean, commented CSS files.

## 🐳 Docker Details

### Building the Docker Image
```bash
docker build -t couchbnb .
```

### Running the Container
```bash
docker run -p 5000:5000 couchbnb
```

### Using Docker Compose
```bash
# Start the application
docker-compose up

# Start in detached mode
docker-compose up -d

# Stop the application
docker-compose down
```

## 🔒 Privacy & Security

- **No Data Storage**: Nothing you enter is stored on any server
- **Client-Side Processing**: All image generation happens in your browser
- **No Tracking**: No analytics, cookies, or tracking of any kind
- **No External Requests**: Once loaded, the app works entirely offline

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your PR:
- Maintains the client-side-only architecture
- Includes comments for complex logic
- Follows the existing code style
- Doesn't add unnecessary dependencies

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This application is for entertainment purposes only. It is not affiliated with, endorsed by, or connected to Airbnb in any way. The generated images are purely fictional and should be used only for fun and personal communication.

## 🐛 Known Issues / Limitations

- Profile pictures must be reasonable file sizes (recommended < 5MB)
- Image generation requires modern browser with HTML5 Canvas support
- Some browser extensions may interfere with download functionality

## 💡 Future Ideas

- Multiple review card themes (Booking.com, Hotels.com styles)
- More customization options (colors, fonts)
- Gallery view with localStorage (optional)
- Social media direct sharing
- Print-friendly version

## 📧 Contact

Questions? Suggestions? Feel free to open an issue or reach out!

---

Made with ❤️ for couch surfers everywhere 🛋️

**Remember**: Always thank your friends who let you crash on their couch!

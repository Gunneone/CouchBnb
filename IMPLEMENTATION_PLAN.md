# CouchBnB - Implementation Plan

## Project Overview
A Flask web application that generates mock Airbnb-style review images for people who stay on friends' couches. This is a fun, client-side tool for creating shareable thank-you reviews with no data storage or real Airbnb connection.

## Technology Stack
- **Backend**: Flask (Python 3.9+)
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Image Generation**: HTML2Canvas.js (client-side screenshot)
- **Styling**: Custom CSS mimicking Airbnb design
- **Containerization**: Docker + Docker Compose

## Architecture

### Client-Side First Approach
- All user data stored in browser (no backend persistence)
- Image generation happens in browser using HTML2Canvas
- Flask serves static files and templates only
- No database required

### Application Flow
1. User lands on single-page application
2. Form inputs for: Name, Date, Star Rating (1-5), Review Text, Profile Picture
3. Live preview of review card updates as user types
4. Click "Download Review" button to generate PNG
5. Image downloads to user's device

## Project Structure
```
CouchBnB/
├── app/
│   ├── __init__.py
│   ├── routes.py
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   ├── app.js
│   │   │   └── html2canvas.min.js
│   │   └── images/
│   │       └── default-avatar.png
│   └── templates/
│       └── index.html
├── config.py
├── run.py
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
└── README.md
```

## Implementation Steps

### Phase 1: Project Setup
- [x] Initialize Flask project structure
- [ ] Create virtual environment
- [ ] Install dependencies (Flask)
- [ ] Set up basic Flask app with single route
- [ ] Create .gitignore and .dockerignore

### Phase 2: Frontend Development
- [ ] Create HTML structure (index.html)
  - Form inputs (name, date, rating, text, profile pic)
  - Review card preview section
  - Template selection buttons
  - Download button
- [ ] Style review card to match Airbnb aesthetic (style.css)
  - Typography (similar fonts)
  - Color scheme (Airbnb pink/red accent)
  - Card layout with shadow effects
  - Star rating display
  - Profile picture circular styling
- [ ] Make review card template easily editable via HTML/CSS

### Phase 3: JavaScript Functionality
- [ ] Implement form input handlers
- [ ] Create live preview update function
- [ ] Add three predefined review templates:
  1. "Thanks for letting me crash on your couch, Mate!"
  2. "Your couch was more comfortable than most hotels! Thanks for the hospitality!"
  3. "10/10 would couch surf again. You're the best host!"
- [ ] Implement template selection (populate text field)
- [ ] Handle profile picture upload with preview
- [ ] Set default values (5 stars, today's date, default avatar)
- [ ] Integrate HTML2Canvas library
- [ ] Implement PNG generation and download function

### Phase 4: Review Card Design
- [ ] Create HTML structure for review card
  - Profile picture section
  - Name and date display
  - Star rating visualization (★★★★★)
  - Review text area
  - Airbnb-style "verified" badge (optional)
- [ ] Style to closely resemble Airbnb reviews
- [ ] Ensure proper rendering for screenshot capture
- [ ] Make dimensions suitable for social media sharing (e.g., 1200x630px)

### Phase 5: Docker Setup
- [ ] Create Dockerfile
  - Base image: python:3.9-slim
  - Install dependencies
  - Copy application files
  - Expose port 5000
  - Set CMD to run Flask app
- [ ] Create docker-compose.yml
  - Service definition
  - Port mapping
  - Volume mounting for development
- [ ] Test Docker build and run

### Phase 6: Testing & Refinement
- [ ] Test all form inputs and validations
- [ ] Test template selection
- [ ] Test custom text input
- [ ] Test profile picture upload (various formats)
- [ ] Test PNG generation and download
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile responsiveness testing
- [ ] Test Docker container deployment

### Phase 7: Documentation
- [ ] Create comprehensive README.md
- [ ] Add inline code comments
- [ ] Create usage examples/screenshots
- [ ] Document Docker deployment steps

## Key Features Checklist

### Required Features
- [x] Flask web application
- [ ] Single-page interface
- [ ] Name input field
- [ ] Date selector (default: today)
- [ ] Star rating selector (1-5, default: 5)
- [ ] Review text input (textarea)
- [ ] Three predefined text templates
- [ ] Custom text option
- [ ] Profile picture upload
- [ ] Default profile picture
- [ ] Live preview of review card
- [ ] Airbnb-style design
- [ ] HTML/CSS editable styling
- [ ] PNG download functionality
- [ ] Client-side only (no data storage)
- [ ] Docker setup

### Technical Requirements
- [ ] No backend database
- [ ] No user data persistence
- [ ] Client-side image generation
- [ ] Responsive design
- [ ] Simple deployment

## Design Specifications

### Airbnb Style Elements
- **Colors**: 
  - Primary: #FF5A5F (Airbnb red/pink)
  - Text: #484848 (dark gray)
  - Background: #FFFFFF
  - Border: #EBEBEB
- **Typography**:
  - Font: "Circular", "Helvetica Neue", Arial, sans-serif
  - (Use system fonts as fallback)
- **Layout**:
  - Clean, minimal design
  - Ample white space
  - Subtle shadows and borders
  - Circular profile pictures
- **Star Rating**:
  - Gold/yellow filled stars (★)
  - Gray empty stars
  - Size: ~16-20px

### Review Card Dimensions
- Width: 600px (scalable)
- Height: Auto (based on content)
- Padding: 24px
- Border-radius: 12px
- Box-shadow: 0 2px 16px rgba(0,0,0,0.12)

## Dependencies

### Python Packages (requirements.txt)
```
Flask==3.0.0
Werkzeug==3.0.0
```

### JavaScript Libraries
- HTML2Canvas (CDN or local copy)

### Fonts
- Use web-safe fonts or Google Fonts for Airbnb-like typography

## Security Considerations
- Validate file uploads (image types only)
- Limit file size for profile pictures (client-side)
- Sanitize text inputs (prevent XSS)
- No backend storage means minimal security concerns
- CORS not needed (same-origin)

## Future Enhancements (Out of Scope)
- Multiple review card styles/themes
- QR code linking to fake review page
- Social media direct sharing
- Gallery of created reviews (with localStorage)
- More customization options (fonts, colors)
- Multi-language support
- Print-friendly version

## Development Timeline Estimate
- Phase 1: Setup - 1 hour
- Phase 2: Frontend HTML/CSS - 4 hours
- Phase 3: JavaScript - 4 hours
- Phase 4: Review Card Design - 3 hours
- Phase 5: Docker - 2 hours
- Phase 6: Testing - 3 hours
- Phase 7: Documentation - 1 hour

**Total: ~18 hours**

## Success Criteria
1. User can input all required fields
2. Live preview updates in real-time
3. PNG downloads with high quality
4. Design closely resembles Airbnb
5. Works in all modern browsers
6. Docker container runs successfully
7. No data leaves the client browser
8. Code is clean and maintainable

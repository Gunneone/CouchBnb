# CouchBnB - Testing Guide

## ✅ Manual Testing Checklist

### 1. Installation Test
- [ ] Virtual environment creates successfully
- [ ] Dependencies install without errors
- [ ] Application starts without errors
- [ ] Homepage loads at http://localhost:5001

### 2. Form Input Tests
- [ ] Name field accepts text input
- [ ] Name updates in preview in real-time
- [ ] Date picker works and defaults to today
- [ ] Date displays in preview (Month Year format)
- [ ] Star rating is interactive (1-5 stars)
- [ ] Star rating updates preview stars
- [ ] Review text area accepts input
- [ ] Character counter shows correct count (0-500)
- [ ] Text updates preview in real-time

### 3. Template Tests
- [ ] Template 1 button populates text field
- [ ] Template 2 button populates text field
- [ ] Template 3 button populates text field
- [ ] Template text appears in preview
- [ ] User can edit template text after selecting

### 4. Profile Picture Tests
- [ ] File input accepts image files
- [ ] Image preview updates when file selected
- [ ] Non-image files show error message
- [ ] Files over 5MB show error message
- [ ] Default avatar displays initially

### 5. Download Tests
- [ ] Download button is clickable
- [ ] Button shows "Generating..." during process
- [ ] PNG file downloads successfully
- [ ] Filename includes reviewer name and timestamp
- [ ] Downloaded image matches preview
- [ ] Image quality is good (scale: 2x)

### 6. Design Tests
- [ ] Review card looks like Airbnb style
- [ ] Colors match Airbnb brand (red #FF5A5F)
- [ ] Stars display correctly (gold filled, gray empty)
- [ ] Profile picture is circular
- [ ] "Verified CouchBnB Review" badge shows
- [ ] Layout is clean and professional

### 7. Responsive Tests
- [ ] Desktop layout (two columns)
- [ ] Tablet layout (responsive grid)
- [ ] Mobile layout (single column)
- [ ] All elements visible on small screens
- [ ] Touch interactions work on mobile

### 8. Browser Compatibility Tests
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### 9. Docker Tests
- [ ] Docker image builds successfully
- [ ] Docker container runs successfully
- [ ] Docker Compose starts application
- [ ] Application accessible at localhost:5001
- [ ] Hot reload works with volume mounting

### 10. Privacy Tests
- [ ] No network requests after page load
- [ ] No cookies set
- [ ] No localStorage used
- [ ] No data sent to server
- [ ] All processing happens client-side

## 🧪 Quick Test Commands

### Test Homepage
```bash
curl http://localhost:5001
```

### Test Static Files
```bash
curl http://localhost:5001/static/css/style.css
curl http://localhost:5001/static/js/app.js
curl http://localhost:5001/static/images/default-avatar.png
```

### Test Docker Build
```bash
docker build -t couchbnb-test .
docker run -p 5001:5001 couchbnb-test
```

### Test Docker Compose
```bash
docker-compose up
# In another terminal:
curl http://localhost:5001
docker-compose down
```

## 🐛 Common Issues & Solutions

### Port 5000 Already in Use
**Solution**: Use port 5001 (already configured) or disable AirPlay on macOS

### Module Not Found Error
**Solution**: Activate virtual environment and reinstall dependencies
```bash
source venv/bin/activate
pip install -r requirements.txt
```

### Image Won't Download
**Solution**: Check browser console (F12) for errors, try different browser

### Profile Picture Won't Upload
**Solution**: Ensure file is image type and under 5MB

### Docker Build Fails
**Solution**: Check Docker is running, try `docker system prune` to clean up

## 📊 Expected Results

### Performance
- Page load: < 1 second
- Preview updates: Real-time (< 100ms)
- Image generation: 1-3 seconds
- Download: Instant after generation

### Quality
- Image resolution: 1200px width (2x scale)
- File size: 50-200KB (depends on content)
- Format: PNG with transparency support

### Browser Console
- No JavaScript errors
- No network errors after initial load
- No security warnings

## ✨ Success Criteria

All tests pass when:
1. User can create a review with all fields
2. Preview updates in real-time
3. PNG downloads successfully
4. Design matches Airbnb aesthetic
5. Works in all major browsers
6. Docker deployment successful
7. No data leaves the browser

---

**Test Status**: Ready for Testing ✅
**Last Updated**: November 27, 2024

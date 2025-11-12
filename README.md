# Timer Application

A simple, lightweight timer application built with vanilla HTML, CSS, and JavaScript. Perfect for timing tasks with an intuitive user interface and quick preset options.

## Features

- **Countdown Timer**: Set and run a customizable countdown timer
- **Time Controls**:
  - **Increase/Decrease Buttons**: Adjust the timer by 1 second increments
  - **Start**: Begin the countdown
  - **Stop**: Pause the countdown
  - **Reset**: Clear the timer back to 00:00:00
- **Quick Timers**: One-click preset timers for common durations:
  - 5 minutes
  - 10 minutes
  - 15 minutes
  - 20 minutes
- **Alert Notification**: Get alerted when the timer reaches zero
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Theme**: Eye-friendly dark interface

## File Structure

```
timer/
├── index.html      # HTML markup for the timer interface
├── style.css       # Styling and layout (dark theme)
├── script.js       # Timer logic and event handlers
└── README.md       # Project documentation
```

## How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **Set Time**:
   - Use the `+` and `-` buttons to adjust the timer (in seconds)
   - Or click a quick timer preset (5, 10, 15, or 20 minutes)
3. **Run the Timer**: Click the **Start** button to begin the countdown
4. **Manage Timer**:
   - Click **Stop** to pause the timer
   - Click **Reset** to return to 00:00:00
5. **Alert**: When the timer reaches zero, an alert will notify you

## Technologies Used

- **HTML5**: Semantic markup for the timer interface
- **CSS3**: Modern styling with flexbox layout and hover effects
- **Vanilla JavaScript**: Pure JavaScript (no frameworks) for timer logic and DOM manipulation

## Browser Compatibility

Works on all modern browsers that support:

- ES6 JavaScript
- CSS Flexbox
- DOM manipulation

## Getting Started

Simply clone the repository and open `index.html` in your browser:

```bash
git clone https://github.com/swapnasahoo/timer
cd timer
# Open index.html in your browser
```

## Future Enhancements

- Sound notification instead of alert
- Multiple simultaneous timers
- Timer history/log
- Local storage to save timer settings
- Fullscreen mode for visibility
- Customizable color themes
- Keyboard shortcuts support

## License

Feel free to use and modify this project as needed.

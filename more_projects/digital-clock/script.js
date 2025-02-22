 // Get elements
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const themeToggle = document.getElementById('theme-toggle');
const formatToggle = document.getElementById('format-toggle');

// Set initial time format (12-hour or 24-hour)
let timeFormat = 12; // Default to 12-hour format

// Function to update time
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Convert to 12-hour format if needed
    if (timeFormat === 12) {
        hours = hours % 12;
        if (hours === 0) hours = 12;
    }

    // Format time as string
    const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    // Update time element
    timeElement.textContent = timeString;

    // Update date element
    const dateString = now.toLocaleDateString();
    dateElement.textContent = dateString;
}

// Function to pad zero if needed
function padZero(value) {
    return (value < 10 ? '0' : '') + value;
}

// Update time every second
setInterval(updateTime, 1000);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Optional: 12-Hour / 24-Hour Format Toggle event listener
if (formatToggle) {
    formatToggle.addEventListener('click', () => {
        timeFormat = (timeFormat === 12) ? 24 : 12;
        updateTime();
    });
}
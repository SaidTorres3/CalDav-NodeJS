const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Calendar Data File
const CALENDAR_FILE = path.join(__dirname, 'data', 'calendar.ics');

// Helper Functions
function readCalendar() {
    return fs.readFileSync(CALENDAR_FILE, 'utf8');
}

function writeCalendar(data) {
    fs.writeFileSync(CALENDAR_FILE, data, 'utf8');
}

// Handle different HTTP methods and paths
function handleRequest(req, res) {
    const method = req.method;
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/.well-known/caldav') {
        // CalDAV discovery
        res.writeHead(301, { 'Location': '/caldav' });
        res.end();
    } else if (pathname === '/caldav') {
        if (method === 'GET') {
            // Get calendar data
            const calendarData = readCalendar();
            res.writeHead(200, { 'Content-Type': 'text/calendar' });
            res.end(calendarData);
        } else if (method === 'PUT') {
            // Update an event or add a new one
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
                writeCalendar(body);
                res.writeHead(204);
                res.end();
            });
        } else if (method === 'DELETE') {
            // Delete the calendar data (to simplify, we'll clear the file)
            writeCalendar('BEGIN:VCALENDAR\nVERSION:2.0\nEND:VCALENDAR');
            res.writeHead(204);
            res.end();
        } else {
            res.writeHead(405);
            res.end('Method Not Allowed');
        }
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
}

// Create HTTP Server
const server = http.createServer(handleRequest);

// Start the server
const PORT = 8008;
server.listen(PORT, () => {
});

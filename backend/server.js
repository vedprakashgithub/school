const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs'); // Required to check and create directories

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/schoolImages', express.static(path.join(__dirname, 'schoolImages')));

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'edunify',
});

// Connect to the database and log connection status
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the MySQL database!');
});

// Check if the schoolImages directory exists, create if not
const uploadDir = path.join(__dirname, 'schoolImages');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
    console.log('schoolImages directory created!');
}

// Set up multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Upload the image to the 'schoolImages' directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
    },
});

const upload = multer({ storage });

// API to add a school
app.post('/api/addSchool', upload.single('image'), (req, res) => {
    const { name, address, city, state, contact, email_id } = req.body;
    const image = req.file ? req.file.filename : null; // Check if the file is uploaded

    if (!image) {
        return res.status(400).json({ error: 'Image is required' });
    }

    const query = 'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [name, address, city, state, contact, image, email_id], (err) => {
        if (err) {
            console.error('Database error:', err); // Log the error
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'School added successfully!' });
    });
});

// API to get all schools
app.get('/api/getSchools', (req, res) => {
    db.query('SELECT * FROM schools', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});

// Health check to verify DB connection
app.get('/api/health', (req, res) => {
    db.query('SELECT 1', (err) => {
        if (err) {
            console.error('Database connection failed:', err.message);
            return res.status(500).json({ error: 'Database is not connected' });
        }
        res.status(200).json({ message: 'Database is connected' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

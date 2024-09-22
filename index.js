const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '10mb' }));


app.post('/bfhl', (req, res) => {
    try {
        const { data, file_b64 } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: "Invalid input data" });
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item) && item.length === 1);
        const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
        const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop() || "";

        let fileInfo = {
            file_valid: false,
            file_mime_type: null,
            file_size_kb: null
        };

        if (file_b64) {
            // In a real-world scenario, you'd implement proper file validation and processing here
            fileInfo = {
                file_valid: true,
                file_mime_type: "application/octet-stream", // Example MIME type
                file_size_kb: Math.round(file_b64.length * 0.75 / 1024) // Rough estimation
            };
        }

        const response = {
            is_success: true,
            user_id: "john_doe_17091999", // Replace with actual user ID generation logic
            email: "john@xyz.com", // Replace with actual email retrieval logic
            roll_number: "ABCD123", // Replace with actual roll number retrieval logic
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : [],
            ...fileInfo
        };

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ is_success: false, error: "Internal server error" });
    }
});


app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
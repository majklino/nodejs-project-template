const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Start the server
server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
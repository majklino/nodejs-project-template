const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

//Define routes
defineRoutes = require('./routes/routes-handler');
defineRoutes(app);

// Start the server
server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
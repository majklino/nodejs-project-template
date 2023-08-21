const express = require('express');
const config = require('config');

const app = express();
const PORT = process.env.PORT || config.get('port');

//Define routes
defineRoutes = require('./routes/routes-handler');
defineRoutes(app);

// Start the server
server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

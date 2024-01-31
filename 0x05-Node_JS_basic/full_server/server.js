import express from 'express';
import createRouter from './routes';

const app = express();
const port = 1245;
const host = 'localhost';

// Use the routes defined in full_server/routes/index.js
createRouter(app);

// Start the server
app.listen(port, host);

export default app;
module.exports = app;

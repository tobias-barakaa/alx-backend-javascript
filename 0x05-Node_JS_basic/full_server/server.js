import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

// Use the routes defined in full_server/routes/index.js
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
module.exports = app;

import express from 'express';
import routes from './routes';

const app = express();
const port = 7865;

// Use the routes defined in full_server/routes/index.js
app.get('/', (_, res) => {
    res.send('Welcome to the payment system')
})
// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
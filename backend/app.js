const express = require('express');
const dotEnv = require('dotenv');
const routes = require('./routes/routes');

dotEnv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

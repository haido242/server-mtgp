const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const  router = require('./router');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());

const options = {

};

mongoose.connect(process.env.MONGO_URL, options).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('err connect to mongodb', err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.use('/api/data', router);

app.use((err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes
    
    res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        error: err.message // Include the error message in the response
    });
});

const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const userRoutes = require('./routes/UserRoutes');
const projectRoutes = require('./routes/ProjectRoutes');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

connectDatabase();

app.use('/api', userRoutes);
app.use('/api', projectRoutes);

// deployment
__dirname = path.resolve();
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('API is Running!');
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
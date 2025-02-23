const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const actorRoutes = require('./routes/actorRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const contractRoutes = require('./routes/contractRoutes');

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/actors', actorRoutes);
app.use('/api/performances', performanceRoutes);
app.use('/api/contracts', contractRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

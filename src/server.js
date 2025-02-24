const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const actorRoutes = require('./routes/actorRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const contractRoutes = require('./routes/contractRoutes');
const setupSwagger = require('./config/swagger');

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

setupSwagger(app);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/auth', authRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/performances', performanceRoutes);
app.use('/api/contracts', contractRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

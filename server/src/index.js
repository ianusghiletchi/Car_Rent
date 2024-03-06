import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 5000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'CarloVista',
  password: 'wrekandobtain999',
  port: 5433,
});

// Connect to the database once
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database successfully');
  }
});

// Set up middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the database connection in the app for access in routes
app.set('db', db);

// Route to handle user registration
app.post('/signup', async (req, res) => {
  const { name, email, password, confirmPassword, userType, secretCode } = req.body;
  const employeeSecretCode = process.env.SECRET_CODE;
  const salts = process.env.SALT_ROUNDS;
  const db = req.app.get('db');

  try {
    const checkResult = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (checkResult.rows.length > 0) {
      res.status(409).json({ success: false, message: 'Email already exists' });
    } else if (userType === 'employee' && secretCode !== employeeSecretCode ) {
      res.status(400).json({ success: false, message: 'Invalid secret code' });
    } else if (password !== confirmPassword) {
      res.status(400).json({ success: false, message: 'Passwords do not match' });
    } else {
      const hashedPassword = await bcrypt.hash(password, parseInt(salts));
      const insertResult = await db.query(
        'INSERT INTO users (name, email, password, userType) VALUES ($1, $2, $3, $4)',
        [name, email, hashedPassword, userType]
      );
    }
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });    
  }
});

// Route to handle user login

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const db = req.app.get('db');

  db.query(
    'SELECT * FROM users WHERE email = $1 AND password = $2',
    [email, password],
    (err, result) => {
      if (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
      } else if (result.rows.length === 0) {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
      } else {
        res.redirect('/');
      }
    }
  );
});

// Route to handle Renting a Car

app.post('/rentcar', (req, res) => {

  const { carType, whereToPickUp, dateOfPickUp, dateOfDropOff } = req.body;
  const db = req.app.get('db');

  db.query(
    'INSERT INTO rentals ( car_type, pickup_location, pickup_date, drop_off_date) VALUES ($1, $2, $3, $4)',
    [carType, whereToPickUp, dateOfPickUp, dateOfDropOff],
    (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
      } else {
        res.status(201).json({ success: true, message: 'User registered successfully' });
      }
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import session  from 'express-session';

dotenv.config();
const app = express();
const port = 5000;

// Set up middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

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

// Set the database connection in the app for access in routes
app.set('db', db);

// Route to handle user registration
app.post('/signup', async (req, res) => {
  const { name, email, password, confirmPassword, userType, secretCode } = req.body;
  const employeeSecretCode = process.env.EMPLOYEE_ONLY_CODE;
  const salts = process.env.SALT_ROUNDS;
  const db = req.app.get('db');

  try {
    const checkEmailResult = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (checkEmailResult.rows.length > 0) {
      res.status(409).json({ error: 'Email already exists' });
    } else {
      const checkNameResult = await db.query(
        'SELECT * FROM users WHERE name = $1',
        [name]
      );

      if (checkNameResult.rows.length > 0) {
        res.status(409).json({ error: 'Name already in use' });
      } else if (userType === 'employee' && secretCode !== employeeSecretCode) {
        res.status(400).json({ error: 'Invalid secret code' });
      } else if (password !== confirmPassword) {
        res.status(400).json({ error: 'Passwords do not match' });
      } else {
        const hashedPassword = await bcrypt.hash(password, parseInt(salts));
        const insertResult = await db.query(
          'INSERT INTO users (name, email, password, userType) VALUES ($1, $2, $3, $4)',
          [name, email, hashedPassword, userType]
        );
        res.status(200).json({ message: 'Sign up successful' });
      }
    }
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ error: 'Internal server error' });    
  }
});

// Route to handle user login

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const db = req.app.get('db');

  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];
    
    if (!user) {
      // Handle case where user is not found
      return res.status(404).json({ error: 'User not found' });
    }

    const hashedPassword = user.password;

    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    
    if (passwordMatch) {
      // Passwords match, proceed with login
      res.status(200).json({ message: 'Login successful' });
    } else {
      // Passwords do not match
      res.status(401).json({ error: 'Invalid password' });
    }
  } catch (error) {
    // Handle database query or bcrypt error
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Route to handle Renting a Car

app.post('/rentcar', (req, res) => {

  try {
    res.status(200).json({ message: 'Renting a car successful' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }

});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

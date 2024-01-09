import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import cors from 'cors';

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
app.post('/signup', (req, res) => {
  const { name, email, password, userType } = req.body;
  const db = req.app.get('db');

  db.query(
    'INSERT INTO users (name, email, password, usertype) VALUES ($1, $2, $3, $4)',
    [name, email, password, userType],
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
    'INSERT INTO users ( carType, whereToPickUp, dateOfPickUp, dateOfDropOff) VALUES ($1, $2, $3, $4)',
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

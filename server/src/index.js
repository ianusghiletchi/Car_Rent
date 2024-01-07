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
  const { name, email, password } = req.body;
  const db = req.app.get('db');

  db.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
    [name, email, password],
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

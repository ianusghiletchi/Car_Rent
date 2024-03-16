import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import session  from 'express-session';
import { Strategy } from 'passport-local';

dotenv.config();
const app = express();
const port = 5000;

// Set up middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
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

passport.use(new Strategy(
  {
    usernameField: 'email' // Specify that email is the username
  },
  async function(email, password, done) {
    try {
      const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
      const user = result.rows[0];
      
      if (!user) {
        return done(null, false, { message: 'User not found' });
      }
  
      const hashedPassword = user.password;
  
      const passwordMatch = await bcrypt.compare(password, hashedPassword);
      
      if (passwordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid password' });
      }
    } catch (error) {
      return done(error);
    }
  }
));

// Serialize and deserialize user for session management
passport.serializeUser(function(user, done) {
  done(null, user.user_id);
});

passport.deserializeUser(async function(user_id, done) {
  try {
    const result = await db.query('SELECT * FROM users WHERE user_id = $1', [user_id]);
    const user = result.rows[0];
    done(null, user);
  } catch (error) {
    done(error);
  }
});


// Route to handle user login
app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { 
      return next(err); 
    }
    if (!user) { 
      return res.status(401).json({ error: 'Authentication failed' }); 
    }
    req.logIn(user, function(err) {
      if (err) { 
        return next(err); 
      }
      return res.status(200).json({ message: 'Login successful' }), console.log(req.user, req.user.user_id, req.isAuthenticated());
    });
  })(req, res, next);
});




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

      if (checkNameResult.rows.length > 0 ) {
        res.status(409).json({ error: 'Name already in use' });
      } else if (userType === 'employee' && secretCode !== employeeSecretCode) {
        res.status(400).json({ error: 'Invalid secret code' });
      } else if (password !== confirmPassword) {
        res.status(400).json({ error: 'Passwords do not match' });
      } else {
        const hashedPassword = await bcrypt.hash(password, parseInt(salts));
        const insertResult = await db.query(
          'INSERT INTO users (name, email, password, userType) VALUES ($1, $2, $3, $4) RETURNING *',
          [name, email, hashedPassword, userType]
        );
        const user = insertResult.rows[0];
        req.logIn(user, (err) => {
          if (err) {
            console.error('Error logging in:', err);
          } else {
            res.status(200).json({ message: 'Sign up successful' });
          }
        })
        res.status(200).json({ message: 'Sign up successful' });
      }
    }
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ error: 'Internal server error' });    
  }
});

app.post('/logout', (req, res) => {
  req.logout(); // Clear the login session
  res.status(200).json({ message: 'Logout successful' });
});


// Route to display user wanted cars

app.get('/requestcars', (req, res) => {
  
})

// Route to handle Renting a Car
app.post('/rentcar', (req, res) => {
  console.log(req.body, req.user, req.isAuthenticated());
  if (req.isAuthenticated()) {
  // Print the authenticated user's data
    res.status(200).json({ message: 'Renting a car successful' });
  } else {
    // User is not authenticated, send 401 Unauthorized status
    res.status(401).json({ error: 'User not authenticated' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

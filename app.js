const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require("./connection").pool;
const bcrypt = require('bcrypt');
const hbs = require('hbs');
const consolidate = require('consolidate');  // Add this line
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const path = require("path");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// new
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// configuration
app.engine('html', consolidate.handlebars);  
app.set('view engine', 'html'); 

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.html");
});

app.get("/register", (req, res) => {
    res.render("form.html");
});
app.get("/about", (req, res) => {
    res.render("about.html");
});
app.get("/stops", (req, res) => {
    res.render("route.html");
});
app.get('/admin', (req, res) => {
    res.render("loginPage.html")
})
app.get('/support', (req, res) => {
    res.render("contact.html")
})
app.get('/gohome', (req, res) => {
    res.redirect(`/`);
})

app.post('/submitForm', (req, res) => {
    const { name, email, phone, gender, pickup, drop, fromTime, toTime, fare, pass } = req.body;

    const query = `INSERT INTO registrations (name, gender, phone, email, pickup, droploc, from_time, to_time, fare, pass) VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?)`;
    pool.query(query, [name, gender, phone, email, pickup, drop, fromTime, toTime, fare, pass], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error submitting');
        } else {
            res.render("thankyou");
        }
    });
});


app.post('/entry', (req, res) => {
    const { pass } = req.body;
    const fetchQuery = 'SELECT pass FROM secure WHERE srno = 1';

    pool.query(fetchQuery, (fetchError, fetchResults) => {
        if (fetchError) {
            res.status(500).send('Error fetching hashed password');
            return;
        }

        if (fetchResults.length === 0) {
            res.status(404).send('No records found');
            return;
        }

        const hashedPassFromDatabase = fetchResults[0].pass;
        bcrypt.compare(pass, hashedPassFromDatabase, (compareError, isMatch) => {
            if (compareError) {
                res.status(500).send('Error comparing passwords');
                return;
            }

            if (isMatch) {
                // Fetch user details from the 'registrations' table
                const userDetailsQuery = 'SELECT * FROM registrations';
                pool.query(userDetailsQuery, (userError, userResults) => {
                    if (userError) {
                        res.status(500).send('Error fetching user details');
                        return;
                    }

                    // Render the loginPage.hbs view with user details
                    res.render('loginPage', { users: userResults });
                });
            } else {
                res.send('Password did not match');
            }
        });
    });
});

//--------------------------------------------------------------------------------------------- server  
app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("server is running on port %d: ", port);
    }
});


//service_63xx3o6
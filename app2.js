const express = require("express");
const path = require("path");
const connectToMongo = require('./db');
const cors = require('cors');
const app = express();
const port = 3000;

connectToMongo();

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.json());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views/thankPages')]) // Set the views directory

// Available Routes
const bookingRoutes = require("./routes/booking");
const dateRoutes = require("./routes/date");
app.use(cors());
app.use("/api/booking", bookingRoutes);
app.use("/api/date", dateRoutes);

//ENDPOINTS
app.get('/', (req, res) => res.render('index.pug'));
app.get('/franchise', (req, res) => res.render('franchise.pug'));
app.get('/event', (req, res) => res.render('event.pug'));
app.get('/activities', (req, res) => res.render('activities.pug'));
app.get('/privacy', (req, res) => res.render('privacy.pug'));
app.get('/rental', (req, res) => res.render('rental.pug'));

app.get('/calender', (req, res) => {
    const params = {}
    res.status(200).render('calender.pug', params);
    app.post('/calender', (req, res) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: "lazercrazer4@gmail.com",
                pass: "ltogvuchttogpmne"
            },
            port: 465,
            host: 'smtp.gmail.com'
        })
        let mailOptions1 = {
            from: "lazercrazer4@gmail.com",
            to: "lazer.craz@gmail.com",
            subject: `Message from ${req.body.name}: ${req.body.email}`,
            text:
                `Name: ${req.body.name}, 
            Email: ${req.body.email}, 
            Phone: ${req.body.phone}, 
            date: ${req.body.date},
            number of people: ${req.body.slotcount},
            slot: ${req.body.slot},
            Type: ${req.body.package}`
        };
        let mailOptions2 = {
            from: "lazer.craz@gmail.com",
            to: req.body.email,
            subject: `Form submission successful`,
            html: `<h2>Thanks for your booking with Lazer Crazer !!</h2>

            <div>We have received your booking request. This email is to confirm that you just made the best decision.</div>
            
            <div>We are expecting you on ${req.body.date} at ${req.body.slot}</div>
            
            <div>We are looking forward to your visit and hope you have great experience with us.</div>
            
            <div>Address - 1A, near Chumbak, Hauz Khas Village, Delhi 110016</div>
               
            <div><a href='https://goo.gl/maps/3E7CiTjJRayBFssh7' target='_blank'>( Get direction )</a></div>
            
            <div>For any queries or support, reach out us on below listed contact numbers</div>
            
            <div>+91 8840175266/ 9971385510</div>
            
            <div>Thank You</div>
            <div>Team Lazer Crazer</div>`
        };
        transporter.sendMail(mailOptions1, (error, info) => {
            if (error) {
                console.log(error);
                res.send('error')
            } else {
                console.log("Email sent: " + info.response)
                res.send('success')
            }
        })
        transporter.sendMail(mailOptions2, (error, info) => {
            if (error) {
                console.log(error);
                res.send('error')
            } else {
                console.log("Email sent: " + info.response)
                res.send('success')
            }
        })
    });
});


app.post('/', (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "lazercrazer4@gmail.com",
            pass: "ltogvuchttogpmne"
        },
        port: 465,
        host: 'smtp.gmail.com'
    })
    let mailOptions1 = {
        from: "lazercrazer4@gmail.com",
        to: "lazer.craz@gmail.com",
        subject: `Message from ${req.body.name}: ${req.body.email}`,
        text: `Name: ${req.body.name}, 
        Email: ${req.body.email}, 
        Phone: ${req.body.phone}, 
        Type: ${req.body.select1},
        Message: ${req.body.message}`
    };
    let mailOptions2 = {
        from: "lazer.craz@gmail.com",
        to: req.body.email,
        subject: `Form submission successful`,
        html: `<h3>Thanks for being awesome!</h3><div><p>${req.body.name}, We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our members. Otherwise, we will reply by email as soon as possible.Talk to you soon, [Lazer Crazer]</div></p><div><a href="tel:+918840175266">8840175266</a></div>`
    };
    transporter.sendMail(mailOptions1, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error')
        } else {
            console.log("Email sent: " + info.response)
            res.send('success')
        }
    })
    transporter.sendMail(mailOptions2, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error')
        } else {
            console.log("Email sent: " + info.response)
            res.send('success')
        }
    })
});


app.get('/thank', (req, res) => res.render('thank.pug'));
app.get('/bookingThank', (req, res) => res.render('bookingThank.pug'));
app.get('/eventThank', (req, res) => res.render('eventThank.pug'));
app.get('/franchiseThank', (req, res) => res.render('franchiseThank.pug'));
app.get('/otheractThank', (req, res) => res.render('otheractThank.pug'));
app.get('/rentalThank', (req, res) => res.render('rentalThank.pug'));

// START THE SERVER
app.listen(port, () => console.log(`The application started successfully on port ${port}`));
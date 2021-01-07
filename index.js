const express = require('express');
const app = express();
const path = require('path');
const emailSender = require('./app/controller/mailController');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', 
    (req, res)=>{
        res.sendFile(path.join(__dirname + '/public/pages/index.html'))
    }
)

app.get('/contact', 
    (req, res)=>{
        res.sendFile(path.join(__dirname + '/public/pages/contact.html'))
    }
)

app.get('/aboutMe', 
    (req, res)=>{
        res.sendFile(path.join(__dirname + '/public/pages/aboutMe.html'))
    }
)

app.get('/portfolio', 
    (req, res)=>{
        res.sendFile(path.join(__dirname + '/public/pages/portfolio.html'))
    }
)

app.get('/games/arkanoid', 
    (req, res)=>{
        res.sendFile(path.join(__dirname + '/public/games/arkanoid/index.html'));
    }
)

app.post('/sendMail', (req,res)=>{
  emailSender.sendEmail(req,res);  
})

app.use(
    (req,res,next)=>{
        res.status(404).sendFile(path.join(__dirname + '/public/pages/404.html'));
    }
)

var port = process.env.PORT || 3000;
app.listen(port, 
    ()=>{
        console.log(`RUN AT PORT ${port}`);
    }
)
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
const moment = require('moment');


app.use(express.static(path.join(__dirname, 'public')));

const csvWriter = createCsvWriter(
    {
        path: 'data.csv',
        header: [
            {id: 'date', title:'Date'},
            {id: 'name', title: 'Name'},
            {id: 'email', title: 'Email'},
            {id: 'subject', title: 'Subject'},
            {id: 'msg', titile: 'Msg'}
        ]
    }
)

function readCsv(){
    fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', 
        (row)=>{
            console.log(row);
        }
    ).on('end', ()=>{
        console.log('CSV PROCESSED');
    })
}

function writeCsv(){
    csvWriter.writeRecords(data).then(()=>{console.log('CSV WRITTEN')})
}


let data = [
    {
        date: moment().format('Do MMMM  YYYY, h:mm:ss a'),
        name: 'Mismo',
        email: 'mismo@mismo.com',
        subject: 'mismo',
        msg: 'Lorem ipsum dolor sit amet...'
    }
]




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

app.post('/sendMail', 
    (req,res)=>{
        console.log('SEND');
        writeCsv();
    }
);

app.get('/getMail', 
    (req,res)=>{
        console.log('GET');
        readCsv();
    })

app.use(
    (req,res)=>{
        res.status(404).sendFile(path.join(__dirname + '/public/pages/404.html'));
    }
)

app.use(
    (req, res)=>{
        res.status(500).sendFile(path.join(__dirname + '/public/pages/500.html'));
    }
)

var port = process.env.PORT || 3000;
app.listen(port, 
    ()=>{
        console.log(`RUN AT PORT ${port}`);
    }
)
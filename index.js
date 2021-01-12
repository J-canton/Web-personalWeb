const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', 
    (req, res)=>{
        res.sendFile(path.join(__dirname + '/public/pages/index.html'));
    }
)

app.get('/contact', 
    (req, res)=>{
        res.sendFile(path.join(__dirname + '/public/pages/contact.html'));
    }
)

app.get('/aboutMe', 
    (req, res)=>{
        res.sendFile(path.join(__dirname + '/public/pages/aboutMe.html'));
    }
)

app.get('/portfolio', 
    (req, res)=>{
        res.sendFile(path.join(__dirname + '/public/pages/portfolio.html'));
    }
)

app.get('/portfolio/:type/:name', 
    (req,res)=>{
        res.sendFile(path.join(__dirname + `/public/${req.params.type}/${req.params.name}/index.html`));
    }
)


app.get('/games', 
    (req, res)=>{
        res.sendFile(path.join(__dirname + '/public/pages/shop-product.html'));
    }
)


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
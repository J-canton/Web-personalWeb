const nodemailer = require('nodemailer');

exports.sendEmail = (req, res)=>{
    console.log('HOLA-> ');
    res.send('HOLA POST');
    //res.status(status).send({'msg': 'HOLA'})
    // var transporter = nodemailer.createTransport({
    //     service: 'Gmail',
    //     auth: {
    //         user: 'jcantoninfo@gmail.com',
    //         pass: 'Semclcp53457280j'
    //     }
    // });
    // Definimos el email
    // var mailOptions = {
    //     from: 'Remitente',
    //     to: 'destinatario@gmail.com',
    //     subject: 'Asunto',
    //     text: 'Contenido del email'
    // };
    // Enviamos el email
    // transporter.sendMail(mailOptions, function(error, info){
    //     if (error){
    //         console.log(error);
    //         res.send(500, error.message);
    //     } else {
    //         console.log("Email sent");
    //         res.status(status).send(body);
    //     }
    // });
};
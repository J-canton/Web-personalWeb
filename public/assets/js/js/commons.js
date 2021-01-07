$(document).ready(
    ()=>{
        $('#copyright').text(`${moment().format('YYYY')} JCANTON  All rights reserved`);

        //CONTACT
        $('#contactTitle').text(`${configs.es.texts.contact.title}`);
        $('#contactText').text(`${configs.es.texts.contact.text}`);
        //FORMS
        $('#submit').text(`${configs.es.commonTexts.submit}`);
        $('#name').attr('placeholder', `${configs.es.forms.name}`);
        $('#email').attr('placeholder', `${configs.es.forms.email}`);
        $('#subject').attr('placeholder', `${configs.es.forms.subject}`);
        $('#message').attr('placeholder', `${configs.es.forms.message}`)
    }


)

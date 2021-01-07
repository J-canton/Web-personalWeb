$(document).ready(
    ()=>{
        //MAIN NAV
        printText($('#navAbout'), configs.es.components.mainNav.about);
        printText($('#navWorks'), configs.es.components.mainNav.works);
        printText($('#navContact'), configs.es.components.mainNav.contact);
        //JUMBOTRON
        printAtributes($('#mainJumbotronImg'), 'src', configs.es.imgs.mainJumbotronImg);
        printAtributes($('#mainJumbotronImg'), 'alt', configs.es.imgs.mainJumbotronAlt);
        printText($('#MainJumbotronTitle'), configs.es.components.mainJumbotron.title);
        //CTA ABOUT
        printText($('#ctaAboutTitle'), configs.es.components.cta.about.title);
        printText($('#ctaAboutText'), configs.es.components.cta.about.text);
        printText($('#ctaAboutBtn'), configs.es.components.cta.about.btn);
        //ABOUT ME
        printAtributes($('#aboutHeader'), 'src', configs.es.imgs.aboutHeaderImg);
        printAtributes($('#aboutAlt'), 'alt', configs.es.imgs.aboutHeaderAlt);
        //CONTACT
        printAtributes($('#contactHeader'), 'src', configs.es.imgs.contactHeaderImg);
        printAtributes($('#contactHeader'), 'alt', configs.es.imgs.contactHeaderAlt);
        printText($('#contactTitle'), configs.es.texts.contact.title);
        printText($('#contactText'),configs.es.texts.contact.text);
        //FORMS
        printText($('#submit'), configs.es.commonTexts.submit);
        printAtributes($('#name'),'placeholder', configs.es.forms.name);
        printAtributes($('#email'), 'placeholder', configs.es.forms.email)
        printAtributes($('#subject'), 'placeholder', configs.es.forms.subject);
        printAtributes($('#message'), 'placeholder', configs.es.forms.message)  
        //FOOTER
        printText($('#copyright'),`${moment().format('YYYY')} JCANTON  All rights reserved`);
        
        
        function printText(element, text)
        {
            element.text(`${text}`);
        }

        function printAtributes(elem, attr, text)
        {
            elem.attr(`${attr}`, `${text}`)
        }

        $('#ctaAboutBtn').on('click', 
            (e)=>{
                e.preventDefault();
                window.location = '/aboutMe';
            }
        )
    }
)


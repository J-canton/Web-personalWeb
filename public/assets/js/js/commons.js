$(document).ready(
    ()=>{
        //PRELOADER
        printText($('#preloader'), configs.es.preloader);
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
        //PAGE NOT FOUND
        printAtributes($('#pageNotFoundImg'), 'src', configs.es.imgs.pageNotFoundImg);
        printAtributes($('#pageNotFoundImg'), 'alt', configs.es.imgs.pageNotFoundAlt);
        printText($('#pageNotFoundTitle'), configs.es.texts.pageNotFound.pageNotFoundTitle);
        printText($('#pageNotFoundText'), configs.es.texts.pageNotFound.pageNotFoundText);
        //ABOUT ME
        printAtributes($('#aboutHeader'), 'src', configs.es.imgs.aboutHeaderImg);
        printAtributes($('#aboutAlt'), 'alt', configs.es.imgs.aboutHeaderAlt);
        printText($('#aboutTitle'), configs.es.texts.about.title);
        printText($('#aboutNameTitle'), configs.es.texts.about.aboutNameTitle);
        printText($('#aboutNameText'), configs.es.texts.about.aboutNameText);
        printText($('#aboutGameTitle'), configs.es.texts.about.aboutGameTitle);
        printText($('#aboutGameText'), configs.es.texts.about.aboutGameText);
        printText($('#aboutAboutTitle'), configs.es.texts.about.aboutAboutTitle);
        printText($('#aboutAboutText'), configs.es.texts.about.aboutAboutText);
        printText($('#aboutProfessionTitle'), configs.es.texts.about.aboutProfessionTitle);
        printText($('#aboutProfessionText'), configs.es.texts.about.aboutProfessionText);
        printText($('#aboutWebSkillsTitle'), configs.es.texts.about.aboutWebSkillsTitle);
        printText($('#aboutWebSkillsHtml'), configs.es.texts.about.aboutWebSkillsHtml);
        printAtributes($('#aboutWebSkillsHtml'),'style', configs.es.texts.about.aboutWebSkillsHtmlSkill);
        printText($('#aboutWebSkillsCss'), configs.es.texts.about.aboutWebSkillsCss);
        printAtributes($('#aboutWebSkillsCss'),'style', configs.es.texts.about.aboutWebSkillsCssSkill);
        printText($('#aboutWebSkillsSass'), configs.es.texts.about.aboutWebSkillsSass);
        printAtributes($('#aboutWebSkillsSass'),'style', configs.es.texts.about.aboutWebSkillsSassSkill);
        printText($('#aboutWebSkillsJs'), configs.es.texts.about.aboutWebSkillsJs);
        printAtributes($('#aboutWebSkillsJs'),'style', configs.es.texts.about.aboutWebSkillsJsSkill);
        printText($('#aboutWebSkillsReact'), configs.es.texts.about.aboutWebSkillsReact);
        printAtributes($('#aboutWebSkillsReact'),'style', configs.es.texts.about.aboutWebSkillsReactSkill);
        printText($('#aboutWebSkillsNode'), configs.es.texts.about.aboutWebSkillsNode);
        printAtributes($('#aboutWebSkillsNode'),'style', configs.es.texts.about.aboutWebSkillsNodeSkill);
        printText($('#aboutUnityTitle'), configs.es.texts.about.aboutUnityTitle);
        printText($('#aboutUnity'), configs.es.texts.about.aboutUnity);
        printAtributes($('#aboutUnity'),'style', configs.es.texts.about.aboutUnitySkill);
        printText($('#aboutUnityC'), configs.es.texts.about.aboutUnityC);
        printAtributes($('#aboutUnityC'),'style', configs.es.texts.about.aboutUnityCSkill);
        printText($('#aboutRepoTitle'), configs.es.texts.about.aboutRepoTitle);
        printText($('#aboutRepo'), configs.es.texts.about.aboutRepo);
        printAtributes($('#aboutRepo'),'style', configs.es.texts.about.aboutRepoSkill);
        printText($('#aboutDesignTitle'), configs.es.texts.about.aboutDesignTitle);
        printText($('#aboutDesignAdobe'), configs.es.texts.about.aboutDesignAdobe);
        printAtributes($('#aboutDesignAdobe'),'style', configs.es.texts.about.aboutDesignAdobeSkill);
        printText($('#aboutDesignBlender'), configs.es.texts.about.aboutDesignBlender);
        printAtributes($('#aboutDesignBlender'),'style', configs.es.texts.about.aboutDesignBlenderSkill);
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


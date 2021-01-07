function isInputEmpty(value)
{
    if(value.lenght >=1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function formValid(name, email, subject, message)
{
    if(isInputEmpty(name) && isInputEmpty(email) && isInputEmpty(subject) && isInputEmpty(message))
    {
        return true;
    }else
    {
        return false;
    }
}


$('#submit').on('click', 
    (e)=>{
        e.preventDefault();
        var data = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject:$('#subject').val(),
            message: $('#message').val()
        }

        console.log('DATA-> ', data);
        if(formValid(data.name, data.email,data.subject, data.message))
        {
            sendMail(data);
        }
        
    }
)

function sendMail(data)
{
    $.ajax(
        {
            type: "POST",
            url: 'http://localhost:3000/sendMail',
            dataType: "json",
            data: JSON.stringify(data),
            success: ()=>{console.log('PUES HAGO ALGO')},
            error: ()=>{console.log('PUES NO LO HAGO')}
        }
    )
}
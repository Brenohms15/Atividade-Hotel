//const fields = document.querySelectorAll("input.form-control");

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let noites = document.getElementById("noites");
    let hospedes = document.getElementById("hospedes");

    

    let verify = [];

    
   
//Funcao que e ativada a todo momento em que um input e alterado    
function Alterar(valor, cod)
{
    const current = document.getElementById(cod);

    switch(current)
        {
            case nome:
                if(current.value == "")
                {
                    Toggle(nome, "Error");
                }
                else
                {
                    Toggle(nome, "Correct");
                }
            break;

            case email:
                if(ValidateEmail(valor.value) != true)
                {
                    Toggle(email, "Error");
                }
                else
                {
                    Toggle(email, "Correct");
                }
                
            break;

            case noites:

                if(valor.value < 1)
                {
                    Toggle(noites, "Error");
                }
                else
                {
                    Toggle(noites, "Correct");
                }

            break;

            case hospedes:

            if(valor.value < 1)
                {
                    Toggle(hospedes, "Error");
                }
                else
                {
                    Toggle(hospedes, "Correct");
                }

            break;
        }
    
}


//Funcao do botao de enviar
function Enviar()
{  
    const inputs = [nome, email, noites, hospedes];
    
        for(let x = 0; x < inputs.length; x++)
        {
            if(inputs[x].value == "" || inputs[x].value < 1)
            {
                inputs[x].classList.add("is-invalid");
            }
        }
    
  
}


//Funcao que valida se um email esta da forma correta
function ValidateEmail(email)
{
    let emailchars = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailchars.test(email);
}

//Funcao que decide se um input esta correto ou errado
function Toggle(selfinput, condition)
{
    if(condition == "Error")
    {
        selfinput.classList.add("is-invalid");
        selfinput.classList.remove("is-valid");
    }
    else if(condition == "Correct")
    {
        selfinput.classList.add("is-valid");
        selfinput.classList.remove("is-invalid");
    }
}


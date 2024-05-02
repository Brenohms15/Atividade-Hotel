//const fields = document.querySelectorAll("input.form-control");

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let noites = document.getElementById("noites");
    let hospedes = document.getElementById("hospedes");


function Alterar(valor, cod)
{
    const current = document.getElementById(cod);
    if(valor.value == "" || valor.value != "0")
    {         
        current.classList.add("is-invalid");
        current.classList.remove("is-valid");    
    }
    else
    {       
        current.classList.add("is-valid");
        current.classList.remove("is-invalid");    
    }
}
/*function Enviar()
{
    

    

        for(let x = 0; x < fields.length; x++)
        {
            if(fields[x]. value == "")
            {
                fields[x].classList.add("is-invalid");
                fields[x].classList.remove("is-valid");
            }
            else
            {
                fields[x].classList.remove("is-invalid");
                fields[x].classList.add("is-valid");
            }
        }


    
}*/
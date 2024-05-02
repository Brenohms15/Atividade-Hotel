//const fields = document.querySelectorAll("input.form-control");

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let noites = document.getElementById("noites");
    let hospedes = document.getElementById("hospedes");

    
    
    let verify = [];
    
function Alterar(valor, cod)
{
    const current = document.getElementById(cod);

    if(valor.value == "")
    {    
        verify.push(current);     
        current.classList.add("is-invalid");
        current.classList.remove("is-valid");    
    }
    else
    {   
        verify.shift(current);    
        current.classList.add("is-valid");
        current.classList.remove("is-invalid");    
    }
    
}
function Enviar()
{  
    const inputs = document.querySelectorAll("#nome");
    console.log(inputs.id );
    for (let x = 0; x < verify.length; x++) 
    {
        let errorinput = document.getElementById(verify[x].id);
        console.log(verify[x].id);  
             
        if(inputs.value == "")
        {
            inputs.classList.add("is-invalid");
            inputs.classList.remove("is-valid");
        }
    }
    
  
}
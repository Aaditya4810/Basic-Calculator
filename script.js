let buttons=document.querySelectorAll(".button");
let inp=document.querySelector("#input_box");
let string="";
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        
        if(button.innerText==="=")
        {
            inp.value=eval(inp.value);
            string=inp.value;
        }
        else if(button.innerText==="X")
        {
            string=string+"*";
            inp.value=string;
        }
        else if(button.innerText==="AC")
        {
            string="";
            inp.value=string;
        }
        else if(button.innerText==="DEL")
        {
            string=string.substring(0,string.length-1);
            inp.value=string;
        }
        else{
            string=string+button.innerText;
            inp.value=string;
        }
    })
});
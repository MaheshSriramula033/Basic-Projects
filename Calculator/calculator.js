document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.body input');
    const display=document.querySelector(".display input");
   
  
    buttons.forEach(input => {
      input.addEventListener('click', () => {
        const value = input.getAttribute("value");
       if(value==="AE"){
        display.value=" ";
       }
       else if(value==="DE"){
        display.value=display.value.toString().slice(0,-1);
       }
       else if(value==="="){
        display.value=eval(display.value);
       }
       else{
        display.value+=value;
       }
      }
    )}
  );
});
  

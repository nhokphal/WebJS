
let counter = 0;
function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;    //alert(counter);
    
    if (counter % 10 === 0){
        alert(`Count is now ${counter}`); // alert value reached / = 0 "`" = f"" 

    }
}     

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count; 
});
// remember javascript read from up to the button // run only this DOM is fully load in this whole html
//document.querySelector('button').onclick = count; find me the button on the page use DOM 
                                                 
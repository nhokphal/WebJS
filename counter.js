
if (!localStorage.getItem('counter')){ 
    localStorage.getItem('conter', 0);
}
function count() {
    let counter = localStorage.getItem('counter') // get value in starting point of counter by using getItem
    counter++;
    document.querySelector('h1').innerHTML = counter;    //alert(counter);
    
   /* if (counter % 10 === 0){
        alert(`Count is now ${counter}`); // alert value reached / = 0 "`" = f"" 

    }*/
    localStorage.setItem('counter', counter); // set item in counter to new value counter after recived from increment

}     

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count; 
    document.querySelector('h1').innerHTML = localStorage.getItem('counter'); // get value in tage h1 "0" to the value we get 
    //setInterval(count, 1000) 
});
// remember javascript read from up to the button // run only this DOM is fully load in this whole html
//document.querySelector('button').onclick = count; find me the button on the page use DOM 
                                                 
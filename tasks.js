 document.addEventListener('DOMContentLoaded', function() {

                // by default, submit button is disabled
                document.querySelector('#submit').disabled = true;

                document.querySelector('#task').onkeyup = () => {
                    if (document.querySelector('#task').value.length > 0){ // is value bigger than 0
                        document.querySelector('#submit').disabled = false; 
                    }else{
                        document.querySelector('#submit').disabled = true;
                    }
                    
                           
                }

                document.querySelector('form').onsubmit = () => {
                    const name = document.querySelector('#task').value;
                    //console.log(name);
                    const li =  document.createElement('li');
                    li.innerHTML = name;

                    document.querySelector('#tasks').append(li);

                    document.querySelector('#task').value = '';
                    document.querySelector('#submit').disabled = true;

                    return false;
                      }   
            });
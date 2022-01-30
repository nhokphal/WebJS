
document.addEventListener('DOMContentLoaded', function(){

        document.querySelector('form').onsubmit = function() {

        fetch('http://api.exchangeratesapi.io/latest?base=USD')
        .then (response => response.json())
        .then(data => {
            const currency = document.querySelector('#currency').value.toUpperCase;
            const rate = data.rate[currency]; // in jason, get data in data object and rate then EUR currency
            if (rate !== undefined){
                document.querySelector('#result').innerHTML = `1 USD IS EQUAL TO ${rate.toFixed(3)}. ${curreny} `; // convert to body page
            }else {
                document.querySelector('#result').innerHTML = "invalid currency.";
            }
            
            }) /// web request get http response 
            
            
            return false;

        }
        .catch(error => {
            console.log('Error', error);
        })


    });






const weatherForm = document.querySelector('form');
const search=document.querySelector('input');
const runMessage=document.querySelector('#message-1');
const resultMessage=document.querySelector('#message-2');

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault(); //Prevents default action that is, refresh every time submit is clicked.
    const location = search.value;
    runMessage.textContent='Please wait while results are loaded'
    fetch('http://localhost:3000/weather?address='+location).then(function(response){
    response.json().then((data)=>{
        if(data.error)
        {
            runMessage.textContent='';
            resultMessage.textContent=data.error;
        }
        else 
        {
            runMessage.textContent='';
            resultMessage.textContent=data.forecast;
        }
    })
});
})
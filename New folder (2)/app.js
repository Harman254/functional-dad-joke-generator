const btnEl = document.getElementById('Btn');

const apiKey = "/tJFE1/cgSFUh6fAv2zj9w==neqvNsurltZE7NmK";

const ApiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const jokeEl = document.getElementById('joke');

 const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
  }


btnEl.addEventListener('click', () =>{

  getJoke();
})



  async function getJoke(){
    try {
      jokeEl.innerText = "Loading...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch (ApiUrl, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me another joke";
  
    jokeEl.innerText = data[0].joke;
      
    } catch (error) {
      jokeEl.innerText = "An error occurred, please try again later";
   btnEl.disabled = false;
   btnEl.innerText = "Tell me joke";
   console.log(error);
      
    }
    
  }
  
  


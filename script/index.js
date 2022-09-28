const clickBtn = document.querySelectorAll('.btn')
const displayContainer = document.querySelectorAll(".main")
  const url = 'https://swapi.dev/api/people';

  fetch(url)
    .then((response) => {
      return response.json();

    })
    .then((data) => {
      let {results} = data;
      let people = results.map((data, i) =>{
                 const dataHolder = {name: data.name, height: data.height, gender: data.gender, mass: data.mass}
                 console.log(dataHolder)
               clickBtn[i].addEventListener("click",(event)=>{
                
displayContainer[i].innerHTML = `<p><b>Name: ${dataHolder.name}</b></p><br>
                                <p><b>Height: ${dataHolder.height}</b></p><br>
                                <p><b>Gender: ${dataHolder.gender}</b></p><br>`
                             displayContainer[i].classList.toggle("undisplay")
                                
               })
      })
    
      }).catch(function(error) {
      console.log(error);
    });
   
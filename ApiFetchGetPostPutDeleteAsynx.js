// ___________________________________POST PUT GET___________________________



// ___________________________GET________________________

const url = 'https://acb-api.algoritmika.org/api/transaction'

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

// belede yazmaq olar, eynidirler ===

fetch(url, {
    method: "GET"
})
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    }


// ___________________________POST________________________
const newObject = {
    from: 'Vuqar',
    to: 'Humbet',
    amount: 2022
}
fetch(url, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(newObject)
});


// __________________________PUT_______________________
const newObject1 = {
    from: 'Vuqar',
    to: 'Humbet',
    amount: 9999
}

fetch(`${url}/${27085}`, {      //mufaviq id-ni yazib deiwiklik edirik
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(newObject1)
});



// ________________________DELETE_____________________

fetch(`${url}/${27084}`, {   //mufaviq id_ni tapib silirik
    method: 'DELETE',

});






// ______________ITERACIYA ETMEK_______________________________________________________

fetch("https://acb-api.algoritmika.org/api/transaction")
            .then(response => response.json())
            .then((data) => {
                data

                // FOR__________ile____________________________
                for (let i = 0; i < data.length; i++) {
                    const li = document.createElement("ul")
                    document.body.append(li)
                    li.innerText += (`${dat[i].from}-dan ${dat[i].to}-e ${dat[i].amount} kocuruldu`)
                }

                // FOR.EACH_____ile________________________________
                data.forEach((lili) => {
                    const li = document.createElement("ul")
                    document.body.append(li)
                    li.innerText += (`${lili.from}-dan ${lili.to}-e ${lili.amount} kocuruldu`)
                })

                //FOR OF________ile___________________________
                for (let lili of data) {
                    const li = document.createElement("ul")
                    document.body.append(li)
                    li.innerText += (`${lili.from}-dan ${lili.to}-e ${lili.amount} kocuruldu`)
                }
            }
// _________________________________________________________________________________












// _____________________API KEY HTTPS_______________________

const url = 'https://content.guardianapis.com/search';
const apiKey = "d01a0c76-07ec-41b9-bfec-ed8ee4858637";


fetch(`${url}?api-key=${apiKey}`)
.then(response=>response.json())
.then(data=>{
    data.response.results.forEach((elem)=>{
    const ul=document.createElement("ul")
    document.body.append(ul)
    // console.log(elem)
    ul.innerText=elem.id
    })
})

// ____________________________________________________________











// ____________________encodeURIComponent_____________________________

const url = "https://content.guardianapis.com/search";
const apiKey = "d01a0c76-07ec-41b9-bfec-ed8ee4858637";
const tt = encodeURIComponent("News Corp") //SOZ VARSA TAPSIN


fetch(`${url}?api-key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        data.response.results.forEach((elem, index) => {
            if (index < 5) {

                const ul = document.createElement("ul")
                document.body.append(ul)
                // console.log(elem)
                ul.innerText = elem.sectionName
            }
        })
        const button = document.createElement("button")
        document.body.append(button)
        button.textContent = "Click"
        const buttonClick = document.querySelector("button")
        buttonClick.addEventListener("click", () => {


            fetch(`${url}?q=${tt}&api-key=${apiKey}`)
                .then(response => response.json())
                .then(data => {

                    data.response.results.forEach((elem,ind)=>{
                        if(ind<5){

                        const li=document.createElement("li")
                        document.body.append(li)
                        li.innerText = elem.webTitle
                        buttonClick.remove()
                        }
                    })
                }
                )
        })
    })
// _____________________________________________________________________







// _____________INVALID ID________________________________________

const url="https://rickandmortyapi.com/api/character/"


function getBreweryDataById(id){
  if (id === 0) {
    return Promise.reject('Invalid id');
  }

  return fetch(`${url}${id}`);
}

getBreweryDataById(1)
.then(res=>res.json())
.then((data=>console.log(data)))

getBreweryDataById(0)

// _________________________________________________________________________






// ______________async__________await________________________

const url="https://rickandmortyapi.com/api/character/"


async function getCharacterData(id){
  if (id === 0) {
    throw 'Invalid id';
  }

  const response = await fetch(`${url}${id}`);
  const data = await response.json();

  return data;
}

getCharacterData(0)
getCharacterData(1)
.then(data=>console.log(data))

// _____________________________________________________________





// _______async__await_________try(catch)_____________Promise.all___________

const url = "https://rickandmortyapi.com/api/character/"

async function rickAndMortyAPI(id) {
    try {
        const fetchUrl = await fetch(`${url}${id}`);
        const response = await fetchUrl.json();
        return response;
    } catch (error) {
        console.log("error") ;//niye owibka iwlemir ki?
        return error;
    }


}
Promise.all([rickAndMortyAPI(1), rickAndMortyAPI(2), rickAndMortyAPI(3)])
    .then(response => {
        response.forEach((item) => console.log(item.name))
    })
// _____________________________________________________________________________









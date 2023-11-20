// console.log(API_KEY)
// Grabbing the form from the DOM
const form = document.querySelector('form')
// Adding the event listener to the form 
form.addEventListener('submit', (event) => {
  // Preventing page from rerendering
event.preventDefault()
// console.log(event.target.cream.value)

 const newIceCream = event.target.cream.value

 fetch(
  `https://api.api-ninjas.com/v1/nutrition?query=${newIceCream}&X-Api-Key=${API_KEY}`
)
// Passed the data to the .then, and our anoy. func turns it into the json and then passes that json to the next .then
  .then((res) => res.json())
  .then((data) => {
    const unOrderd = document.querySelector('ul')

for (obj of data) {
  unOrderd.innerHTML = `<li>The flavor is ${obj.name}</li>
  <li>serving-size:${obj.serving_size_g}</li>
  <li>calories:${obj.calories}</li>
  <li>sugar-g:${obj.sugar_g}</li>
  <li>protein:${obj.protien_g}</li>
  <li>potassium-mg:${obj.potassium_mg}</li>`
    // console.log(data);
    // the code for the HTML file goes in here
  }
})
});


 const search = document.querySelector('form')
 const button = document.getElementById('searchButton')

 button.addEventListener('click', (event) => {
  event.preventDefault()

  const enterFlavor = document.getElementById('flavor-search').value

  if (enterFlavor) {
    fetchData(search)
  } else {
    alert('Enter Flavor!') 
  }

  function fetchData(enterFlavor) {
    fetch(`https://api.api-ninjas.com/v1/nutrition?query=${enterFlavor}&X-Api-Key=${API_KEY}`)

    .then(res => res.json())
    .then(data => {
      createCard(data);
    })
  }

  function createCard(data) {
    const card = document.createElement('div')
    card.className = 'card-holder' 

    card.innerHTML = `<p>
    <ul>
        <li>The flavor is ${data.name}</li>
  <li>serving-size:${data.serving_size_g}</li>
  <li>calories:${data.calories}</li>
  <li>sugar-g:${data.sugar_g}</li>
  <li>protein:${data.protien_g}</li>
  <li>potassium-mg:${data.potassium_mg}</li>
    </ul>
</p>`

    document.getElementById('card-holder').appendChild(card)
  }
 })







// const form2 = document.querySelector('form')

// form.addEventListener('', (event) => {
//   event.preventDefault()
  
//   const addIceCream = event.target.cream.value

//   fetch (
//     `https://api.api-ninjas.com/v1/nutrition?query=${addIceCream}&X-Api-Key=${API_KEY}`
//   )

//   .then((res) => res.json())
//   .then((data) => {
//     const button = document.querySelector('button')

    
//   });
// })



// if (data.name) {
//   button.innerHTML = `li>The flavor is ${obj.name}</li>
//   <li>serving-size:${obj.serving_size_g}</li>
//   <li>calories:${obj.calories}</li>
//   <li>sugar-g:${obj.sugar_g}</li>
//   <li>protein:${obj.protien_g}</li>
//   <li>potassium-mg:${obj.potassium_mg}</li>`




// unOrderd.innerHTML = `<li>The name of the flavor is ${}</li>
// <li>serving-size:</li>
// <li>calories:</li>
// <li>sugar-g:</li>
// <li>protien:</li>
// <li>potassium-mg:</li>`
//     console.log(data);
//     // the code for the HTML file goes in here
//   });
// })

// const myarr = [
//   {
//       "name": "chocolate",
//       "calories": 540.2,
//       "serving_size_g": 100,
//       "fat_total_g": 29.4,
//       "fat_saturated_g": 18.6,
//       "protein_g": 7.8,
//       "sodium_mg": 78,
//       "potassium_mg": 206,
//       "cholesterol_mg": 23,
//       "carbohydrates_total_g": 58.9,
//       "fiber_g": 3.4,
//       "sugar_g": 51.4
//   }
// ]


// function (myarr) {
//   for (arr of myarr) {
//     return `The name of the flavor is name:${arr.name}`
//   }
// }


// const unOrderd = document.querySelector('ul')

// unOrderd.innerHTML = `<li>name:</li>
// <li>serving-size:</li>
// <li>calories:</li>
// <li>sugar-g:</li>
// <li>protien:</li>
// <li>potassium-mg:</li>`




// { <li>name:</li>
//                 <li>serving-size:</li>
//                 <li>calories:</li>
//                 <li>sugar-g:</li>
//                 <li>protien:</li>
//                 <li>potassium-mg:</li> */}



// console.log(form)

// fetch(
//     `https://api.api-ninjas.com/v1/nutrition?query=${newIceCream}&X-Api-Key=${API_KEY}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       // the code for the HTML file goes in here
//     });

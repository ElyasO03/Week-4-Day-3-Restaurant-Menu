const dataUl = document.getElementById('dataUl')

for(let index = 0; index < dishes.length; index++ ){
    const dish = dishes[index]
    const dataItem = `
    <li>
    <h2>${dish.course}</h2>
    <img class = 'photo' src = ${dish.imageURL} width="35%" height="35%"/>
    <h3>Title: ${dish.title}</h3>
    <h4>Description: ${dish.description}</h4>
    <h5> Price: $${dish.price}</h5>
    </li>
    `

dataUl.insertAdjacentHTML('beforeend', dataItem)

}
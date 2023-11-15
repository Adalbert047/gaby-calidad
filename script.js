function getPersonajes(){  
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        const template_personaje = document.querySelector("#template-personaje")
        const fragment = document.createDocumentFragment();


    data.results.forEach(element => {
        const name = element.name
        const image = element.image
        const status = element.status
        const species = element.species
        const origin = element.origin.name

        console.log(species)

       const template = document.importNode(template_personaje.content, true)

       const img = template.querySelector(".image img")
       img.setAttribute("src", image)

       const parrafo = template.querySelector(".name p" )
       parrafo.textContent = name

       const estado = template.querySelector(".status p")
       estado.textContent = "Status: "+status

       const especie = template.querySelector(".species p")
       especie.textContent = "Species: "+species

       const origen = template.querySelector(".origin p")
       origen.textContent = "Origin: "+origin

    

       fragment.appendChild(template)
        
    });
    const div_container = document.querySelector("#container")
    div_container.appendChild(fragment)
    })
    .catch((err) => {
        console.log(err)
    })
}

getPersonajes();
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function read(){
    var search = document.getElementById("search").value
    search = search.toLowerCase()
    console.log(search)
    main(search)
    
}

function main(search){
    let data = fazGet("https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook")
    let user = JSON.parse(data)
    let result = document.querySelector(".main__search__result")
    const lista = []
    console.log(user.suggestions)
    for(let i in user.suggestions){
        lista.push(user.suggestions[i].term)
    }
    console.log(lista)

    for(let j in lista){
        if(lista[j].match(search)){
            let paragraph = document.createElement("p")
            let text = document.createTextNode("Id: " + user.products[j].id+" | Descrição: "+ user.products[j].name)
            paragraph.appendChild(text)
            result.appendChild(paragraph)
            console.log(user.products[j])
        }        
    }
    let line = document.createElement("hr")
    result.appendChild(line) 
}
const livros1 = document.getElementById("livro1");

// 1 criar um arquivo json com informações dos livros
// 2 carregar infos arquivos 
// 3 inserior no DOM



function requisitarDados(){
    fetch("../assets/database.json")
        .then(function(res){
                return res.json()
              
        })
        .then(function(dados){
               dados.forEach(element => {
                let livro = `                
                <div class="card">
                    <img class="card-img-top" src="${element.imagem}"
                    alt="Imagem de capa do card">
                    <div class="card-body">
                    <p class="font-weight-light">R$ ${element["preco-inicial"]} <span class="font-weight-normal priceColor">R$ ${element.desconto}</span></p>
                    <h5 class="card-title">${element.titulo}</h5>
                    </div>
                </div>
                `   
                livros1.innerHTML+=livro
               });
        })
}

requisitarDados();




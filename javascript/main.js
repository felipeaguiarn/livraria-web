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
                <div class="cardBooks">
                    <img class="coverBooks" src="${element.imagem}"
                        alt="Imagem de capa ${element.titulo}">
                    <div class="textPrice">
                        <span class="priceColor">R$ ${element.desconto}</span><span class="oldPrice">R$ ${element["preco-inicial"]}</span>
                        <p class="titulo">${element.titulo}</p>
                    </div>
                </div>
                `   
                livros1.innerHTML+=livro
               });
        })
}

requisitarDados();


const livros2 = document.getElementById("livros2");

// 1 criar um arquivo json com informações dos livros
// 2 carregar infos arquivos 
// 3 inserior no DOM



function requisitarDadosx(){
    fetch("../assets/database2.json")
        .then(function(res){
                return res.json()
              
        })
        .then(function(dadosx){
               dadosx.forEach(element => {
                let livro2 = `                
                <div class="cardBooks">
                <img class="coverBooks" src="${element.imagem}"
                    alt="Imagem de capa ${element.titulo}">
                <div class="textPrice">
                    <span class="priceColor">R$ ${element.desconto}</span><span class="oldPrice">R$ ${element["preco-inicial"]}</span>
                    <p class="titulo">${element.titulo}</p>
                </div>
            </div>
                `   
                livros2.innerHTML+=livro2
               });
        })
}

requisitarDadosx();

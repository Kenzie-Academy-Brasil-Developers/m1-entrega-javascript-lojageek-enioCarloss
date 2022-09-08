//desenvolver função para adicionar lista de itens/figuras

let sectionPaiting = document.querySelector(".section-painting")
let sectionAction  = document.querySelector(".section-figures")

function adicionarProdutos(){

  let nomesImg=["Relógio","GamePad","Personagem"]
  let valorProduto =["R$ 1.200,00", "R$ 120,00", "R$ 150,00"]

    for(let i = 0; i<nomesImg.length;i++){

        let divPaiting    = document.createElement("div")
        divPaiting.className="div-painting"

        let imagem = document.createElement("img")
        imagem.src=`assets/img/painting/gamepad.jpg`
        
        let nomeProduto= document.createElement("p")
            nomeProduto.innerText =nomesImg[i]
        
        let precoProduto=document.createElement("p") 
            precoProduto.innerText=valorProduto[i]

         sectionPaiting.appendChild(divPaiting)
         divPaiting.appendChild(imagem)
         divPaiting.appendChild(nomeProduto)
         divPaiting.appendChild(precoProduto)

    }

}

adicionarProdutos()
adicionarProdutos()
adicionarProdutos()

   
function adicionarAction(){

    let nomeActions=["Anime Woman","Goku DragonBall","Baby Yoda"] 
    let precoAction =["R$ 120,00", "R$ 150,00","R$ 130,00"]
    
      for(let i=0;i<nomeActions.length;i++){
    
         let divAction = document.createElement("div")
             divAction.className="div-painting"
           
         let imgAction = document.createElement("img")
             imgAction.src="assets/img/actions/animewoman.jpg"
             
         let actionsName=document.createElement("p")    
             actionsName.innerText=nomeActions[i]
    
         let priceAction =document.createElement("p") 
             priceAction.innerText=precoAction[i]    
    
            sectionAction.appendChild(divAction)
            divAction.appendChild(imgAction)
            divAction.appendChild(actionsName)
            divAction.appendChild(priceAction)
      }

}

adicionarAction()
adicionarAction()

/*   <div class="div-painting">

                <img src="./assets/img/painting/clock.jpg" alt="" srcset="">

                <p>Relógio 1</p>
                <p>Preço: R$ 600,00</p>
            </div>

            <div class="div-painting">

                <img src="./assets/img/painting/gamepad.jpg" alt="" srcset="">

                <p>GamePad 2</p>
                <p>Preço: R$ 600,00</p>
            </div>

            <div class="div-painting">

                <img src="./assets/img/painting/personagem.jpg" alt="" srcset="">
                <p>GamePad 3</p>
                <p>Preço: R$ 600,00</p>

            </div>
*/
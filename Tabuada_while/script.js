function gerarTabuada() {
  const paineizinho = document.getElementById("paineizinho");
  let conteudinho = "";

  // tabuazinha vale 1
  let tabuazinha = 1;

  //  Enquanto menor  ou igual que dez
  while (tabuazinha <= 100) {
    conteudinho += `<div class="tabuada-coluna">`; // diva do conteudinho para css lindissmo
    conteudinho += `<h4>Tabuada do ${tabuazinha} </h4>`; // titulo da tabuada

    let multiplica = 1; // multiplica vale 1

    while (multiplica <= 10) {
      // Enquanto menor ou igual a 10
      let resultado = tabuazinha * multiplica; // o resultado da multiplicação = a tabuzainha vezes multiplica
      conteudinho += `<p>${tabuazinha} x ${multiplica} = <strong>${resultado}</strong></P>`; //resultado que aparece na tela

      multiplica++; //incremento no final do laço do multiplica
    }
    conteudinho += `</div>`; //PRESTA ATENÇÃO NO FECHAMENTO DA DIV MISERICORDIA
    tabuazinha++; // Incremento final do laço tabuazinha
  }

  paineizinho.innerHTML = conteudinho; //Resultado para aparecer
}

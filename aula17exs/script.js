let valor = document.getElementById('num')
let tab = document.getElementById('colect')
let equa = []
let soma = 0 

function isNumero(num){
  if(Number(num) >=1 && Number(num) <= 100){
    return true
  }else{
    return false
  }
}

function inlist(num, equa){
  if(equa.indexOf(Number(num)) != -1){
    return true
  }else{
    return false
  }
}

function adicionar(){
   if(isNumero(num.value) && !inlist(num.value, equa)){
  let num = Number(valor.value)
  let item = document.createElement("option")
  item.text = `valor ${num} adicionado.`
  item.value = `tab${num}`
  tab.appendChild(item)
  equa.push(num)
  equa.sort() 
  soma += num
 
  }else{
    window.alert('Valor invalido ou ja encontrado na lista')
  }
  num.value = ""
  num.focus()
}

function finalizar(){
  if(equa.length == 0){
    window.alert("adicione valores antes de finalizar")
  }else{
  let media = soma / equa.length
  let txt = document.getElementById("texto")
  txt.innerHTML= `Ao todo, temos ${equa.length} números cadastrados
                <p>O menor valor informado foi ${equa[0]} </p>
                <p>O maior valor informado foi ${equa[equa.length-1]} </p>
                <P>Somando todos os valores temos: ${soma}</p>
                <p>A media dos valores digitados é ${media}</p>
  `
  }
}


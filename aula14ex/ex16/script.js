

function contar(){
      let ini = document.getElementById("txti")
      let fim = document.getElementById("txtf")
      let passo = document.getElementById("txtp")
      let res = document.getElementById("result")

if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
  res.innerHTML="impossivel contar"
  window.alert("[ERRO] Faltam dados")

}else{
  res.innerHTML = 'contando: <br>'
  var i = Number(ini.value)
  let f = Number(fim.value)
  let p = Number(passo.value)
  if (p<=0){
    window.alert('passo invalido, considerando passo = 1')
    p = 1
  }
  if(i<f){
  for(let c = i; c <=f ; c+=p){
    res.innerHTML +=`${c} \u{1f449}` 
  }
  }else{
    for(let c = i;c>=f;c-=p){
      res.innerHTML +=`${c} \u{1f449}`
    }
  }
  res.innerHTML += `\u{1F3C1}`
 }
}



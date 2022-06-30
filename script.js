var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var txt = document.getElementById('txt')
var body = document.querySelector('body')
var img = document.getElementById('fotos')
 
if (hora <=12){
    txt.innerHTML += `<h4>BOM DIA!<h4>+<br>
    <br><p>Agora são<strong> ${hora}:${minutos}</strong>   horas`
 
 body.style.background='rgb(241, 170, 93)'
 img.src = '/img/dia (1).jpg'


}else if (hora >12 && hora <= 18){
    txt.innerHTML += `<h4>BOA TARDE!</h4>
    <p>Agora são<strong> ${hora}:${minutos}</strong>   horas`
    img.src  = '/img/tarde.jpg'
    body.style.background = '#fce187'
  
}else { 

txt.innerHTML += `<h4>BOA NOITE!</h4><br>
    <br><p>Agora são<strong> ${hora}:${minutos}</strong>   horas`
img.src = '/img/noite.jpg'
body.style.background
  ='#aaa'
}   
let bar = document.getElementById('bar');
let menu = document.getElementById('menus')
let menuHolder = document.getElementById("menuholders")
bar.addEventListener('click',function(){
  if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden')
  }else{
    menu.classList.add('hidden')
  }
})

// document.addEventListener('DOMContentLoaded',function(){
//   menu.classList.add('hidden')
// })
let bar = document.getElementById('bar');
let menu = document.getElementById('menus')
bar.addEventListener('click',function(){
  if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden')
  }else{
    menu.classList.add('hidden')
  }
})
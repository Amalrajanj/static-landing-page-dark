let menuStatus = true;
let container = document.querySelector('.container')
let togglePage = document.querySelector('.togglePage')
let menu = document.querySelector('.menuIcon')
let menuClose = document.querySelector('.menuClose')

container.style.display = 'visible'
togglePage.style.display= 'none'

let toggleMenu=function(){
    if(menuStatus==true){
        container.style.display = 'none'
        togglePage.style.display= 'flex'
        menuStatus = false

    }
    else{
        container.style.display = ''
        togglePage.style.display= 'none'
        menuStatus = true
    }

}
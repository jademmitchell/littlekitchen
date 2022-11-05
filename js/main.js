function navColour(){
    const nav = document.getElementById('nav')
    const scrollValue = window.scrollY
    if(scrollValue < 50){
        nav.classList.remove('nav-colour')
    }else{
        nav.classList.add('nav-colour')
    }
}

window.addEventListener('scroll' , navColour)
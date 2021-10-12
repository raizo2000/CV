// show menu
const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId), 
                nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav_toggle', 'nav_menu')

//activar & remover activacion
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//mensajes
const $form = document.querySelector('#contact_form') 

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        swal("Mensaje Enviado!", "Te contactaré pronto!", "success");
    }

}


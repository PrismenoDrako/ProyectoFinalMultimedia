var sesions = document.getElementById('sesions');
var presen = document.getElementById('presentation');
var nosotros = document.getElementById('nosotros');
var btn_sidebar = document.getElementById('btn-sidebar');

var sidebar = document.getElementById('sidebar');
var frame = document.getElementById('frame');


sidebar.style.display = 'none';

function watch_sesions(){
    
        sidebar.style.display = 'block';
        frame.style.gridArea='2 / 2 / 3 / 3';

    
}
function presentation(){
    if(sidebar.style.display == 'block'){
        sidebar.style.display = 'none';
        frame.style.gridArea='2 / 1 / 3 / 3';
    }
}

presen.addEventListener('click',() => {
    presentation();

});
sesions.addEventListener('click',() => {
    watch_sesions();
});

nosotros.addEventListener('click', ()=>{
    presentation();
})

btn_sidebar.addEventListener('click',() => {
    console.log("hey")
    if(sidebar.style.display == 'block'){
        presentation();
    }
    else{
        watch_sesions();
    }
})

let menu_interno = document.getElementsByClassName('menu_interno');
let menu = document.getElementsByClassName('menu');

function ocultar_submenus(){
    for(let i = 0; i < menu_interno.length; i++) {
        menu_interno[i].style.height = 0;
    }
}

for(let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click',() => {
        let h = 0;
        let i_menu = menu[i].nextElementSibling;
        console.log(menu[i].nextElementSibling.style.height)
        if(menu[i].nextElementSibling.clientHeight == "0"){
            h = i_menu.scrollHeight;
        }
        ocultar_submenus();
        menu[i].nextElementSibling.style.height = h+'px';
        

    })
}

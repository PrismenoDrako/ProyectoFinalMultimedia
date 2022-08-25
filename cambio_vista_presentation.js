var sesions_btns = document.getElementsByClassName('link_sesion');
var sidebar = document.getElementById('sidebar');
var frame = document.getElementById('frame');
function watch_sesions(){
    
    sidebar.style.display = 'block';
    frame.style.gridArea='2 / 3 / 3 / 4';

}
function presentation(){
if(sidebar.style.display == 'block'){
    sidebar.style.display = 'none';
    frame.style.gridArea='2 / 2 / 3 / 4';
}
}


for(let i = 0; i < sesions_btns.length; i++) {
    sesions_btns[i].addEventListener('click',() => {
        watch_sesions();
    })
}
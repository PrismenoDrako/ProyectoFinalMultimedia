var sesions = document.getElementById('sesions');
var presen = document.getElementById('presentation')

var sidebar = document.getElementById('sidebar');
var frame = document.getElementById('frame')

//sidebar.style.display = 'none';

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

presen.addEventListener('click',() => {
    presentation();
});
sesions.addEventListener('click',() => {
    watch_sesions();
})


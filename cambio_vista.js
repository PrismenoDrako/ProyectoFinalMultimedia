var sesions = document.getElementById('sesions');
var presen = document.getElementById('presentation')
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

btn_sidebar.addEventListener('click',() => {
    console.log("hey")
    if(sidebar.style.display == 'block'){
        presentation();
    }
    else{
        watch_sesions();
    }
})
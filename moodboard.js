$(document).ready(function() {
    $( "#draggable" ).draggable( {
    // Låter bilderna bara dras runt i div:en startkollage.
    containment: '#startkollage',
    stack: '#draggable',
    } );
    // Ger bilderna random placering varje gång sidan laddas om.
    $('#draggable').each(function(i,el){
    var x = 550;
    var y = '#startkollage';
    var randomX = Math.floor(Math.random()*x),
        randomY  = Math.floor(Math.random()*y);

    $(el).css( {
        position:'realtive',
        top: randomX+'px',
        left: randomY+'px'
    });
    });
});
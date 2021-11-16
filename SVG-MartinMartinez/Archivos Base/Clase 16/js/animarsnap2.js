window.onload = function () {

var iconoresponsive = Snap("#iconos_responsive");
var formapc = Snap.select("#versionpc");
var circulopc = Snap.select("#circulopc");

iconoresponsive.hover(function(){
    formapc.animate({d:"M43.2 58.5H14.5c-.3 0-.8-.3-.8-.8V2.5c0-.5.3-.8.8-.8h28.7c.3 0 .8.3.8.8v55.3c-.1.4-.6.7-.8.7zM13.8 9.6h30.1M13.8 50.6h30.1M23.1 5.5h11.5"},200,mina.ease);
    circulopc.animate({cx:29,cy:55,r:1.5},200,mina.ease);
    }, function() {
   formapc.animate({d:"M57.7 4.8H2.4c-.5 0-.8.2-.8.8v40.3c0 .5.5.8.8.8h19.4l-.8 8.1h18.1l-1-8.2h19.6c.3 0 .5-.3.8-.8V5.6c0-.6-.5-.8-.8-.8zM1.6 38.4h56.9M21.8 46.6h16.3-16.3zM16.1 54.8H44"},200,mina.ease);
    circulopc.animate({cx:29.9,cy:42,r:1.5},200,mina.ease);

    });

}
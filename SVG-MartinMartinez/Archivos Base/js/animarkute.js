window.onload = function () {
var animar1 = KUTE.to('#regalotapa',{path:'#cuerpocarrito'},{duration:200,easing:'linear',});
var animar2 = KUTE.to('#regalocuerpo',{path:'#ruedascarrito'},{duration:200,easing:'linear',});
var animar3 = KUTE.to('#regalotapa',{path:'#regalocuerpo'},{duration:200,easing:'linear',});
var animar4 = KUTE.to('#regalocuerpo',{path:'#regalotapa'},{duration:200,easing:'linear',});
var animar_color = KUTE.to('#regalotapa',{fill: '#f0c52a'});
var animar_color1 = KUTE.to('#regalocuerpo',{fill: '#f0c52a'});
var animar_color2 = KUTE.to('#regalotapa',{fill: '#2ad4f0'});
var animar_color3 = KUTE.to('#regalocuerpo',{fill: '#2ad4f0'});


$( "#total_regalo").hover(
  function() {
    animar1.start();
    animar2.start();
    animar_color.start();
    animar_color1.start();
  }, function() {
  	animar3.start();
    animar4.start();
    animar_color2.start();
    animar_color3.start(); 
  }
);

}


















/*
$( "#total_regalo").hover(
  function() {
    var animar1b= KUTE.to('#regalotapa', { path: 'M54.7 11.9H15.3l-2.4-8.3H5.5v5.3h3.4l8 27.6.4 1.6 2.7 9.3h24.1V42H24l-1.2-4h24.9l7-26.1zM46.3 23h-2.9v-5.9h4.4L46.3 23zm-24.9 9.8l-1.9-7.1h2.7v7.1h-.8zm3.4-7.1h6.4v7.1h-6.4v-7.1zm0-2.7v-5.9h6.4V23h-6.4zm9.1 2.7h6.9v7.1h-6.9v-7.1zm0-2.7v-5.9h6.9V23h-6.9zm-11.7-5.8V23h-3.4l-1.5-5.9h4.9zm21.2 15.6v-7.1h2.2l-1.9 7.1h-.3z' },{ duration: 200,easing:'linear',}).start();
    var animar1c = KUTE.to('#regalocuerpo', { path: 'M27 49.5c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM38 49.5c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5z' },{ duration: 200,easing:'linear',}).start();
  }, function() {
  	var animar2b= KUTE.to('#regalotapa', { path: 'M50.5 19.4H36.8v-.1c.4-.2.8-.4 1.1-.6 1.2-.8 2.4-1.4 3.4-2 1.1-.6 2.1-1.1 3.1-1.5 1-.4 2-.6 2.9-.9.9-.2 1.7-.4 2.3-1 .6-.6.4-1.3.4-1.7-.1-.4-.1-.5-.1-.5s0-.2-.2-.5-.4-.9-.9-1.4c-.9-1.1-2.6-2.6-5-3.6-1.2-.5-2.7-.8-4.2-.8-.8 0-1.5.1-2.5.3l-.5.1-.7.2c-.4.1-.8.3-1.2.5-1.6.8-3 2-4.1 3.5-.1.2-.2.3-.3.5-.1-.1-.1-.2-.2-.3C29 8.1 27.5 6.8 25.9 6c-.8-.4-1.6-.7-2.4-.9-.9-.3-1.7-.3-2.5-.4-1.6 0-3 .3-4.3.8-2.5 1-4.2 2.4-5.1 3.6-.5.6-.7 1.1-.9 1.4-.2.4-.2.6-.2.6s-.1.2-.1.6c-.1.4-.1 1 .2 1.7.4.7 1.1 1.2 2 1.6.9.4 1.8.8 2.9 1.3 1.1.5 2.1 1 3.3 1.6l3.4 1.7H10c-.6-.2-1 .5-1 1.4v8.1c0 .9.5 1.6 1.1 1.6H28v-10c.5-.1 1.1-.3 1.6-.6.1-.1.3-.2.4-.3h.6c.1.1.2.1.3.2.7.5 1.6.6 2.2.5h.2v10.2h17.3c.6 0 1.1-.7 1.1-1.6V21c-.1-.9-.6-1.6-1.2-1.6zm-15.8-6.5c.8-.7 1.7-1.3 2.7-1.8.2-.1.5-.2.7-.4.1-.1.3-.1.3-.2l.5-.2c.4-.1.9-.4 1.4-.5 1-.3 2-.6 3-.8 2-.4 3.9-.1 4.9.7 1 .7 1.2 1.5 1.2 1.4 0 0 .1.2.2.5s.2.8-.2 1.2c-.4.4-1.2.5-2.1.5h-3.1c-1.2 0-2.5.2-3.8.7-1.3.4-2.6 1-3.9 1.5-.4.2-.8.3-1.2.5-.5-.6-1.1-1-1.8-1.4.1-.5.6-1.1 1.2-1.7zM16 14.7c-1.1-.1-2.2-.3-3-.5-.9-.2-1.6-.6-1.9-1.1-.3-.5-.2-1-.1-1.3.1-.3.2-.5.2-.5s.2-.7 1.2-1.4 2.9-1 4.9-.6c1 .2 2 .5 3 .8.5.2 1 .4 1.4.5.6.2 1 .5 1.5.7 1 .5 1.9 1.1 2.7 1.8.6.5 1 1.1 1.3 1.8-.9.5-1.7 1.2-2.3 2l-1.2-.3c-1.3-.4-2.6-.8-3.9-1.1-1.4-.4-2.6-.6-3.8-.8z' },{ duration: 200,easing:'linear',}).start();
  	var animar2c = KUTE.to('#regalocuerpo', { path: 'M14.8 57H28V31.9H11.2zM33.2 57h12.3l3.6-25.1H33.2z' },{ duration: 200,easing:'linear',}).start();
     
  }
);
*/

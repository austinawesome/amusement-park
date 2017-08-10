$(document).ready(function() {
  var height = parseInt(prompt("How tall are you? In inches"));

  if (height > 21) {
    $('.all-rides').show();
  }
  // else {
  //   $('little-rides').show();
  // }
});

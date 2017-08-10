$(document).ready(function() {
  var height = parseInt(prompt("How tall are you? In inches"));

  if (height >= 45) {
    $('.all-rides').show();
  }
  else {
    $('.little-rides').show();
  }
});

$(function() {
  $("button#all-rides-highlighted").click(function() {
    $(".all-rides").show();
    $(".little-rides").addClass("green-background");
    $("#big-rides").addClass("red-background");
})
  })

// (btn-primary).onClick() {
//   $('.all-rides').show();
//   $('.little-rides').color(green);
// }

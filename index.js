/*$(document).ready(function(){

  function insert(num) {
    $("#input1").val($("#input1").val() + num);
  }
});*/

var isFinished = false;

function insert(num) {
  if (isFinished === false) {
    $("#input1").val($("#input1").val() + num);
  } else {
    isFinished = false;
    $("#input1").val(num);
  }
}

function sqrt() {
  var num = parseInt($('#input1').val());
  var num = Math.sqrt(num);
  $("#input1").val(num.toString());
}

function eql() {
  $("#input1").val(eval($("#input1").val()));
  isFinished = true;
}

function cle() {
  $("#input1").val("");
}

function back() {
  var str = $("#input1").val()
  $("#input1").val(str.substring(0, str.length-1));
}

function reci() {
  var num = parseInt($('#input1').val());
  var num = 1/num;
  $('#input1').val(num.toString());
}

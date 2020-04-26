$(document).ready(function(){
  var screen = $("#input1");
  var isFinished = false;


  $(".button, .operator").click(function () {
    if (isFinished === false) {
      $("#input1").val($("#input1").val() + $(this).text());
    } else {
      isFinished = false;
      $("#input1").val($(this).text());
    }
  })

  $(".clc").click(()=> {
    $("#input1").val("");
  })

  $(".equal").click(()=> {
    $("#input1").val(eval($("#input1").val()));
    isFinished = true;
  })

  $(".back").click(()=> {
    var str = $("#input1").val()
    $("#input1").val(str.substring(0, str.length-1));
  })

  $(".recip").click(()=> {
    var num = parseInt($('#input1').val());
    var num = 1/num;
    $('#input1').val(num.toString());
  })

  $(".sqrt").click(()=> {
    var num = parseInt(screen.val());
    var num = Math.sqrt(num);
    $("#input1").val(num.toString());
  })
});

/* var isFinished = false;

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
} */

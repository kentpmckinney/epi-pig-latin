function translate(text) {

  console.log(`translate(${text})`);

  return false;


}

$(document).ready(function(){


  $("#form").submit(function(e){

    let text = $("#text").val();
    let span = document.createElement("span")
    span.innerText = `Translation: ${translate(text)}`;
    $("#result").append(span);
    e.preventDefault();

  });


});
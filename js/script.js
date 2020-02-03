function translate(text) {

  console.log(`translate(${text})`);

  let pig = text.replace(/(?:\b)(\w*?)([aeiou]+\w*?)(?:\b)/g, '$2$1ay');
  console.log(pig);

  return pig;


}

$(document).ready(function(){


  $("#form").submit(function(e){

    $("#result").empty();
    let text = $("#text").val();
    let span = document.createElement("span")
    span.innerText = `Translation: ${translate(text)}`;
    $("#result").append(span);
    e.preventDefault();

  });


});
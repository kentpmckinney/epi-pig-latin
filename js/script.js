function translate(text) {

  return text.replace(/(?:\b)([^aeiou\s]*qu[^aeiou\s]*|[^aeiou\s]+?)?([aeiouy]+\w*?)(?:\b)/ig, function(m, c1, c2){
    return /^[aeiou]+/i.test(m) ? `${m}way` : `${c2}${c1}ay`;
  });
 
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
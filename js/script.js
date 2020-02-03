function translate(text) {

  // console.log(`translate(${text})`);

  /*
    For words beginning with a vowel, add "way" to the end.
    For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
    If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
    For words beginning with "y", treat "y" as a consonant.
  */

  return text.replace(/(?:\b)([^aeiou]*qu[^aeiou]*|[^aeiou]+?)?([aeiouy]+\w*?)(?:\b)/ig, function(match, c1, c2){
    // console.log(match)
    // console.log(c1)
    // console.log(c2)
    return /^[aeiou]+/i.test(match) ? `${match}way` : `${c2}${c1}ay`;
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
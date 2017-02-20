$(function(){
  $("form").submit(function(){
    event.preventDefault();
    var usrSentence = $("#sentence").val();
    var sentenceArray = usrSentence.split(" ");
    var bigWordsOnly = [];
    sentenceArray.map(function(word){
      if (word.length >= 3){
        bigWordsOnly.push(word);
      }
    });
    var bigWordsReverseJoined = bigWordsOnly.reverse().join(" ");
    console.log(bigWordsReverseJoined);
    console.log(typeof bigWordsReverseJoined);
  });
});

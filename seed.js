// require models
var db = require("./models");

var questionsList = [
    {question: "What is Batman's guilty pleasure?"},
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "What's my secret power?"},
    {question: "What's Bobos real name?"}
 ]

db.Card.remove({}, function(err, cards){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all cards');

    // create new records based on the array books_list
    db.Card.create(questionsList, function(err, cards){
      if (err) { return console.log('err', err); }
      console.log("created", cards.length, "cards");
      process.exit();
    });
  }
});
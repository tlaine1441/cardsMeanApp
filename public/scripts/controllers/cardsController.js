angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

// inject $http into CardsController to allow minification
CardsController.$inject = ['$http'];

// CardsController
function CardsController($http) {
   // Set this to self to define reference the Controller scope
  var self = this;
  self.newCard = {};
  self.addCard = addCard;
  self.getCards = getCards;
  self.deleteCard = deleteCard;
  self.questionsList=[];
  getCards();
  function getCards() {
    // Make request to get card data
    $http
      .get('/cards')
      .then(function(response){
        self.questionsList = response.data;
    });
  }

  function addCard() {
    console.log(self.newCard);
      $http
      .post('http://localhost:3000/cards', self.newCard)
      .then(function(response){
        getCards();
    });
    self.newCard = {};
  }

  function deleteCard(cardId) {
    console.log(cardId);
    $http
      .delete('http://localhost:3000/cards/' + cardId)
      .then(function(response){
        self.getCards = [];
        getCards();
    });
  }
}

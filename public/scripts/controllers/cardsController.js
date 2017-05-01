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

  function getCards() {
    // Make request to get card data
    $http
      .get('/cards')
      .then(function(response){
        self.questionsList = response.data;
        //console.log(self.all);
    });
  }
  getCards();

  function addCard() {
    console.log(self.newCard);
      $http
      .post('http://localhost:3000/cards', self.newCard)
      .then(function(response){
        getCards();
    });
    self.newCard = {};
  }
}

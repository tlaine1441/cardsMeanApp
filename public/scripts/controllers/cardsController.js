angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

// inject $http into CardsController to allow minification
CardsController.$inject = ['$http'];

// CardsController
function CardsController($http) {

  // Set this to self to define reference the Controller scope
  var self = this;

  // Make request to get card data
  $http
    .get('/cards')
    .then(function(response){
      self.questionsList = response.data;
      console.log(self.all);
  });
}

angular.module('starter.controllers', [])


.controller('PostCtrl', function($scope, $stateParams) {

})





.controller('DiscoverCtrl', function($scope, $stateParams, $ionicModal) {

  $scope.posts = [];

  var postRef = firebase.database().ref('entity/post');
  postRef.on('value', function(snapshot) {
    $scope.posts = snapshot.val().filter(function(post){
      return typeof post.title != "undefined"
    });
    $scope.$apply();
  });


  $scope.onClick = function(post){

    $ionicModal.fromTemplateUrl('/templates/detail-post.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };



})




.controller('FavoriteCtrl', function($scope, $stateParams) {

});

angular.module('starter', ['ionic', 'LocalStorageModule', 'btford.socket-io', 'angularMoment'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })
  .state('rooms', {
    url: '/rooms',
    templateUrl: 'templates/rooms.html'
  })
  .state('room', {
    url: '/room',
    templateUrl: 'templates/room.html'
  });
  // Fallback
  $urlRouterProvider.otherwise('/login');
});

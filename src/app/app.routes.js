export default function appRoutes($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}

appRoutes.$inject = ['$urlRouterProvider'];

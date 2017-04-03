import { RATIO_ROUTES } from './components/ratio/ratio.routes';

export default function appRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', RATIO_ROUTES);

  $urlRouterProvider.otherwise('/');
}

appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

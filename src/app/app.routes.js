import { RATIO_ROUTES } from './components/ratio/ratio.routes';

export default function appRoutes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
}

appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

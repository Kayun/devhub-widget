import angular from 'angular';
import 'angular-ui-router';

import { sharedModule } from 'shared/shared.module';

import appRoutes from './app.routes';

const appModule = angular.module('app', ['shared', 'ui.router']);

appModule
  .config(appRoutes);

export default appModule;

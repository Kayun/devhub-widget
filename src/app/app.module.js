import angular from 'angular';
import 'angular-ui-router';

import 'shared/shared.module';
import 'components/ratio/ratio.module';

import appRoutes from './app.routes';

const APP_MODULE = angular.module('app', ['ui.router', 'shared', 'ratio']);

APP_MODULE
  .config(appRoutes);

export default APP_MODULE;

import angular from 'angular';
import { ratioRoutesProvider } from './ratio.routes';

const RATIO_MODULE = angular.module('ratio', ['ui.router']);

RATIO_MODULE
  .config(ratioRoutesProvider);

export default RATIO_MODULE;

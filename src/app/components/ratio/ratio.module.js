import angular from 'angular';
import { ratioRoutesProvider } from './ratio.routes';
import { RatioService } from './ratio.service';
import './ratio.style';

const RATIO_MODULE = angular.module('ratio', ['ui.router']);

RATIO_MODULE
  .service('ratioService', RatioService)
  .config(ratioRoutesProvider);

export default RATIO_MODULE;

import angular from 'angular';

import './slider/slider.index';
import { CountDirective } from './count/count.directive';
import { unitFilter } from './filters';


const SHARED_MODULE = angular.module('shared', ['rzModule']);

SHARED_MODULE
  .filter('unitFilter', () => unitFilter)
  .directive('count', CountDirective.createInstance);

export default SHARED_MODULE;

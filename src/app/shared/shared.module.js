import angular from 'angular';

import './slider/slider.index';
import { CountDirective } from './count/count.directive';

const SHARED_MODULE = angular.module('shared', ['rzModule']);

SHARED_MODULE
  .directive('count', CountDirective.createInstance);

export default SHARED_MODULE;

import angular from 'angular';

import './slider/slider.index';
import { CountDirective } from './count/count.directive';

export const sharedModule = angular.module('shared', ['rzModule']);

sharedModule
  .directive('count', CountDirective.createInstance);

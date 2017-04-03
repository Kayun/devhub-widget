import angular from 'angular';
import 'angular-ui-router';

import { sharedModule } from 'shared/shared.module';

const appModule = angular.module('app', ['shared']);


export default appModule;

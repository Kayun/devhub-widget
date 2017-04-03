import { RatioController } from './ratio.controller';
import ratioView from './ratio.view.html';

export const RATIO_ROUTES = {
  url: '/',
  controller: RatioController,
  controllerAs: 'ctrl',
  template: ratioView
}

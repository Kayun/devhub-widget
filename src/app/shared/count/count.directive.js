import './count.style';

import { CountController } from './count.controller';
import countView from './count.view.html';

export class CountDirective {

  static createInstance() {
    return new CountDirective();
  }

  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.template = countView;
    this.controller = CountController;
    this.controllerAs = 'ctrl';
    this.scope = {
      value: '=',
      min: '@',
      max: '@'
    }
    this.bindToController = true;
  }

  link(scope, element, attrs) {
    this.input = element.find('input');
    this.input
      .on('keypress', this.onKeypress.bind(this))
      .on('input', this.onInput.bind(this))
  }

  onInput(event) {
    let value = this.input.val();
    let dotIndex = value.indexOf('.')

    if (event.data === ',') {
      this.input.val(value.replace(',', '.'));
    }

    if (value.indexOf('.') !== -1) {
      let subValue = value.slice(0, value.indexOf('.') + 3);
      this.input.val(subValue);
    }
  }

  onKeypress(event) {

    let isNotDigit = /[^\d.,]/.test(String.fromCharCode(event.charCode));

    if (isNotDigit) {
      event.preventDefault();
      return false;
    }

    let value = this.input.val();
    let idDot = /[.,]/.test(String.fromCharCode(event.charCode));

    if ((value.indexOf('.') !== -1 || value.indexOf(',') !== -1) && idDot) {
      event.preventDefault();
      return false;
    }
  }

}

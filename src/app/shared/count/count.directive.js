import './count.style';

import { CountController } from './count.controller';
import countView from './count.view.html';

export class CountDirective {

  static createInstance() {
    return new CountDirective();
  }

  constructor($scope) {
    this.restrict = 'E';
    this.replace = true;
    this.template = countView;
    this.controller = CountController;
    this.controllerAs = 'ctrl';
    this.scope = {
      value: '=',
      min: '@',
      max: '@',
      change: '&'
    }
    this.bindToController = true;
  }

  link(scope, element, attrs, ctrl) {
    element.find('input')
      .on('keypress', this.onKeypress.bind(ctrl))
      .on('input', this.onInput.bind(ctrl))
  }

  onInput(event) {

    let target = event.target;
    let newValue = target.value;
    let dotIndex = newValue.indexOf('.')

    if (event.data === ',') {
      newValue = newValue.replace(',', '.');
      target.value = newValue;
    }

    if (parseInt(newValue) > this.max) {
      target.value = newValue.slice(0, -1);
      return false;
    }

    if (parseInt(newValue) < this.min) {
      target.value = this.min;
      return false;
    }

    if (newValue.toString().indexOf('.') !== -1) {
      newValue = newValue.slice(0, newValue.indexOf('.') + 3);
      target.value = newValue;
    }

    this.inputValue = newValue;
  }

  onKeypress(event) {
    event.stopPropagation();

    let isNotDigit = /[^\d.,]/.test(String.fromCharCode(event.charCode));

    if (isNotDigit) {
      event.preventDefault();
      return false;
    }

    let value = this.value.toString();
    let isDot = /[.,]/.test(String.fromCharCode(event.charCode));

    if ((value.indexOf('.') !== -1 || value.indexOf(',') !== -1) && isDot) {
      event.preventDefault();
    }
  }

}

CountDirective.$inject = [ '$scope' ];

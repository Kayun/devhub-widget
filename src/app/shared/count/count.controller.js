export class CountController {

  constructor($scope) {
    this.$scope = $scope;

    $scope.$watch(() => this.inputValue, (newValue, oldValue) => {
      if (newValue === oldValue) return;
      newValue = newValue.toString();

      if (typeof this.inputValue === 'undefined') {
        this.inputValue = this.value;
      }

      if (/[.,]$/.test(newValue)) return;

      let digits = newValue.split('.')[1];

      if (digits && digits.length > 2) return;

      this.value = this.inputValue;
      this.change();
    });


    $scope.$watch(() => this.value, newValue => this.inputValue = newValue);
  }

  init() {
    if (this.value > this.max) {
      this.value = this.max;
    }
    if (this.value < this.min) {
      this.value = this.min;
    }
  }

  incr() {
    this.value++;
  }

  decr() {
    this.value--
  }

}

CountController.$inject = [ '$scope' ]

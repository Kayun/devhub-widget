export class CountController {

  constructor($scope) {
    this.$scope = $scope;
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
    this.value++
  }

  decr() {
    this.value--
  }

}

CountController.$inject = [ '$scope' ]

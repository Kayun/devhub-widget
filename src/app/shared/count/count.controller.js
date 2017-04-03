export class CountController {

  constructor() {
  }

  init() {
    if (this.value > this.max) {
      this.value = this.max;
    }
    if (this.value < this.min) {
      this.value = this.max;
    }
  }

  incr() {
    this.value++;
  }

  decr() {
    this.value--;
  }

}

export class RatioController {
  constructor($scope, ratioService) {
    this.$scope = $scope;
    this.ratioService = ratioService;
    this.items = [];
    this.optionsList = [1, 2, 3, 4, 5];
    this.currentOption = null;
  }

  getOptions(option) {
    this.ratioService.getData(option).then(
      data => this.$scope.$apply(() => this.items = data.Items),
      response => console.log(response.statusText)
    );
  }

  get sliderOptions() {
    return {
      min: 0,
      max: 100,
      floor: 0,
      ceil: 100,
      step: 0.01,
      precision: 2
    }
  }
}

RatioController.$inject = ['$scope', 'ratioService']

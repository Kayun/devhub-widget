export class RatioController {
  constructor($scope, ratioService) {
    this.$scope = $scope;
    this.ratioService = ratioService;
    this.items = [];
    this.optionsList = [1, 2, 3, 4, 5];
    this.currentOption = null;

    this.sliderOptions = {
      floor: 0,
      ceil: 100,
      step: 0.01,
      precision: 2,
      interval: 0,
      onChange: this.listenerHandler.bind(this),
      onEnd: this.listenerHandler.bind(this)
    };
  }

  getOptions(option) {
    this.ratioService.getData(option).then(
      data => {
        this.items = data.Items.map(item => {
          item.ID = this.idGenerate();
          return item;
        });

        this.$scope.$digest(() => {
          this.items = this.dataRatio(data.Items);
        });
      },
      response => console.log(response.statusText)
    );
  }

  get MAX_SUM() {
    return 100;
  }

  dataRatio(id = null) {
    let sum = this.items.reduce((sum, item) => this.round(item.Percent + sum, 2), 0);
    let diff = this.round(this.MAX_SUM - sum, 2);
    let items = [];

    if (this.items.length > 1) {

      if (id) {
        items = this.items.filter(item => item.ID !== id);
      }

      if (diff > 0) {
        let min = this.min(items);
        let value = this.round(min.Percent + diff, 2);
        min.Percent = value < 0 ? 0: value;
      } else {
        let max = this.max(items);
        let value = this.round(max.Percent + diff, 2);
        max.Percent = value < 0 ? 0: value;
      }
    }

    return items;
  }

  listenerHandler(id) {
    this.$scope.$applyAsync(() => this.dataRatio(id));
  }

  max(array) {
    return array.reduce((prev, item) =>  item.Percent > prev.Percent ? item : prev);
  }

  min(array) {
    return array.reduce((prev, item) =>  item.Percent < prev.Percent ? item : prev);
  }

  idGenerate(idLength = 4) {
    const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';

    let rtn = '';
    for (let i = 0; i < idLength; i++) {
      rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
  }

  extendOptions(obj) {
    return angular.extend(this.sliderOptions, obj);
  }

  round(num, precision) {
    return Math.ceil(num * 10 ** precision) / 10 ** precision;
  }
}

RatioController.$inject = ['$scope', 'ratioService']

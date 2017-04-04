export class RatioService {
  constructor($http) {
    this.$http = $http;
  }

  getData(amount) {
    return new Promise((resolve, reject) => {
      this.$http.get(`/data/items-${amount}.json`).then(
        response => resolve(response.data),
        response => reject(response)
      )
    });
  }
}

RatioService.$inject = ['$http']

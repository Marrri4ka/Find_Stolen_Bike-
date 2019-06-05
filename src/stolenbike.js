export class StolenBike {
  findStolenBike(city) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://cors-anywhere.herokuapp.com/https://bikeindex.org/api/v3/search?page=1&per_page=25&location='+city+'&distance=10&stolenness=stolen';
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

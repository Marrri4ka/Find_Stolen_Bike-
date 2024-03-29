export class StolenBike {
  findStolenBike(city, page, manufacturer) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://cors-anywhere.herokuapp.com/https://bikeindex.org/api/v3/search?page='+page+'&per_page=50&location='+city+'&distance=10&stolenness=stolen&manufacturer='+manufacturer+'';
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

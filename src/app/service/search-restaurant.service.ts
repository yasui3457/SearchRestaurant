import { Injectable } from '@angular/core';

import { Restaurant } from '../model/Restaurant';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchRestaurantService {

  hotPepperUrl = "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=34e8a3e2733646f441eb24a428092fec&pref=PREF26&hit_per_page=20&until_morning=0&freeword="
  gurunabiUrl = "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=34e8a3e2733646f441eb24a428092fec&pref=PREF26&hit_per_page=20&freeword="

  constructor() { }

  getHotPepperRestaurant(keyword: string): Observable<Restaurant[]> {
    const apiCall = fetch(this.hotPepperUrl +  encodeURI(keyword), {
      mode: 'cors'
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        var restaurantList: Restaurant[] = [];
        var list: any[] = Object.keys(myJson)
          .filter(key => key.match("rest"))
          .map(key => myJson[key]);
        for(var i=0; i<list[0].length; i++) {
          var restaurant = new Restaurant();
          restaurant.name = list[0][i].name;
          restaurant.memo = list[0][i].pr.pr_short;
          restaurant.address = list[0][i].address;
          restaurant.url = list[0][i].url;
          restaurantList.push(restaurant);
        }
        return restaurantList;
      });

      return from(apiCall);
  }

  getGurunabiRestaurant(keyword: string): Observable<Restaurant[]> {
    const apiCall = fetch(this.gurunabiUrl +  encodeURI(keyword), {
      mode: 'cors'
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        var restaurantList: Restaurant[] = [];
        var list: any[] = Object.keys(myJson)
          .filter(key => key.match("rest"))
          .map(key => myJson[key]);
        for(var i=0; i<list[0].length; i++) {
          var restaurant = new Restaurant();
          restaurant.name = list[0][i].name;
          restaurant.memo = list[0][i].pr.pr_short;
          restaurant.address = list[0][i].address;
          restaurant.url = list[0][i].url;
          restaurantList.push(restaurant);
        }
        return restaurantList;
      });

      return from(apiCall);
  }
}

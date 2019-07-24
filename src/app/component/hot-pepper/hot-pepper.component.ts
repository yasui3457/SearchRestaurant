import { Component, OnInit } from '@angular/core';

//Model
import { Restaurant } from '../../model/Restaurant';
//Service
import { SearchRestaurantService } from '../../service/search-restaurant.service';

@Component({
  selector: 'app-hot-pepper',
  templateUrl: './hot-pepper.component.html',
  styleUrls: ['./hot-pepper.component.css']
})
export class HotPepperComponent implements OnInit {

  keyword: string = "";
  restaurants: Restaurant[] = [];

  constructor(private searchRestaurantService: SearchRestaurantService) { }

  ngOnInit() {
  }

  searchRestaurant() {
    console.log("search!!!")
    this.searchRestaurantService.getHotPepperRestaurant(this.keyword)
      .subscribe(restaurantList => {
        this.restaurants = restaurantList;
        console.log(this.restaurants);
      });
  }

  jumpUrl(url: string) {
    console.log(url);
    location.href = url;
  }

}

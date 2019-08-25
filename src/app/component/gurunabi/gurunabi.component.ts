import { Component, OnInit } from '@angular/core';

//Model
import { Restaurant } from '../../model/Restaurant';
//Service
import { SearchRestaurantService } from '../../service/search-restaurant.service';

@Component({
  selector: 'app-gurunabi',
  templateUrl: './gurunabi.component.html',
  styleUrls: ['./gurunabi.component.css']
})
export class GurunabiComponent implements OnInit {

  keyword: string = "";
  restaurants: Restaurant[] = [];

  constructor(private searchRestaurantService: SearchRestaurantService) { }

  ngOnInit() {
  }

  searchRestaurant() {
    console.log("search!!!")
    this.searchRestaurantService.getGurunabiRestaurant(this.keyword)
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

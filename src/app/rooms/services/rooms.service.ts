import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "biug",
      amenities: "pool",
      price: 1000,
      checkinTime: new Date('11-nov-2023'),
      checkoutTime: new Date(),
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    },
    {
      roomNumber: 2,
      roomType: "small",
      amenities: "Windows",
      price: 1000000,
      checkinTime: new Date('12-nov-2023'),
      checkoutTime: new Date(),
      rating: 3.5,
      image: "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    },
    {
      roomNumber: 3,
      roomType: "medium",
      amenities: "Church",
      price: 100000000,
      checkinTime: new Date('25-dec-2023'),
      checkoutTime: new Date(),
      rating: 4.8321321,
      image: "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    }
  ]
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log('RoomService initialize');
    console.log(this.config.apiEndpoint);

  }

  getRooms() {
    return this.roomList;
  }
}

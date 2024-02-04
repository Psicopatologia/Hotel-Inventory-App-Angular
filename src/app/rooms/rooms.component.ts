import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelName: string = "Hilton Hotel";
  numberOfRooms: number = 4545;

  hideRooms: boolean = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "biug",
      amenities: "pool",
      price: 1000,
      checkinTime: new Date('11-nov-2023'),
      checkoutTime: new Date(),
      image: "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    },
    {
      roomNumber: 2,
      roomType: "small",
      amenities: "Windows",
      price: 1000000,
      checkinTime: new Date('12-nov-2023'),
      checkoutTime: new Date(),
      image: "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    },
    {
      roomNumber: 3,
      roomType: "medium",
      amenities: "Church",
      price: 100000000,
      checkinTime: new Date('25-dic-2023'),
      checkoutTime: new Date(),
      image: "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    }
  ]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}

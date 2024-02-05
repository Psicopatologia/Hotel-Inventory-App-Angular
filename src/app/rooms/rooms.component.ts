import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName: string = "Hilton Hotel";
  numberOfRooms: number = 4545;
  hideRooms: boolean = false;
  selectedRoom!: RoomList;
  title: string = 'Room List'
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() { }

  ngAfterViewInit(): void {
    this.headerChildrenComponent.last.title = 'last title'
    this.headerComponent.title = "Rooom View";
    /* this.headerChildrenComponent.forEach((item, index) => {
      item.title = index.toString();
    }) */
  }

  ngAfterViewChecked(): void {

  }

  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.roomList = [
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
  }

  /* ngDoCheck(): void {
    console.log('on change is called');
  } */

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List'
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe',
      amenities: 'Air Conditioner',
      price: 100,
      checkinTime: new Date('10-jul-2023'),
      checkoutTime: new Date(),
      rating: 2.5,
      image: "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    }

    // this.roomList.push(room)
    this.roomList = [...this.roomList, room]
  }
}

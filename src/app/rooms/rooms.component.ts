import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

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

  constructor(@SkipSelf() private roomsService: RoomsService) {

  }

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
    this.roomList = this.roomsService.getRooms()
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

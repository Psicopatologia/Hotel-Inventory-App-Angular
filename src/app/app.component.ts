import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello world from inline template</h1>',
  styleUrl: './app.component.scss'
  // styles: `h1 { color: red }`
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;
  role = 'Admin';

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hotel"
    this.loggerService?.log("casa")
    this.localStorage.setItem("name", "Hiton Hotel")
  }

  constructor(@Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage) {

  }

  /*  @ViewChild('user', { read: ViewContainerRef }) vcr !: ViewContainerRef;
 
   ngAfterViewInit(): void {
     const componentRef = this.vcr.createComponent(RoomsComponent);
     componentRef.instance.numberOfRooms = 50;
   } */
}

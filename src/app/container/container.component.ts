import { AfterContentInit, Component, ContentChild, Host, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  providers: [RoomsService]
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  ngAfterContentInit(): void {
    this.employee.empName = 'Jesus'
  }

  constructor(@Host() roomService: RoomsService) {

  }
}

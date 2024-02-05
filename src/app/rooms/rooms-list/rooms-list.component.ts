import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = ''

  @Output() selectedRoom = new EventEmitter<RoomList>()

  ngOnDestroy(): void {
    console.log('destroyed');

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }

  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }
}

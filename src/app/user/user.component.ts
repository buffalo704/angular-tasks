import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => `assets/images/${this.selectedUser.avatar()}`);
  // @Input({ required: true }) user!: User;
  // @Output() select = new EventEmitter<string>();

  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  // get imagePath(): string {
  //   return `assets/users/${this.user.avatar}`;
  // }

  onSelectUser(): void {
    // this.selectedUser = DUMMY_USERS.find(user => user.id === userId) || this.selectedUser;
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // console.log('clicked');
    this.select.emit(this.user().id);
  }
}

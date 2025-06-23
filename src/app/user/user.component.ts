import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

type User = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => `assets/images/${this.selectedUser.avatar()}`);
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output();
  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser(): void {
    // this.selectedUser = DUMMY_USERS.find(user => user.id === userId) || this.selectedUser;
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // console.log('clicked');
    this.select.emit(this.user.id);
  }
}

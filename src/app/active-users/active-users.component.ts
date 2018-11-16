import {Component, OnInit} from '@angular/core';
import {CounterService} from '../service/counter.service';
import {UsersService} from '../service/users.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
    activeUsers: string[] = [];

    ngOnInit() {
        this.activeUsers = this.usersService.activeUsers;
    }

    constructor(private counterService: CounterService, private usersService: UsersService) {}

    onSetToInactive(id: number) {
      this.usersService.onSetToInactive(id);
      this.counterService.onClick();
    }
}

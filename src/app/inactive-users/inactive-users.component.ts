import {Component, OnInit } from '@angular/core';
import {CounterService} from '../service/counter.service';
import {UsersService} from '../service/users.service';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
    inactiveUsers: string[] = [];

    ngOnInit() {
        this.inactiveUsers = this.usersService.inactiveUsers;
    }

    constructor(private counterService: CounterService, private usersService: UsersService) {
    }

    onSetToActive(id: number) {
        this.usersService.onSetToActive(id);
        this.counterService.onClick();
    }
}

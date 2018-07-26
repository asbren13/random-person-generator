import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  randomUsers: any;
  randomUsersUrl = 'https://randomuser.me/api/?results=500';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRandomUsers();
  }

  // Read all REST Items
  getRandomUsers(): void {
    this.randomUsersServiceGetRandomUsers()
      .subscribe(
        randomUsers => {
          this.randomUsers = randomUsers.results;
          console.log(this.randomUsers);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  randomUsersServiceGetRandomUsers() {
    return this.http
      .get<any[]>(this.randomUsersUrl)
      .pipe(map(data => data));
  }
}
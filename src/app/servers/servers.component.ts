import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showPassword = false;
  toggleArray = [];
  toggleContor = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
  onToggleDetails() {
    this.showPassword = !this.showPassword;
    this.toggleContor = this.toggleContor + 1;
    this.toggleArray.push(new Date());
  }
}

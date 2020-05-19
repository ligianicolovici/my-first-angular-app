import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'server';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }
  onUpdateName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}

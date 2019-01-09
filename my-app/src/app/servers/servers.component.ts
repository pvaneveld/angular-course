import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewSever: boolean = false;
  serverCreationStatus: string = 'no server was created';
  serverName: string = '';
  constructor() {

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created, name is: ' + this.serverName;
  }

  // onUpdateServerName(input: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}

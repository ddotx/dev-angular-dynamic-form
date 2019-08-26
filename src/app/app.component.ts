import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title='Angular on AWS Serverless'

  events: string[] = [];
  opened: boolean;

  links = [
    { path: '/', icon: 'home', title: 'Home'},
    { path: '/user', icon: 'face', title: 'List'},
    { path: '/adduser', icon: 'work', title: 'Add'},
    { path: '/test', icon: 'work', title: 'Test'},
  ]
}
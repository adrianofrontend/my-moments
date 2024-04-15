import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesService } from '../../services/messages.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent implements OnInit {
 
  faTimes = faTimes;

  constructor(public messageService: MessagesService){}

  ngOnInit(){
    
  }
}

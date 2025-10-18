import { Component, ElementRef, ViewChild } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  standalone: true,
  imports: [],
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css'
})
export class MessageEdit {
  @ViewChild("subject") subjectRef!: ElementRef;
  @ViewChild("msgText") msgTextRef!: ElementRef;
  currentSender: string = "1";  // Contact ID - will be looked up in ContactService

  constructor(private messageService: MessageService) {}

  onMessagesend() {
    const subject = this.subjectRef.nativeElement.value;
    const msgText = this.msgTextRef.nativeElement.value;

    const newMessage = new Message(
      Date.now().toString(),
      subject,
      msgText,
      this.currentSender
    );

    this.messageService.addMessage(newMessage);
    this.onClear();
  }

  onClear() {
    this.subjectRef.nativeElement.value = "";
    this.msgTextRef.nativeElement.value = "";
  }
}

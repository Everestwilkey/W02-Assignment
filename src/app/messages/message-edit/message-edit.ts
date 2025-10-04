import {Component, ElementRef, EventEmitter, Output, viewChild, ViewChild} from '@angular/core';
import {Message} from '../message.model';

@Component({
  selector: 'cms-message-edit',
  imports: [],
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css'
})
export class MessageEdit {
  @ViewChild("subject") subjectRef!: ElementRef;
  @ViewChild("msgText") msgTextRef!: ElementRef;  // Fix: uppercase V
  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender: string = "Everest Wilkey";

  onMessagesend(){
    const subject = this.subjectRef.nativeElement.value;
    const msgText = this.msgTextRef.nativeElement.value;

    const newMessage = new Message(
      Date.now().toString(),
      subject,
      msgText,
      this.currentSender,
    )
    this.addMessageEvent.emit(newMessage);
    this.onClear();
  }
  onClear(){
    this.subjectRef.nativeElement.value = "";
    this.msgTextRef.nativeElement.value = "";
  }
}

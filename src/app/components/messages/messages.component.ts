import {Component, Input, OnInit} from '@angular/core';
import {Messages} from '../../app.component';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

    @Input() message: Messages;

    textColor: string;
    bgColor: string;

    msgColors = {
        bgColor: '',
        textColor: ''
    };

    constructor() {
    }

    ngOnInit(): void {
        this.setColors();
    }

    setColors() {
        const messageColors: { [key: string]: string } = {
            success: '#4caf50',
            error: '#e53935',
            info: '#2196f3'
        };
        this.msgColors.bgColor = messageColors[this.message.type];
        this.msgColors.textColor = 'white';
    }
}

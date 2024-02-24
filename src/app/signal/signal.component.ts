import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent implements OnInit {

  firstName = signal('Rohit');
  lastName = signal('Kumar');
  fullname = signal('');
  ngOnInit(): void {

  }

  handleFullName(fName: any, lName: any): void {
    console.log('test');

    console.log(fName.value, lName.value);
    this.fullname.set(fName.value + lName.value);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  title: string = 'Learning how Data Binding works in Angular';
  paraColor: string = 'blue';
  btnText: string = 'Hide Details';
  classUserDetails: string = 'show';
  users = [
    { name: 'User1', age: 30, role: 'Developer', organization: 'TechCorp' },
    { name: 'User2', age: 25, role: 'Designer', organization: 'Creative Inc.' },
    { name: 'User3', age: 35, role: 'Manager', organization: 'Business Solutions' }
  ];

  onToggleBtnClicked() {
    if (this.btnText === 'Show Details') {
      this.btnText = 'Hide Details';
      this.classUserDetails = 'show';
    } else {
      this.btnText = 'Show Details';
      this.classUserDetails = 'hide';
    }
  }
}

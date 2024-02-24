import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  allUsers: any = [];
  // searchText: FormControl = new FormControl('');
  profileForm: any;
  filteredData: any;
  showData: boolean = false;
  showDataValue: string = 'hide';
  constructor(private userService: UserService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      searchText: ['']
    });

    this.userService.getUser().then(item => {
      // console.log('item: ', item);
      this.allUsers = item;
      this.filteredData = item;
    });
  }

  displayList(data: string): void {
    this.showData = !this.showData;
    console.log('this.showData: ', this.showData);

    if (data == 'hide') {
      this.showDataValue = 'show';
    } else {
      this.showDataValue = 'hide';
    }
  }


  searchUser(data: any): void {
    console.log(data.value, 'entered value: ',)
    this.filteredData = this.allUsers.filter((item: any) => {
      return item.firstName.toLowerCase().includes(data.value.toLowerCase()) || item.lastName.toLowerCase().includes(data.value.toLowerCase())
    });

    console.log('This Filtered Data: ', this.filteredData);
  }


}

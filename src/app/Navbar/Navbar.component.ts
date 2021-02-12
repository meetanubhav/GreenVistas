import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {

  images = [1044, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  contactNumber: string = "+91 98765 43210";
  godrejImagePath = "./ass";

  constructor(
    // private fb: FormBuilder
  ) { }

  // ContactForm = this.fb.group({
  //   Name: ['', [Validators.required]],
  //   Mobile: ['', [Validators.required]],
  //   Email: ['', [Validators.required]]

  // });
  ngOnInit() {
  }

}

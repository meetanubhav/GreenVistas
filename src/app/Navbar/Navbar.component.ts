import { Component, HostListener, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {

  images = [1044, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  contactNumber: string = "+91 98765 43210";
  godrejImagePath = "./ass";
  safeURL: SafeResourceUrl;
  currentImgIndex: number = 1;
  unitPlanImhURL = "./assets/images/unit-plan-" + this.currentImgIndex + ".jpg";

  constructor(
    private _sanitizer: DomSanitizer
  ) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/tlLb_rqNnBU");
  }

  // ContactForm = this.fb.group({
  //   Name: ['', [Validators.required]],
  //   Mobile: ['', [Validators.required]],
  //   Email: ['', [Validators.required]]

  // });
  ngOnInit() {
  }
  changeUnitPlanImg() {
    if (this.currentImgIndex == 0) {
      this.currentImgIndex = 3;
      // this.unitPlanImhURL = "./assets/images/unit-plan-" + this.currentImgIndex + ".jpg";
    }
    else if (this.currentImgIndex == 3) {
      this.currentImgIndex = 1;
      // this.unitPlanImhURL = "./assets/images/unit-plan-" + this.currentImgIndex + ".jpg";
    }
    else {
      this.currentImgIndex += 1;
      // this.unitPlanImhURL = "./assets/images/unit-plan-" + this.currentImgIndex + ".jpg";
    }
    this.unitPlanImhURL = "./assets/images/unit-plan-" + this.currentImgIndex + ".jpg";
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';


@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class NavbarComponent implements OnInit {

  enquiryForm = this.fb.group({
    Name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
    email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
    phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
  });
  isNotValid: boolean = false;

  // images = [1044, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [1, 2, 3].map((n) => `./assets/images/cal/${n}.jpg`);
  unitPlanImages = [1, 2, 3].map((m) => `./assets/images/unit-plan-${m}.webp`)
  contactNumber: string = "+91 98765 43210";
  godrejImagePath = "./ass";
  safeURL: SafeResourceUrl;
  currentImgIndex: number = 1;
  unitPlanImhURL = "./assets/images/unit-plan-" + this.currentImgIndex + ".jpg";
  deviceInfo:any;
  isMobile = false;

  constructor(
    private _sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private http: HttpClient,
    private deviceService : DeviceDetectorService,
    config: NgbModalConfig, private modalService: NgbModal) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/tlLb_rqNnBU"); // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
  }
  open(content: any) {
    this.modalService.open(content);
  }
  onSubmit() {
    // console.log(this.enquiryForm);
    if(this.enquiryForm.valid){
      var postFormData = {
        projectId: 2387,
        name: this.enquiryForm.get('Name')?.value,
        email: this.enquiryForm.get('email')?.value,
        phoneNumber: this.enquiryForm.get('phoneNumber')?.value,
      }
      this.http.post('https://godrej-greenvista.co/project_inquiry.php', postFormData).subscribe(data => {
      })
    }
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

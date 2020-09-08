import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  iconFacebook = "assets/icon/facebook.png";
  iconInstagram = "/assets/icon/instagram.png"
  iconTwitter = "/assets/icon/twitter.png"
  constructor() { }

  ngOnInit() {
  }
  
  onMouseInstagram() {
    this.iconInstagram = "assets/icon/instagramH.png"
  }

  onMouseInstagramOut() {
    this.iconInstagram = "assets/icon/instagram.png"
  }

  onMouseFacebook() {
    this.iconFacebook = "assets/icon/facebookH.png"
  }

  onMouseFacebookOut() {
    this.iconFacebook = "assets/icon/facebook.png"
  }

  onMouseTwitter() {
    this.iconTwitter = "assets/icon/twitterH.png"
  }

  onMouseTwitterOut() {
    this.iconTwitter = "assets/icon/twitter.png"
  }
  
}

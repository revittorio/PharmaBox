import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'page-login',
  templateUrl: 'home.html'
})

export class HomePage {
  //public userImage = "empty";
  showErrorMessageCredentials = false
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private firebaseService: FirebaseService) {
  }

  manageBox() {
    // this.navCtrl.setRoot(Tasks);
    this.firebaseService.addUser({
      name: 'Vittorio',
      surname: 'Reginato',
      age: 44
    });
  }
  therapy() {
    // this.navCtrl.setRoot(Tasks);
  }
  searchPage() {
    // this.navCtrl.setRoot(Tasks);
  }
}

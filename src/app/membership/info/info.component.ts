import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit {
  title = 'line-auth-angular';
  idToken = '';
  displayName = '';
  pictureUrl = '';
  statusMessage = '';
  userId = '';

  ngOnInit(): void {
    this.initLine();
  }

  initLine(): void {
    liff.init(
      { liffId: '2000158591-AOGvaVXZ' },
      () => {
        if (liff.isLoggedIn()) {
          this.runApp();
        } else {
          liff.login();
        }
      },
      (err) => console.error(err)
    );
  }
  runApp(): void {
    const idToken = liff.getIDToken();
    if (idToken) this.idToken = idToken;
    liff
      .getProfile()
      .then((profile) => {
        console.log(profile);
        this.displayName = profile.displayName;
        this.userId = profile.userId;
        if (profile.pictureUrl) this.pictureUrl = profile?.pictureUrl;
        if (profile.statusMessage) this.statusMessage = profile?.statusMessage;
      })
      .catch((err) => console.error(err));
  }

  logout(): void {
    liff.logout();
    window.location.reload();
  }
}

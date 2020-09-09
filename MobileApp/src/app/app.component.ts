import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;

  // configurationSubscription: any;
  bottomMenu = [];
  // public appConfiguration;
  // userImage: string;
  // userSubscription: any;
  // userLocalizationSubscription: any;
  // userLogoutSubscription: any;

  public firebasePlugin: any;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    //public configurationProvider: ConfigurationProvider
  ) {
    this.initializeApp();

  }

  ngOnInit() {
  }

  initializeApp() {
    let _self = this;
    this.platform.ready().then(() => {
      _self.firebasePlugin = (<any>window).FirebasePlugin;
      _self.firebasePlugin.onMessageReceived(_self.onMessageReceived.bind(this));
      _self.firebasePlugin.subscribe("Pharmabox");

      // this.firebasePlugin.getToken((token: string) => {
      //   _self.FireBaseToken.emit(token);
      // });

      
    });
  }

  onMessageReceived(message: any){
    //this.PushNotification.emit(message);
  }

  setNavigationMenu() {
    this.bottomMenu = [{
      id: "Settings",
      title: "Settings",
      //routingKey: RoutingPage.Settings,
      icon: "settings"
    },
    {
      id: "usersettings",
      title: "User Settings",
      //routingKey: RoutingPage.UserSettings,
      icon: "hammer"
    },
    {
      id: "logout",
      title: "Logout",
      //routingKey: RoutingPage.Logout,
      icon: "exit"
    }
    ];
  }

  openPage(group) {
    this.menu.close();
/*
    switch (group.routingKey) {
      case RoutingPage.Tasks:
        this.nav.setRoot(Tasks); break;
      case RoutingPage.Debates:
        this.nav.setRoot(Debates); break;
      case RoutingPage.Settings:
        this.nav.setRoot(Settings); break;
      case RoutingPage.UserSettings:
        this.nav.setRoot(UserSettings); break;
      case RoutingPage.Dashboards:
        this.orchestratorProvider.taskId = null;
        this.nav.setRoot(Dashboards); break;
      case RoutingPage.Logout:
        {
          this.bottomMenu[2].title = this.localizationProvider.localization.MenuTitleLogin;
          this.eventDispatcherProvider.disconnect();
          this.storageProvider.deleteUser();
          this.storageProvider.loggedUser = { username: "", password: "" }
          this.nav.setRoot(HomePage); break;
        }
    }
  */
  }
}


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from "./component/user/user.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent]
})

export class AppComponent {
  // title = 'web2081';
  data = {
    name: "chinhpd5",
    age: 20,
    gender: false,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
    description: "Yêu màu tím",
    linkFB: "https://google.com"
  }

  renderGender():string{
    return this.data.gender ? "Nam": "Nữ"
  }
}

import { Component } from '@angular/core';
import { HeaderComponent } from "../../headers/header/header.component";
import { SongListComponent } from "./song-list/song-list.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SongListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

import { Component } from '@angular/core';
import { songs_list } from '../../../songs-list';

// draws a random ID from the songs list.
const randomIndex = Math.floor(Math.random() * songs_list.length)

@Component({
  selector: 'app-songs',
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  // will be available to the template (the property and its value).
  selectedSong = songs_list[randomIndex]
}

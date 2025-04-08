import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Song } from '../../../song.model';

@Component({
  selector: 'app-song-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {
  songs: Song[] = [
    {
      id: 1,
      title: '',
      artist: '',
      file: '',
      coverUrl: ''
    },
    {
      id: 2,
      title: '',
      artist: '',
      file: ''
    },
    {
      id: 3,
      title: '',
      artist: '',
      file: ''
    }
  ];
}

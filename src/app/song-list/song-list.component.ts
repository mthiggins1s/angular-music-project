import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Songs } from '../../../song.model';

@Component({
  selector: 'app-song-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs = Songs
  constructor() { }

  ngOnInit(): void {
  }
}

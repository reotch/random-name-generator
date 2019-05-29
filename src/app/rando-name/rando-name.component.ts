import { Component, OnInit } from '@angular/core';
import { NamesList } from '../models/names-list';

@Component({
  selector: 'app-rando-name',
  templateUrl: './rando-name.component.html',
  styleUrls: ['./rando-name.component.css']
})
export class RandoNameComponent implements OnInit {

  constructor() { }

  randos: NamesList[] = [
    {
      first_name: 'Wolfgang',
      last_name: 'Mozart',
      id: 1,
    },
    {
      first_name: 'Ludwig',
      last_name: 'Beethoven',
      id: 2,
    },
    {
      first_name: 'Johann',
      last_name: 'Bach',
      id: 3, 
    },
    {
      first_name: 'Igor',
      last_name: 'Stravinsky',
      id: 4,
    },
    {
      first_name: 'Joseph',
      last_name: 'Hayden',
      id: 5,
    },
    {
      first_name: 'Richard',
      last_name: 'Strauss',
      id: 6,
    },
    {
      first_name: 'Camille',
      last_name: 'Saint-Saëns',
      id: 7,
    },
    {
      first_name: 'Leonard',
      last_name: 'Bernstein',
      id: 8,
    },
    {
      first_name: 'Edgar',
      last_name: 'Varèse',
      id: 9,
    },
    {
      first_name: 'Wendy',
      last_name: 'Carlos',
      id: 10,
    },
    {
      first_name: 'Antonio',
      last_name: 'Vivaldi',
      id: 11,
    },
    {
      first_name: 'Frédérick',
      last_name: 'Chopin',
      id: 12,
    },
    {
      first_name: 'Claude',
      last_name: 'Debussy',
      id: 13,
    },
    {
      first_name: 'Arnold',
      last_name: 'Schoenberg',
      id: 14,
    },
    {
      first_name: 'Gustav',
      last_name: 'Mahler',
      id: 15,
    },
    {
      first_name: 'Giacomo',
      last_name: 'Puccini',
      id: 16,
    },
    {
      first_name: 'Antonin',
      last_name: 'Dvořák',
      id: 17,
    },
    {
      first_name: 'Giuseppe',
      last_name: 'Verdi',
      id: 18,
    },
  ]

  composer_first: string;
  composer_last: string;
  // composer: string;
  
  // Write the random name function
  pickRando() {
    this.composer_first = this.randos[Math.floor(Math.random() * this.randos.length)].first_name;
    this.composer_last = this.randos[Math.floor(Math.random() * this.randos.length)].last_name;
    console.log(this.composer_first + ' ' + this.composer_last);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTrendringMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendringMovies() {
    this.http
      .get('http://localhost:4200/assets/data//trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
      });
  }

  getTheatreMovies() {
    this.http
      .get('http://localhost:4200/assets/data//theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
      });
  }

  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data//popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
      });
  }
}

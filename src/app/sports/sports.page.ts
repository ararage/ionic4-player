import { Component, OnInit } from "@angular/core";

import { Plugins } from "@capacitor/core";

import { PlatziMusicService } from "../services/platzi-music.service";

const { Geolocation } = Plugins;

@Component({
  selector: "app-sports",
  templateUrl: "./sports.page.html",
  styleUrls: ["./sports.page.scss"]
})
export class SportsPage {
  currentCenter: any;
  coordinates: any[] = [];
  defaultZoon = 14;

  searching: boolean;
  searchTerm: any;
  items: any;
  audioSong: any;

  constructor(private musicService: PlatziMusicService) {}

  ionViewDidEnter() {
    this.getCurrentPosition();
    this.watchPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 5000
    });
    this.currentCenter = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    };
  }
  watchPosition() {
    Geolocation.watchPosition(
      { enableHighAccuracy: true, timeout: 5000 },
      position => {
        this.currentCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.coordinates.push({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      }
    );
  }

  async setFilteredItems() {
    this.searching = true;
    if (this.searchTerm) {
      const response: any = await this.musicService.searchTracks(
        this.searchTerm
      );
      this.items = response.tracks.items.filter(e => e.preview_url);
    } else {
      this.items = [];
    }
    this.searching = false;
  }

  play(song) {
    console.log(song);
    if (this.audioSong) {
      this.audioSong.pause();
    }
    const currentSong = this.items.filter(e => e.playing);
    if (currentSong[0]) {
      currentSong[0].playing = false;
    }
    song.playing = true;
    this.audioSong = new Audio(song.preview_url);
    this.audioSong.play();
  }
  pause(song) {
    this.audioSong.pause();
    song.playing = false;
  }
}

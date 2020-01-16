import { Component } from "@angular/core";
import { PlatziMusicService } from "../services/platzi-music.service";
import { ModalController } from "@ionic/angular";
import { SongsModalPage } from "../songs-modal/songs-modal.page";
import { SongsAlbumModalPage } from "../songs-album-modal/songs-album-modal.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  artists: any = [];
  songs: any = [];
  albums: any = [];
  song: {
    preview_url: string;
    playing: boolean;
    name: string;
  } = {
    preview_url: "",
    playing: false,
    name: ""
  };
  currentSong: HTMLAudioElement;
  newTime: any;

  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
  };

  emptyObject = obj => {
    if (obj)
      return Object.entries(obj).length === 0 && obj.constructor === Object;
    return true;
  };

  constructor(
    private musicService: PlatziMusicService,
    public modalController: ModalController
  ) {}

  async ionViewDidEnter() {
    try {
      let data: any = await this.musicService.getNewReleases();
      this.artists = this.musicService.getArtists();
      this.songs = data.albums.items.filter(e => e.type == "album");
      this.albums = data.albums.items.filter(e => e.type == "album");
    } catch (e) {
      console.error(e);
    }
  }

  async showSongs(artist) {
    const songs: any = await this.musicService.getArtistTopTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    });
    return this.showModalEvent(modal);
  }

  async showAlbumSongs(album) {
    const songs: any = await this.musicService.getAlbumTracks(album.id);
    const modal = await this.modalController.create({
      component: SongsAlbumModalPage,
      componentProps: {
        songs: songs.items,
        album: album.name
      }
    });
    return this.showModalEvent(modal);
  }

  showModalEvent(modal) {
    modal.onDidDismiss().then(dataReturned => {
      if (dataReturned.data) {
        this.song = dataReturned.data;
      }
      if (!this.emptyObject(this.currentSong)) {
        this.currentSong.pause();
        this.currentSong = new Audio();
        this.song.playing = false;
        this.newTime = 0;
      }
    });
    return modal.present();
  }

  play() {
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventListener("timeupdate", () => {
      this.newTime =
        (1 / this.currentSong.duration) * this.currentSong.currentTime;
    });
    this.song.playing = true;
  }
  pause() {
    this.currentSong.pause();
    this.song.playing = false;
  }

  parseTime(time: number) {
    if (time) {
      const partTime = parseInt(time.toString().split(".")[0], 10);
      let minutes = Math.floor(partTime / 60).toString();
      if (minutes.length == 1) {
        minutes = "0" + minutes;
      }
      let seconds = (partTime % 60).toString();
      if (seconds.length == 1) {
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    }
  }
}

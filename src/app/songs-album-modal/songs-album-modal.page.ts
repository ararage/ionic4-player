import { Component } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "app-songs-album-modal",
  templateUrl: "./songs-album-modal.page.html",
  styleUrls: ["./songs-album-modal.page.scss"]
})
export class SongsAlbumModalPage {
  songs: any[];
  album: string;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ionViewDidEnter() {
    this.songs = this.navParams.data.songs;
    this.album = this.navParams.data.album;
  }

  async selectSong(song) {
    await this.modalController.dismiss(song);
  }
}

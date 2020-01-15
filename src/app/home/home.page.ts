import { Component } from "@angular/core";
import { PlatziMusicService } from '../services/platzi-music.service';
import { ModalController } from '@ionic/angular';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {

  artists: any = [];
  songs : any = [];
  albums : any = []
  song = {};

  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed:400
  };

  constructor(private musicService: PlatziMusicService, public modalController: ModalController) {}

  async ionViewDidEnter(){
    try{
      let data : any = await this.musicService.getNewReleases();
      this.artists = this.musicService.getArtists();
      this.songs = data.albums.items.filter(e=>e.type=="album");
      this.albums = data.albums.items.filter(e=>e.type=="album");
    }catch(e){
      console.error(e);
    }
  }

  async showSongs(artist){
    const songs : any= await this.musicService.getArtistTopTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs:songs.tracks,
        artist: artist.name
      }
    });

    //let returnedData = await modal.onDidDismiss();
    //this.song = returnedData.data;
    return modal.present();
  }
}

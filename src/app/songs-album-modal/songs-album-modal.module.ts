import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongsAlbumModalPageRoutingModule } from './songs-album-modal-routing.module';

import { SongsAlbumModalPage } from './songs-album-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongsAlbumModalPageRoutingModule
  ],
  declarations: [SongsAlbumModalPage]
})
export class SongsAlbumModalPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongsAlbumModalPage } from './songs-album-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SongsAlbumModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsAlbumModalPageRoutingModule {}

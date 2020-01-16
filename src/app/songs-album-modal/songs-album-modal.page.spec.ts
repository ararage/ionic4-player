import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SongsAlbumModalPage } from './songs-album-modal.page';

describe('SongsAlbumModalPage', () => {
  let component: SongsAlbumModalPage;
  let fixture: ComponentFixture<SongsAlbumModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsAlbumModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SongsAlbumModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as dataArtists from "./artists.json";

const newReleases: string =
  "https://platzi-music-api.now.sh/browse/new-releases";

const API: string = "https://platzi-music-api.now.sh";

@Injectable({
  providedIn: "root"
})
export class PlatziMusicService {
  constructor(private http: HttpClient) {}

  getArtists() {
    return dataArtists.items;
  }

  getArtistTopTracks(artistId) {
    return this.http
      .get(`${API}/artists/${artistId}/top-tracks?country=MX`)
      .toPromise();
  }

  getNewReleases() {
    return this.http.get(`${API}/browse/new-releases`).toPromise();
  }

  getAlbumTracks(albumId) {
    return this.http
      .get(`${API}/albums/${albumId}/tracks?country=MX`)
      .toPromise();
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"]
})
export class IntroPage implements OnInit {
  slideOpt = {
    initialSlide: 0, // The first slide it`s the first one :v
    slidePreview: 1, // One Slide per View
    centeredSlides: true,
    speed: 400 // Delay between Slide Transition
  };

  slides = [
    {
      title: "Este es el titulo",
      subTitle: "Este es el subtitulo",
      description: "Aqui va la descripción 2",
      icon: "play"
    },
    {
      title: "Este es el titulo 2",
      subTitle: "Este es el subtitlo 2",
      description: "Aqui va la descripción 2",
      icon: "airplane"
    },
    {
      title: "Este es el titulo 2",
      subTitle: "Este es el subtitlo 2",
      description: "Aqui va la descripción 2",
      icon: "boat"
    }
  ];

  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {}

  finish() {
    console.log("FINISH");
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }
}

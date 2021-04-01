import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-taradio',
  templateUrl: './taradio.component.html',
  styleUrls: ['./taradio.component.css']
})
export class TaradioComponent implements OnInit {

	actions = [
		{name: 'write', icon: '../assets/img/writer-icon.svg', comment:'Nous écrire un message'},
		{name: 'record', icon: '../assets/img/voice-recorder-icon.svg', comment:'Enregistrer un message audio'},
		{name: 'file', icon: '../assets/img/send-audio-icon.svg', comment:'Nous envoyer un fichier'},
		{name: 'playlist', icon: '../assets/img/jukebox-icon.svg', comment:'Ecouter les pistes des autres utilisateurs'},

	];


	isHandset$= this.breakpointObserver.observe(Breakpoints.Handset)
	    .pipe(
	      map(result => result.matches)
	    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}

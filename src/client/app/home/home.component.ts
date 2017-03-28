import { Component, OnInit } from '@angular/core';
import { OmdbService, Omdb } from '../shared/omdb/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  errorMessage: string;
  items: Omdb[] = [];
  name: String;

  /**
   * Creates an instance of the HomeComponent with the injected
   * OmdbService.
   *
   * @param {OmdbService} omdbService - The injected OmdbService.
   */
  constructor(public omdbService: OmdbService) { }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    //this.getItems();
  }

  onTitleChange($event: any){
    let text = $event.target.value;
    this.omdbService.search(text).subscribe(
      items => this.items = items,
      error => console.log(error)
    );
  }

  rowClicked(item: any){
    console.log("clicked");
  }

}

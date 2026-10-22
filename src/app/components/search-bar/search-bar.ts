import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})

export class SearchBar implements OnChanges {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() autos: Auto[] = [];
  @Output() onSelectCar = new EventEmitter<Auto>();
  selectedAutos: Auto[] = [];
  
  selectAutos(selectedBrand: string) {
    const brand = selectedBrand.trim().toLowerCase();

    if (brand) {
      this.selectedAutos = this.autos.filter(auto =>
        auto.brand.toLowerCase().includes(brand)
      );
    } else {
      this.selectedAutos = this.autos;
    }
  }
  ngOnChanges() {
  this.selectedAutos = this.autos;
}

selectCar(auto: Auto) {
  this.onSelectCar.emit(auto);
}
}

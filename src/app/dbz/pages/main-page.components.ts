import { Component, OnInit } from '@angular/core';
import { CharacterComponent } from '../components/character/character.component';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(public DbzService: DbzService){}

  get characters(): Character[] {
    return [...this.DbzService.characters];
  }

  onDeleteCharacter(id: string ):void {
    this.DbzService.deleteCharacterById(id);
  }
  onNewCharacter(character: Character):void {
    this.DbzService.addCharacter(character);
  }
}

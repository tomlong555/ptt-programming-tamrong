import { Component, OnInit } from '@angular/core';
import { FruitService } from './core/api/services';
import { firstValueFrom } from 'rxjs';
import { FruitModel } from './core/api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Client';
  fruit: FruitModel[] = [];
  fruitName : string = '';
  fruitNameInput : string = '';
  fruitPhotoInput : string = '';
  fruitmodalOpen: boolean = false;

  constructor(
    private _fruitService : FruitService
  ){

  }

  async  ngOnInit(){
    await this.GetFruits();
  }

  async GetFruits(){
    await firstValueFrom(this._fruitService.getFruitsName({
      name:this.fruitName
    })).then((res) => {
      this.fruit = res;
    })
  }

  async AddFruit(){
    await firstValueFrom(this._fruitService.createFruit({
      body:{
        fruitName:this.fruitNameInput,
        fruitPhoto:this.fruitPhotoInput
      }
    })).then((res) => {
      this.fruitNameInput = '';
      this.fruitPhotoInput = ''
      this.fruitmodalOpen = false;
      this.GetFruits();
    })
  }

  async onOpenModal(){
    this.fruitmodalOpen = true;
  }

  async onCloseModal(){
    this.fruitmodalOpen = false;
  }
}

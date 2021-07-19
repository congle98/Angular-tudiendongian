import { Component, OnInit } from '@angular/core';
import { Dictionary } from 'src/app/model/dictionary';
import { DictionarySeviceService } from 'src/app/service/dictionary-sevice.service';

@Component({
  selector: 'app-dictionary-home',
  templateUrl: './dictionary-home.component.html',
  styleUrls: ['./dictionary-home.component.css']
})
export class DictionaryHomeComponent implements OnInit {
  
  listDictionary:Array<Dictionary> = [];

  constructor(private dictionaryService: DictionarySeviceService) { }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(){
    this.listDictionary = this.dictionaryService.findAll();
  }

}

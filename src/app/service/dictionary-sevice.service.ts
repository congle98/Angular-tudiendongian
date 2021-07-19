import { Injectable } from '@angular/core';
import { Dictionary } from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionarySeviceService {

  dictionaryList = [
  { 
    id: 1,
    vn:'xin chào',
    en:'hello'
  },
  {
    id: 2,
    vn:'đi',
    en:'go'
  },
  {
    id: 3,
    vn:'tạm biệt',
    en:'goodbye'
  },
  {
    id: 4,
    vn:'xuân',
    en:'mylove'
  },
]

  constructor() { }

  findAll(){
    return this.dictionaryList;
  }

  getDictionaryById(id:any){
    for(let i = 0; i < this.dictionaryList.length; i++){
      if(this.dictionaryList[i].id==id){
        return this.dictionaryList[i];
      }
    }
    return null;
  
  }

  save(dictionary:Dictionary){
    this.dictionaryList.push(dictionary);
  }
}

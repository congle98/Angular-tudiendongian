import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DictionarySeviceService } from 'src/app/service/dictionary-sevice.service';

@Component({
  selector: 'app-dictionary-create',
  templateUrl: './dictionary-create.component.html',
  styleUrls: ['./dictionary-create.component.css']
})
export class DictionaryCreateComponent implements OnInit {

  myForm:FormGroup = new FormGroup(
    { id:new FormControl(''),
      vn:new FormControl(''),
      en:new FormControl(''),
    }
  ) 

  constructor(private dictionaryService: DictionarySeviceService) { }

  ngOnInit(): void {
  }

  addDictionary(){
    let id = this.dictionaryService.dictionaryList[this.dictionaryService.dictionaryList.length-1].id+1;
    this.myForm.controls['id'].setValue(id);
    this.dictionaryService.save(this.myForm.value);
  }

}

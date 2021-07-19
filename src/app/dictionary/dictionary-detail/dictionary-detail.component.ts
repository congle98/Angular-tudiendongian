import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DictionarySeviceService } from 'src/app/service/dictionary-sevice.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

   dictionary:any; 
  constructor(private dictionaryService:DictionarySeviceService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getDictionary();
  }

  getDictionary(){
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      let id = paramMap.get("id");
      this.dictionary = this.dictionaryService.getDictionaryById(id);
    })
  }



}

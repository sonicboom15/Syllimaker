import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {faTimes } from '@fortawesome/free-solid-svg-icons'
import { element } from 'protractor';

@Component({
  selector: 'app-appboi',
  templateUrl: './appboi.component.html',
  styleUrls: ['./appboi.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppboiComponent implements OnInit {

  @Input() user:any;
  constructor(private modalService:NgbModal) {}
  data = new AllData();
  faTimes = faTimes
  queryValue:string = null;
  content:string = null;
  mentor:string = null;

  ngOnInit(): void {
    let data = new AllData();
  }

  addnewDay(data): void{
    let tempday = new Day(data.days.length);
    data.days.push(tempday);
  }

  addnewTopic(data,title,type,content,mentor):void{
    let activeday = data.activeday;
    let tempTopic = new Topic(data.days[data.activeday].topics.length,title,type,content,mentor);
    data.days[activeday].topics.push(tempTopic);
  }

  setActiveDay(data,did){
    data.activeday = did;
  }

  setActiveTopic(data,tid){
    data.activetopic = tid;
    this.content = data.days[data.activeday].topics[tid].content;
    this.mentor = data.days[data.activeday].topics[tid].mentorinstructions;
    console.log(data);
  }

  open(content) {
    this.modalService.open(content).result
  }

  getTopics(data,queryValue):Topic[]{
      if(data.days.length!=0){
        if(queryValue!=null){
          queryValue = queryValue.toLowerCase();
          return data.days[data.activeday].topics.filter(element => element.title.toLowerCase().includes(queryValue));
        }
        return data.days[data.activeday].topics;
      }
      return [];
      //
  }

  saveEdits(data){
    data.days[data.activeday].topics[data.activetopic].content = this.content;
    data.days[data.activeday].topics[data.activetopic].mentorinstructions = this.mentor;
  }
}
class AllData{
  days:Day[];
  activeday:number;
  activetopic:number;
  constructor(){
    this.days = [];
    this.activeday = -1;
    this.activetopic = -1;
  }
}
class Day{
  id:number;
  topics:Topic[];
  constructor(id:number){
    this.id = id;
    this.topics = [];
  }
  getTopiclength():number{
    return this.topics.length;
  }
}
class Topic{
  id:number;
  title:string;
  type:string;
  content:string;
  mentorinstructions:string;
  constructor(id:number,title,type,content,mentor){
    this.id = id;
    this.title = title;
    this.type = type
    this.content = content;
    this.mentorinstructions = mentor;
  }
}
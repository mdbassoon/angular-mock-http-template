import { Component } from '@angular/core';
import { HttpObjService } from './http-obj.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private objService:HttpObjService){};
  /*  API */
  obj:object;
  keys = new Array();
  getObj() {
    const newObject = this.objService.get('url-placeholder');
    this.obj = newObject;
    this.keys = Object.keys(newObject);
  }
  postObj() {
    return this.objService.post(this.obj);
  }
  changeParam(e) {
    const name = e.target.name;
    const value = e.target.value;
    let obj = this.obj;
    obj[name] = value;
    this.obj = obj;
    this.postObj();
    this.getObj();
    console.log(this.obj);
  }
  ngOnInit() {
    this.getObj();
  }
}

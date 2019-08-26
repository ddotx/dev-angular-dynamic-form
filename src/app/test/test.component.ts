import { Component, OnInit } from '@angular/core';
import { isArray } from 'util';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent {
  

  contact: {[key: string]: string} = {type: "phone", value: "0000000", label: "test"}

contactArray= [{
      "label": "work",
      "type": "email",
      "value": "rin@sod.com"
    }, {
      "label": "personal",
      "type": "email",
      "value": "rintomo@sod.com"
    }]

    testArray= [1,2,3,4]


  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]);

  constructor(){
    console.log('Type of Contact: ', typeof this.contact)
    console.log('Type of ContactArray: ', isArray(this.testArray))
    console.log('Type of TestArray: ', typeof this.testArray)
    console.log('Type of TestArray: ', isArray(this.testArray))


  
  function isArray(testArray) {
    return testArray instanceof Array;
}

}

isArrayInstanceOf(testArray) {
  return testArray instanceof Array;
}
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
data = {
  "gid": "1",
  "varid": "Intro",
  "bubbles": {
    "pre": {
      "valid": [
        {
          "img_url": "https://tars-file-upload.s3.amazonaws.com/HJqkxX/5085d96d71f0e9f9a0eb6025affc71d3--f4a18c3e-new-york-therapy-jobs0hs0bv0hs08u000010.jpg",
          "string": "Looking to become a <b>Physical Therapy Assistant?</b>",
          "delay": 1000
        },
        {
          "string": "Would you like to know what it takes to become one?",
          "delay": 3000
        }
      ]
    }
  },
  "input": {
    "attr": {
      "type": "custom"
    },
    "args": {
      "rsp_gid": "2",
      "options": [
        {
          "name": "Yes, please!",
          "val": "Yes, please!",
          "rsp_gid": "2"
        },
        {
          "name": "No",
          "val": "No",
          "rsp_gid": "6"
        }
      ],
      "sn": "y"
    },
    "name": "buttons_vertical"
  },
  "actions": {
    "jump": "options_rsp",
    "post": "validate_options_only"
  }
};

bot_messages = [
  
]

options = this.data['input']['args']['options']
timer = 0;
elementI = 0;

user_message = "";

user_inputs = [];
showResponse = false;

  constructor() { }

  ngOnInit() {
    console.log(this.data['bubbles']['pre']['valid'])
      
    this.messagePush(this.data['bubbles']['pre']['valid'][this.elementI]['delay'])

    
  }

  messagePush(time){
    
    window.setTimeout(()=>{
      this.bot_messages.push(
        {
          'image':''+(this.data['bubbles']['pre']['valid'][this.elementI]['img_url']!=undefined)?this.data['bubbles']['pre']['valid'][this.elementI]['img_url']:null,
          'message':''+this.data['bubbles']['pre']['valid'][this.elementI]['string']
        }
      )
      this.elementI = this.elementI + 1; 
      if(this.data['bubbles']['pre']['valid'][this.elementI]!=undefined){
        this.callback();
        this.showResponse = true;
      }
    },time)

  }

  callback(){
    this.messagePush(this.data['bubbles']['pre']['valid'][this.elementI]['delay'])

  }

  userMessage(evt){
    console.log(evt['target']['value'])
    this.user_inputs.push(evt['target']['value'])
  }

    

}

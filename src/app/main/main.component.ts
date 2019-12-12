import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
data = {
  "convid": "Ey7gKc",
  "start_gambit_id": 1,
  "gambits": {
    "1": {
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
      },
    },
    "2": {
      "input": {
        "attr": {
          "type": "text",
          "autocapitalize": "words",
          "placeholder": "Type here.."
        },
        "args": {
          "rsp_gid": "3",
          "input_type": "user_name"
        },
        "name": "text"
      },
      "actions": {
        "jump": "next_rsp",
        "post": "validate_greater_input_length"
      },
      "bubbles": {
        "pre": {
          "valid": [
            {
              "string": "Great! To qualify for this position, you need to complete the <b>PTA program</b> 🎓",
              "delay": 1000
            },
            {
              "img_url": "https://tars-file-upload.s3.amazonaws.com/HJqkxX/e9c5ab199b45d40c8d74b75c72a46a7f--new-logo.png",
              "string": "At <b>Praxis Institute</b>, we will help you with the PTA program which is accredited by <b>Commission on Accreditation in Physical Therapy Education (CAPTE).</b>",
              "delay": 4000
            },
            {
              "string": "If you qualify, you will be eligible for <b>Federal Financial Aid</b>",
              "delay": 5000
            },
            {
              "string": "In order to enroll, please tell us your <b>name </b>👇",
              "delay": 1000
            }
          ]
        }
      },
      "varid": "Name",
      "gid": "2",
    },
    "3": {
      "input": {
        "attr": {
          "type": "email",
          "autocapitalize": "off",
          "placeholder": "Type here.."
        },
        "args": {
          "rsp_gid": "4",
          "input_type": "user_email"
        },
        "name": "text"
      },
      "actions": {
        "jump": "next_rsp",
        "post": "validate_email"
      },
      "bubbles": {
        "pre": {
          "valid": [
            {
              "string": "Thanks {{data['answer']}}! I will be sharing more details about the<b> PTA program</b> which includes information about <b>scheduled classes</b>, <b>licensing examination</b> and <b>financial aid.</b>",
              "delay": 1000
            },
            {
              "string": "Let me know your <b>email address</b> 👇",
              "delay": 5000
            }
          ]
        }
      },
      "varid": "Email",
      "gid": "3",
    },
    "4": {
      "input": {
        "attr": {
          "type": "tel",
          "autocapitalize": "off",
          "placeholder": "Type here.."
        },
        "args": {
          "rsp_gid": "5",
          "input_type": "custom_text"
        },
        "name": "text"
      },
      "actions": {
        "jump": "next_rsp",
        "post": "validate_greater_input_length"
      },
      "bubbles": {
        "pre": {
          "valid": [
            {
              "string": "I will be connecting you with an <b>Admissions Counselor</b> to help you get started with this program.",
              "delay": 1000
            },
            {
              "string": "What is the best <b>contact number</b> to reach you?",
              "delay": 4000
            }
          ]
        }
      },
      "varid": "Phone",
      "gid": "4",
    },
    "5": {
      "input": {
        "name": "redirect_convflow",
        "args": {
          "stop": true,
          "redirect_delay": 3000,
          "redirect_url": "",
          "rsp_gid": null
        },
        "attr": {
          "placeholder": "Thanks.",
          "disabled": "",
          "autocapitalize": "off",
          "type": "text"
        }
      },
      "actions": {
        "jump": "next_rsp",
        "pre_args": [
          "Ey7gKc"
        ],
        "pre": "submit_data"
      },
      "bubbles": {
        "pre": {
          "valid": [
            {
              "string": "Thanks for providing all the details {{ursp.name}} 😊",
              "delay": 1000
            },
            {
              "string": "We will get in touch with you shortly with the program details 👋",
              "delay": 2000
            }
          ]
        }
      },
      "varid": "End",
      "gid": "5",
    },
    "6": {
      "gid": "6",
      "varid": "help",
      "bubbles": {
        "pre": {
          "valid": [
            {
              "delay": 1000,
              "string": "How can I help?"
            }
          ]
        },
      },
      "actions": {
        "post": "validate_greater_input_length",
        "jump": "next_rsp"
      },
      "input": {
        "attr": {
          "type": "text",
          "autocapitalize": "off",
          "placeholder": "Type here.."
        },
        "args": {
          "rsp_gid": "2",
          "input_type": "custom_text"
        },
        "name": "text"
      },
    }
  }
}

elementCounter = 0;
questionCounter = 0;
question = [];

type_of_input = "";
input_values = [];
showResponse = false;

user_input = [];

user_response_string = "";

final_output = [];

  constructor() { }

  ngOnInit() {
    console.log(this.data['gambits'][this.elementCounter+1])
    this.activateTimer()
  }

  renderQuestion(time){
    // console.log(this.questionCounter)
    window.setTimeout(() => {
      this.question.push(
        {
          'img_url':''+this.data['gambits'][this.elementCounter+1]['bubbles']['pre']['valid'][this.questionCounter]['img_url'],
          'string':''+this.data['gambits'][this.elementCounter+1]['bubbles']['pre']['valid'][this.questionCounter]['string']
        }
      )
      this.final_output.push(
        {
          'img_url':''+this.data['gambits'][this.elementCounter+1]['bubbles']['pre']['valid'][this.questionCounter]['img_url'],
          'string':''+this.data['gambits'][this.elementCounter+1]['bubbles']['pre']['valid'][this.questionCounter]['string'],
          'from':'bot'
        }
      ) 
      // console.log(this.question)
      this.questionCounter = this.questionCounter + 1;

      if(this.questionCounter < this.data['gambits'][this.elementCounter+1]['bubbles']['pre']['valid'].length){
        this.renderQuestion(this.data['gambits'][this.elementCounter+1]['bubbles']['pre']['valid'][this.questionCounter]['delay']);
      }else{
        this.showResponse = true;
        this.questionCounter = 0;
      }
    }, time);


    if(this.type_of_input == 'buttons_vertical'){
     console.log(this.data['gambits'][this.elementCounter+1]['input']['args']['options']);
     this.input_values = this.data['gambits'][this.elementCounter+1]['input']['args']['options'];
     
    }
    
    
  }

  activateTimer(){
    this.type_of_input = this.data['gambits'][this.elementCounter + 1]['input']['name'];
   this.renderQuestion(this.data['gambits'][this.elementCounter + 1]['bubbles']['pre']['valid'][this.questionCounter]['delay']);
   console.log(this.data['gambits'][this.elementCounter + 1]['bubbles']['pre']['valid'][this.questionCounter]['delay'])
  }

  updateAnswer(evt, type_of){
  
    console.log(evt['target']['value'])

    if(type_of =='text'){
      this.user_input.push(
        {
          'gambit_id':this.elementCounter+1,
          'answer':this.user_response_string
        }
      )
      this.final_output.push(
        {
          'from':'user',
          'answer':this.user_response_string
        }
      )
      this.showResponse =false;
      this.elementCounter = this.elementCounter +1;
      this.user_response_string = "";
      this.activateTimer()
    }
    else if (type_of =='buttons_vertical'){
      this.user_input.push(
        {
          'gambit_id':this.elementCounter+1,
          'answer':evt['target']['value']
        }
      )
      this.final_output.push(
        {
          'from':'user',
          'answer':evt['target']['value']
        }
      )
      this.showResponse =false;
      this.elementCounter = this.elementCounter +1;
      this.activateTimer()
    }
    else{

    }
  

    console.log(this.final_output)
  }

}

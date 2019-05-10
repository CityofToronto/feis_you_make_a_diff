class NominationForm {
    constructor(container) {
        console.log(container)
      this.model = null;
      this.container = container;
      this.cotForm = new CotForm(this.formDefinition());
    }
  
    render() {
        console.log(this.container)
      this.cotForm.render({target: this.container});
    }
  
    setModel(model){
      this.model = model;
      this.cotForm.setModel(model);
    }
  
    formDefinition(){
      let formId = 'submission';

      
      return {
        id: formId, 
        title: 'Application Submission - You Make The Difference', //optional, a title to display at the top of the form
        //rootPath: '/*@echo SRC_PATH*//', //optional, only required for forms using validationtype=Phone fields
        success: (event) => {
          event.preventDefault(); //this prevents the formvalidation library from auto-submitting if all fields pass validation
          alert('You have successfully attempted to submit this form. Check the javascript console for data to submit.');
          let valuesToSubmit = this.model ? this.model.toJSON() : this.cotForm.getData();
          console.log('Got form values:', valuesToSubmit);
          //at this point you would typically do an AJAX post to some kind of API service
          return false;
        },
        useBinding: true,
  
        sections: [
          {
            id: "nominee",
            title: "Nominee",
            className: 'panel panel-default',
            rows: [
              {
                fields: [
                  {
                    id: 'form_intro',
                    type: 'html',
                    html: '<p>Please enter all field values as best you can. Click <strong>submit</strong> when complete.</p>'
                  }
                ]
              },
              {
                fields: [
                  {
                    id: 'fullName', //required, used to create the dom element id
                    title: 'Full Name', //required except for type=html|button|static, the title/label for the field
                    type: 'text', //optional, enum: ['html', 'button', 'static', 'checkbox', 'radio', 'text' (default), 'daterangepicker', 'dropdown', 'multiselect', 'datetimepicker', 'textarea', 'password'], the type of field to add to the row
                    //posthelptext: 'An example of a text field',
                    //className: 'col-xs-12 col-sm-8', //optional, override the auto-generated css grid col classes, ex: col-xs-12
                    //addclass: 'additional-class', //optional, append to the auto-generated classes
                    required: true, //optional, defaults to false
                    //requiredMessage: 'You must enter your name at least!', //optional, if required is set to true, this is used as the empty error message (instead of the default)
                    //infohelp: 'Your name likely consists of a first name and a surname (or last name). Some people may have more or less. Enter whatever you feel most comfortable with', //optional, help text for the field, which is shown via a tooltip for an info icon, does not apply to type=html||button
                    //disabled: false, //optional, defaults to false, only applies to fields that can be disabled
                    //placeholder: 'name', //optional, a placeholder string for input fields, doesn't apply if validationtype=Phone
                    //htmlAttr: {maxLength:100}, //optional, when type=text||password||textarea this can be used to pass a set of html attributes, which will be set on the input element using jquery's attr method
                    bindTo:'fullName'
                  },
                  {
                    id: 'email',
                    type: 'text',
                    title: 'E-mail',
                    //value: '123QWERTY',
                    //posthelptext: 'An example of a static field',
                    //className: 'col-xs-12 col-sm-4'
                  },
                  {
                    id: 'Division',
                    type: 'text',
                    title: 'Division',
                    //value: 39,
                    //htmlAttr:{step:1},
                    //posthelptext: 'An example of a number field with step=1',
                    //className: 'col-xs-12 col-sm-6'
                  }
                ]
              }
            ]
          },
          {
            id: "section__category",
            title: "Category",
            className: 'panel panel-default',
            rows: [
              {
                fields: [
                  {
                    id: 'form_intro',
                    type: 'html',
                    html: '<p>Please enter all field values as best you can. Click <strong>submit</strong> when complete.</p>'
                  }
                ]
              },
              {
                fields: [
                    {
                    id: 'category',
                    title: 'Category',
                    type:'radio',
                    required: true,
                    choices: [ //required when type=radio||checkbox||dropdown||multiselect, an array of text/value pairs, text is required, but value is not (defaults to text)
                        {text: 'Customer Service Excellence', value: ''},
                        {text: 'Leadership Excellence', value: 'ab'},
                        {text: 'Community Engagement', value: 'bc'},
                        {text: 'Commitment', value: 'on'},
                        {text: 'Innovation', value: 'yk'}
                        ],
                    //validationtype: 'Email',
                    prehelptext: '(Please check one)',
                    bindTo: 'category'
                    }
                ]
              },
              {
                fields: [
                    {
                    id: 'comments',
                    title: 'Category',
                    type:'textarea',
                    required: true,
                    prehelptext: 'Why are you nominating this person?',
                    posthelptext: 'An example of a email field with automatic email validation',
                    bindTo: 'category'
                    }
                ]
              }
            ]
          },
          {
            id: "submitted",
            title: "Submitted By",
            className: 'panel panel-default',
            rows: [
              {
                fields: [
                  {
                    id: 'form_intro',
                    type: 'html',
                    html: '<p>Please enter all field values as best you can. Click <strong>submit</strong> when complete.</p>'
                  }
                ]
              },
              {
                fields: [
                  {
                    id: 'fullName', //required, used to create the dom element id
                    title: 'Full Name', //required except for type=html|button|static, the title/label for the field
                    type: 'text', //optional, enum: ['html', 'button', 'static', 'checkbox', 'radio', 'text' (default), 'daterangepicker', 'dropdown', 'multiselect', 'datetimepicker', 'textarea', 'password'], the type of field to add to the row
                    //posthelptext: 'An example of a text field',
                    //className: 'col-xs-12 col-sm-8', //optional, override the auto-generated css grid col classes, ex: col-xs-12
                    //addclass: 'additional-class', //optional, append to the auto-generated classes
                    required: true, //optional, defaults to false
                    //requiredMessage: 'You must enter your name at least!', //optional, if required is set to true, this is used as the empty error message (instead of the default)
                    //infohelp: 'Your name likely consists of a first name and a surname (or last name). Some people may have more or less. Enter whatever you feel most comfortable with', //optional, help text for the field, which is shown via a tooltip for an info icon, does not apply to type=html||button
                    //disabled: false, //optional, defaults to false, only applies to fields that can be disabled
                    //placeholder: 'name', //optional, a placeholder string for input fields, doesn't apply if validationtype=Phone
                    //htmlAttr: {maxLength:100}, //optional, when type=text||password||textarea this can be used to pass a set of html attributes, which will be set on the input element using jquery's attr method
                    bindTo:'fullName'
                  },
                  {
                    id: 'email',
                    type: 'text',
                    title: 'E-mail',
                    //value: '123QWERTY',
                    //posthelptext: 'An example of a static field',
                    //className: 'col-xs-12 col-sm-4'
                  },
                  {
                    id: 'Division',
                    type: 'text',
                    title: 'Division',
                    //value: 39,
                    //htmlAttr:{step:1},
                    //posthelptext: 'An example of a number field with step=1',
                    //className: 'col-xs-12 col-sm-6'
                  }
                ]
              },
              {
                fields: [
                  {
                    id: 'anonymous', //required, used to create the dom element id
                    title: 'Do you want to be Anonymous?', //required except for type=html|button|static, the title/label for the field
                    type: 'checkbox', //optional, enum: ['html', 'button', 'static', 'checkbox', 'radio', 'text' (default), 'daterangepicker', 'dropdown', 'multiselect', 'datetimepicker', 'textarea', 'password'], the type of field to add to the row
                    choices: [ //required when type=radio||checkbox||dropdown||multiselect, an array of text/value pairs, text is required, but value is not (defaults to text)
                        {text: 'I wish to remain anonymous', value: 'true'},
                        ],
                    //posthelptext: 'An example of a text field',
                    //className: 'col-xs-12 col-sm-8', //optional, override the auto-generated css grid col classes, ex: col-xs-12
                    //addclass: 'additional-class', //optional, append to the auto-generated classes
                    //required: true, //optional, defaults to false
                    //requiredMessage: 'You must enter your name at least!', //optional, if required is set to true, this is used as the empty error message (instead of the default)
                    //infohelp: 'Your name likely consists of a first name and a surname (or last name). Some people may have more or less. Enter whatever you feel most comfortable with', //optional, help text for the field, which is shown via a tooltip for an info icon, does not apply to type=html||button
                    //disabled: false, //optional, defaults to false, only applies to fields that can be disabled
                    //placeholder: 'name', //optional, a placeholder string for input fields, doesn't apply if validationtype=Phone
                    //htmlAttr: {maxLength:100}, //optional, when type=text||password||textarea this can be used to pass a set of html attributes, which will be set on the input element using jquery's attr method
                    bindTo:'anonymous'
                  }
                ]
              }
            ]
          },
          {
            id: "submit",
            title: "Submit Application",
            className: 'panel panel-default',
            rows: [
              {
                fields: [
                  {
                    id: 'submit__button', //required, used to create the dom element id
                    title: 'Submit Nomination', //required except for type=html|button|static, the title/label for the field
                    type: 'button', //optional, enum: ['html', 'button', 'static', 'checkbox', 'radio', 'text' (default), 'daterangepicker', 'dropdown', 'multiselect', 'datetimepicker', 'textarea', 'password'], the type of field to add to the row
                    btnClass: 'primary btn-lg btn-block',
                    className:'col-xs-6',
                    onclick: function(){ //optional, when type=button this specifies an onclick function
                        console.log(formId)
                        $('#' + formId).data('formValidation').validate(); //attempt form submission, if validation is successful, the success event is called
                        return false;
                      }
                    //posthelptext: 'An example of a text field',
                    //className: 'col-xs-12 col-sm-8', //optional, override the auto-generated css grid col classes, ex: col-xs-12
                    //addclass: 'additional-class', //optional, append to the auto-generated classes
                    //required: true, //optional, defaults to false
                    //requiredMessage: 'You must enter your name at least!', //optional, if required is set to true, this is used as the empty error message (instead of the default)
                    //infohelp: 'Your name likely consists of a first name and a surname (or last name). Some people may have more or less. Enter whatever you feel most comfortable with', //optional, help text for the field, which is shown via a tooltip for an info icon, does not apply to type=html||button
                    //disabled: false, //optional, defaults to false, only applies to fields that can be disabled
                    //placeholder: 'name', //optional, a placeholder string for input fields, doesn't apply if validationtype=Phone
                    //htmlAttr: {maxLength:100}, //optional, when type=text||password||textarea this can be used to pass a set of html attributes, which will be set on the input element using jquery's attr method
                    //bindTo:'fullName'
                  },{
                    id: 'cancel__button', //required, used to create the dom element id
                    title: 'Cancel Nomination', //required except for type=html|button|static, the title/label for the field
                    type: 'button', //optional, enum: ['html', 'button', 'static', 'checkbox', 'radio', 'text' (default), 'daterangepicker', 'dropdown', 'multiselect', 'datetimepicker', 'textarea', 'password'], the type of field to add to the row
                    btnClass: 'cancel btn-block btn-lg',
                    className:'col-xs-6',
                    onclick: function(){ //optional, when type=button this specifies an onclick function
                        console.log(formId)
                        $('#' + formId).data('formValidation').validate(); //attempt form submission, if validation is successful, the success event is called
                        return false;
                      }
                    //posthelptext: 'An example of a text field',
                    //className: 'col-xs-12 col-sm-8', //optional, override the auto-generated css grid col classes, ex: col-xs-12
                    //addclass: 'additional-class', //optional, append to the auto-generated classes
                    //required: true, //optional, defaults to false
                    //requiredMessage: 'You must enter your name at least!', //optional, if required is set to true, this is used as the empty error message (instead of the default)
                    //infohelp: 'Your name likely consists of a first name and a surname (or last name). Some people may have more or less. Enter whatever you feel most comfortable with', //optional, help text for the field, which is shown via a tooltip for an info icon, does not apply to type=html||button
                    //disabled: false, //optional, defaults to false, only applies to fields that can be disabled
                    //placeholder: 'name', //optional, a placeholder string for input fields, doesn't apply if validationtype=Phone
                    //htmlAttr: {maxLength:100}, //optional, when type=text||password||textarea this can be used to pass a set of html attributes, which will be set on the input element using jquery's attr method
                    //bindTo:'fullName'
                  }
                ]
              }
            ]
          }
        ]
      };
    }
  }
  
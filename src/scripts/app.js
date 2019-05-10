class SampleApp extends (window['CotApp'] || window['cot_app']) {
  constructor() {
    super();
    this.$container = $('#feis_you_make_a_diff_container');
    this.currentlySelectedSection = '';
    this.renderedSections = {};
  }

  render() {
    //@if !IS_EMBEDDED
    super.render(); //this function only exists in cot_app
    //@endif

    this.startRouter();

  }

  startRouter() {
    new (Backbone.Router.extend({
      routes: {
        "": () => {
          console.log("form")
          this.renderNomination_form();
        }
      }
    }))();
    Backbone.history.start();
  }


  renderNomination_form(){
    let form = new NominationForm( $('#feis_you_make_a_diff_container') );
    
    form.render();
  }

  $(selector) {
    return this.$container.find(selector);
  }
}

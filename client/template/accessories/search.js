Template.search.helpers({
  settings: function() {
    return {
      position: "top",
      limit: 5,
      rules: [
        {
          collection: NHPs,
          field: "NHPName",
          template: Template.userPill
        }
      ]
    };
  }
});

Template.search.events({
  "keydown #drugSearch": function(e){
    if(e.keyCode===13){
			if(NHPs.findOne({NHPName:$('#drugSearch').val()})!=undefined){
				Router.go('NHPView', NHPs.findOne({NHPName:$('#drugSearch').val()}));
			}
    }
  }
  
})

Template.search.events({
    "autocompleteselect input": function(event, template, doc) {
        // Session.set(event.target.name, event.target.value);
        console.log("selected: ", doc);
        console.log("event.target.name: ", event.target.name);
        console.log("event.target.value: ", event.target.value);
    }
    });
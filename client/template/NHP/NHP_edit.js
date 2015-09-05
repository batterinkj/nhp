hooksObject = {
    after: {
       update: function(error,result){
               Router.go('NHPView', this.currentDoc)
       }
  }
}
AutoForm.addHooks("updateNHPForm", hooksObject);
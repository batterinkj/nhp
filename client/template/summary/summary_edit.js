hooksObject = {
    after: {
       update: function(error,result){
               Router.go('NHPView', NHPs.findOne(this.currentDoc.NHP_Id))
       }
  }
}
AutoForm.addHooks("insertSummaryForm", hooksObject);
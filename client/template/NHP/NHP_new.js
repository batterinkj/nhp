hooksObject = {
    after: {
       insert: function(error,result){
               Router.go('index')
       }
  }
}
AutoForm.addHooks("insertNHPForm", hooksObject);
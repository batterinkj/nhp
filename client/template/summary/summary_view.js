Template.summaryView.helpers({
    activeSummary: function(){
        if (Session.get("activeSummary") === this._id){
            return true
        }else{
            return false
        }
            
    }
})

Template.summaryView.events({
    "click .summaryViewContainer>h1":function(){
        Session.set("activeSummary",this._id)
    }
})
Template.index.helpers({
    "NHPList":function(){
        return NHPs.find().fetch()
    },
    "checkIfDisabled": function(){
       if (this.disabled === true){
           return "checked"
       }else{
           return "";
       }
    }
})

Template.index.events({
    "change #disabledCheckbox":function(){
        NHPs.update(this._id, {$set: {disabled: !this.disabled}});
    },
    "click #deleteNHPButton":function(){
        if(confirm("are you sure")) NHPs.remove(this._id);
    }
})
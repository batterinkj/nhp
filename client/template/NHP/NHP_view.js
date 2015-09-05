Template.NHPView.helpers({
    NHP: function(){
        return NHPs.findOne(this._id);
    },
    summaries:function(){
        return Summaries.find({NHP_Id:this._id})
    },
    references:function(){
        return NHPs.findOne(this._id)['references']
    },
    CKDSafetyImage:function(){
        return "\\"+this.safety.CKD+".jpg"
    },
    HDPDSafetyImage:function(){
        return "\\"+this.safety.HDPD+".jpg"
    },
    transplantSafetyImage:function(){
        return "\\"+this.safety.transplant+".jpg"
    },
    
})
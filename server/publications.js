Meteor.publish('NHPs',function(){
      if(this.userId){
          return NHPs.find();
      }else{
          return NHPs.find({disabled:false})
      }
});

Meteor.publish('Summaries',function(){
    return Summaries.find();
})
Summaries = new Mongo.Collection('Summaries');

Summaries.helpers({
    NHPName: function(){
        if(NHPs.findOne(Summaries.findOne(this._id).NHP_id)){
            return NHPs.findOne(Summaries.findOne(this._id).NHP_id).NHPName
        }else{
            return "No NHP Associated";
        }
 
    }
})
var Schemas = {};
Schemas.Summary = new SimpleSchema({
    NHP_id: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
        type: "select",
        options: function() {
            return _.map(NHPs.find().fetch(), function(NHP) {
                return {
                    label: NHP.NHPName,
                    value: NHP._id
                };
            });
        }
    }
},
    title:{
        type: String,
        label: "Title",
        },
    reference:{
        type: String,
        label: "Reference",
        },
    studyType:{
        type:String,
        label:"Study Type"
    },
    studySize:{
        type:String,
        label:"Study Size"
    },
    demographics:{
        type:String,
        label: "Demographics",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        }
    },
    regimen:{
        type:String,
        label: "Regimen",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        }
    },
    safety:{
        type:String,
        label: "Safety",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        }
    },
    comments:{
        type:String,
        label: "Comments",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        }
    },
})

Summaries.attachSchema(Schemas.Summary)

Summaries.allow({
    insert:function(){
        return (true)
    },
    update: function(){
        return (true)
    },
    remove: function(){
        return (true)
    }
})
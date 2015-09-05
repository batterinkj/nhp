NHPs = new Mongo.Collection('NHPs');

Meteor.methods({

    
})
var Schemas = {};
Schemas.NHP = new SimpleSchema({
    NHPName:{
        type: String,
        label: "Title",
        max: 200
        },
    safety:{
        type:Object,
        label:"Safety",
        optional:true
    },
    "safety.CKD":{
        type:String,
        label: "CKD Safety",
        allowedValues:["Likely Safe","Possibly Safe","Possibly Unsafe", "Unsafe"],
        optional:true
    },
    "safety.HDPD":{
        type:String,
        label: "HDPD Safety",
        allowedValues:["Likely Safe","Possibly Safe","Possibly Unsafe", "Unsafe"],
        optional:true
        },
    "safety.transplant":{
        type:String,
        label: "Transplant Safety",
        allowedValues:["Likely Safe","Possibly Safe","Possibly Unsafe", "Unsafe"],
        optional:true
        },
    dosing:{
        type:Object,
        label:"Dosing",
        optional:true
    },
    "dosing.CKD":{
        type:String,
        label: "CKD Dosing",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },   
    "dosing.HDPD":{
        type:String,
        label: "HDP Dosing",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },   
    "dosing.transplant":{
        type:String,
        label: "Transplant Dosing",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },
    pk:{
        label:"Results",
        type: Object,
        optional:true
    },
    "pk.MW":{
        type:String,
        label: "Molecular Weight",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },
    "pk.VD":{
        type:String,
        label: "Volume of Distribution",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },
    "pk.proteinBinding":{
        type:String,
        label: "Protein Binding",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },
    "pk.metabolism":{
        type:String,
        label: "Metabolism",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },
    "pk.renalClearance":{
        type:String,
        label: "Renal Clearance",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },
    adverseEffects:{
        type:Object,
        label:"Adverse Effects",
        optional:true
    },
    "adverseEffects.nephrotoxic":{
        type:String,
        label: "Nephrotoxic Adverse Effects",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },
    "adverseEffects.other":{
        type:String,
        label: "Nephrotoxic Other",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },
    DI:{
        type:Object,
        label:"Drug Interactions",
        optional:true
    },
    "DI.general":{
        type:String,
        label: "General Drug Interactions",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },
    "DI.immunomodulatory":{
        type:String,
        label: "Immunomodulatory Drug Interactions",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },
    "DI.CYP450":{
        type:String,
        label: "CYP450 Drug Interactions",
                autoform: {
          afFieldInput: {
            type: 'summernote',
            class: 'editor'
          }
        },
        optional:true
    },
    references:{
        type:[String],
        label: "References",
        optional:true
    },
    "references.$.reference":{
         type:String,
         label:"Reference",
         optional:true
    },
    disabled:{
        type:Boolean,
        label: "Disabled?"
    }
})

NHPs.attachSchema(Schemas.NHP)

NHPs.allow({
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
Router.configure({
    layoutTemplate: 'layout'
})

Router.route('/', function () {
  this.render('home');
    },{
        name:"main"/*****************************changed!!!!!!!!!!!!*********************/
    });
    
Router.route('/safety-categories',{
    name: 'safetyCategories'
})
Router.route('/about',{
    name: 'about'
})    
Router.route('/NHPs/:_id/',{
    name: 'NHPView',
    data: function(){return NHPs.findOne(this.params._id);}
})

Router.route('/NHPs/:_id/edit',{
    name: 'NHPEdit',
    data: function(){return NHPs.findOne(this.params._id);}
})

Router.route('/NHPNew', {
    name: 'NHPNew'
})
Router.route('/NHPs/:_id/summaryNew', {
    name: 'summaryNew',
    data: function(){return NHPs.findOne(this.params._id);}
})
Router.route('/summaries/:_id/edit', {
    name: 'summaryEdit',
    data: function(){return Summaries.findOne(this.params._id);}
})

Router.route('/index',{
    name: 'index'
})

/*Router.route('/admin',{
    name: 'admin'
})*/

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  this.route('home', {
    path: '/'
  });

  this.route('user', {
    path: '/users/:_id',
    onBeforeAction: function(){
      var user = Router.current().params._id;
      var url = "https://api.github.com/users/" + user;
      if(!Session.get(user)){
        HTTP.get(url, function(error, result){
          if(result) {
            Session.set('data', result);
          }
        });
      }
    }
  });

});

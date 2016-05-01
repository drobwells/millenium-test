
Template.home.rendered = function() {
$('.carousel').carousel();
};

Template._header.events({
  'click': function(){
    if($(myNavmenu).hasClass('in')){
      $('.navbar-toggle').find('i').addClass('fa-bars');
      $('.navbar-toggle').find('i').removeClass('fa-times');
    }
    else{
      $('.navbar-toggle').find('i').removeClass('fa-bars');
      $('.navbar-toggle').find('i').addClass('fa-times');
    }
  }
});

Template.home.events({
  'click': function(){
    if($(myNavmenu).hasClass('in')){
      $('.navbar-toggle').find('i').addClass('fa-bars');
      $('.navbar-toggle').find('i').removeClass('fa-times');
    }
    else{
      $('.navbar-toggle').find('i').removeClass('fa-bars');
      $('.navbar-toggle').find('i').addClass('fa-times');
    }
  }
});

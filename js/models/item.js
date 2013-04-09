define(["lib/backbone"], function(Backbone) {
  var Item = Backbone.Model.extend({
    defaults: {
      price: 35,
      photo: "http://i3.sinaimg.cn/IT/n/2008-01-17/fce88f85a1faa9ebccb0f891ab756642.jpg"
    }
  });
  return Item;
});

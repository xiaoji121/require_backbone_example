define(["lib/backbone",'text!templates/itemView.html'], function(Backbone, ItemTemp) {
  var ItemView = Backbone.View.extend({
    tagName: "div",
    className: "item-wrap",
    template: _.template(ItemTemp),

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return ItemView;
});

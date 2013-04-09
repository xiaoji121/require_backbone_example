require.config({
  paths: {
    'jquery': 'lib/jquery',
    'text': 'lib/require_plugin/text'
  },
  shim: {
    'lib/underscore': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ["lib/underscore", "jquery"],
      exports: 'Backbone'
    }
  }
});
// items 是一个全局的变量，在整个APP中都能调得到
var items = [
  { title: "Macbook Air", price: 799 },
  { title: "Macbook Pro", price: 999 },
  { title: "The new iPad", price: 399 },
  { title: "Magic Mouse", price: 50 },
  { title: "Cinema Display", price: 799 }
];
require(
  ["jquery",
    "lib/underscore",
    "lib/backbone",
    "views/cartcollectionview"
  ],
  function($, _, B, CartCollectionView) {
    $(function() {
      new CartCollectionView(items);
    });
  }
);


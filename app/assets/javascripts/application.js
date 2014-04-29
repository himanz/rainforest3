// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
	$('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();
    
    $.get('/products?search=' + searchValue)
      .done(function(data){
      	console.log(data);
      	$('#products').html(data);
      });
    // $.ajax({
    //   url: '/products?search=' + searchValue,
    //   type: 'GET',
    //   dataType: 'html'
    // }).done(function(data) {
    // 	$('#products').html(data);
    // });
	});
});
 //  function display_search_results() {
	// 	if (this.readyState === 4) {
	// 		console.log(this);
	// 		document.getElementById('products').innerHTML = this.responseText;
	// 	}
	// }

	// var form = document.getElementById('search-form');
	// form.addEventListener('submit', function(event) {
	// 	event.preventDefault();
	// 	var searchValue = document.getElementById('search').value;

	// 	var xhr = new XMLHttpRequest();
	// 	xhr.onload = display_search_results;
	// 	xhr.open('GET', '/products/?search=' + searchValue, true);
	// 	xhr.send();
	// });

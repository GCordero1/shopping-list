// single state object
var state = {
    items: []
};

// funtion that modifies state
var addItem = function(state, item) {
	state.items.push(item);
}
var deleteItems = function(state, item) {
	state.items.splice(item, 1);
}

// function that renders state
var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li><span class="shopping-item">' + item  +
		'</span><div class="shopping-item-controls">' + 
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span></button>' +
          ' <button class="shopping-item-delete"><span class="button-label">delete</span>' +
          '</button> </div> </li>';
	});
	element.html(itemsHTML);
};

// add items to list event listener
$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault();
	addItem(state, $('#shopping-list-entry').val());
	renderList(state, $('.shopping-list'));
	//form reset
	this.reset();
});

// remove items from list event listener
$('.shopping-item-delete').on('click', function(event) {
	event.preventDefault();
	deleteItems(state, $('#shopping-list-entry'));
	renderList(state, $('.shopping-list'));
});

// check items from list event listener
$('.shopping-item-toggle').on('click', function(event) {
	event.preventDefault();
	$(this).toggleClass('.shopping-item__checked');
});
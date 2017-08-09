// single state object
var state = {
    items: []
};

// funtion that modifies state
var addItem = function(state, item) {
	state.items.push(item);
}
var deleteItems = function(state, item) {
	state.items.pop(item);
}

// function that renders state
var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li>' + item  + '</li>';
	});
	element.html(itemsHTML);
};

// event listeners
$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault();
	addItem(state, $('#shopping-list-entry').val());
	renderList(state, $('.shopping-list'));
});
$('.shopping-item-delete').click(function(event) {
	event.preventDefault();
	deleteItem();
});
$('.shopping-item-toggle').click(function(event) {
	event.preventDefault();
	$(this).toggleClass('.shopping-item__checked');
});
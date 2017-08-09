// single state object
var state = {
    items: []
};

// funtion that modifies state
var addItem = function(state, item) {
	state.items.push(item);
}
var deleteItems = function(state, item) {
	state.items.remove(item);
}

// function that renders state
var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li><span class="shopping-item">' + item  +
		'</span><div class="shopping-item-controls">' + 
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span></button>' +
          ' <button class="shopping-item-delete"><span class="button-label">delete</span>' +
          '</button> </div>';
	});
	element.html(itemsHTML);
};

// event listeners
$('.js-shopping-list-add').submit(function(event) {
	event.preventDefault();
	addItem(state, $('.js-shopping-list-add-input').val());
	renderList(state, $('.shopping-list'));
});
$('.shopping-item-delete').click(function(event) {
	event.preventDefault();
	deleteItem();
});
$('.js-shopping-item-toggle').click(function(event) {
	event.preventDefault();
	$(this).toggleClass('.shopping-item__checked');
}

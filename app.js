// single state object
var state = {
    items: []
};

// funtion that modifies state
var addItem = function(state, item) {
	state.items.push(item);
}
var deleteItems = function(state, item) {
	state.items.splice(item, );
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
$('ul').on('click', '.shopping-item-delete', function(event){
    var $parent = $(this).closest("li");
    $parent.remove();
})

// check items from list event listener
$('ul').on('click', '.shopping-item-toggle', function(event){
        var $parentDiv = $(this).closest("div");
        var $parentSpan = $($parentDiv).prev();
        $parentSpan.toggleClass("shopping-item__checked")
})
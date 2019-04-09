// Storage Controller 





// Item Controller
const ItemCtrl = (function() {
    // Item constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    const data = {
        items: [
            {id: 0, name: 'Chicken Pot Pie', calories: 550},
            {id: 1, name: 'Salad', calories: 350},
            {id: 2, name: 'Potato Soup', calories: 150},
        ],
        currentItem: null,
        totalCalories: 0
    }
 
    // Public Methods
    return {
        getItems: function() {
            return data.items;
        },
        logData: function() {
            return data;
        }
    }
})();




// UI Controller
const UICtrl = (function() {
    

    // Public Methods
    return {
        populateItemList: function(items) {
            let html = '';

            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong> ${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
                </a>
              </li>
              `;
            });
        }
    }
})();




// App Controller
const App = (function(ItemCtrl, UICtrl) {
    

    // Public Methods
    return {
        init: function() {
            console.log('Initializing app...');

            // Fetch Items from data structure
            const items = ItemCtrl.getItems();

            // Populate List with items
            UICtrl.populateItemList(items);

        }
    }
})(ItemCtrl, UICtrl);




// Initialize App
App.init();
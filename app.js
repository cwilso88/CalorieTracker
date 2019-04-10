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
        addItem: function(name, calories) {
            return 
        },
        logData: function() {
            return data;
        }
    }
})();




// UI Controller
const UICtrl = (function() {

    const UISelectors = {
        itemList:  '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories'
    }
    

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

            // Insert List Items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        getSelectors: function() {
            return UISelectors;
        }

        
    }
})();




// App Controller
const App = (function(ItemCtrl, UICtrl) {

    // Load event listeners
    const loadEventListeners = function() {
        // Get UI Selectors
        const UISelectors = UICtrl.getSelectors();

        // Add Item Submit 
        const itemAddSubmit = function(e) {
        // Get form input from UI Controller
        const input = UICtrl.getItemInput();

        // Check for name and calorie input
        if(input.name !== '' && input.calories !== '') {
            // Add Item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
        }
            e.preventDefault();
        }

        // Add Item Event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
        
    }
    

    // Public Methods
    return {
        init: function() {
            console.log('Initializing app...');

            // Fetch Items from data structure
            const items = ItemCtrl.getItems();

            // Populate List with items
            UICtrl.populateItemList(items);

            // Load Event Listners
            loadEventListeners();

        }
    }
})(ItemCtrl, UICtrl);




// Initialize App
App.init();

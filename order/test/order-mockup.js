const uuidV4 = require('uuid/v4')
const orderConstants = require('./../order-constants.js')

const diner1Items = [{
  orderItemId: uuidV4(),
  restaurantId: process.env.KANISHKA_RESTAURANT_ID,
  itemQuantity: 2,
  orderItemStatus: orderConstants.ITEM_STATUS.ITEM_ADDED_IN_CART,
  itemId: '9669086b-cf12-4cd4-9a74-aeca8e2038de',
  itemName: 'ONION BHAJI',
  itemDescription: 'Spring onions fritters, served with chutney.',
  itemPrice: 4.75,
  orderItemTotalPrice: 9.50,
  itemOptionGroups: [{
    name: 'Pieces',
    type: 'OPTIONS_CHOOSE',
    itemOptionValues: {
      name: '2 Pieces',
      price: 0,
    }
  }]
},
  {
    orderItemId: uuidV4(),
    restaurantId: process.env.KANISHKA_RESTAURANT_ID,
    itemQuantity: 2,
    orderItemStatus: orderConstants.ITEM_STATUS.ITEM_ADDED_IN_CART,
    itemId: '6dda382d-6800-403d-8b08-edbce6370e53',
    itemName: 'SEAFOOD COCONUT CURRY',
    itemDescription: 'Cooked in coconut powder, coconut milk, ginger, garlic and mild spices.',
    itemPrice: 13.95,
    orderItemTotalPrice: 19.95,
    itemOptionGroups: [{
      name: 'Choice of Rice',
      type: 'OPTIONS_CHOOSE',
      itemOptionValues: {
        name: 'Basmati Rice',
        price: 0,
      }
    },
      {
        name: 'Choice of Meat',
        type: 'OPTIONS_CHOOSE',
        itemOptionValues: {
          name: 'Halibut',
          price: 6,
        }
      },
      {
        name: 'Spice Level',
        type: 'OPTION_LEVEL',
        itemOptionValues: {
          name: 'Medium Hot',
          price: 0,
        }
      }
    ]
  }
]

const diner2Items = [{
  orderItemId: uuidV4(),
  restaurantId: process.env.KANISHKA_RESTAURANT_ID,
  itemQuantity: 2,
  orderItemStatus: orderConstants.ITEM_STATUS.ITEM_ADDED_IN_CART,
  itemId: '9669086b-cf12-4cd4-9a74-aeca8e2038de',
  itemName: 'ONION BHAJI',
  itemDescription: 'Spring onions fritters, served with chutney.',
  itemPrice: 4.75,
  orderItemTotalPrice: 9.50,
  itemOptionGroups: [{
    name: 'Pieces',
    type: 'OPTIONS_CHOOSE',
    itemOptionValues: {
      name: '2 Pieces',
      price: 0,
    }
  }]
},
  {
    orderItemId: uuidV4(),
    restaurantId: process.env.KANISHKA_RESTAURANT_ID,
    itemQuantity: 2,
    orderItemStatus: orderConstants.ITEM_STATUS.ITEM_ADDED_IN_CART,
    itemId: '6dda382d-6800-403d-8b08-edbce6370e53',
    itemName: 'SEAFOOD COCONUT CURRY',
    itemDescription: 'Cooked in coconut powder, coconut milk, ginger, garlic and mild spices.',
    itemPrice: 13.95,
    orderItemTotalPrice: 19.95,
    itemOptionGroups: [{
      name: 'Choice of Rice',
      type: 'OPTIONS_CHOOSE',
      itemOptionValues: {
        name: 'Basmati Rice',
        price: 0,
      }
    },
      {
        name: 'Choice of Meat',
        type: 'OPTIONS_CHOOSE',
        itemOptionValues: {
          name: 'Halibut',
          price: 6,
        }
      },
      {
        name: 'Spice Level',
        type: 'OPTION_LEVEL',
        itemOptionValues: {
          name: 'Medium Hot',
          price: 0,
        }
      }
    ]
  }
]


module.exports = {
  diner1Items,
  diner2Items
}
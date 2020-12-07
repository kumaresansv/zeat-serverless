let item = `[
  {
    "orderItemId": "9669086b-cf12-4cd4-9a74-aeca8e2038df",
    "restaurantId": "{{KanishkaRestId}}",
    "itemQuantity": 2,
    "orderItemStatus": 0,
    "itemId": "9669086b-cf12-4cd4-9a74-aeca8e2038de",
    "itemName": "ONION BHAJI",
    "itemDescription": "Spring onions fritters, served with chutney.",
    "itemPrice": 4.75,
    "orderItemTotalPrice": 9.50,
    "itemOptionGroups": [{
      "name": "Pieces",
      "type": "OPTIONS_CHOOSE",
      "itemOptionValues": {
        "name": "2 Pieces",
        "price": 0
      }
    }]
  }
]`

let item1 = `[
  {
    "orderItemId": "9669086b-cf12-4cd4-9a74-aeca8e2038df",
    "restaurantId": "jhjhj",
    "itemQuantity": 2,
    "orderItemStatus": 0,
    "itemId": "9669086b-cf12-4cd4-9a74-aeca8e2038de",
    "itemName": "ONION BHAJI",
    "itemDescription": "Spring onions fritters, served with chutney.",
    "itemPrice": 4.75,
    "orderItemTotalPrice": 9.50,
    "itemOptionGroups": [{
      "name": "Pieces",
      "type": "OPTIONS_CHOOSE",
      "itemOptionValues": {
        "name": "2 Pieces",
        "price": 0
      }
    }]
  }
]`


let testItem = JSON.parse(item1)
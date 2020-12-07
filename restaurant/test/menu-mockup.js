const KANISHKA_MENU =     {
  name: "Main",
  "description": "Main Menu",
  "duration": [
    {
      "name": "Dinner",
      "startTime": "05:00 PM",
      "endTime": "09:00 PM"
    },
    {
      "name": "Lunch",
      "startTime": "11:00 AM",
      "endTime": "03:00 PM"
    }
  ],
  "active": true,
  "sections": [
    {
      "id": "test",
      "name": "Starters/Snacks",
      "sequence": 1,
      "active": true,
      "subsections": [
        {
          "name": "SHURUAAT [ appetizers ]",
          "sequence": 1,
          "active": true,
          "items": [
            {
              "name": "ONION BHAJI",
              "sequence": 1,
              "description": "Spring onions fritters, served with chutney.",
              "price": 4.75,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "VEGETABLE SAMOSA",
              "sequence": 2,
              "description": "Crispy fried turnover deliciously filled with mildly spices potatoes and Indian herbs.",
              "price": 4.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Pieces",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "2 Pieces",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "LAMB KEEMA SAMOSA",
              "sequence": 3,
              "description": "Crispy fried turnover deliciously filled with ground lamb and Indian herbs.",
              "price": 6.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Pieces",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "2 Pieces",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "VEGETABLE PAKORA",
              "sequence": 4,
              "description": "Mixed vegetables deep-fried in gram flour batter.",
              "price": 5.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "PANEER PAKORA",
              "sequence": 5,
              "description": "Homemade Indian cheese square deep-fried in gram flour batter",
              "price": 6.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "CHICKEN PAKORA",
              "sequence": 6,
              "description": "Fresh chicken breast, batter dipped and fried till golden.",
              "price": 7.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "FISH PAKORA",
              "sequence": 7,
              "description": "Cubes of cod fish dipped in a special batter and fried to golden perfection",
              "price": 7.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "CHICKEN 65",
              "sequence": 8,
              "description": "Chicken thigh marinated with yogurt, South Indian spices and fried with vegetable oil.",
              "price": 6.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "CHILLI CHICKEN",
              "sequence": 9,
              "description": "Chicken breast cooked with Chinese batter with Chinese hot sauces, onion and peppers.",
              "price": 6.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "GOBI MANCHURIAN",
              "sequence": 10,
              "description": "Cauliflower cooked with Chinese batter mixed with Manchurian sauce and Chinese herb.",
              "price": 6.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "CHICKEN MANCHURIAN",
              "sequence": 11,
              "description": "Chicken breast cooked with Chinese batter mixed with manchurian sauce and Chinese herbs.",
              "price": 6.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "KANISHKA CRABCAKE",
              "sequence": 12,
              "description": "Crab patty with crushed peppercorns, spices and herbs. Seasoned with ginger and garlic butter Lemon.",
              "price": 10.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "TANDOORI SCALLOPS",
              "sequence": 13,
              "description": "Scallops marinated with delicate spices, grilled and served with creamy sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            }
          ]
        },
        {
          "name": "SALAD KI TOKRI [ salads ]",
          "sequence": 2,
          "active": true,
          "items": [
            {
              "name": "INDIAN SALAD",
              "sequence": 1,
              "description": "Slice of fresh tomato, cucumber, onions and green chilies sprinkled with chat masala and lemon.",
              "price": 4.75,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "CHICKEN TIKKA SALAD",
              "sequence": 2,
              "description": "Chicken tikka tossed with romaine lettuce and served with mint and tamarind chutney.",
              "price": 8.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            }
          ]
        },
        {
          "name": "SOUP HANDI [ soups ]",
          "sequence": 3,
          "active": true,
          "items": [
            {
              "name": "DAAL SOUP",
              "sequence": 1,
              "description": "Lentil cooked in vegetables with a touch of roasted cumin seeds, black pepper and kiss of butter.",
              "price": 4.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "TAMATAUR SOUP",
              "sequence": 2,
              "description": "A light refreshing soup made with fresh tomatoes, basil and a touch of black pepper and kiss of butter.",
              "price": 4.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "MULLIGATAWANY SOUP",
              "sequence": 3,
              "description": "Made with lentil, fresh tomatoes and a touch of coconut milk with blended spices and herbs.",
              "price": 4.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 1.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 1.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "CHICKEN SOUP",
              "sequence": 4,
              "description": "Chicken breast cooked in egg stock combined with blended spices and herbs.",
              "price": 5.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            }
          ]
        },
        {
          "name": "CHAT CORNER [ savory snacks ]",
          "sequence": 4,
          "active": true,
          "items": [
            {
              "name": "SAMOSA CHAT",
              "sequence": 1,
              "description": "Crispy fried turnover deliciously filled with mildly spiced potatoes and chickpeas.",
              "price": 5.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "ALOO TIKKI",
              "sequence": 2,
              "description": "Fried potato petties with Indian herbs and garbanzo beans served with mint, tamarind, and yogurt sauce.",
              "price": 5.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "ALOO PAPDI CHAT",
              "sequence": 3,
              "description": "Cubes of potatoes, chick peas and flour crisps made in tangy mint, tamarind sauce served with yogurt.",
              "price": 5.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "DAHI BHALLA CHAT",
              "sequence": 4,
              "description": "Lentil balls served in a yogurt, tamarind and mint sauce.",
              "price": 6.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            }
          ]
        }
      ]
    },
    {
      "name": "Entrees",
      "sequence": 2,
      "active": true,
      "subsections": [
        {
          "name": "BAWARCHI KA KHAASH [ chef’s choice ]",
          "sequence": 1,
          "active": true,
          "items": [
            {
              "name": "BHUNA GOSHT",
              "sequence": 1,
              "description": "Boneless cubes cooked with onions, tomatoes, bell peppers and fresh garlic-ginger sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "METHI GOSHT",
              "sequence": 2,
              "description": "Pieces of boneless chicken cooked with dry fenugreek (methi), onions, tomatoes, bell peppers and fresh garlic-ginger sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "SAFFRON GOSHT",
              "sequence": 3,
              "description": "Curried and finished in a creamy saffron sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "HYDERABADI DUM BRIYANI",
              "sequence": 4,
              "description": "Basmati rice richly flavored with saffron and cooked with Indian herbs on low heat. Served only on Fridays and Saturdays.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "STUFFED ALASKAN HALIBUT",
              "sequence": 5,
              "description": "Fresh Alaskan halibut fillet stuffed with spinach and mushrooms; covered with a mouthwatering saffron-cracked mustard sauce, served with basmati rice.",
              "price": 24.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MALAI HALIBUT",
              "sequence": 6,
              "description": "Marinated with cashew nut and cooked with a special sauce.",
              "price": 24.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "SEAFOOD PLATTER",
              "sequence": 7,
              "description": "A sampling of baked halibut, scallops, and prawns finished with ginger cream sauce.",
              "price": 24.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            }
          ]
        },
        {
          "name": "SAMUNDAR SE [ seafood entrees ]",
          "sequence": 2,
          "active": true,
          "items": [
            {
              "name": "FISH CURRY",
              "sequence": 1,
              "description": "Cod fish cooked in tomato onion based gravy with mustard and Indian herbs.",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "FISH SAAG",
              "sequence": 2,
              "description": "Salmon cooked with garden fresh spinach, tomatoes, ginger, garlic and herbs.",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MALABAR FISH CURRY",
              "sequence": 3,
              "description": "Simmered in coconut milk and fresh herb curry finished with curry leaves.",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "PRAWN KORMA",
              "sequence": 4,
              "description": "Prawns cooked with our special korma sauce and mildly spiced creamy sauce.",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "PRAWN TIKKA MASALA",
              "sequence": 5,
              "description": "Prawns cooked in tomato sauce with a touch of butter.",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "PRAWN JALFRAZI",
              "sequence": 6,
              "description": "Sautéed prawns marinated in fresh ginger and garlic and cooked with garden fresh vegetables and natural herbs.",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "PRAWN KARAHI",
              "sequence": 7,
              "description": "Prawns cooked in a wok with onions, fresh tomatoes, green peppers, ginger, and garlic with our special karahi masala and herbs.",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "PRAWN MANGO",
              "sequence": 8,
              "description": "Prawns cooked with mango pulp and mango chutney in mildly spiced sauce",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "SEAFOOD COCONUT CURRY",
              "sequence": 9,
              "description": "Cooked in coconut powder, coconut milk, ginger, garlic and mild spices.",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Cod",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Salmon",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": false
                    },
                    {
                      "name": "Prawn",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Halibut",
                      "price": 6.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            }
          ]
        },
        {
          "name": "VEGETRARIAN KA ZAIKA [ vegetarian entrees ]",
          "sequence": 3,
          "active": true,
          "items": [
            {
              "name": "DAAL MAKHANI",
              "sequence": 1,
              "description": "Black lentil fried in butter with fresh onions, garlic, ginger and fresh tomatoes.",
              "price": 10.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "DAAL TADKA",
              "sequence": 2,
              "description": "Yellow lentil cooked with onions, tomatoes, ginger and garlic.",
              "price": 10.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "DAAL PALAK",
              "sequence": 3,
              "description": "Lentil cooked with spinach and Indian herbs.",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "CHANNA MASALA",
              "sequence": 4,
              "description": "A delicious combination of garbanzo beans, onions and tomatoes in a rich sauce",
              "price": 10.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "PAKORA KADHI",
              "sequence": 5,
              "description": "Mixture of yogurt and chickpeas powder mixed with vegetable fritters and Indian herbs cooked in slow fire.",
              "price": 10.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "ALOO GOBI",
              "sequence": 6,
              "description": "Fresh cauliflower and potatoes cooked with onions and tomatoes in Kanishka’s seasonings",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MATTAR METHI PALAK",
              "sequence": 7,
              "description": "A unique combination of spinach, fenugreek and green peas.",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "VEGETABLE JALFARZI",
              "sequence": 8,
              "description": "Fresh garden vegetables marinated in fresh ginger, garlic and then cooked with natural herbs",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "BAINGAN MASALA",
              "sequence": 9,
              "description": "Fresh Indian baby eggplant cooked in onions, green peppers and tomatoes with spiced sauce.",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "BHINDI MASALA",
              "sequence": 10,
              "description": "Fresh okra stuffed with Indian spices and cooked with onions and peppers.",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "SABZI VINDALOO",
              "sequence": 11,
              "description": "Mixed vegetables cooked with spices in a tangy sharp sauce.",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "BAINGAN BHARTA",
              "sequence": 12,
              "description": "Eggplant roasted in tandoor, then mashed and blended with tomatoes, onions, ginger, garlic, and simmered with mild spices and herbs",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "DUM ALOO",
              "sequence": 13,
              "description": "Stuffed potatoes cooked in Kanishka’s special sauce",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "VEGETABLE SAAG",
              "sequence": 14,
              "description": "Garden fresh vegetables cooked with fresh spinach, ginger, garlic and herbs.",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MUSHROOM DO PIYAZA",
              "sequence": 15,
              "description": "Garden fresh mushrooms cooked in wok with onions, tomatoes, green peppers, ginger, garlic and herbs.",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "ACHARI VEGETABLE",
              "sequence": 16,
              "description": "Mixed vegetables spiced in a tangy sharp homemade Indian pickles.",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "PANEER KARAHI",
              "sequence": 17,
              "description": "Cubes of homemade Indian cheese cooked in a wok with onions, green peppers, fresh tomatoes, ginger and garlic.",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "ALOO / PANEER SAAG",
              "sequence": 18,
              "description": "Potatoes or paneer cooked with garden fresh spinach, coriander, onions, ginger, tomatoes and mild spices.",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MALAI KOFTA",
              "sequence": 19,
              "description": "Homemade Indian cheese stuffed with potatoes, dry nuts, vegetable balls and cooked in mildly-spiced creamy sauce.",
              "price": 11.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MATTAR PANEER",
              "sequence": 20,
              "description": "Peas and lightly fried homemade cheese cubes cooked in a mildly-spiced sauce",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "VEGETABLE / PANEER MAKHNI",
              "sequence": 21,
              "description": "Homemade Indian cheese cooked in creamy tomato sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "PANEER TIKKA MASALA",
              "sequence": 23,
              "description": "Homemade Indian cheese cooked in creamy tomato sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "SHAHI PANEER",
              "sequence": 24,
              "description": "Mashed homemade Indian cheese cooked with coconut milk. Mildly spiced and creamy with touch of tomato sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "VEGETABLE KORMA",
              "sequence": 25,
              "description": "Mix vegetables in a white sauce with touch of nuts and fruit.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            }
          ]
        },
        {
          "name": "GOSHT ZAIKA [ meat entrees ]",
          "sequence": 4,
          "active": true,
          "items": [
            {
              "name": "CURRY",
              "sequence": 1,
              "description": "Cooked with onions, tomatoes, ginger, garlic, with our special meat masala and herbs.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Goat",
                      "price": 1.0,
                      "sequence": 2,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 3,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "VINDALOO",
              "sequence": 2,
              "description": "Cubes of potatoes and fresh tomatoes cooked with vinegar spices in a tangy sharp vindaloo sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "DO PIYAZA",
              "sequence": 3,
              "description": "Cooked with seasoned sautéed onions, peppers, tomatoes, ginger, garlic, and Indian herbs.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "KARAHI",
              "sequence": 4,
              "description": "Cooked in a wok with onions, green peppers, tomatoes, ginger, garlic and our special kadai masala and herbs.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "SAAG",
              "sequence": 5,
              "description": "Gently cooked with garden fresh spinach, coriander and mild spices.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "JALFRAZI",
              "sequence": 6,
              "description": "Marinated in ginger, garlic and cooked with fresh garden vegetables and natural herbs.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MASALA",
              "sequence": 7,
              "description": "Marinated in yogurt, ginger, garlic and herbs then cooked with onions, tomatoes, and fresh mint.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "TIKKA MASALA",
              "sequence": 8,
              "description": "Cooked in tandoor then mixed in our special creamy tomato sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "KORMA",
              "sequence": 9,
              "description": "A royal entrée gently simmered with our special korma sauce and sprinkled with nuts.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "COCONUT",
              "sequence": 10,
              "description": "Cooked with coconut powder and mildly spiced creamy coconut milk with a touch of tomato sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "CORIANDER",
              "sequence": 11,
              "description": "A unique combination of fresh coriander, roasted coriander seeds, mixed and cooked with fresh onions, fresh tomatoes, ginger, garlic and herbs.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MANGO",
              "sequence": 12,
              "description": "Cooked with mango pulp, mango chutney in a mildly spiced sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "ACHARI",
              "sequence": 13,
              "description": "Cubes with onions, peppers, tomatoes cooked in a tangy sharp Indian pickles herbs.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "PASANDA",
              "sequence": 14,
              "description": "Marinated in onions, ginger, garlic and cooked with homemade yogurt, cilantro and a creamy sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "ROGAN JOSH",
              "sequence": 15,
              "description": "Cooked in yogurt with tomatoes and onion gravy based Indian spices and herbs.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "BUTTER CHICKEN",
              "sequence": 16,
              "description": "Chicken breast cooked lightly with our special butter sauce combined with a touch of onions and tomato sauce.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "LAMB CHOPPED MASALA",
              "sequence": 17,
              "description": "Rack of lamb marinated and cooked in tandoor. It is then simmered in ginger, garlic, tomatoes, bell peppers, onions, fresh mint and herbs.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Chicken",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Lamb",
                      "price": 2.0,
                      "sequence": 2,
                      "isDefault": false
                    }
                  ]
                },
                {
                  "name": "Spice Level",
                  "type": "OPTION_LEVEL",
                  "required": true,
                  "sequence": 3,
                  "itemOptionValues": [
                    {
                      "name": "Mild",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": false
                    },
                    {
                      "name": "Medium",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Medium Hot",
                      "price": 0.0,
                      "sequence": 3,
                      "isDefault": false
                    },
                    {
                      "name": "Hot",
                      "price": 0.0,
                      "sequence": 4,
                      "isDefault": false
                    }
                  ]
                }
              ],
              "itemImages": []
            }
          ]
        },
        {
          "name": "TANDOORI KA FLAME [ tandoori entrees ]",
          "sequence": 5,
          "active": true,
          "items": [
            {
              "name": "TANDOORI VEGETABLE",
              "sequence": 1,
              "description": "Mixed vegetables marinated with tandoori masala and cooked in tandoori oven.",
              "price": 12.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "TANDOORI CHICKEN",
              "sequence": 2,
              "description": "Chicken leg quarters cooked in tandoor and served with grilled onions, bell peppers, lemon and our special tikka sauce.",
              "price": 12.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "PANEER TIKKA",
              "sequence": 3,
              "description": "Cubes of homemade Indian cheese marinated with our special red sauce with yogurt and herbs, cooked in tandoor and served with onions, peppers, lemon and our special masala sauce.",
              "price": 12.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "CHICKEN TIKKA",
              "sequence": 4,
              "description": "hicken breast marinated with our special red sauce with yogurt and herbs, cooked in tandoor and served with onions, peppers, lemon and our special masala sauce.",
              "price": 12.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "SAFFRON TIKKA",
              "sequence": 5,
              "description": "Chicken breast marinated with sour cream, saffron, Indian herbs, eggs, and yogurt then cooked in tandoor and served with grilled onions, peppers and our special tikka sauce.",
              "price": 12.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "CHICKEN CHILLI TIKKA",
              "sequence": 6,
              "description": "Chicken breast baked in tandoor then sautéed in pan with bell peppers, onions, chili sauce and herbs. Served with onions, peppers, lemon and our special tikka sauce.",
              "price": 12.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "LAMB TIKKA",
              "sequence": 7,
              "description": "Lamb marinated with our special red sauce with yogurt and herbs, cooked in tandoor and served with onions, peppers, lemon and our special masala sauce.",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MURG HARIYALI KABAAB",
              "sequence": 8,
              "description": "hicken breast marinated with mint and coriander sauce cooked in tandoori oven. Served with vegetables and special sauce.",
              "price": 14.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MURG MALAI KABAAB",
              "sequence": 9,
              "description": "Boneless chicken marinated with sour cream and cream cheese and cooked in tandoori oven. Served with vegetables and special sauce.",
              "price": 14.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "SHEEK KABAAB",
              "sequence": 10,
              "description": "Ground lamb blended with herbs, onions, green peppers, and eggs cooked in tandoor and served with grilled onions, peppers, lemon and our special tikka sauce.",
              "price": 14.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MIXED GRILL",
              "sequence": 11,
              "description": "A unique combination of chicken leg quarters, chicken tikka, lamb tikka, sheek kabab, fish, and prawns. All cooked in tandoor and served with grilled onions, peppers, lemon and our special tikka sauce.",
              "price": 14.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "MALAI LAMB CHOPS",
              "sequence": 12,
              "description": "Rack of lamb marinated in ginger, garlic, cashew, and almond with Indian spices and cooked in tandoori oven.",
              "price": 14.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "RACK OF LAMB",
              "sequence": 13,
              "description": "Our best dish of lamb specially marinated with red wine, herbs and our chef’s choice of special masala. Served with grilled onions, peppers, lemon and our special tikka sauce.",
              "price": 14.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "TANDOORI PRAWN",
              "sequence": 14,
              "description": "Marinated and cooked in tandoor. Served with grilled onions, peppers, lemon and our special tikka sauce.",
              "price": 14.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Prawns",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    },
                    {
                      "name": "Jumbo Prawns",
                      "price": 5.0,
                      "sequence": 2,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "FISH TIKKA",
              "sequence": 15,
              "description": "ish marinated with garlic, ginger, yogurt, and traditional Indian spices. Cooked in tandoor and served with grilled onions, green peppers, lemon and our special tikka sauce.",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Basmati Rice",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                },
                {
                  "name": "Choice of Meat",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 2,
                  "itemOptionValues": [
                    {
                      "name": "Cod",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    },
                    {
                      "name": "Salmon",
                      "price": 0.0,
                      "sequence": 2,
                      "isDefault": true
                    },
                    {
                      "name": "Halibut",
                      "price": 11.0,
                      "sequence": 3,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            }
          ]
        },
        {
          "name": "BREAD KI BASKET [ breads ]",
          "sequence": 6,
          "active": true,
          "items": [
            {
              "name": "TANDOORI ROTI",
              "sequence": 1,
              "description": "Round-shaped whole wheat bread baked in tandoor.",
              "price": 2.25,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "PLAIN NAAN",
              "sequence": 2,
              "description": "Teardrop shaped traditional Punjabi white bread baked in tandoor",
              "price": 2.25,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "GARLIC NAAN",
              "sequence": 3,
              "description": "Teardrop shaped traditional Punjabi white bread topped with fresh garlic and coriander then baked in tandoor.",
              "price": 2.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "ONION NAAN",
              "sequence": 4,
              "description": "Teardrop shaped traditional Punjabi white bread topped with fresh onions and cilantro then baked in tandoor.",
              "price": 3.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "SPINACH NAAN",
              "sequence": 5,
              "description": "Scrumptious unleavened bread filled with a mixture of fresh spinach and onions then baked in tandoor.",
              "price": 3.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "KEEMA NAAN",
              "sequence": 6,
              "description": "Scrumptious unleavened bread stuffed with delicately minced lamb and herbs then baked in tandoor.",
              "price": 3.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "KABULI NAAN",
              "sequence": 7,
              "description": "Scrumptious unleavened bread stuffed with raisins and dry nuts then baked in tandoor",
              "price": 3.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "BULLET NAAN",
              "sequence": 8,
              "description": "Scrumptious unleavened bread filled with green chili and cilantro then baked in tandoor.",
              "price": 2.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "METHI PARATHA",
              "sequence": 9,
              "description": "Whole wheat bread with fenugreek leaves baked in tandoor.",
              "price": 3.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "LACHA PARATHA",
              "sequence": 10,
              "description": "Layered whole wheat bread baked in tandoor",
              "price": 3.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "ALOO KULCHA",
              "sequence": 11,
              "description": "Scrumptious unleavened bread filled with a mixture of baked potatoes, green chilies, fresh coriander and herbs",
              "price": 3.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "ONION GOBHI KULCHA",
              "sequence": 12,
              "description": "Scrumptious unleavened bread filled with a mixture of delicately spiced onions, and fresh minced cauliflower.",
              "price": 3.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            }
          ]
        },
        {
          "name": "CHAWAL SE BANNA [ rice and biryani entrees ]",
          "sequence": 7,
          "active": true,
          "items": [
            {
              "name": "VEGETABLE BRIYANI",
              "sequence": 1,
              "description": "Garden fresh vegetables cooked with basmati rice and special herbs.",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Raita",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "CHICKEN BRIYANI",
              "sequence": 2,
              "description": "Sautéed chicken cooked with basmati rice and our chef choice of herbs with nuts and raisins",
              "price": 11.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Raita",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "LAMB BRIYANI",
              "sequence": 3,
              "description": "Cubes of lamb cooked with basmati rice, nuts, raisins and our special biryani masala.",
              "price": 12.95,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Raita",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "PRAWN BRIYANI",
              "sequence": 4,
              "description": "Prawns cooked with basmati rice, onions, green peppers, tomatoes, dry nuts and our special biryani masala.",
              "price": 13.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Choice of Rice",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "Raita",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "LEMON RICE",
              "sequence": 5,
              "description": "Rice cooked with lentils and flavored with lemon sauce.",
              "price": 6.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "TOMATO RICE",
              "sequence": 6,
              "description": "Saffron rice cooked with fresh tomato and herbs",
              "price": 6.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "CURD RICE",
              "sequence": 7,
              "description": "Mashed basmati rice mixed with homemade yogurt and South Indian tadka.",
              "price": 6.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "KASHMIRI PULAO",
              "sequence": 8,
              "description": "Saffron rice cooked with fruits, vegetables, nuts and homemade cheese.",
              "price": 6.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "VEGETARIAN THALI DINNER",
              "sequence": 9,
              "description": "A tasty adventure of two of chef’s choices of vegetable curries, daal makhni, channa masala, served with soup, raita, salad, rice, sambar, achar , pappadam, dessert, and naan bread. An Indian steel dish (thali).",
              "price": 13.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "NON-VEGETRIAN THALI DINNER",
              "sequence": 10,
              "description": "A tasty adventure of three kinds of meat: chicken tikka masala, tandoori chicken, chicken tikka, three vegetarian curries, one special chef’s choice curry, daal makhni, channa masala, served with soup, raita, salad, rice, sambar, achar, pappadam, dessert and naan bread.",
              "price": 15.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            }
          ]
        }
      ]
    },
    {
      "name": "Sides Dishes",
      "sequence": 3,
      "active": true,
      "subsections": [
        {
          "sequence": 1,
          "active": true,
          "items": [
            {
              "name": "PAPPDAM",
              "sequence": 1,
              "description": "Thin crisp wafers made with lentil flour.",
              "price": 1.5,
              "active": true,
              "itemOptionGroups": [
                {
                  "name": "Pieces",
                  "type": "OPTION_CHOOSE",
                  "required": true,
                  "sequence": 1,
                  "itemOptionValues": [
                    {
                      "name": "2 Pieces",
                      "price": 0.0,
                      "sequence": 1,
                      "isDefault": true
                    }
                  ]
                }
              ],
              "itemImages": []
            },
            {
              "name": "RAITA",
              "sequence": 2,
              "description": "Yogurt mixed with onions, cucumbers, tomatoes and cilantro.",
              "price": 2.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "MIX PICKLES",
              "sequence": 3,
              "description": "Savory relish containing lemon, carrot, green mango, green chilies and other ingredients.",
              "price": 2.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "MANGO CHUTNEY",
              "sequence": 4,
              "description": "Savory relish made with succulent mangoes.",
              "price": 3.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "POORI",
              "sequence": 5,
              "description": "Bread fried until bubbly.",
              "price": 3.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "FRUIT RAITA",
              "sequence": 6,
              "description": "Yogurt mixed with fruits, onions, cucumbers, tomatoes and cilantro.",
              "price": 4.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "BASMATI RICE",
              "sequence": 7,
              "description": "Traditional and delicate non-glutinous rice with a fragrance.",
              "price": 4.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            }
          ]
        }
      ]
    },
    {
      "name": "Beverages",
      "sequence": 4,
      "active": true,
      "subsections": [
        {
          "sequence": 1,
          "active": true,
          "items": [
            {
              "name": "ICE TEA",
              "sequence": 1,
              "price": 1.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "COFFEE",
              "sequence": 2,
              "price": 1.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "SOFT DRINKS",
              "sequence": 3,
              "price": 1.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "ORANGE JUICE",
              "sequence": 4,
              "price": 2.25,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "MANGO JUICE",
              "sequence": 5,
              "description": "Juice made from mango pulp",
              "price": 2.5,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "CHAI TEA",
              "sequence": 6,
              "description": "An ancient tea of India made up of milk, cardamom, cloves, fennel and sugar.",
              "price": 2.0,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "MANGO PINEAPPLE LASSI",
              "sequence": 7,
              "description": "Traditional Indian drink made with homemade yogurt, milk, mango pulp, pineapple and rosewater.",
              "price": 3.25,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "SWEET LASSI",
              "sequence": 8,
              "description": "Traditional Indian drink made with homemade yogurt, milk, rosewater and flavored with sugar.",
              "price": 2.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "SALTY LASSI",
              "sequence": 9,
              "description": "Traditional Indian drink made with homemade yogurt, milk, rosewater and flavored with salt.",
              "price": 2.95,
              "active": true,
              "itemOptionGroups": [],
              "itemImages": []
            },
            {
              "name": "FRESH GINGER WITH LEMON SODA",
              "sequence": 10,
              "description": "Traditional ginger drink with a twist of lemon soda.",
              "price": 3.95,
              "active": true,
              'itemOptionGroups': [],
              'itemImages': []
            }
          ]
        }
      ]
    }
  ]
}

module.exports = {
  KANISHKA_MENU
}
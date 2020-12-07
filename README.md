# Serverless Backend For Zeat Application
This repository contains following REST services used by Zeat.

## Diner
  #### Register Diner
  Rest API used for registering Diner
  #### Register Diner Token
  Rest API for registering Diner iOS App tokens. These are later used by Firebase Cloud to send notifications
  #### Delete Diner Token
  Rest API to delete Diner tokens that are returned by FCM to be invalid (or no longer in use)

## Restaurant
  #### Create Restaurant
  Rest API used for creating a new restaurant available for use within Zeat. The API maps the restaurant address to a Geohash value
  generated using Latitude/Lonitude details fetched using Google places. The geohash value is later used to search nearby restaurant
  at a given location
  #### Get Restaurant
  Rest API used to get additional information about the Restaurant
  #### Search Restaurant
  Rest API used to search restaurant based on location provided. Search functionality uses the "latlon-geohash" library to convert current location to
  a Geohash value, find neighbours of a geohash and retrieve restuarants located in the Geohash value. A single geohash value covers 5 square miles.
  #### Create Dining Tables
  Rest API used to register tables inside a restaurant
  #### List Order
  Rest API used to retrieve current Active orders and orders in queue. This allows other users to join existing orders.
  
## Order
  #### Create Order
  Rest API used to create a new order for a restuarant and diner.
  #### Get Active Order
  Rest API used to retreive current active order for a given diner
  #### Get Order Details
  Rest API used to retreive order details that includes details about order, order items, diner, server and status on each order items.
  #### Join Order
  Rest API used by a diner to join an existing order that may have other diners
  #### Approve Diner
  Rest API used by a diner to aprpove join requests from other diners. Only already approved diners can approve new incoming diner requests.
  #### Update Items
  Rest API used to update order items
  
## FCM (Firebase Cloud Messaging)
  #### Notify Diner
  Rest API used to send notification to a specific diner app on device.
  #### Notify Order Diners
  Rest API used to send notification to a all approved diners in a given order. This is primarily used to send approve notifications, payment notifications.


# Services Used
  #### AWS:DynamoDB
  #### 

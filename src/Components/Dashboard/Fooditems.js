/** @format */

import Img1 from "../Assets/Img1";
import Img2 from "../Assets/Img2";
import Img3 from "../Assets/Img3";
import Img4 from "../Assets/Img4";
import Img5 from "../Assets/Img5";
import Img6 from "../Assets/Img6";

import uuid from "react-uuid";

const Fooditems = [
  
    {_id: uuid(),image: Img1,name: "Hamburger",description: "The in-house pasta and chicken by chef Moose",detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.`,
    price: 500, quantity: 10, cookingTime: "10-20 Mins", packsAvailable: 25,},

  {_id: uuid(), image: Img2, name: "Stir Noodles Fry Pasta",description: "The in-house pasta and chicken by chef Moose",detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.`,
    price: 2000, quantity: 10, cookingTime: "30 - 50 Mins", packsAvailable: 15,},

  { _id: uuid(), image: Img3, name: "Noodles Fry Pasta", description: "The in-house pasta and chicken by chef Moose", detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.`,
    price: 3000, quantity: 10, cookingTime: "10-35 Mins", packsAvailable: 4,},

  {_id: uuid(), image: Img4, name: "Stir Fry Pasta", description: "The in-house pasta and chicken by chef Moose", detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.`,
    price: 1800, cookingTime: "10-40 Mins", packsAvailable: 30,},

  { _id: uuid(), image: Img5, name: "Baked Fruit Bread", description: "The in-house pasta and chicken by chef Moose", detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.`,
    price: 2000, quantity: 10, cookingTime: "10-20 Mins", packsAvailable: 5, },

  {_id: uuid(), image: Img6, name: "Spicy Hot Soup", description: "The in-house pasta and chicken by chef Moose", detailDescription: `Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.`,
    price: 4500, quantity: 10, cookingTime: "10 - 40 Mins", packsAvailable: 10, },
    
];

export default Fooditems;
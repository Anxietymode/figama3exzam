import xbox from "../assets/3143a7d593779ec659fc9333be996cce47390fa1 (1).png"
import pixel from "../assets/1e27e3da3a9722cbfd03ad06711ce321ea6a8e37 (1).png"
import xiomi from "../assets/77ff1aeb09dedd4bf17ee12f721038f32073f7a3.png"
export const TOP_BAR = {
  text: "Black Friday",
  discount: "Up to 59% OFF",
  buttonText: "SHOP NOW"
};
export const HERO_MAIN = {
  id: "hero-main",
  badge: "THE BEST DEALS",
  title: "Xbox Consoles",
  subtitle: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2.",
  price: "$299",
  buttonText: "SHOP NOW",
  image: xbox 
};
export const HERO_SIDE_BANNERS = [
  {
    id: "hero-side-1",
    tag: "SUMMER SALES",
    title: "New Google Pixel 6 Pro",
    buttonText: "SHOP NOW",
    badge: "29% OFF",
    variant: "dark",
    image: pixel 
  },
  {
    id: "hero-side-2",
    title: "Xiaomi FlipBuds Pro",
    price: "$299",
    buttonText: "SHOP NOW",
    variant: "light",
    image: xiomi, 
    reverse: true 
  }
];
export const FEATURES = [
  { id: "feat-1", title: "Fasted Delivery", subtitle: "Delivery in 24/H", icon: "truck" },
  { id: "feat-2", title: "24 Hours Return", subtitle: "100% money-back guarantee", icon: "refresh" },
  { id: "feat-3", title: "Secure Payment", subtitle: "Your money is safe", icon: "credit-card" },
  { id: "feat-4", title: "Support 24/7", subtitle: "Live contact/message", icon: "headphones" }
];
import ps5 from "../assets/a81ee337d4864b5bf82a65669ff6c6b965655324 (1).png"
export const BEST_DEALS_MAIN = {
  id: "bd-main",
  badge: "HOT",
  title: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version",
  rating: 5,
  reviewCount: 1543,
  desc: "Experience next-gen speed and performance with the Xbox Series S. Enjoy faster load times, higher frame rates, and the ability to play thousands of games across four generations of consoles. Includes a wireless controller, 512GB custom SSD, and access to Xbox Game Pass.",
  price: 442,
  oldPrice: 1200,
  stockAvailable: 45,
  stockTotal: 100,
  image: ps5
};
import bose from "../assets/45ffebea53178df09da5b55aa5ec9c64f9c97219.png"
import simple from "../assets/2c2703028e858e93057b03391653381259c5700c.png"
import gamepad from "../assets/0e25c65909ff9d8fdace00ffb430dbc3cbf9784b.png"
import sony from "../assets/75f933488e77c84cec61c3d90da76bd9f858e174.png"
import dell from "../assets/4d11c06a3b45a80aa15dd6606ef1562a06207fcc.png"
import djji from "../assets/737fab14deba33544aa6bd068190f87ad999d05b.png"
import monoblok from "../assets/89ed235ee47f8d384c57df36ae75c564312166e3.png"
import camera from "../assets/bfff735353defe484834b22911ee350ed96cc0b7.png"
export const BEST_DEALS_GRID = [
  { id: "bd-1", badge: "SOLD OUT", badgeColor: "gray", title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...", price: 2300, image: bose },
  { id: "bd-2", title: "Simple Mobile 4G LTE Prepaid Smartphone", price: 220, image: simple },
  { id: "bd-3", badge: "SALE", badgeColor: "green", title: "4K UHD LED Smart TV with Chromecast Built-in", price: 150, image: gamepad },
  { id: "bd-4", title: "Sony DSCHX8 High Zoom Point & Shoot Camera", price: 1200, image: sony },
  { id: "bd-5", title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor", price: 299, image: dell },
  { id: "bd-6", title: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM", price: 70, image: djji },
  { id: "bd-7", badge: "15% OFF", badgeColor: "yellow", title: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower", price: 160, image: monoblok },
  { id: "bd-8", badge: "HOT", badgeColor: "red", title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black", price: 250, image: camera }
];
import ComputerLaptop from "../assets/ca28168661494544c040fd06143b1849c7e4949c.png"
import smartfone from "../assets/73ed2beb18a318d21fd8032b1eee4f78954a1f41.png"
import haeadphones from "../assets/02b5b8148c7964c637473e93f37838c61aa6518a.png"
import keybord from "../assets/087aa93b61f852570ef1a276c308f0bac501f965.png"
import camera2 from "../assets/e2c006f961a88c6ffdcef9bfaf8dae64692d02c6.png"
import tv from "../assets/533762fd955d09b426e32da1e1ba5d72846dcc87.png"
export const CATEGORIES = [
  { id: "cat-1", title: "Computer & Laptop", image:ComputerLaptop },
  { id: "cat-2", title: "SmartPhone", image: smartfone },
  { id: "cat-3", title: "Headphones", image: haeadphones},
  { id: "cat-4", title: "Accessories", image: keybord },
  { id: "cat-5", title: "Camera & Photo", image: camera2 },
  { id: "cat-6", title: "TV & Homes", image: tv }
];
import Banner from "../assets/a5935e4ae865aea09c3021d056c99782b3748bc2 (1).jpg"
export const FEATURED_BANNER = {
  id: "feat-banner",
  tag: "COMPUTER & ACCESSORIES",
  title: "32% Discount",
  subtitle: "For all electronics products",
  image: Banner,
  buttonText: "SHOP NOW"
};
import tozo from "../assets/19f8efb6b687c0c55e606ba75d77672a5e6f1843.png"
import amazon from "../assets/8b7da2e5b680368b609673291d0d811ef1d61429.png"
import dellopux from "../assets/f9bf2cf3071c7c521aa2c422d5d23dd010c66f66.png"
export const FEATURED_GRID = [
  { id: "fp-1", badge: "HOT", badgeColor: "red", title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...", price: 70, rating: 5, image: tozo },
  { id: "fp-2", title: "Samsung Electronics Samsung Galexy S21 5G", price: 2300, rating: 4, image: dell },
  { id: "fp-3", badge: "25% OFF", badgeColor: "blue", title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...", price: 360, oldPrice: 599, rating: 5, image: amazon },
  { id: "fp-4", title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...", price: 80, rating: 5, image: sony },
  { id: "fp-5", title: "Wired Over-Ear Gaming Headphones with USB", price: 1500, rating: 4, image: djji },
  { id: "fp-6", title: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...", price: 1200, oldPrice: 1799, rating: 5, image: tv },
  { id: "fp-7", title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor", price: 250, rating: 4, image: dellopux },
  { id: "fp-8", title: "4K UHD LED Smart TV with Chromecast Built-in", price: 220, rating: 5, image: simple }
];
import apple from "../assets/b3e5e0816e177fdb427092d6b8d921475a201918 (1).png"
import xiomiultra from "../assets/e6ff3417e24ae221ecb7179d94af93cf33ba079b (1).png"
export const MID_BANNERS = [
  {
    id: "mid-1",
    tag: "INTRODUCING",
    title: "New Apple Homepod Mini",
    subtitle: "Jam-packed with innovation, HomePod mini delivers unexpectedly big sound.",
    buttonText: "SHOP NOW",
    variant: "light",
    image: apple
  },
  {
    id: "mid-2",
    tag: "INTRODUCING NEW",
    tagColor: "yellow",
    title: "Xiaomi Mi 11 Ultra 12GB+256GB",
    subtitle: "Data-driven flagship camera phone with revolutionary display.",
    buttonText: "SHOP NOW",
    variant: "dark",
    image: xiomiultra,
    fullImage: true
  }
];
import amazon2 from "../assets/ed62e58d23bd3d5abbca613c97251d7a95cb75d3.png"
import printer from "../assets/a669957b269d26688b7fa4a2ff9b422a708bab91.png"
import webcamera from "../assets/a2bcce713855ae2fd192a32dfdf3f83c573dc660.png"
import printer2 from "../assets/5e1217e5d2d0007baf0fb9d3df15aaa7bf2b305f.png"
import stirlaka from "../assets/fb1330601a226650101c63cd37daa0583a1f726d.png"
export const COMPUTER_ACCESSORIES_GRID = [
  { id: "ca-1", title: "Amazon Basics High-Speed HDMI Cable", price: 360, rating: 4, badge: "BEST DEALS", badgeColor: "blue", image:amazon2 },
  { id: "ca-2", title: "Portable Wshing Machine, 11lbs capacity", price: 80, rating: 5, image: sony },
  { id: "ca-3", title: "TOZO T6 True Wireless Earbuds", price: 70, rating: 5, badge: "HOT", badgeColor: "red", image: keybord },
  { id: "ca-4", title: "Dell Optiplex 7000x7480 All-in-One", price: 250, rating: 5, image: printer },
  { id: "ca-5", title: "Samsung Electronics Galaxy S21 5G", price: 2300, rating: 4, image: camera },
  { id: "ca-6", title: "4K UHD LED Smart TV", price: 220, rating: 4, badge: "SALE", badgeColor: "green", image: webcamera },
  { id: "ca-7", title: "Wired Over-Ear Gaming Headphones", price: 1500, rating: 4, image: printer2 },
  { id: "ca-8", title: "Polaroid 57-Inch Tripod", price: 1200, oldPrice: 1600, rating: 4, badge: "25% OFF", badgeColor: "yellow", image: stirlaka }
];
import xiomi3 from "../assets/4b480bd388d0435a7655fbca6aa273ad5ce196e1.png"
export const COMPUTER_ACCESSORIES_BANNERS = [
  {
    id: "ca-ban-1",
    type: "yellow",
    title: "Xiaomi True Wireless Earbuds",
    subtitle: "Escape the noise, It's time to hear the magic with Xiaomi Earbuds.",
    price: "₹299 USD",
    buttonText: "SHOP NOW",
    image: xiomi3
  },
  {
    id: "ca-ban-2",
    type: "blue",
    tag: "SUMMER SALES",
    title: "37% DISCOUNT",
    subtitle: "only for SmartPhone product.",
    buttonText: "SHOP NOW"
  }
];
import macbook from "../assets/85b0d3b5fbf2d4a308ed09b8dd0b0ff62d7ea9d4.png"
export const MACBOOK_BANNER = {
  tag: "SAVE UP TO $200",
  title: "Macbook Pro",
  subtitle: "Apple M1 Max chip. Supercharged for pros.",
  price: "$1999",
  buttonText: "SHOP NOW",
  image: macbook
};
import camera3 from "../assets/6861bd5cd64f37ecf68eb8d28f8d0c7ef90bce6d.png"
import colonka from "../assets/85822a8c202adfe7edcc6e0e7124d80823f51b11.png"
export const WIDGETS = {
  flashSale: [
    { id: "w-fs-1", title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...", price: 1500, image: webcamera },
    { id: "w-fs-2", title: "Simple Mobile 4G LTE Prepaid Smartphone", price: 1500, image: dell },
    { id: "w-fs-3", title: "4K UHD LED Smart TV with Chromecast Built-in", price: 1500, image: keybord }
  ],
  bestSellers: [
    { id: "w-bs-1", title: "Samsung Electronics Samsung Galexy S21 5G", price: 1500, image: ps5 },
    { id: "w-bs-2", title: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone", price: 1500, image: camera3 },
    { id: "w-bs-3", title: "Sony DSCHX8 High Zoom Point & Shoot Camera", price: 1500, image: tozo }
  ],
  topRated: [
    { id: "w-tr-1", title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...", price: 1500, image: tv },
    { id: "w-tr-2", title: "Sony DSCHX8 High Zoom Point & Shoot Camera", price: 1500, image: bose },
    { id: "w-tr-3", title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor", price: 1500, image: colonka }
  ],
  newArrival: [
    { id: "w-na-1", title: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...", price: 1500, image: simple },
    { id: "w-na-2", title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...", price: 1500, image: printer2 },
    { id: "w-na-3", title: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...", price: 1500, image: gamepad }
  ]
};
import applewatch from "../assets/a4bf09a2b2a0c4b41e79e059808e84ae39035884.jpg"
import robert from "../assets/464a92160a37ca30b46811cb1272a616ad550367.jpg" 
import arlene from "../assets/1ae4ad19fb920c42a1ba4e000babe2f166d453af.jpg"
export const LATEST_NEWS = [
  {
    id: "news-1",
    author: "Kristin",
    date: "19 Dec, 2023",
    comments: 453,
    title: "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
    desc: "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
    image: applewatch
  },

  {
    id: "news-2",
    author: "Robert",
    date: "28 Nov, 2023",
    comments: 738,
    title: "Curabitur pulvinar aliquam velit, eu imperdiet erat hendrerit sed.",
    desc: "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ",
    image: robert
  },
  {
    id: "news-3",
    author: "Arlene",
    date: "15 Nov, 2023",
    comments: 826,
    title: "Maecenas sed orci ac justo hendrerit vulputate in id lorem.",
    desc: "Fusce a vestibulum libero, vel facilisis mi. Vestibulum in finibus mi. Donec pretium libero ac.",
    image: arlene
  }
];

import zara from "../assets/58e35a3a4a1e4c51742161406e04554bec091a3c.png"

import zara2 from "../assets/cf78ab05aceaa019d04373ec4d0c51f9040217bc.png"

import zara3 from '../assets/i.webp'

import zara4 from "../assets/36771ab293524d8fc31ea9152165d4a584fb5eca.png"

import zara5 from "../assets/c306b0a0c9d6bc0698df9a4df692db6dc5ec351f.png"

import zara6 from "../assets/20cd68c7b3d7e8fe5a4552afe2e95f9550684261.png"

import zara7 from "../assets/1dc36798460af98a04dd4c5a36655dbf55df4e7b.png"

import zara8 from "../assets/e9907563e61b8c40be66e35680604730403fc635.png"

import zara9 from "../assets/378204ce15445fbbde97c31df261dc68dacf4a48.png"

export const ZARA_PRODUCTS = [
  {
    id: "zara-1",
    title: "ZARA Suit Blazer Midnight Black Cotton",
    image: zara,
    rating: 4.7,
    reviews: "21,871",
    hasFlashDeal: true,
    flashText: "Flash Deal Ends in 5 Hours !",
    progress: 75,
    hasGetDeal: true,
    price: "125",
  },
  {
    id: "zara-2",
    title: "ZARA Black SunGlasses Anti Dust Resistant",
    image: zara2,
    rating: 4.7,
    reviews: "21,871",
    hasFlashDeal: true,
    flashText: "Flash Deal Ends in 1 Hours !",
    progress: 90,
    hasGetDeal: true,
    price: "125",
  },
  {
    id: "zara-3",
    title: "Black Boots with Glossy Finishing Travel",
    image: zara3,
    rating: 4.7,
    reviews: "21,871",
    hasFlashDeal: true,
    flashText: "Flash Deal Ends in 5 Hours !",
    progress: 40,
    hasGetDeal: true,
    price: "125",
  },
  {
    id: "zara-4",
    title: "ZARA Suit Blazer Midnight Black Cotton",
    image: zara4,
    rating: 4.7,
    reviews: "21,871",
    hasFlashDeal: false,
    hasGetDeal: false,
    price: "125",
  },
  {
    id: "zara-5",
    title: "ZARA Black SunGlasses Anti Dust Resistant",
    image: zara5,
    rating: 4.7,
    reviews: "21,871",
    hasFlashDeal: false,
    hasGetDeal: false,
    price: "125",
  },
  {
    id: "zara-6",
    title: "Black Boots with Glossy Finishing Travel",
    image: zara6,
    rating: 4.7,
    reviews: "21,871",
    hasFlashDeal: false,
    hasGetDeal: false,
    price: "125",
  },
  {
    id: "zara-7",
    title: "ZARA Suit Blazer Midnight Black Cotton",
    image: zara7,
    rating: 4.7,
    reviews: "21,871",
    hasFlashDeal: false,
    hasGetDeal: false,
    price: "125",
  },
  {
    id: "zara-8",
    title: "ZARA Black SunGlasses Anti Dust Resistant",
    image: zara8,
    rating: 4.7,
    reviews: "21,871",
    hasFlashDeal: false,
    hasGetDeal: false,
    price: "125",
  },
  {
    id: "zara-9",
    title: "Black Boots with Glossy Finishing Travel",
    image: zara9,
    rating: 4.7,
    reviews: "21,871",
    hasFlashDeal: false,
    hasGetDeal: false,
    price: "125",
  },
];

export const ALL_PRODUCTS = [
  ...BEST_DEALS_GRID,
  ...FEATURED_GRID,
  ...COMPUTER_ACCESSORIES_GRID,
  ...WIDGETS.flashSale,
  ...WIDGETS.bestSellers,
  ...WIDGETS.topRated,
  ...WIDGETS.newArrival,
  ...ZARA_PRODUCTS,
  BEST_DEALS_MAIN
];

export const getProductById = (id) => ALL_PRODUCTS.find(p => p.id === id);

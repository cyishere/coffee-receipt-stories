/**
 * @typedef {Object} KeywordImagesType
 * @property {string} selected - The image of the selected state.
 * @property {string} unselected - The image of the unselected state.
 */

/**
 * @typedef {Object} KeywordType
 * @property {number} id
 * @property {string} text - The keyword in text
 * @property {KeywordImagesType} images - The image's url of this keyword
 * @property {number} width
 * @property {number} height
 */

/**
 * @type {KeywordType[]} KEYWORDS
 */
export const KEYWORDS = [
  {
    id: 1,
    text: "Dreams",
    images: {
      selected: "/images/keywords/dreams-selected.png",
      unselected: "/images/keywords/dreams-unselected.png",
    },
    width: 180,
    height: 60,
  },
  {
    id: 2,
    text: "Travel",
    images: {
      selected: "/images/keywords/travel-selected.png",
      unselected: "/images/keywords/travel-unselected.png",
    },
    width: 183,
    height: 60,
  },
  {
    id: 3,
    text: "Other' Stories",
    images: {
      selected: "/images/keywords/others-stories-selected.png",
      unselected: "/images/keywords/others-stories-unselected.png",
    },
    width: 286,
    height: 66,
  },
  {
    id: 4,
    text: "Coffee",
    images: {
      selected: "/images/keywords/coffee-selected.png",
      unselected: "/images/keywords/coffee-unselected.png",
    },
    width: 177,
    height: 60,
  },
  {
    id: 5,
    text: "Fiction",
    images: {
      selected: "/images/keywords/fiction-selected.png",
      unselected: "/images/keywords/fiction-unselected.png",
    },
    width: 190,
    height: 63,
  },
  {
    id: 6,
    text: "Life in Japan",
    images: {
      selected: "/images/keywords/life-in-japan-selected.png",
      unselected: "/images/keywords/life-in-japan-unselected.png",
    },
    width: 306,
    height: 67,
  },
  {
    id: 7,
    text: "Infographic",
    images: {
      selected: "/images/keywords/infographic-selected.png",
      unselected: "/images/keywords/infographic-unselected.png",
    },
    width: 262,
    height: 66,
  },
  {
    id: 8,
    text: "Everyday Life",
    images: {
      selected: "/images/keywords/everyday-life-selected.png",
      unselected: "/images/keywords/everyday-life-unselected.png",
    },
    width: 305,
    height: 67,
  },
  {
    id: 9,
    text: "Readings",
    images: {
      selected: "/images/keywords/readings-selected.png",
      unselected: "/images/keywords/readings-unselected.png",
    },
    width: 208,
    height: 62,
  },
];

/**
 * @typedef {Object} LocationType
 * @property {number} id
 * @property {string} text - The keyword in text
 * @property {string} image - The image's url of this keyword
 * @property {number} width
 * @property {number} height
 */

/**
 * @type {LocationType[]} LOCATION
 */
export const LOCATION = [
  {
    id: 1,
    text: "Japan",
    image: "/images/location/japan.png",
    width: 102,
    height: 63,
  },
  {
    id: 2,
    text: "Cambodia",
    image: "/images/location/cambodia.png",
    width: 147,
    height: 65,
  },
  {
    id: 3,
    text: "China",
    image: "/images/location/china.png",
    width: 93,
    height: 60,
  },
  {
    id: 4,
    text: "Laos",
    image: "/images/location/laos.png",
    width: 84,
    height: 53,
  },
  {
    id: 5,
    text: "UAE",
    image: "/images/location/uae.png",
    width: 84,
    height: 54,
  },
  {
    id: 6,
    text: "Morocco",
    image: "/images/location/morocco.png",
    width: 153,
    height: 58,
  },
  {
    id: 7,
    text: "Canada",
    image: "/images/location/canada.png",
    width: 112,
    height: 58,
  },
  {
    id: 8,
    text: "Cuba",
    image: "/images/location/cuba.png",
    width: 98,
    height: 61,
  },
  {
    id: 9,
    text: "Colombia",
    image: "/images/location/colombia.png",
    width: 146,
    height: 58,
  },
];

/**
 * @type {LocationType[]} LOCATION
 */
export const LOCATION_IN_JAPAN = [
  {
    id: 1,
    text: "Nagano",
    image: "/images/location/nagano.png",
    width: 96,
    height: 47,
  },
  {
    id: 2,
    text: "Aichi",
    image: "/images/location/aichi.png",
    width: 78,
    height: 57,
  },
  {
    id: 3,
    text: "Okinawa",
    image: "/images/location/okinawa.png",
    width: 133,
    height: 39,
  },
  {
    id: 4,
    text: "Akita",
    image: "/images/location/akita.png",
    width: 85,
    height: 43,
  },
  {
    id: 5,
    text: "Niigata",
    image: "/images/location/Niigata.png",
    width: 88,
    height: 40,
  },
  {
    id: 6,
    text: "Saitama",
    image: "/images/location/saitama.png",
    width: 104,
    height: 48,
  },
  {
    id: 7,
    text: "Aomori",
    image: "/images/location/aomori.png",
    width: 98,
    height: 36,
  },
  {
    id: 8,
    text: "Miyagi",
    image: "/images/location/Miyagi.png",
    width: 104,
    height: 37,
  },
  {
    id: 9,
    text: "Tochigi",
    image: "/images/location/Tochigi.png",
    width: 114,
    height: 34,
  },
  {
    id: 10,
    text: "Tokyo",
    image: "/images/location/tokyo.png",
    width: 102,
    height: 37,
  },
];

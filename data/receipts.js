/**
 * @typedef {Object} SizeType
 * @property {number} width
 * @property {number} height
 */

/**
 * @typedef {Object} ReceiptType
 * @property {string} id The id of each item.
 * @property {string} location The location of each item.
 * @property {string} keyword The keyword of each item.
 * @property {boolean} featured Whether the receipt is featured on the home page.
 * @property {number} width The width of each item's image
 * @property {number} height The height of each item's image
 * @property {SizeType} fixed
 * @property {number} featured_stack_order The display order according to the design.
 */

/**
 * @type {ReceiptType[]} RECEIPTS
 */
export const RECEIPTS = [
  {
    id: "006",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 835,
    height: 1510,
  },
  {
    id: "023",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 791,
    height: 1390,
  },
  {
    id: "032",
    location: "Tokyo",
    keyword: "everyday life",
    featured: true,
    width: 563,
    height: 1421,
    fixed: {
      width: 243,
      height: 648,
    },
    featured_stack_order: 5,
  },
  {
    id: "043",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 636,
    height: 1560,
  },
  {
    id: "047",
    location: "Tokyo",
    keyword: "everday life",
    featured: true,
    width: 634,
    height: 1235,
    fixed: {
      width: 280,
      height: 570,
    },
    featured_stack_order: 4,
  },
  {
    id: "104",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 749,
    height: 1100,
  },
  {
    id: "122",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 755,
    height: 1054,
  },
  {
    id: "134",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 1445,
    height: 963,
  },
  {
    id: "135",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 1239,
    height: 908,
  },
  {
    id: "145",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 552,
    height: 1322,
  },
  {
    id: "148",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 967,
    height: 1208,
  },
  {
    id: "163",
    location: "Cuba",
    keyword: "travel",
    featured: true,
    width: 825,
    height: 1236,
    fixed: {
      width: 310,
      height: 470,
    },
    featured_stack_order: 9,
  },
  {
    id: "166",
    location: "Colombia",
    keyword: "travel",
    featured: true,
    width: 864,
    height: 1653,
    fixed: {
      width: 296,
      height: 595,
    },
    featured_stack_order: 3,
  },
  {
    id: "172",
    location: "Colombia",
    keyword: "travel",
    featured: true,
    width: 1240,
    height: 815,
    fixed: {
      width: 563,
      height: 366,
    },
    featured_stack_order: 2,
  },
  {
    id: "240",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 840,
    height: 1399,
  },
  {
    id: "269",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 842,
    height: 1646,
  },
  {
    id: "277",
    location: "Tokyo",
    keyword: "infographic",
    featured: true,
    width: 1107,
    height: 1384,
    fixed: {
      width: 271,
      height: 619,
    },
    featured_stack_order: 7,
  },
  {
    id: "278",
    location: "Tokyo",
    keyword: "art music",
    featured: true,
    width: 725,
    height: 906,
    fixed: {
      width: 262,
      height: 435,
    },
    featured_stack_order: 8,
  },
  {
    id: "300",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 737,
    height: 1426,
  },
  {
    id: "316",
    location: "Morocco",
    keyword: "travel",
    featured: true,
    width: 1095,
    height: 1369,
    fixed: {
      width: 295,
      height: 506,
    },
    featured_stack_order: 6,
  },
  {
    id: "328",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 1744,
    height: 978,
  },
  {
    id: "342",
    location: "Tokyo",
    keyword: "dreams",
    featured: true,
    width: 729,
    height: 911,
    fixed: {
      width: 329,
      height: 473,
    },
    featured_stack_order: 1,
  },
  {
    id: "348",
    location: "",
    keyword: "dreams",
    featured: false,
    width: 1065,
    height: 1332,
  },
  {
    id: "434",
    location: "Tokyo",
    keyword: "dreams",
    featured: true,
    width: 840,
    height: 1050,
    fixed: {
      width: 235,
      height: 311,
    },
    featured_stack_order: 10,
  },
];

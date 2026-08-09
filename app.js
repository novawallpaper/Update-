/* ================= SAFETY FALLBACKS =================
   If config.js failed to load (wrong path, missing file, etc.)
   these prevent a total blank-page crash. Real values from
   config.js are always used when present. */
if (typeof BRAND_NAME === 'undefined') { window.BRAND_NAME = 'Mitti Manor'; }
if (typeof BRAND_TAGLINE === 'undefined') { window.BRAND_TAGLINE = "India's favourite plant store"; }
if (typeof GOOGLE_CLIENT_ID === 'undefined') { window.GOOGLE_CLIENT_ID = ''; }
if (typeof RAZORPAY_KEY_ID === 'undefined') { window.RAZORPAY_KEY_ID = ''; }
if (typeof firebaseConfig === 'undefined') { window.firebaseConfig = null; }

/* ================= ICONS (thin line SVGs) ================= */
const ICONS = {
  all: '<path d="M12 3c-1.2 3-1.2 5.2 0 8 1.2-2.8 1.2-5 0-8Z"/><path d="M12 11c-3-1-5.2-3.2-7.5-2 1.2 3.2 4.3 4.2 7.5 3Z"/><path d="M12 11c3-1 5.2-3.2 7.5-2-1.2 3.2-4.3 4.2-7.5 3Z"/><path d="M12 11v9"/><path d="M8 20h8"/>',
  plants: '<path d="M7 21h10"/><path d="M9 21v-6a3 3 0 0 1 3-3 3 3 0 0 1 3 3v6"/><path d="M12 12V5"/><path d="M12 8.5C10 8.5 9 7 9 5c2 0 3 1.2 3 3.5Z"/><path d="M12 7c2 0 3-1.2 3-3.3-2 0-3 1-3 3.3Z"/>',
  pots: '<path d="M6 9h12l-1.6 10.6A2 2 0 0 1 14.4 21H9.6a2 2 0 0 1-2-1.4L6 9Z"/><path d="M4 9h16"/><path d="M9 9c0-2.5 1.3-4.5 3-4.5S15 6.5 15 9"/>',
  soil: '<rect x="5" y="7.5" width="14" height="13" rx="1.5"/><path d="M5 7.5 7 4h10l2 3.5"/><path d="M8.5 14c1-1 2-1 3 0s2 1 3 0"/><path d="M8.5 17c1-1 2-1 3 0s2 1 3 0"/>',
  tools: '<path d="M9 3v6"/><path d="M6 3v4a3 3 0 0 0 3 3 3 3 0 0 0 3-3V3"/><path d="M9 12v9"/><path d="m18 4-6 6 2 2 6-6-2-2Z"/><path d="M14 12v9"/>',
  seeds: '<rect x="6" y="5.5" width="12" height="15.5" rx="1.5"/><path d="M6 10h12"/><ellipse cx="12" cy="15.3" rx="2.6" ry="3.3"/>',
  decor: '<path d="M4.5 21 5.5 10h13l1 11"/><path d="M12 3 3 10h18L12 3Z"/>',
  gifting: '<rect x="4" y="9" width="16" height="11.5" rx="1"/><path d="M3.5 9h17v3.5h-17z"/><path d="M12 9v12"/><path d="M12 9C10.5 5 6 5.3 6 8c0 1.6 2.5 1.4 6 1Z"/><path d="M12 9c1.5-4 6-3.7 6-1 0 1.6-2.5 1.4-6 1Z"/>',
  stands: '<path d="M12 3v6"/><ellipse cx="12" cy="9" rx="4.2" ry="2.3"/><path d="M8 15h8"/><path d="M9.5 21 12 15l2.5 6"/><path d="M6 21h12"/>',
  makeover: '<path d="M5 20V10.5l7-5.8 7 5.8V20"/><path d="M9.3 20v-6.2h5.4V20"/><path d="M9.3 9.3c0-1.6 1.1-2.6 2.7-2.6s2.7 1 2.7 2.6"/>',
  deals: '<circle cx="12" cy="12" r="8.5"/><path d="m8.5 15.5 7-7"/><circle cx="9.2" cy="9.2" r="1"/><circle cx="14.8" cy="14.8" r="1"/>',
  new: '<path d="M12 2.5 3.5 7.3v9.4l8.5 4.8 8.5-4.8V7.3L12 2.5Z"/><path d="M12 8v4.2l2.6 1.8"/>',
  home: '<path d="M4 11.2 12 4l8 7.2"/><path d="M6 10v10h4.5v-6h3v6H18V10"/>',
  category: '<rect x="4" y="4" width="7" height="7" rx="1.2"/><rect x="13" y="4" width="7" height="7" rx="1.2"/><rect x="4" y="13" width="7" height="7" rx="1.2"/><rect x="13" y="13" width="7" height="7" rx="1.2"/>',
  cart: '<path d="M3 4h2l2.3 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H6.2"/><circle cx="9.5" cy="21" r="1.3"/><circle cx="17" cy="21" r="1.3"/>',
  support: '<path d="M4.5 13a7.5 7.5 0 0 1 15 0"/><path d="M4.5 13v3a2 2 0 0 0 2 2h.8v-6h-.8a2 2 0 0 0-2 2Z"/><path d="M19.5 13v3a2 2 0 0 1-2 2h-.8v-6h.8a2 2 0 0 1 2 2Z"/><path d="M9.3 19a2.7 2.7 0 0 0 2.7 1.8"/>',
  profile: '<circle cx="12" cy="8" r="3.4"/><path d="M5 20c1.4-4 3.9-5.5 7-5.5S18.6 16 20 20"/>',
  back: '<path d="m15 5-7 7 7 7"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  heart: '<path d="M12 20.2s-6.9-4.3-9.3-8.8A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.3 5.4c-2.4 4.5-9.3 8.8-9.3 8.8Z"/>',
  heartFilled: '<path fill="currentColor" d="M12 20.2s-6.9-4.3-9.3-8.8A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.3 5.4c-2.4 4.5-9.3 8.8-9.3 8.8Z"/>',
  edit: '<path d="m4 20 .9-3.6L15.6 5.7l2.7 2.7L7.6 19.1 4 20Z"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  star: '<path fill="currentColor" stroke="none" d="M12 2.5 14.9 8.6 21.6 9.6 16.8 14.3 17.9 21 12 17.8 6.1 21 7.2 14.3 2.4 9.6 9.1 8.6 12 2.5Z"/>',
  location: '<path d="M12 21s-7-6-7-11.5A7 7 0 0 1 19 9.5C19 15 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.4"/>',
  box: '<path d="M3.5 8 12 3.5 20.5 8 12 12.5 3.5 8Z"/><path d="M3.5 8v9L12 21.5 20.5 17V8"/><path d="M12 12.5V21.5"/>',
  wallet: '<rect x="3.5" y="6.5" width="17" height="12" rx="2"/><path d="M3.5 10.5h17"/><circle cx="17" cy="14.5" r="1.2"/>',
  truck: '<path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/>',
  chat: '<path d="M4 5h16v11H8l-4 4V5Z"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="m4 6.5 8 6.5 8-6.5"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
};
function icon(key, cls){ return '<svg class="ic-svg '+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+ICONS[key]+'</svg>'; }

/* ================= DATA ================= */
const CATS = [
  {key:'plants', name:'Plants', icon:'plants'},
  {key:'pots', name:'Pots & Planters', icon:'pots'},
  {key:'soil', name:'Soil & More', icon:'soil'},
  {key:'tools', name:'Tools', icon:'tools'},
  {key:'seeds', name:'Seeds', icon:'seeds'},
  {key:'decor', name:'Decor Plants', icon:'decor'},
  {key:'gifting', name:'Gifting', icon:'gifting'},
  {key:'stands', name:'Plant Stands', icon:'stands'},
  {key:'makeover', name:'Garden Makeover', icon:'makeover'},
];

const HOME_CHIPS = [
  {key:'all', name:'All', icon:'all', href:'#/category'},
  {key:'plants', name:'Plants', icon:'plants', href:'#/listing/plants'},
  {key:'pots', name:'Pots', icon:'pots', href:'#/listing/pots'},
  {key:'soil', name:'Soil & More', icon:'soil', href:'#/listing/soil'},
  {key:'deals', name:'Deals', icon:'deals', href:'#/listing/deals'},
  {key:'stands', name:'Plant Stands', icon:'stands', href:'#/listing/stands'},
  {key:'makeover', name:'Garden Makeover', icon:'makeover', href:'#/listing/makeover'},
  {key:'new', name:'New In', icon:'new', href:'#/listing/new'},
];

const BANNERS = [
  {eyebrow:"5 Years of Togetherness", title:"Thank You for Growing With Us!", sub:"For every ₹999 combo, get a free plant on us.", cta:"Shop Anniversary Deals", emoji:"🎉", grad:"linear-gradient(135deg,#1F6E43,#153A24)"},
  {eyebrow:"Limited Time", title:"Up to 60% Off on Best Sellers", sub:"Healthy nursery plants delivered to your doorstep.", cta:"Shop Now", emoji:"🌿", grad:"linear-gradient(135deg,#2B8A57,#0F2E1C)"},
  {eyebrow:"Popular Choice", title:"Tulsi, Herbs & More", sub:"Starting at just ₹29 — bring home everyday greens.", cta:"Shop Herbs", emoji:"🌱", grad:"linear-gradient(135deg,#D99A00,#8A5B00)"},
  {eyebrow:"New Arrivals", title:"Rare & Exotic Plants", sub:"Handpicked collector's plants, fresh in stock.", cta:"Explore New In", emoji:"🍃", grad:"linear-gradient(135deg,#153A24,#0A1F13)"},
  {eyebrow:"Gifting Season", title:"Send Green Love", sub:"Curated plant gift boxes for every occasion.", cta:"Shop Gifting", emoji:"🎁", grad:"linear-gradient(135deg,#7A3B8A,#3A1A45)"},
];

const MOODS = [
  {name:'Plants Under ₹99', e:'🌿', key:'under99'},
  {name:'Low Maintenance', e:'🪴', key:'plants'},
  {name:'Potted Plants', e:'🌸', key:'plants'},
  {name:'Table Top Plants', e:'🪷', key:'plants'},
  {name:'Good Luck Plants', e:'🍀', key:'plants'},
  {name:'Large Indoor', e:'🌳', key:'plants'},
  {name:'Fragrant Flowering', e:'🌺', key:'plants'},
  {name:'Flowering Perennial', e:'🌼', key:'plants'},
  {name:'Fruit Plants', e:'🍅', key:'plants'},
];

const BLOG_POSTS = [
  {title:"16 Best Plants That Survive Heavy Rain Without Root Rot", date:"31 Jul 2026", author:"Sambhav Jain", e:"🌧️"},
  {title:"Best Plants To Gift This Festive Season", date:"22 Jul 2026", author:"Ritika Sharma", e:"🎁"},
];

const PRODUCTS = [
{id:'p1',name:'Green Monstera Deliciosa in 4 Inch Nursery Bag',cat:'plants',price:360,mrp:580,rating:4.0,reviews:60,tag:'Trending',e:'🌿',img:''},
{id:'p2',name:'Minimal Terracotta Pot 10 Inch',cat:'pots',price:130,mrp:180,rating:4.1,reviews:266,tag:null,e:'🪴',img:''},
{id:'p3',name:'Natural Compost Manure 10kg Bag',cat:'soil',price:260,mrp:420,rating:4.5,reviews:422,tag:null,e:'🪣',img:''},
{id:'p4',name:'Multi-Purpose Garden Rake Set of 3',cat:'tools',price:780,mrp:1390,rating:4.1,reviews:118,tag:null,e:'🛠️',img:''},
{id:'p5',name:'Hybrid Tomato Seeds Mini Pack',cat:'seeds',price:40,mrp:70,rating:4.2,reviews:143,tag:null,e:'🌰',img:''},
{id:'p6',name:'Elegant Moss Wall Art Table Top',cat:'decor',price:450,mrp:1020,rating:4.3,reviews:290,tag:null,e:'🏺',img:''},
{id:'p7',name:'Festive Rakhi Plant Gift Gift Box',cat:'gifting',price:990,mrp:1900,rating:4.6,reviews:31,tag:null,e:'🎁',img:''},
{id:'p8',name:'Modern Ladder Plant Stand Medium',cat:'stands',price:500,mrp:870,rating:4.3,reviews:435,tag:null,e:'🪑',img:''},
{id:'p9',name:'Premium Terrace Garden Set Kit of 7',cat:'makeover',price:2220,mrp:4450,rating:4.6,reviews:357,tag:null,e:'🏡',img:''},
{id:'p10',name:'Dwarf Rubber Plant in 6 Inch Plastic Pot',cat:'plants',price:620,mrp:1270,rating:4.0,reviews:202,tag:null,e:'🌿',img:''},
{id:'p11',name:'Textured Rattan Planter 6 Inch',cat:'pots',price:730,mrp:1580,rating:4.7,reviews:125,tag:null,e:'🪴',img:''},
{id:'p12',name:'All-Purpose Root Booster 5kg Pack',cat:'soil',price:190,mrp:280,rating:4.9,reviews:298,tag:null,e:'🪣',img:''},
{id:'p13',name:'Rust-Free Garden Gloves 5 Litre',cat:'tools',price:470,mrp:1030,rating:4.6,reviews:81,tag:null,e:'🛠️',img:''},
{id:'p14',name:'Organic Basil Seeds Seed Kit',cat:'seeds',price:95,mrp:160,rating:4.5,reviews:467,tag:'Bestseller',e:'🌰',img:''},
{id:'p15',name:'Designer Money Tree Bonsai Medium',cat:'decor',price:1240,mrp:2290,rating:4.7,reviews:448,tag:null,e:'🏺',img:''},
{id:'p16',name:'Festive Anniversary Hamper Set of 3',cat:'gifting',price:1870,mrp:3760,rating:4.5,reviews:205,tag:'Bestseller',e:'🎁',img:''},
{id:'p17',name:'Minimal Iron Plant Stand Set of 2',cat:'stands',price:810,mrp:1840,rating:4.8,reviews:13,tag:null,e:'🪑',img:''},
{id:'p18',name:'Premium Study Table Greenery Kit Kit of 7',cat:'makeover',price:1410,mrp:2350,rating:4.0,reviews:9,tag:null,e:'🏡',img:''},
{id:'p19',name:'Variegated Anthurium in 10 Inch Terracotta Pot',cat:'plants',price:190,mrp:410,rating:4.2,reviews:335,tag:'Trending',e:'🌿',img:''},
{id:'p20',name:'Glossy Cement Planter 6 Inch',cat:'pots',price:830,mrp:1730,rating:4.4,reviews:406,tag:'Trending',e:'🪴',img:''},
{id:'p21',name:'Organic Enriched Potting Soil 10kg Bag',cat:'soil',price:210,mrp:390,rating:3.9,reviews:193,tag:null,e:'🪣',img:''},
{id:'p22',name:'Heavy Duty Garden Gloves Set of 3',cat:'tools',price:650,mrp:1460,rating:3.9,reviews:256,tag:null,e:'🛠️',img:''},
{id:'p23',name:'High-Yield Okra Seeds Pack of 20',cat:'seeds',price:45,mrp:90,rating:4.9,reviews:92,tag:null,e:'🌰',img:''},
{id:'p24',name:'Handpicked Zen Garden Set Table Top',cat:'decor',price:1060,mrp:2400,rating:4.9,reviews:394,tag:null,e:'🏺',img:''},
{id:'p25',name:'Classic Get Well Soon Plant Single Piece',cat:'gifting',price:1620,mrp:3220,rating:4.3,reviews:272,tag:'New',e:'🎁',img:''},
{id:'p26',name:'Classic Metal Plant Stand Medium',cat:'stands',price:430,mrp:730,rating:4.5,reviews:125,tag:null,e:'🪑',img:''},
{id:'p27',name:'Complete Balcony Garden Kit Kit of 3',cat:'makeover',price:2370,mrp:3460,rating:3.8,reviews:177,tag:null,e:'🏡',img:''},
{id:'p28',name:'Classic Anthurium in 6 Inch Ceramic Pot',cat:'plants',price:580,mrp:920,rating:4.0,reviews:459,tag:'New',e:'🌿',img:''},
{id:'p29',name:'Handcrafted Fiberglass Pot 10 Inch',cat:'pots',price:460,mrp:680,rating:4.6,reviews:189,tag:'Bestseller',e:'🪴',img:''},
{id:'p30',name:'Balanced Perlite 500g Pack',cat:'soil',price:390,mrp:780,rating:4.6,reviews:39,tag:'Bestseller',e:'🪣',img:''},
{id:'p31',name:'Ergonomic Hedge Shears Standard',cat:'tools',price:320,mrp:500,rating:4.4,reviews:79,tag:'Bestseller',e:'🛠️',img:''},
{id:'p32',name:'Exotic Basil Seeds Mini Pack',cat:'seeds',price:60,mrp:130,rating:3.9,reviews:421,tag:'Trending',e:'🌰',img:''},
{id:'p33',name:'Trending Artificial Areca Palm Floor Standing',cat:'decor',price:1310,mrp:2820,rating:5.0,reviews:393,tag:null,e:'🏺',img:''},
{id:'p34',name:'Elegant Anniversary Hamper Single Piece',cat:'gifting',price:1230,mrp:1960,rating:4.3,reviews:38,tag:null,e:'🎁',img:''},
{id:'p35',name:'Modern Folding Plant Stand Single',cat:'stands',price:840,mrp:1880,rating:4.7,reviews:154,tag:'Bestseller',e:'🪑',img:''},
{id:'p36',name:'Compact Study Table Greenery Kit Kit of 5',cat:'makeover',price:2050,mrp:3420,rating:5.0,reviews:304,tag:'Trending',e:'🏡',img:''},
{id:'p37',name:'Super Snake Plant in 6 Inch Ceramic Pot',cat:'plants',price:140,mrp:200,rating:4.4,reviews:478,tag:'Trending',e:'🌿',img:''},
{id:'p38',name:'Classic Plastic Planter 12 Inch',cat:'pots',price:230,mrp:500,rating:3.9,reviews:42,tag:null,e:'🪴',img:''},
{id:'p39',name:'Premium Perlite 10kg Bag',cat:'soil',price:180,mrp:340,rating:3.8,reviews:49,tag:'Bestseller',e:'🪣',img:''},
{id:'p40',name:'Professional Pruning Saw Pack of 2',cat:'tools',price:600,mrp:1010,rating:4.1,reviews:350,tag:null,e:'🛠️',img:''},
{id:'p41',name:'Exotic Chilli Seeds Mini Pack',cat:'seeds',price:45,mrp:90,rating:4.2,reviews:169,tag:null,e:'🌰',img:''},
{id:'p42',name:'Elegant Bonsai Ficus Table Top',cat:'decor',price:1350,mrp:3100,rating:3.9,reviews:117,tag:'Trending',e:'🏺',img:''},
{id:'p43',name:'Premium Diwali Plant Gift Set of 5',cat:'gifting',price:390,mrp:850,rating:4.2,reviews:88,tag:'New',e:'🎁',img:''},
{id:'p44',name:'Foldable Bamboo Plant Stand Large',cat:'stands',price:1550,mrp:3540,rating:4.8,reviews:278,tag:null,e:'🪑',img:''},
{id:'p45',name:'Premium Study Table Greenery Kit Kit of 3',cat:'makeover',price:1600,mrp:2620,rating:4.9,reviews:388,tag:'Trending',e:'🏡',img:''},
{id:'p46',name:'Premium Aloe Vera in 6 Inch Ceramic Pot',cat:'plants',price:700,mrp:1110,rating:4.2,reviews:359,tag:null,e:'🌿',img:''},
{id:'p47',name:'Handcrafted Clay Pot 8 Inch',cat:'pots',price:170,mrp:250,rating:4.3,reviews:149,tag:null,e:'🪴',img:''},
{id:'p48',name:'All-Purpose Organic Potting Mix 1kg Pack',cat:'soil',price:380,mrp:870,rating:4.0,reviews:234,tag:'Trending',e:'🪣',img:''},
{id:'p49',name:'Compact Hedge Shears Pack of 2',cat:'tools',price:80,mrp:120,rating:4.9,reviews:361,tag:null,e:'🛠️',img:''},
{id:'p50',name:'Hybrid Cucumber Seeds Pack of 50',cat:'seeds',price:100,mrp:190,rating:4.3,reviews:29,tag:null,e:'🌰',img:''},
{id:'p51',name:'Handpicked Money Tree Bonsai Small',cat:'decor',price:930,mrp:1480,rating:4.1,reviews:60,tag:null,e:'🏺',img:''},
{id:'p52',name:'Special Friendship Day Combo Single Piece',cat:'gifting',price:1520,mrp:3150,rating:4.9,reviews:129,tag:null,e:'🎁',img:''},
{id:'p53',name:'Minimal 3-Tier Plant Stand Small',cat:'stands',price:670,mrp:1380,rating:4.2,reviews:218,tag:null,e:'🪑',img:''},
{id:'p54',name:'Starter Kitchen Garden Starter Kit Kit of 3',cat:'makeover',price:3630,mrp:7930,rating:4.8,reviews:121,tag:null,e:'🏡',img:''},
{id:'p55',name:'Compact Begonia in 6 Inch Ceramic Pot',cat:'plants',price:390,mrp:830,rating:4.8,reviews:122,tag:null,e:'🌿',img:''},
{id:'p56',name:'Glossy Round Planter 10 Inch',cat:'pots',price:740,mrp:1220,rating:3.9,reviews:403,tag:null,e:'🪴',img:''},
{id:'p57',name:'Fast-Acting NPK Fertilizer 10kg Bag',cat:'soil',price:220,mrp:490,rating:3.9,reviews:141,tag:null,e:'🪣',img:''},
{id:'p58',name:'Ergonomic Soil Scoop Standard',cat:'tools',price:180,mrp:350,rating:4.2,reviews:410,tag:null,e:'🛠️',img:''},
{id:'p59',name:'High-Yield Coriander Seeds Seed Kit',cat:'seeds',price:45,mrp:80,rating:4.5,reviews:138,tag:null,e:'🌰',img:''},
{id:'p60',name:'Elegant Moss Wall Art Small',cat:'decor',price:1260,mrp:2810,rating:4.4,reviews:376,tag:null,e:'🏺',img:''},
{id:'p61',name:'Elegant Corporate Gift Combo Set of 2',cat:'gifting',price:1610,mrp:3590,rating:4.5,reviews:347,tag:null,e:'🎁',img:''},
{id:'p62',name:'Sturdy Ladder Plant Stand Large',cat:'stands',price:1660,mrp:2930,rating:4.3,reviews:159,tag:'Trending',e:'🪑',img:''},
{id:'p63',name:'Starter Terrace Garden Set Single Set',cat:'makeover',price:3600,mrp:7230,rating:4.9,reviews:323,tag:null,e:'🏡',img:''},
{id:'p64',name:'Deluxe Calathea in Self-Watering Pot',cat:'plants',price:80,mrp:130,rating:4.1,reviews:410,tag:null,e:'🌿',img:''},
{id:'p65',name:'Handcrafted Wooden Planter Box 10 Inch',cat:'pots',price:510,mrp:950,rating:4.8,reviews:415,tag:null,e:'🪴',img:''},
{id:'p66',name:'Premium Cow Dung Manure 2kg Pack',cat:'soil',price:310,mrp:620,rating:4.5,reviews:55,tag:null,e:'🪣',img:''},
{id:'p67',name:'Ergonomic Pruning Saw Set of 3',cat:'tools',price:890,mrp:1400,rating:3.8,reviews:133,tag:'New',e:'🛠️',img:''},
{id:'p68',name:'Non-GMO Zinnia Seeds Pack of 10',cat:'seeds',price:85,mrp:150,rating:4.6,reviews:107,tag:'Bestseller',e:'🌰',img:''},
{id:'p69',name:'Elegant Artificial Monstera Medium',cat:'decor',price:500,mrp:1000,rating:3.8,reviews:392,tag:null,e:'🏺',img:''},
{id:'p70',name:'Elegant Friendship Day Combo Set of 3',cat:'gifting',price:610,mrp:1300,rating:4.6,reviews:245,tag:null,e:'🎁',img:''},
{id:'p71',name:'Classic Bamboo Plant Stand Small',cat:'stands',price:1230,mrp:1870,rating:4.4,reviews:279,tag:'Trending',e:'🪑',img:''},
{id:'p72',name:'Premium Patio Garden Combo Single Set',cat:'makeover',price:4630,mrp:8260,rating:4.9,reviews:236,tag:null,e:'🏡',img:''},
{id:'p73',name:'Compact String of Pearls in 8 Inch White Pot',cat:'plants',price:340,mrp:710,rating:4.8,reviews:149,tag:'Trending',e:'🌿',img:''},
{id:'p74',name:'Glossy Wooden Planter Box 8 Inch',cat:'pots',price:970,mrp:1420,rating:4.1,reviews:147,tag:null,e:'🪴',img:''},
{id:'p75',name:'Premium NPK Fertilizer 1kg Pack',cat:'soil',price:130,mrp:210,rating:4.6,reviews:369,tag:null,e:'🪣',img:''},
{id:'p76',name:'Compact Watering Can 5 Litre',cat:'tools',price:410,mrp:770,rating:4.3,reviews:113,tag:'Bestseller',e:'🛠️',img:''},
{id:'p77',name:'Non-GMO Coriander Seeds Seed Kit',cat:'seeds',price:120,mrp:170,rating:4.9,reviews:302,tag:'Bestseller',e:'🌰',img:''},
{id:'p78',name:'Trending Artificial Monstera Large',cat:'decor',price:810,mrp:1680,rating:4.8,reviews:435,tag:'Bestseller',e:'🏺',img:''},
{id:'p79',name:'Festive Valentine Rose Combo Gift Box',cat:'gifting',price:1890,mrp:3670,rating:4.1,reviews:120,tag:null,e:'🎁',img:''},
{id:'p80',name:'Minimal Folding Plant Stand Small',cat:'stands',price:1100,mrp:1870,rating:4.6,reviews:215,tag:null,e:'🪑',img:''},
{id:'p81',name:'Starter Window Sill Garden Kit Kit of 3',cat:'makeover',price:3730,mrp:7210,rating:4.6,reviews:50,tag:'Bestseller',e:'🏡',img:''},
{id:'p82',name:'Compact Aloe Vera in 6 Inch Plastic Pot',cat:'plants',price:130,mrp:210,rating:4.2,reviews:240,tag:null,e:'🌿',img:''},
{id:'p83',name:'Modern Self-Watering Pot 8 Inch',cat:'pots',price:930,mrp:1510,rating:3.9,reviews:17,tag:'Trending',e:'🪴',img:''},
{id:'p84',name:'All-Purpose Organic Potting Mix 1kg Pack',cat:'soil',price:380,mrp:560,rating:4.9,reviews:28,tag:null,e:'🪣',img:''},
{id:'p85',name:'Stainless Steel Garden Gloves Standard',cat:'tools',price:700,mrp:1080,rating:4.0,reviews:350,tag:null,e:'🛠️',img:''},
{id:'p86',name:'Organic Zinnia Seeds Mini Pack',cat:'seeds',price:120,mrp:200,rating:4.2,reviews:318,tag:null,e:'🌰',img:''},
{id:'p87',name:'Handpicked Artificial Boxwood Medium',cat:'decor',price:840,mrp:1260,rating:3.8,reviews:167,tag:'Bestseller',e:'🏺',img:''},
{id:'p88',name:'Festive Wedding Return Gift Set of 3',cat:'gifting',price:400,mrp:770,rating:4.8,reviews:132,tag:null,e:'🎁',img:''},
{id:'p89',name:'Foldable Ladder Plant Stand Set of 2',cat:'stands',price:1950,mrp:2940,rating:5.0,reviews:408,tag:null,e:'🪑',img:''},
{id:'p90',name:'Deluxe Vertical Garden Kit Single Set',cat:'makeover',price:3530,mrp:5160,rating:4.6,reviews:14,tag:'Bestseller',e:'🏡',img:''},
{id:'p91',name:'Compact Begonia in 4 Inch Nursery Bag',cat:'plants',price:520,mrp:1180,rating:4.6,reviews:432,tag:'New',e:'🌿',img:''},
{id:'p92',name:'Designer Square Planter 10 Inch',cat:'pots',price:430,mrp:880,rating:5.0,reviews:146,tag:'Trending',e:'🪴',img:''},
{id:'p93',name:'Balanced Root Booster 5kg Pack',cat:'soil',price:270,mrp:580,rating:4.5,reviews:173,tag:null,e:'🪣',img:''},
{id:'p94',name:'Heavy Duty Dibber Tool 2 Litre',cat:'tools',price:530,mrp:860,rating:4.4,reviews:320,tag:'Bestseller',e:'🛠️',img:''},
{id:'p95',name:'Hybrid Sunflower Seeds Mini Pack',cat:'seeds',price:140,mrp:240,rating:4.4,reviews:189,tag:null,e:'🌰',img:''},
{id:'p96',name:'Premium Money Tree Bonsai Table Top',cat:'decor',price:1640,mrp:3600,rating:4.5,reviews:272,tag:null,e:'🏺',img:''},
{id:'p97',name:'Premium Succulent Gift Box Single Piece',cat:'gifting',price:1250,mrp:2370,rating:4.1,reviews:251,tag:'New',e:'🎁',img:''},
{id:'p98',name:'Modern Rotating Plant Stand Small',cat:'stands',price:900,mrp:1440,rating:4.6,reviews:164,tag:null,e:'🪑',img:''},
{id:'p99',name:'Deluxe Window Sill Garden Kit Kit of 7',cat:'makeover',price:3980,mrp:9140,rating:4.5,reviews:188,tag:'New',e:'🏡',img:''},
{id:'p100',name:'Premium Boston Fern in 6 Inch Ceramic Pot',cat:'plants',price:320,mrp:480,rating:4.0,reviews:69,tag:'Trending',e:'🌿',img:''},
{id:'p101',name:'Designer Textured Planter 6 Inch',cat:'pots',price:510,mrp:1050,rating:4.1,reviews:309,tag:'Trending',e:'🪴',img:''},
{id:'p102',name:'Concentrated Seaweed Extract 500g Pack',cat:'soil',price:150,mrp:250,rating:4.2,reviews:162,tag:null,e:'🪣',img:''},
{id:'p103',name:'Professional Hedge Shears Set of 3',cat:'tools',price:350,mrp:500,rating:3.9,reviews:157,tag:null,e:'🛠️',img:''},
{id:'p104',name:'Non-GMO Brinjal Seeds Mini Pack',cat:'seeds',price:40,mrp:90,rating:4.5,reviews:248,tag:'New',e:'🌰',img:''},
{id:'p105',name:'Premium Artificial Monstera Medium',cat:'decor',price:300,mrp:490,rating:4.8,reviews:66,tag:null,e:'🏺',img:''},
{id:'p106',name:'Elegant Wedding Return Gift Set of 2',cat:'gifting',price:1430,mrp:2810,rating:3.9,reviews:84,tag:null,e:'🎁',img:''},
{id:'p107',name:'Classic Metal Plant Stand Small',cat:'stands',price:1440,mrp:3010,rating:4.5,reviews:412,tag:null,e:'🪑',img:''},
{id:'p108',name:'Compact Study Table Greenery Kit Single Set',cat:'makeover',price:4120,mrp:6870,rating:4.5,reviews:227,tag:null,e:'🏡',img:''},
{id:'p109',name:'Royal Hibiscus Plant in 4 Inch Nursery Bag',cat:'plants',price:180,mrp:400,rating:4.0,reviews:116,tag:null,e:'🌿',img:''},
{id:'p110',name:'Premium Round Planter 6 Inch',cat:'pots',price:560,mrp:870,rating:3.9,reviews:9,tag:'Bestseller',e:'🪴',img:''},
{id:'p111',name:'Balanced Garden Soil 2kg Pack',cat:'soil',price:65,mrp:100,rating:4.6,reviews:367,tag:'New',e:'🪣',img:''},
{id:'p112',name:'Rust-Free Watering Can Set of 3',cat:'tools',price:340,mrp:720,rating:4.6,reviews:346,tag:null,e:'🛠️',img:''},
{id:'p113',name:'Hybrid Coriander Seeds Seed Kit',cat:'seeds',price:55,mrp:110,rating:4.9,reviews:431,tag:null,e:'🌰',img:''},
{id:'p114',name:'Trending Artificial Areca Palm Medium',cat:'decor',price:1820,mrp:3050,rating:4.7,reviews:299,tag:null,e:'🏺',img:''},
{id:'p115',name:'Deluxe New Year Plant Box Single Piece',cat:'gifting',price:1660,mrp:2780,rating:4.3,reviews:147,tag:'Trending',e:'🎁',img:''},
{id:'p116',name:'Minimal Bamboo Plant Stand Single',cat:'stands',price:460,mrp:890,rating:4.9,reviews:384,tag:null,e:'🪑',img:''},
{id:'p117',name:'Premium Patio Garden Combo Kit of 3',cat:'makeover',price:1250,mrp:2010,rating:4.6,reviews:448,tag:null,e:'🏡',img:''},
{id:'p118',name:'Dwarf Aglaonema in Self-Watering Pot',cat:'plants',price:350,mrp:670,rating:4.7,reviews:97,tag:'New',e:'🌿',img:''},
{id:'p119',name:'Handcrafted Clay Pot 8 Inch',cat:'pots',price:440,mrp:1010,rating:4.3,reviews:424,tag:'New',e:'🪴',img:''},
{id:'p120',name:'Balanced Vermicompost 2kg Pack',cat:'soil',price:260,mrp:440,rating:4.6,reviews:447,tag:null,e:'🪣',img:''},
{id:'p121',name:'Compact Sprayer Bottle 5 Litre',cat:'tools',price:360,mrp:720,rating:4.3,reviews:397,tag:'Trending',e:'🛠️',img:''},
{id:'p122',name:'Heirloom Marigold Seeds Pack of 10',cat:'seeds',price:70,mrp:110,rating:3.9,reviews:403,tag:'Bestseller',e:'🌰',img:''},
{id:'p123',name:'Modern Decorative Succulent Set Small',cat:'decor',price:1540,mrp:3360,rating:4.4,reviews:35,tag:null,e:'🏺',img:''},
{id:'p124',name:'Classic Valentine Rose Combo Gift Box',cat:'gifting',price:1800,mrp:3330,rating:4.3,reviews:34,tag:null,e:'🎁',img:''},
{id:'p125',name:'Sturdy Ladder Plant Stand Medium',cat:'stands',price:890,mrp:1600,rating:4.6,reviews:70,tag:null,e:'🪑',img:''},
{id:'p126',name:'Starter Patio Garden Combo Kit of 5',cat:'makeover',price:3040,mrp:5760,rating:4.5,reviews:55,tag:null,e:'🏡',img:''},
{id:'p127',name:'Green Begonia in 8 Inch White Pot',cat:'plants',price:200,mrp:400,rating:4.0,reviews:374,tag:null,e:'🌿',img:''},
{id:'p128',name:'Matte Clay Pot 10 Inch',cat:'pots',price:1060,mrp:2420,rating:4.1,reviews:290,tag:null,e:'🪴',img:''},
{id:'p129',name:'Natural Perlite 10kg Bag',cat:'soil',price:310,mrp:640,rating:4.0,reviews:43,tag:null,e:'🪣',img:''},
{id:'p130',name:'Multi-Purpose Garden Rake 5 Litre',cat:'tools',price:420,mrp:940,rating:4.4,reviews:428,tag:null,e:'🛠️',img:''},
{id:'p131',name:'Premium Rose Seeds Pack of 50',cat:'seeds',price:140,mrp:270,rating:5.0,reviews:258,tag:null,e:'🌰',img:''},
{id:'p132',name:'Modern Artificial Monstera Set of 3',cat:'decor',price:900,mrp:1530,rating:4.7,reviews:201,tag:'New',e:'🏺',img:''},
{id:'p133',name:'Premium Corporate Gift Combo Set of 3',cat:'gifting',price:1420,mrp:2480,rating:4.8,reviews:218,tag:null,e:'🎁',img:''},
{id:'p134',name:'Foldable Round Plant Stand Single',cat:'stands',price:1740,mrp:3870,rating:4.3,reviews:347,tag:null,e:'🪑',img:''},
{id:'p135',name:'Complete Window Sill Garden Kit Kit of 5',cat:'makeover',price:4610,mrp:10460,rating:4.2,reviews:59,tag:'New',e:'🏡',img:''},
{id:'p136',name:'Deluxe Peace Lily in 8 Inch White Pot',cat:'plants',price:95,mrp:190,rating:4.3,reviews:343,tag:null,e:'🌿',img:''},
{id:'p137',name:'Handcrafted Terracotta Pot 8 Inch',cat:'pots',price:760,mrp:1490,rating:4.3,reviews:49,tag:null,e:'🪴',img:''},
{id:'p138',name:'Fast-Acting Liquid Fertilizer 2kg Pack',cat:'soil',price:370,mrp:760,rating:4.7,reviews:454,tag:'Trending',e:'🪣',img:''},
{id:'p139',name:'Professional Pruning Shears Standard',cat:'tools',price:310,mrp:610,rating:4.9,reviews:124,tag:null,e:'🛠️',img:''},
{id:'p140',name:'Hybrid Coriander Seeds Pack of 10',cat:'seeds',price:85,mrp:130,rating:4.2,reviews:22,tag:null,e:'🌰',img:''},
{id:'p141',name:'Handpicked Money Tree Bonsai Small',cat:'decor',price:800,mrp:1380,rating:4.3,reviews:133,tag:'Trending',e:'🏺',img:''},
{id:'p142',name:'Special Wedding Return Gift Set of 3',cat:'gifting',price:600,mrp:930,rating:4.5,reviews:203,tag:null,e:'🎁',img:''},
{id:'p143',name:'Sturdy Rotating Plant Stand Medium',cat:'stands',price:770,mrp:1400,rating:4.1,reviews:138,tag:null,e:'🪑',img:''},
{id:'p144',name:'Premium Window Sill Garden Kit Kit of 5',cat:'makeover',price:1100,mrp:1980,rating:4.2,reviews:308,tag:null,e:'🏡',img:''},
{id:'p145',name:'Large Monstera Deliciosa in Hanging Planter',cat:'plants',price:340,mrp:620,rating:4.2,reviews:204,tag:'New',e:'🌿',img:''},
{id:'p146',name:'Glossy Terracotta Pot 10 Inch',cat:'pots',price:1240,mrp:2140,rating:4.2,reviews:366,tag:null,e:'🪴',img:''},
{id:'p147',name:'Fast-Acting Organic Potting Mix 2kg Pack',cat:'soil',price:55,mrp:100,rating:4.6,reviews:389,tag:null,e:'🪣',img:''},
{id:'p148',name:'Professional Gardening Apron 5 Litre',cat:'tools',price:360,mrp:760,rating:4.1,reviews:418,tag:null,e:'🛠️',img:''},
{id:'p149',name:'Premium Chilli Seeds Pack of 20',cat:'seeds',price:110,mrp:180,rating:4.7,reviews:400,tag:null,e:'🌰',img:''},
{id:'p150',name:'Trending Air Plant Display Floor Standing',cat:'decor',price:1520,mrp:2180,rating:4.7,reviews:25,tag:null,e:'🏺',img:''},
{id:'p151',name:'Premium Get Well Soon Plant Set of 2',cat:'gifting',price:850,mrp:1440,rating:4.3,reviews:110,tag:null,e:'🎁',img:''},
{id:'p152',name:'Rustic Bamboo Plant Stand Set of 2',cat:'stands',price:1330,mrp:2960,rating:4.8,reviews:139,tag:'New',e:'🪑',img:''},
{id:'p153',name:'Premium Kitchen Garden Starter Kit Kit of 3',cat:'makeover',price:4340,mrp:9840,rating:4.0,reviews:123,tag:'Bestseller',e:'🏡',img:''},
{id:'p154',name:'Deluxe Coleus in 6 Inch Ceramic Pot',cat:'plants',price:170,mrp:360,rating:3.8,reviews:282,tag:null,e:'🌿',img:''},
{id:'p155',name:'Rustic Wooden Planter Box 14 Inch',cat:'pots',price:600,mrp:1160,rating:4.8,reviews:198,tag:null,e:'🪴',img:''},
{id:'p156',name:'Natural Cow Dung Manure 5kg Pack',cat:'soil',price:60,mrp:120,rating:4.9,reviews:175,tag:null,e:'🪣',img:''},
{id:'p157',name:'Heavy Duty Pruning Saw 5 Litre',cat:'tools',price:790,mrp:1320,rating:4.3,reviews:79,tag:null,e:'🛠️',img:''},
{id:'p158',name:'Exotic Marigold Seeds Mini Pack',cat:'seeds',price:45,mrp:70,rating:4.9,reviews:77,tag:'Bestseller',e:'🌰',img:''},
{id:'p159',name:'Premium Artificial Monstera Floor Standing',cat:'decor',price:1720,mrp:3490,rating:4.4,reviews:308,tag:null,e:'🏺',img:''},
{id:'p160',name:'Festive Wedding Return Gift Set of 2',cat:'gifting',price:1960,mrp:3610,rating:4.3,reviews:151,tag:null,e:'🎁',img:''},
{id:'p161',name:'Classic Round Plant Stand Single',cat:'stands',price:1210,mrp:2730,rating:4.8,reviews:58,tag:null,e:'🪑',img:''},
{id:'p162',name:'Premium Study Table Greenery Kit Kit of 3',cat:'makeover',price:3760,mrp:6200,rating:5.0,reviews:442,tag:'New',e:'🏡',img:''},
{id:'p163',name:'Dwarf Areca Palm in 6 Inch Plastic Pot',cat:'plants',price:690,mrp:1570,rating:3.9,reviews:178,tag:null,e:'🌿',img:''},
{id:'p164',name:'Minimal Plastic Planter 6 Inch',cat:'pots',price:210,mrp:450,rating:4.5,reviews:308,tag:null,e:'🪴',img:''},
{id:'p165',name:'Natural Liquid Fertilizer 2kg Pack',cat:'soil',price:120,mrp:250,rating:4.5,reviews:149,tag:null,e:'🪣',img:''},
{id:'p166',name:'Professional Hand Trowel Set 2 Litre',cat:'tools',price:890,mrp:1380,rating:4.6,reviews:21,tag:null,e:'🛠️',img:''},
{id:'p167',name:'Exotic Marigold Seeds Pack of 20',cat:'seeds',price:100,mrp:170,rating:4.0,reviews:34,tag:null,e:'🌰',img:''},
{id:'p168',name:'Elegant Moss Wall Art Table Top',cat:'decor',price:430,mrp:890,rating:4.4,reviews:406,tag:null,e:'🏺',img:''},
{id:'p169',name:'Special Valentine Rose Combo Set of 2',cat:'gifting',price:1170,mrp:2170,rating:4.9,reviews:30,tag:'Trending',e:'🎁',img:''},
{id:'p170',name:'Minimal Ladder Plant Stand Small',cat:'stands',price:420,mrp:960,rating:4.8,reviews:226,tag:null,e:'🪑',img:''},
{id:'p171',name:'Compact Window Sill Garden Kit Kit of 3',cat:'makeover',price:1160,mrp:1960,rating:4.0,reviews:72,tag:null,e:'🏡',img:''},
{id:'p172',name:'Dwarf Rubber Plant in 10 Inch Terracotta Pot',cat:'plants',price:640,mrp:1310,rating:4.3,reviews:313,tag:'Trending',e:'🌿',img:''},
{id:'p173',name:'Handcrafted Hanging Macrame Planter 12 Inch',cat:'pots',price:950,mrp:1410,rating:4.6,reviews:444,tag:'Trending',e:'🪴',img:''},
{id:'p174',name:'Natural Micronutrient Mix 5kg Pack',cat:'soil',price:280,mrp:620,rating:4.3,reviews:431,tag:'New',e:'🪣',img:''},
{id:'p175',name:'Compact Grass Cutter Standard',cat:'tools',price:390,mrp:700,rating:4.6,reviews:199,tag:null,e:'🛠️',img:''},
{id:'p176',name:'Heirloom Brinjal Seeds Pack of 10',cat:'seeds',price:40,mrp:80,rating:3.9,reviews:57,tag:null,e:'🌰',img:''},
{id:'p177',name:'Designer Artificial Boxwood Table Top',cat:'decor',price:320,mrp:620,rating:4.5,reviews:176,tag:null,e:'🏺',img:''},
{id:'p178',name:'Classic Wedding Return Gift Single Piece',cat:'gifting',price:1720,mrp:2490,rating:4.1,reviews:167,tag:null,e:'🎁',img:''},
{id:'p179',name:'Sturdy Metal Plant Stand Set of 2',cat:'stands',price:730,mrp:1120,rating:4.4,reviews:441,tag:null,e:'🪑',img:''},
{id:'p180',name:'Deluxe Vertical Garden Kit Kit of 7',cat:'makeover',price:1440,mrp:3000,rating:4.5,reviews:421,tag:'Bestseller',e:'🏡',img:''},
{id:'p181',name:'Deluxe Coleus in Self-Watering Pot',cat:'plants',price:650,mrp:920,rating:4.9,reviews:432,tag:null,e:'🌿',img:''},
{id:'p182',name:'Designer Ceramic Planter 8 Inch',cat:'pots',price:700,mrp:1560,rating:4.2,reviews:100,tag:null,e:'🪴',img:''},
{id:'p183',name:'Fast-Acting Seaweed Extract 500g Pack',cat:'soil',price:120,mrp:250,rating:5.0,reviews:54,tag:'Trending',e:'🪣',img:''},
{id:'p184',name:'Compact Garden Gloves 5 Litre',cat:'tools',price:530,mrp:900,rating:4.2,reviews:377,tag:null,e:'🛠️',img:''},
{id:'p185',name:'High-Yield Okra Seeds Seed Kit',cat:'seeds',price:40,mrp:90,rating:4.0,reviews:394,tag:null,e:'🌰',img:''},
{id:'p186',name:'Trending Air Plant Display Large',cat:'decor',price:1110,mrp:2220,rating:4.4,reviews:234,tag:'Bestseller',e:'🏺',img:''},
{id:'p187',name:'Premium Diwali Plant Gift Gift Box',cat:'gifting',price:480,mrp:820,rating:3.9,reviews:355,tag:'New',e:'🎁',img:''},
{id:'p188',name:'Foldable Bamboo Plant Stand Large',cat:'stands',price:390,mrp:620,rating:5.0,reviews:36,tag:null,e:'🪑',img:''},
{id:'p189',name:'Premium Office Desk Greenery Kit Kit of 5',cat:'makeover',price:1620,mrp:3380,rating:4.1,reviews:69,tag:null,e:'🏡',img:''},
{id:'p190',name:'Super Money Plant Pothos in 8 Inch White Pot',cat:'plants',price:260,mrp:390,rating:4.4,reviews:125,tag:'Trending',e:'🌿',img:''},
{id:'p191',name:'Rustic Clay Pot 4 Inch',cat:'pots',price:880,mrp:1910,rating:3.9,reviews:17,tag:'New',e:'🪴',img:''},
{id:'p192',name:'Premium Enriched Potting Soil 2kg Pack',cat:'soil',price:340,mrp:610,rating:4.3,reviews:335,tag:'Bestseller',e:'🪣',img:''},
{id:'p193',name:'Heavy Duty Hand Cultivator 5 Litre',cat:'tools',price:90,mrp:200,rating:4.0,reviews:324,tag:'New',e:'🛠️',img:''},
{id:'p194',name:'Premium Petunia Seeds Pack of 50',cat:'seeds',price:40,mrp:70,rating:3.9,reviews:231,tag:'Bestseller',e:'🌰',img:''},
{id:'p195',name:'Trending Zen Garden Set Set of 3',cat:'decor',price:1980,mrp:3320,rating:4.2,reviews:178,tag:null,e:'🏺',img:''},
{id:'p196',name:'Special Succulent Gift Box Set of 2',cat:'gifting',price:1340,mrp:2490,rating:4.9,reviews:186,tag:null,e:'🎁',img:''},
{id:'p197',name:'Classic 3-Tier Plant Stand Small',cat:'stands',price:600,mrp:980,rating:4.0,reviews:86,tag:null,e:'🪑',img:''},
{id:'p198',name:'Compact Terrace Garden Set Single Set',cat:'makeover',price:4180,mrp:8410,rating:4.9,reviews:337,tag:null,e:'🏡',img:''},
{id:'p199',name:'Dwarf Coleus in 6 Inch Ceramic Pot',cat:'plants',price:230,mrp:410,rating:4.4,reviews:331,tag:null,e:'🌿',img:''},
{id:'p200',name:'Matte Textured Planter 12 Inch',cat:'pots',price:180,mrp:310,rating:3.9,reviews:244,tag:'New',e:'🪴',img:''},
{id:'p201',name:'Organic Organic Potting Mix 2kg Pack',cat:'soil',price:200,mrp:290,rating:4.8,reviews:445,tag:null,e:'🪣',img:''},
{id:'p202',name:'Professional Soil Scoop Pack of 2',cat:'tools',price:460,mrp:840,rating:4.5,reviews:413,tag:null,e:'🛠️',img:''},
{id:'p203',name:'Non-GMO Spinach Seeds Seed Kit',cat:'seeds',price:110,mrp:170,rating:4.5,reviews:264,tag:null,e:'🌰',img:''},
{id:'p204',name:'Elegant Bonsai Ficus Small',cat:'decor',price:1860,mrp:4110,rating:4.2,reviews:373,tag:null,e:'🏺',img:''},
{id:'p205',name:'Festive Valentine Rose Combo Set of 3',cat:'gifting',price:330,mrp:540,rating:4.3,reviews:232,tag:'Trending',e:'🎁',img:''},
{id:'p206',name:'Sturdy Bamboo Plant Stand Medium',cat:'stands',price:1040,mrp:1800,rating:4.1,reviews:217,tag:null,e:'🪑',img:''},
{id:'p207',name:'Complete Patio Garden Combo Kit of 7',cat:'makeover',price:1040,mrp:1760,rating:4.5,reviews:205,tag:null,e:'🏡',img:''},
{id:'p208',name:'Super Boston Fern in Self-Watering Pot',cat:'plants',price:700,mrp:1530,rating:4.2,reviews:306,tag:null,e:'🌿',img:''},
{id:'p209',name:'Rustic Rattan Planter 8 Inch',cat:'pots',price:870,mrp:1320,rating:4.7,reviews:51,tag:null,e:'🪴',img:''},
{id:'p210',name:'Fast-Acting Compost Manure 2kg Pack',cat:'soil',price:110,mrp:220,rating:4.8,reviews:386,tag:'Trending',e:'🪣',img:''},
{id:'p211',name:'Rust-Free Watering Can 5 Litre',cat:'tools',price:590,mrp:1020,rating:4.2,reviews:100,tag:null,e:'🛠️',img:''},
{id:'p212',name:'Non-GMO Sunflower Seeds Mini Pack',cat:'seeds',price:55,mrp:90,rating:4.0,reviews:47,tag:null,e:'🌰',img:''},
{id:'p213',name:'Handpicked Decorative Succulent Set Small',cat:'decor',price:1240,mrp:2600,rating:4.8,reviews:460,tag:'Trending',e:'🏺',img:''},
{id:'p214',name:'Festive Plant Gift Combo Set of 5',cat:'gifting',price:1820,mrp:3560,rating:4.5,reviews:86,tag:null,e:'🎁',img:''},
{id:'p215',name:'Foldable 3-Tier Plant Stand Set of 2',cat:'stands',price:1960,mrp:4340,rating:4.7,reviews:30,tag:'Bestseller',e:'🪑',img:''},
{id:'p216',name:'Starter Vertical Garden Kit Single Set',cat:'makeover',price:2830,mrp:5880,rating:4.7,reviews:127,tag:'Trending',e:'🏡',img:''},
{id:'p217',name:'Premium Spider Plant in Self-Watering Pot',cat:'plants',price:560,mrp:1240,rating:4.0,reviews:355,tag:'New',e:'🌿',img:''},
{id:'p218',name:'Matte Wooden Planter Box 10 Inch',cat:'pots',price:1100,mrp:2060,rating:5.0,reviews:426,tag:null,e:'🪴',img:''},
{id:'p219',name:'Enriched Root Booster 2kg Pack',cat:'soil',price:75,mrp:150,rating:4.8,reviews:291,tag:null,e:'🪣',img:''},
{id:'p220',name:'Multi-Purpose Hedge Shears Pack of 2',cat:'tools',price:200,mrp:330,rating:4.7,reviews:147,tag:'New',e:'🛠️',img:''},
{id:'p221',name:'High-Yield Watermelon Seeds Pack of 20',cat:'seeds',price:140,mrp:250,rating:4.9,reviews:121,tag:'New',e:'🌰',img:''},
{id:'p222',name:'Trending Money Tree Bonsai Set of 3',cat:'decor',price:310,mrp:540,rating:4.2,reviews:205,tag:null,e:'🏺',img:''},
{id:'p223',name:'Premium Corporate Gift Combo Set of 2',cat:'gifting',price:900,mrp:2010,rating:4.8,reviews:340,tag:null,e:'🎁',img:''},
{id:'p224',name:'Classic 3-Tier Plant Stand Small',cat:'stands',price:890,mrp:1980,rating:4.4,reviews:433,tag:null,e:'🪑',img:''},
{id:'p225',name:'Compact Window Sill Garden Kit Kit of 3',cat:'makeover',price:1150,mrp:1630,rating:4.1,reviews:84,tag:'Trending',e:'🏡',img:''},
{id:'p226',name:'Royal String of Pearls in 10 Inch Terracotta Pot',cat:'plants',price:510,mrp:760,rating:4.1,reviews:162,tag:null,e:'🌿',img:''},
{id:'p227',name:'Glossy Ceramic Planter 10 Inch',cat:'pots',price:1000,mrp:1460,rating:4.8,reviews:263,tag:'Trending',e:'🪴',img:''},
{id:'p228',name:'Natural Organic Potting Mix 1kg Pack',cat:'soil',price:200,mrp:360,rating:4.5,reviews:131,tag:'Bestseller',e:'🪣',img:''},
{id:'p229',name:'Rust-Free Hand Trowel Set Standard',cat:'tools',price:600,mrp:1370,rating:3.9,reviews:277,tag:'Trending',e:'🛠️',img:''},
{id:'p230',name:'Non-GMO Cucumber Seeds Seed Kit',cat:'seeds',price:100,mrp:140,rating:4.8,reviews:30,tag:'Bestseller',e:'🌰',img:''},
{id:'p231',name:'Premium Money Tree Bonsai Floor Standing',cat:'decor',price:230,mrp:400,rating:3.9,reviews:131,tag:null,e:'🏺',img:''},
{id:'p232',name:'Special Friendship Day Combo Set of 5',cat:'gifting',price:520,mrp:750,rating:4.5,reviews:424,tag:null,e:'🎁',img:''},
{id:'p233',name:'Foldable Rotating Plant Stand Single',cat:'stands',price:1590,mrp:2490,rating:4.0,reviews:374,tag:'New',e:'🪑',img:''},
{id:'p234',name:'Premium Balcony Garden Kit Kit of 5',cat:'makeover',price:860,mrp:1820,rating:4.9,reviews:169,tag:null,e:'🏡',img:''},
{id:'p235',name:'Large Anthurium in Self-Watering Pot',cat:'plants',price:640,mrp:1170,rating:3.8,reviews:339,tag:null,e:'🌿',img:''},
{id:'p236',name:'Rustic Hanging Macrame Planter 4 Inch',cat:'pots',price:750,mrp:1230,rating:4.8,reviews:231,tag:'Bestseller',e:'🪴',img:''},
{id:'p237',name:'Balanced Micronutrient Mix 5kg Pack',cat:'soil',price:220,mrp:500,rating:4.4,reviews:262,tag:null,e:'🪣',img:''},
{id:'p238',name:'Multi-Purpose Gardening Apron Pack of 2',cat:'tools',price:340,mrp:720,rating:4.7,reviews:48,tag:'Bestseller',e:'🛠️',img:''},
{id:'p239',name:'Non-GMO Zinnia Seeds Pack of 20',cat:'seeds',price:100,mrp:170,rating:3.9,reviews:175,tag:null,e:'🌰',img:''},
{id:'p240',name:'Elegant Fiddle Leaf Fig Table Top',cat:'decor',price:1670,mrp:2980,rating:4.6,reviews:187,tag:'New',e:'🏺',img:''},
{id:'p241',name:'Festive Plant Gift Combo Set of 5',cat:'gifting',price:1510,mrp:3470,rating:4.1,reviews:413,tag:null,e:'🎁',img:''},
{id:'p242',name:'Foldable Metal Plant Stand Single',cat:'stands',price:1040,mrp:1940,rating:4.7,reviews:89,tag:null,e:'🪑',img:''},
{id:'p243',name:'Deluxe Terrace Garden Set Single Set',cat:'makeover',price:780,mrp:1180,rating:4.1,reviews:338,tag:null,e:'🏡',img:''},
{id:'p244',name:'Large Ficus Bonsai in 10 Inch Terracotta Pot',cat:'plants',price:110,mrp:210,rating:4.6,reviews:197,tag:null,e:'🌿',img:''},
{id:'p245',name:'Premium Wooden Planter Box 12 Inch',cat:'pots',price:350,mrp:660,rating:4.3,reviews:340,tag:null,e:'🪴',img:''},
{id:'p246',name:'Premium Neem Cake Fertilizer 500g Pack',cat:'soil',price:140,mrp:260,rating:4.3,reviews:295,tag:null,e:'🪣',img:''},
{id:'p247',name:'Multi-Purpose Hand Cultivator 2 Litre',cat:'tools',price:790,mrp:1420,rating:5.0,reviews:154,tag:'New',e:'🛠️',img:''},
{id:'p248',name:'Hybrid Chilli Seeds Pack of 20',cat:'seeds',price:140,mrp:200,rating:4.0,reviews:373,tag:'New',e:'🌰',img:''},
{id:'p249',name:'Handpicked Artificial Areca Palm Floor Standing',cat:'decor',price:1930,mrp:4420,rating:4.6,reviews:371,tag:null,e:'🏺',img:''},
{id:'p250',name:'Special Valentine Rose Combo Set of 5',cat:'gifting',price:860,mrp:1860,rating:4.7,reviews:366,tag:null,e:'🎁',img:''},
{id:'p251',name:'Sturdy Round Plant Stand Medium',cat:'stands',price:550,mrp:1260,rating:4.8,reviews:129,tag:'New',e:'🪑',img:''},
{id:'p252',name:'Premium Balcony Garden Kit Kit of 7',cat:'makeover',price:4330,mrp:9190,rating:4.5,reviews:321,tag:null,e:'🏡',img:''},
{id:'p253',name:'Premium Areca Palm in 8 Inch White Pot',cat:'plants',price:570,mrp:1070,rating:4.7,reviews:429,tag:null,e:'🌿',img:''},
{id:'p254',name:'Rustic Plastic Planter 14 Inch',cat:'pots',price:220,mrp:400,rating:4.6,reviews:184,tag:null,e:'🪴',img:''},
{id:'p255',name:'Enriched Enriched Potting Soil 1kg Pack',cat:'soil',price:270,mrp:500,rating:4.8,reviews:433,tag:null,e:'🪣',img:''},
{id:'p256',name:'Stainless Steel Garden Fork 2 Litre',cat:'tools',price:240,mrp:370,rating:4.9,reviews:123,tag:null,e:'🛠️',img:''},
{id:'p257',name:'Exotic Cucumber Seeds Pack of 10',cat:'seeds',price:60,mrp:90,rating:4.9,reviews:148,tag:null,e:'🌰',img:''},
{id:'p258',name:'Premium Air Plant Display Table Top',cat:'decor',price:1290,mrp:1910,rating:4.6,reviews:311,tag:null,e:'🏺',img:''},
{id:'p259',name:'Festive Anniversary Hamper Gift Box',cat:'gifting',price:1720,mrp:3800,rating:4.2,reviews:296,tag:null,e:'🎁',img:''},
{id:'p260',name:'Modern Wooden Plant Stand Small',cat:'stands',price:1610,mrp:3370,rating:4.1,reviews:115,tag:'Bestseller',e:'🪑',img:''},
{id:'p261',name:'Complete Patio Garden Combo Single Set',cat:'makeover',price:4970,mrp:8250,rating:4.9,reviews:255,tag:null,e:'🏡',img:''},
{id:'p262',name:'Dwarf Ivy Plant in 8 Inch White Pot',cat:'plants',price:380,mrp:690,rating:4.6,reviews:88,tag:'New',e:'🌿',img:''},
{id:'p263',name:'Handcrafted Metal Planter 10 Inch',cat:'pots',price:490,mrp:840,rating:4.0,reviews:449,tag:null,e:'🪴',img:''},
{id:'p264',name:'All-Purpose Micronutrient Mix 5kg Pack',cat:'soil',price:120,mrp:250,rating:4.4,reviews:62,tag:null,e:'🪣',img:''},
{id:'p265',name:'Compact Garden Gloves Standard',cat:'tools',price:340,mrp:610,rating:4.0,reviews:33,tag:null,e:'🛠️',img:''},
{id:'p266',name:'Non-GMO Coriander Seeds Seed Kit',cat:'seeds',price:80,mrp:130,rating:4.8,reviews:89,tag:null,e:'🌰',img:''},
{id:'p267',name:'Rustic Terrarium Bowl Large',cat:'decor',price:590,mrp:1230,rating:4.4,reviews:271,tag:'New',e:'🏺',img:''},
{id:'p268',name:'Classic New Year Plant Box Single Piece',cat:'gifting',price:300,mrp:440,rating:4.3,reviews:242,tag:null,e:'🎁',img:''},
{id:'p269',name:'Sturdy Corner Plant Stand Large',cat:'stands',price:400,mrp:580,rating:4.4,reviews:459,tag:'New',e:'🪑',img:''},
{id:'p270',name:'Deluxe Kitchen Garden Starter Kit Kit of 3',cat:'makeover',price:1380,mrp:2470,rating:4.9,reviews:380,tag:null,e:'🏡',img:''},
{id:'p271',name:'Large Aglaonema in 6 Inch Ceramic Pot',cat:'plants',price:120,mrp:210,rating:4.5,reviews:107,tag:null,e:'🌿',img:''},
{id:'p272',name:'Matte Clay Pot 4 Inch',cat:'pots',price:860,mrp:1590,rating:4.7,reviews:151,tag:null,e:'🪴',img:''},
{id:'p273',name:'Premium Cocopeat Brick 5kg Pack',cat:'soil',price:240,mrp:510,rating:4.2,reviews:195,tag:null,e:'🪣',img:''},
{id:'p274',name:'Professional Garden Gloves Pack of 2',cat:'tools',price:480,mrp:890,rating:3.9,reviews:78,tag:null,e:'🛠️',img:''},
{id:'p275',name:'Heirloom Okra Seeds Seed Kit',cat:'seeds',price:85,mrp:130,rating:4.9,reviews:79,tag:null,e:'🌰',img:''},
{id:'p276',name:'Premium Terrarium Bowl Medium',cat:'decor',price:1000,mrp:2290,rating:4.7,reviews:161,tag:null,e:'🏺',img:''},
{id:'p277',name:'Special Valentine Rose Combo Gift Box',cat:'gifting',price:1250,mrp:2550,rating:4.2,reviews:425,tag:null,e:'🎁',img:''},
{id:'p278',name:'Rustic Round Plant Stand Small',cat:'stands',price:1150,mrp:2210,rating:4.8,reviews:379,tag:null,e:'🪑',img:''},
{id:'p279',name:'Compact Patio Garden Combo Kit of 7',cat:'makeover',price:2360,mrp:4840,rating:4.5,reviews:95,tag:'Trending',e:'🏡',img:''},
{id:'p280',name:'Super Monstera Deliciosa in 10 Inch Terracotta Pot',cat:'plants',price:470,mrp:720,rating:4.6,reviews:24,tag:null,e:'🌿',img:''},
{id:'p281',name:'Classic Fiberglass Pot 10 Inch',cat:'pots',price:710,mrp:1260,rating:4.3,reviews:112,tag:'Bestseller',e:'🪴',img:''},
{id:'p282',name:'Balanced Compost Manure 500g Pack',cat:'soil',price:120,mrp:220,rating:4.5,reviews:347,tag:'New',e:'🪣',img:''},
{id:'p283',name:'Compact Garden Fork 2 Litre',cat:'tools',price:250,mrp:450,rating:4.4,reviews:287,tag:null,e:'🛠️',img:''},
{id:'p284',name:'Non-GMO Brinjal Seeds Pack of 50',cat:'seeds',price:110,mrp:200,rating:4.9,reviews:150,tag:'Trending',e:'🌰',img:''},
{id:'p285',name:'Designer Fiddle Leaf Fig Large',cat:'decor',price:1780,mrp:2950,rating:4.0,reviews:368,tag:'New',e:'🏺',img:''},
{id:'p286',name:'Elegant Corporate Gift Combo Set of 5',cat:'gifting',price:1400,mrp:3140,rating:4.8,reviews:148,tag:null,e:'🎁',img:''},
{id:'p287',name:'Sturdy Metal Plant Stand Set of 2',cat:'stands',price:1080,mrp:2380,rating:4.3,reviews:184,tag:null,e:'🪑',img:''},
{id:'p288',name:'Complete Kitchen Garden Starter Kit Kit of 7',cat:'makeover',price:1150,mrp:1970,rating:4.3,reviews:139,tag:'New',e:'🏡',img:''},
{id:'p289',name:'Classic Tulsi in Self-Watering Pot',cat:'plants',price:630,mrp:1040,rating:4.5,reviews:147,tag:null,e:'🌿',img:''},
{id:'p290',name:'Minimal Terracotta Pot 14 Inch',cat:'pots',price:1270,mrp:2050,rating:3.9,reviews:471,tag:'Trending',e:'🪴',img:''},
{id:'p291',name:'Natural Neem Cake Fertilizer 500g Pack',cat:'soil',price:100,mrp:180,rating:4.7,reviews:59,tag:null,e:'🪣',img:''},
{id:'p292',name:'Professional Pruning Shears Set of 3',cat:'tools',price:480,mrp:950,rating:4.9,reviews:251,tag:'New',e:'🛠️',img:''},
{id:'p293',name:'Organic Brinjal Seeds Pack of 50',cat:'seeds',price:70,mrp:120,rating:3.9,reviews:401,tag:null,e:'🌰',img:''},
{id:'p294',name:'Modern Air Plant Display Medium',cat:'decor',price:1290,mrp:2660,rating:4.8,reviews:27,tag:null,e:'🏺',img:''},
{id:'p295',name:'Premium Wedding Return Gift Set of 2',cat:'gifting',price:1960,mrp:3440,rating:4.4,reviews:391,tag:null,e:'🎁',img:''},
{id:'p296',name:'Modern Wooden Plant Stand Large',cat:'stands',price:1460,mrp:2840,rating:4.9,reviews:179,tag:null,e:'🪑',img:''},
{id:'p297',name:'Deluxe Window Sill Garden Kit Single Set',cat:'makeover',price:1600,mrp:3460,rating:4.4,reviews:106,tag:null,e:'🏡',img:''},
{id:'p298',name:'Variegated Croton in Hanging Planter',cat:'plants',price:550,mrp:1090,rating:4.7,reviews:15,tag:null,e:'🌿',img:''},
{id:'p299',name:'Matte Textured Planter 12 Inch',cat:'pots',price:460,mrp:720,rating:4.8,reviews:467,tag:'Bestseller',e:'🪴',img:''},
{id:'p300',name:'Fast-Acting Liquid Fertilizer 10kg Bag',cat:'soil',price:220,mrp:320,rating:4.6,reviews:102,tag:null,e:'🪣',img:''},
{id:'p301',name:'Ergonomic Weeder Tool Set of 3',cat:'tools',price:75,mrp:120,rating:4.1,reviews:393,tag:null,e:'🛠️',img:''},
{id:'p302',name:'Exotic Sunflower Seeds Seed Kit',cat:'seeds',price:120,mrp:230,rating:4.1,reviews:192,tag:null,e:'🌰',img:''},
{id:'p303',name:'Rustic Bonsai Ficus Small',cat:'decor',price:1150,mrp:1930,rating:4.3,reviews:265,tag:null,e:'🏺',img:''},
{id:'p304',name:'Deluxe Get Well Soon Plant Set of 5',cat:'gifting',price:1000,mrp:1950,rating:4.1,reviews:76,tag:'New',e:'🎁',img:''},
{id:'p305',name:'Minimal 3-Tier Plant Stand Set of 2',cat:'stands',price:1060,mrp:1880,rating:4.5,reviews:249,tag:'Trending',e:'🪑',img:''},
{id:'p306',name:'Starter Office Desk Greenery Kit Kit of 3',cat:'makeover',price:4800,mrp:8650,rating:4.6,reviews:47,tag:null,e:'🏡',img:''},
{id:'p307',name:'Deluxe Snake Plant in 10 Inch Terracotta Pot',cat:'plants',price:290,mrp:560,rating:4.0,reviews:175,tag:'Trending',e:'🌿',img:''},
{id:'p308',name:'Premium Wooden Planter Box 14 Inch',cat:'pots',price:490,mrp:1000,rating:4.4,reviews:468,tag:'Trending',e:'🪴',img:''},
{id:'p309',name:'Organic Garden Soil 5kg Pack',cat:'soil',price:120,mrp:220,rating:4.3,reviews:37,tag:'Trending',e:'🪣',img:''},
{id:'p310',name:'Rust-Free Weeder Tool 2 Litre',cat:'tools',price:810,mrp:1150,rating:4.1,reviews:9,tag:null,e:'🛠️',img:''},
{id:'p311',name:'Hybrid Zinnia Seeds Pack of 10',cat:'seeds',price:85,mrp:140,rating:3.9,reviews:38,tag:null,e:'🌰',img:''},
{id:'p312',name:'Trending Artificial Monstera Large',cat:'decor',price:1040,mrp:1620,rating:4.0,reviews:336,tag:'Bestseller',e:'🏺',img:''},
{id:'p313',name:'Elegant Corporate Gift Combo Single Piece',cat:'gifting',price:1020,mrp:1770,rating:4.6,reviews:346,tag:'Trending',e:'🎁',img:''},
{id:'p314',name:'Foldable 3-Tier Plant Stand Large',cat:'stands',price:540,mrp:840,rating:4.4,reviews:278,tag:null,e:'🪑',img:''},
{id:'p315',name:'Complete Office Desk Greenery Kit Kit of 3',cat:'makeover',price:2940,mrp:5340,rating:4.7,reviews:225,tag:'Trending',e:'🏡',img:''},
{id:'p316',name:'Classic Calathea in 6 Inch Plastic Pot',cat:'plants',price:550,mrp:940,rating:4.1,reviews:456,tag:null,e:'🌿',img:''},
{id:'p317',name:'Modern Ceramic Planter 12 Inch',cat:'pots',price:100,mrp:160,rating:3.9,reviews:312,tag:null,e:'🪴',img:''},
{id:'p318',name:'Organic Garden Soil 1kg Pack',cat:'soil',price:70,mrp:120,rating:4.1,reviews:119,tag:null,e:'🪣',img:''},
{id:'p319',name:'Professional Hand Trowel Set 2 Litre',cat:'tools',price:310,mrp:660,rating:4.7,reviews:171,tag:null,e:'🛠️',img:''},
{id:'p320',name:'Exotic Chilli Seeds Pack of 20',cat:'seeds',price:110,mrp:200,rating:4.3,reviews:148,tag:null,e:'🌰',img:''},
{id:'p321',name:'Modern Zen Garden Set Floor Standing',cat:'decor',price:560,mrp:1100,rating:4.3,reviews:261,tag:null,e:'🏺',img:''},
{id:'p322',name:'Festive Corporate Gift Combo Single Piece',cat:'gifting',price:1860,mrp:3480,rating:4.6,reviews:217,tag:null,e:'🎁',img:''},
{id:'p323',name:'Minimal Ladder Plant Stand Medium',cat:'stands',price:1840,mrp:3470,rating:4.1,reviews:123,tag:null,e:'🪑',img:''},
{id:'p324',name:'Compact Terrace Garden Set Kit of 3',cat:'makeover',price:3880,mrp:8810,rating:4.5,reviews:76,tag:'Bestseller',e:'🏡',img:''},
{id:'p325',name:'Premium Spider Plant in 6 Inch Plastic Pot',cat:'plants',price:420,mrp:830,rating:4.9,reviews:441,tag:null,e:'🌿',img:''},
{id:'p326',name:'Textured Terracotta Pot 14 Inch',cat:'pots',price:460,mrp:660,rating:4.3,reviews:317,tag:null,e:'🪴',img:''},
{id:'p327',name:'Premium Liquid Fertilizer 1kg Pack',cat:'soil',price:350,mrp:720,rating:4.5,reviews:253,tag:null,e:'🪣',img:''},
{id:'p328',name:'Ergonomic Dibber Tool 2 Litre',cat:'tools',price:85,mrp:140,rating:4.0,reviews:387,tag:null,e:'🛠️',img:''},
{id:'p329',name:'Non-GMO Cabbage Seeds Mini Pack',cat:'seeds',price:150,mrp:240,rating:4.5,reviews:112,tag:'Bestseller',e:'🌰',img:''},
{id:'p330',name:'Modern Rare Calathea Large',cat:'decor',price:1790,mrp:2960,rating:4.4,reviews:340,tag:null,e:'🏺',img:''},
{id:'p331',name:'Classic Diwali Plant Gift Set of 5',cat:'gifting',price:1300,mrp:2850,rating:4.4,reviews:419,tag:'New',e:'🎁',img:''},
{id:'p332',name:'Classic Round Plant Stand Large',cat:'stands',price:940,mrp:1670,rating:4.5,reviews:121,tag:null,e:'🪑',img:''},
{id:'p333',name:'Premium Balcony Garden Kit Single Set',cat:'makeover',price:2920,mrp:4490,rating:4.2,reviews:202,tag:null,e:'🏡',img:''},
{id:'p334',name:'Deluxe Money Plant Pothos in Hanging Planter',cat:'plants',price:420,mrp:680,rating:4.8,reviews:378,tag:'New',e:'🌿',img:''},
{id:'p335',name:'Designer Wooden Planter Box 14 Inch',cat:'pots',price:790,mrp:1230,rating:4.7,reviews:258,tag:null,e:'🪴',img:''},
{id:'p336',name:'Organic Enriched Potting Soil 10kg Bag',cat:'soil',price:65,mrp:140,rating:3.9,reviews:426,tag:null,e:'🪣',img:''},
{id:'p337',name:'Heavy Duty Garden Rake 5 Litre',cat:'tools',price:210,mrp:450,rating:4.1,reviews:370,tag:null,e:'🛠️',img:''},
{id:'p338',name:'Organic Marigold Seeds Seed Kit',cat:'seeds',price:85,mrp:150,rating:4.5,reviews:349,tag:'New',e:'🌰',img:''},
{id:'p339',name:'Elegant Air Plant Display Small',cat:'decor',price:210,mrp:390,rating:4.3,reviews:16,tag:'Trending',e:'🏺',img:''},
{id:'p340',name:'Classic Get Well Soon Plant Gift Box',cat:'gifting',price:840,mrp:1190,rating:4.8,reviews:353,tag:'Bestseller',e:'🎁',img:''},
{id:'p341',name:'Modern 3-Tier Plant Stand Small',cat:'stands',price:1370,mrp:2100,rating:4.0,reviews:277,tag:null,e:'🪑',img:''},
{id:'p342',name:'Premium Vertical Garden Kit Single Set',cat:'makeover',price:1150,mrp:2000,rating:4.3,reviews:297,tag:null,e:'🏡',img:''},
{id:'p343',name:'Classic Asparagus Fern in 6 Inch Ceramic Pot',cat:'plants',price:160,mrp:320,rating:4.8,reviews:396,tag:null,e:'🌿',img:''},
{id:'p344',name:'Modern Terracotta Pot 10 Inch',cat:'pots',price:840,mrp:1590,rating:3.9,reviews:12,tag:null,e:'🪴',img:''},
{id:'p345',name:'Balanced Vermicompost 5kg Pack',cat:'soil',price:380,mrp:800,rating:4.5,reviews:447,tag:null,e:'🪣',img:''},
{id:'p346',name:'Professional Gardening Apron Standard',cat:'tools',price:300,mrp:480,rating:4.8,reviews:462,tag:'New',e:'🛠️',img:''},
{id:'p347',name:'Hybrid Rose Seeds Pack of 10',cat:'seeds',price:120,mrp:270,rating:4.9,reviews:296,tag:null,e:'🌰',img:''},
{id:'p348',name:'Handpicked Lucky Bamboo Set Large',cat:'decor',price:230,mrp:520,rating:4.5,reviews:393,tag:'Bestseller',e:'🏺',img:''},
{id:'p349',name:'Classic Succulent Gift Box Set of 3',cat:'gifting',price:1400,mrp:2260,rating:4.8,reviews:207,tag:'Trending',e:'🎁',img:''},
{id:'p350',name:'Minimal Round Plant Stand Medium',cat:'stands',price:1920,mrp:4400,rating:4.7,reviews:264,tag:null,e:'🪑',img:''},
{id:'p351',name:'Complete Balcony Garden Kit Single Set',cat:'makeover',price:2400,mrp:5170,rating:4.2,reviews:401,tag:'Bestseller',e:'🏡',img:''},
{id:'p352',name:'Mini Aglaonema in 4 Inch Nursery Bag',cat:'plants',price:360,mrp:760,rating:4.3,reviews:124,tag:null,e:'🌿',img:''},
{id:'p353',name:'Modern Clay Pot 10 Inch',cat:'pots',price:450,mrp:900,rating:4.6,reviews:51,tag:null,e:'🪴',img:''},
{id:'p354',name:'Natural Root Booster 500g Pack',cat:'soil',price:90,mrp:150,rating:4.3,reviews:409,tag:null,e:'🪣',img:''},
{id:'p355',name:'Compact Hedge Shears 2 Litre',cat:'tools',price:440,mrp:660,rating:3.8,reviews:165,tag:'New',e:'🛠️',img:''},
{id:'p356',name:'Non-GMO Sunflower Seeds Pack of 50',cat:'seeds',price:40,mrp:60,rating:4.0,reviews:237,tag:'Trending',e:'🌰',img:''},
{id:'p357',name:'Modern Zen Garden Set Set of 3',cat:'decor',price:410,mrp:580,rating:4.2,reviews:55,tag:null,e:'🏺',img:''},
{id:'p358',name:'Elegant Rakhi Plant Gift Set of 2',cat:'gifting',price:850,mrp:1510,rating:4.7,reviews:379,tag:'Trending',e:'🎁',img:''},
{id:'p359',name:'Sturdy Corner Plant Stand Set of 2',cat:'stands',price:650,mrp:1310,rating:4.0,reviews:145,tag:null,e:'🪑',img:''},
{id:'p360',name:'Compact Kitchen Garden Starter Kit Kit of 5',cat:'makeover',price:1020,mrp:1580,rating:4.1,reviews:161,tag:'New',e:'🏡',img:''},
{id:'p361',name:'Green Ivy Plant in 6 Inch Ceramic Pot',cat:'plants',price:340,mrp:760,rating:4.7,reviews:261,tag:null,e:'🌿',img:''},
{id:'p362',name:'Premium Wooden Planter Box 6 Inch',cat:'pots',price:690,mrp:970,rating:4.3,reviews:438,tag:'Bestseller',e:'🪴',img:''},
{id:'p363',name:'All-Purpose Root Booster 5kg Pack',cat:'soil',price:220,mrp:390,rating:4.8,reviews:341,tag:null,e:'🪣',img:''},
{id:'p364',name:'Ergonomic Hand Cultivator Pack of 2',cat:'tools',price:780,mrp:1230,rating:4.2,reviews:211,tag:null,e:'🛠️',img:''},
{id:'p365',name:'Premium Rose Seeds Mini Pack',cat:'seeds',price:100,mrp:210,rating:4.2,reviews:151,tag:'Bestseller',e:'🌰',img:''},
{id:'p366',name:'Trending Money Tree Bonsai Table Top',cat:'decor',price:610,mrp:1180,rating:4.5,reviews:357,tag:'Trending',e:'🏺',img:''},
{id:'p367',name:'Festive Plant Gift Combo Single Piece',cat:'gifting',price:1700,mrp:2700,rating:4.8,reviews:433,tag:null,e:'🎁',img:''},
{id:'p368',name:'Foldable Folding Plant Stand Single',cat:'stands',price:580,mrp:1140,rating:4.1,reviews:345,tag:null,e:'🪑',img:''},
{id:'p369',name:'Compact Entrance Decor Combo Kit of 3',cat:'makeover',price:4180,mrp:9580,rating:4.4,reviews:213,tag:'Trending',e:'🏡',img:''},
{id:'p370',name:'Super Anthurium in 8 Inch White Pot',cat:'plants',price:640,mrp:920,rating:5.0,reviews:367,tag:'Trending',e:'🌿',img:''},
{id:'p371',name:'Premium Cement Planter 4 Inch',cat:'pots',price:580,mrp:1160,rating:4.2,reviews:339,tag:null,e:'🪴',img:''},
{id:'p372',name:'Fast-Acting Seaweed Extract 2kg Pack',cat:'soil',price:270,mrp:400,rating:3.9,reviews:121,tag:'Trending',e:'🪣',img:''},
{id:'p373',name:'Professional Hedge Shears Pack of 2',cat:'tools',price:660,mrp:1330,rating:4.1,reviews:199,tag:'Bestseller',e:'🛠️',img:''},
{id:'p374',name:'Non-GMO Spinach Seeds Seed Kit',cat:'seeds',price:120,mrp:220,rating:4.2,reviews:20,tag:'New',e:'🌰',img:''},
{id:'p375',name:'Premium Artificial Areca Palm Set of 3',cat:'decor',price:370,mrp:560,rating:4.9,reviews:80,tag:null,e:'🏺',img:''},
{id:'p376',name:'Classic Diwali Plant Gift Single Piece',cat:'gifting',price:1860,mrp:2950,rating:4.4,reviews:251,tag:null,e:'🎁',img:''},
{id:'p377',name:'Foldable Rotating Plant Stand Single',cat:'stands',price:950,mrp:1390,rating:3.9,reviews:371,tag:null,e:'🪑',img:''},
{id:'p378',name:'Premium Balcony Garden Kit Kit of 3',cat:'makeover',price:1840,mrp:4120,rating:4.7,reviews:272,tag:null,e:'🏡',img:''},
{id:'p379',name:'Variegated Orchid Plant in 6 Inch Ceramic Pot',cat:'plants',price:650,mrp:1160,rating:4.4,reviews:416,tag:'Bestseller',e:'🌿',img:''},
{id:'p380',name:'Designer Round Planter 6 Inch',cat:'pots',price:950,mrp:1670,rating:4.7,reviews:460,tag:null,e:'🪴',img:''},
{id:'p381',name:'Fast-Acting Garden Soil 5kg Pack',cat:'soil',price:50,mrp:100,rating:4.0,reviews:393,tag:null,e:'🪣',img:''},
{id:'p382',name:'Heavy Duty Soil Scoop Pack of 2',cat:'tools',price:260,mrp:450,rating:4.0,reviews:66,tag:null,e:'🛠️',img:''},
{id:'p383',name:'Non-GMO Brinjal Seeds Mini Pack',cat:'seeds',price:95,mrp:220,rating:4.2,reviews:206,tag:'Bestseller',e:'🌰',img:''},
{id:'p384',name:'Trending Terrarium Bowl Large',cat:'decor',price:920,mrp:1990,rating:4.5,reviews:424,tag:null,e:'🏺',img:''},
{id:'p385',name:'Special Mother\'s Day Combo Set of 2',cat:'gifting',price:1620,mrp:2460,rating:3.9,reviews:164,tag:null,e:'🎁',img:''},
{id:'p386',name:'Rustic 3-Tier Plant Stand Medium',cat:'stands',price:1340,mrp:2340,rating:4.5,reviews:302,tag:'Bestseller',e:'🪑',img:''},
{id:'p387',name:'Starter Entrance Decor Combo Single Set',cat:'makeover',price:4900,mrp:9920,rating:4.6,reviews:96,tag:'Trending',e:'🏡',img:''},
{id:'p388',name:'Compact Jade Plant in 6 Inch Ceramic Pot',cat:'plants',price:220,mrp:340,rating:4.8,reviews:325,tag:null,e:'🌿',img:''},
{id:'p389',name:'Rustic Matte Finish Planter 4 Inch',cat:'pots',price:1060,mrp:1610,rating:4.8,reviews:295,tag:'Trending',e:'🪴',img:''},
{id:'p390',name:'Balanced Cow Dung Manure 5kg Pack',cat:'soil',price:400,mrp:740,rating:4.7,reviews:235,tag:'New',e:'🪣',img:''},
{id:'p391',name:'Heavy Duty Hand Trowel Set Pack of 2',cat:'tools',price:100,mrp:210,rating:4.1,reviews:24,tag:null,e:'🛠️',img:''},
{id:'p392',name:'High-Yield Chilli Seeds Pack of 50',cat:'seeds',price:50,mrp:100,rating:4.5,reviews:403,tag:'New',e:'🌰',img:''},
{id:'p393',name:'Modern Zen Garden Set Small',cat:'decor',price:1370,mrp:2060,rating:4.7,reviews:429,tag:null,e:'🏺',img:''},
{id:'p394',name:'Deluxe Valentine Rose Combo Single Piece',cat:'gifting',price:1370,mrp:2190,rating:4.3,reviews:384,tag:null,e:'🎁',img:''},
{id:'p395',name:'Modern Ladder Plant Stand Single',cat:'stands',price:840,mrp:1440,rating:4.8,reviews:232,tag:null,e:'🪑',img:''},
{id:'p396',name:'Starter Office Desk Greenery Kit Kit of 7',cat:'makeover',price:4010,mrp:6210,rating:4.0,reviews:113,tag:null,e:'🏡',img:''},
{id:'p397',name:'Golden Ivy Plant in 10 Inch Terracotta Pot',cat:'plants',price:440,mrp:830,rating:4.5,reviews:94,tag:null,e:'🌿',img:''},
{id:'p398',name:'Matte Square Planter 8 Inch',cat:'pots',price:1240,mrp:2030,rating:4.8,reviews:468,tag:null,e:'🪴',img:''},
{id:'p399',name:'Fast-Acting Cocopeat Brick 500g Pack',cat:'soil',price:190,mrp:410,rating:4.0,reviews:451,tag:null,e:'🪣',img:''},
{id:'p400',name:'Stainless Steel Garden Gloves 2 Litre',cat:'tools',price:320,mrp:670,rating:4.6,reviews:258,tag:null,e:'🛠️',img:''},
{id:'p401',name:'Premium Zinnia Seeds Pack of 50',cat:'seeds',price:110,mrp:200,rating:4.3,reviews:332,tag:null,e:'🌰',img:''},
{id:'p402',name:'Modern Decorative Fern Floor Standing',cat:'decor',price:770,mrp:1560,rating:4.9,reviews:240,tag:'New',e:'🏺',img:''},
{id:'p403',name:'Special Corporate Gift Combo Set of 2',cat:'gifting',price:1830,mrp:3960,rating:3.9,reviews:242,tag:null,e:'🎁',img:''},
{id:'p404',name:'Sturdy Metal Plant Stand Single',cat:'stands',price:740,mrp:1680,rating:4.8,reviews:261,tag:null,e:'🪑',img:''},
{id:'p405',name:'Premium Vertical Garden Kit Kit of 7',cat:'makeover',price:4980,mrp:9560,rating:4.5,reviews:256,tag:null,e:'🏡',img:''},
{id:'p406',name:'Dwarf Marigold Plant in Self-Watering Pot',cat:'plants',price:130,mrp:190,rating:4.6,reviews:436,tag:'New',e:'🌿',img:''},
{id:'p407',name:'Premium Ceramic Planter 6 Inch',cat:'pots',price:970,mrp:1760,rating:5.0,reviews:227,tag:null,e:'🪴',img:''},
{id:'p408',name:'Enriched Micronutrient Mix 2kg Pack',cat:'soil',price:130,mrp:280,rating:4.9,reviews:55,tag:null,e:'🪣',img:''},
{id:'p409',name:'Heavy Duty Hand Cultivator 2 Litre',cat:'tools',price:750,mrp:1660,rating:4.0,reviews:210,tag:null,e:'🛠️',img:''},
{id:'p410',name:'Premium Cabbage Seeds Pack of 20',cat:'seeds',price:85,mrp:170,rating:4.6,reviews:8,tag:null,e:'🌰',img:''},
{id:'p411',name:'Trending Artificial Monstera Medium',cat:'decor',price:1410,mrp:2260,rating:4.6,reviews:12,tag:null,e:'🏺',img:''},
{id:'p412',name:'Classic Get Well Soon Plant Set of 2',cat:'gifting',price:1110,mrp:2250,rating:4.4,reviews:125,tag:'Bestseller',e:'🎁',img:''},
{id:'p413',name:'Foldable Metal Plant Stand Small',cat:'stands',price:510,mrp:860,rating:4.9,reviews:78,tag:'Bestseller',e:'🪑',img:''},
{id:'p414',name:'Starter Terrace Garden Set Kit of 3',cat:'makeover',price:4840,mrp:9230,rating:4.5,reviews:92,tag:'New',e:'🏡',img:''},
{id:'p415',name:'Super Ficus Bonsai in 6 Inch Plastic Pot',cat:'plants',price:230,mrp:510,rating:4.5,reviews:234,tag:null,e:'🌿',img:''},
{id:'p416',name:'Premium Terracotta Pot 6 Inch',cat:'pots',price:320,mrp:620,rating:4.3,reviews:227,tag:null,e:'🪴',img:''},
{id:'p417',name:'Enriched Root Booster 1kg Pack',cat:'soil',price:190,mrp:380,rating:4.1,reviews:315,tag:null,e:'🪣',img:''},
{id:'p418',name:'Rust-Free Garden Rake Standard',cat:'tools',price:740,mrp:1620,rating:4.0,reviews:318,tag:'Trending',e:'🛠️',img:''},
{id:'p419',name:'Premium Chilli Seeds Mini Pack',cat:'seeds',price:65,mrp:130,rating:4.7,reviews:414,tag:null,e:'🌰',img:''},
{id:'p420',name:'Elegant Artificial Monstera Small',cat:'decor',price:690,mrp:1280,rating:4.5,reviews:278,tag:null,e:'🏺',img:''},
{id:'p421',name:'Classic Corporate Gift Combo Set of 3',cat:'gifting',price:1040,mrp:2260,rating:4.5,reviews:195,tag:'Trending',e:'🎁',img:''},
{id:'p422',name:'Minimal 3-Tier Plant Stand Small',cat:'stands',price:330,mrp:640,rating:3.8,reviews:118,tag:null,e:'🪑',img:''},
{id:'p423',name:'Compact Balcony Garden Kit Kit of 7',cat:'makeover',price:4600,mrp:9620,rating:4.3,reviews:213,tag:null,e:'🏡',img:''},
{id:'p424',name:'Deluxe Monstera Deliciosa in 10 Inch Terracotta Pot',cat:'plants',price:240,mrp:400,rating:4.2,reviews:269,tag:null,e:'🌿',img:''},
{id:'p425',name:'Designer Textured Planter 12 Inch',cat:'pots',price:740,mrp:1300,rating:4.6,reviews:435,tag:null,e:'🪴',img:''},
{id:'p426',name:'Fast-Acting Bone Meal 1kg Pack',cat:'soil',price:80,mrp:130,rating:4.9,reviews:67,tag:'New',e:'🪣',img:''},
{id:'p427',name:'Professional Soil Scoop Standard',cat:'tools',price:380,mrp:760,rating:4.6,reviews:97,tag:null,e:'🛠️',img:''},
{id:'p428',name:'Premium Marigold Seeds Pack of 20',cat:'seeds',price:120,mrp:170,rating:4.4,reviews:185,tag:'Trending',e:'🌰',img:''},
{id:'p429',name:'Handpicked Zen Garden Set Floor Standing',cat:'decor',price:730,mrp:1130,rating:4.0,reviews:407,tag:null,e:'🏺',img:''},
{id:'p430',name:'Deluxe Get Well Soon Plant Set of 2',cat:'gifting',price:940,mrp:2000,rating:4.1,reviews:40,tag:null,e:'🎁',img:''},
{id:'p431',name:'Foldable Iron Plant Stand Small',cat:'stands',price:1320,mrp:2390,rating:4.2,reviews:263,tag:null,e:'🪑',img:''},
{id:'p432',name:'Starter Vertical Garden Kit Kit of 7',cat:'makeover',price:1340,mrp:2950,rating:4.6,reviews:67,tag:null,e:'🏡',img:''},
{id:'p433',name:'Deluxe String of Pearls in 4 Inch Nursery Bag',cat:'plants',price:120,mrp:260,rating:3.8,reviews:31,tag:'New',e:'🌿',img:''},
{id:'p434',name:'Modern Self-Watering Pot 6 Inch',cat:'pots',price:440,mrp:980,rating:4.8,reviews:291,tag:'Bestseller',e:'🪴',img:''},
{id:'p435',name:'All-Purpose Neem Cake Fertilizer 1kg Pack',cat:'soil',price:260,mrp:580,rating:4.2,reviews:430,tag:null,e:'🪣',img:''},
{id:'p436',name:'Ergonomic Soil Scoop Standard',cat:'tools',price:580,mrp:1160,rating:3.9,reviews:122,tag:'Trending',e:'🛠️',img:''},
{id:'p437',name:'Heirloom Marigold Seeds Pack of 10',cat:'seeds',price:140,mrp:250,rating:4.1,reviews:440,tag:null,e:'🌰',img:''},
{id:'p438',name:'Trending Money Tree Bonsai Table Top',cat:'decor',price:1130,mrp:1590,rating:4.0,reviews:296,tag:null,e:'🏺',img:''},
{id:'p439',name:'Special Get Well Soon Plant Set of 3',cat:'gifting',price:1200,mrp:2080,rating:5.0,reviews:403,tag:null,e:'🎁',img:''},
{id:'p440',name:'Classic Bamboo Plant Stand Medium',cat:'stands',price:310,mrp:690,rating:3.8,reviews:285,tag:null,e:'🪑',img:''},
{id:'p441',name:'Premium Balcony Garden Kit Kit of 3',cat:'makeover',price:3580,mrp:7750,rating:4.7,reviews:61,tag:null,e:'🏡',img:''},
{id:'p442',name:'Classic Anthurium in 8 Inch White Pot',cat:'plants',price:580,mrp:1310,rating:5.0,reviews:80,tag:null,e:'🌿',img:''},
{id:'p443',name:'Classic Terracotta Pot 6 Inch',cat:'pots',price:1130,mrp:2000,rating:4.9,reviews:242,tag:null,e:'🪴',img:''},
{id:'p444',name:'Premium Seaweed Extract 10kg Bag',cat:'soil',price:120,mrp:240,rating:4.3,reviews:311,tag:null,e:'🪣',img:''},
{id:'p445',name:'Rust-Free Grass Cutter Set of 3',cat:'tools',price:310,mrp:520,rating:4.8,reviews:418,tag:'Bestseller',e:'🛠️',img:''},
{id:'p446',name:'Non-GMO Cabbage Seeds Pack of 50',cat:'seeds',price:70,mrp:130,rating:4.1,reviews:111,tag:null,e:'🌰',img:''},
{id:'p447',name:'Handpicked Artificial Boxwood Table Top',cat:'decor',price:420,mrp:650,rating:4.0,reviews:246,tag:null,e:'🏺',img:''},
{id:'p448',name:'Deluxe Wedding Return Gift Gift Box',cat:'gifting',price:980,mrp:2220,rating:4.0,reviews:165,tag:'New',e:'🎁',img:''},
{id:'p449',name:'Modern Ladder Plant Stand Small',cat:'stands',price:620,mrp:1320,rating:4.2,reviews:368,tag:null,e:'🪑',img:''},
{id:'p450',name:'Premium Office Desk Greenery Kit Kit of 5',cat:'makeover',price:1250,mrp:2550,rating:5.0,reviews:210,tag:'Trending',e:'🏡',img:''},
{id:'p451',name:'Dwarf Snake Plant in 6 Inch Ceramic Pot',cat:'plants',price:340,mrp:730,rating:4.0,reviews:215,tag:'New',e:'🌿',img:''},
{id:'p452',name:'Textured Clay Pot 6 Inch',cat:'pots',price:260,mrp:470,rating:4.8,reviews:79,tag:null,e:'🪴',img:''},
{id:'p453',name:'Organic Organic Potting Mix 1kg Pack',cat:'soil',price:120,mrp:190,rating:4.3,reviews:359,tag:null,e:'🪣',img:''},
{id:'p454',name:'Professional Soil Scoop 2 Litre',cat:'tools',price:140,mrp:200,rating:3.9,reviews:470,tag:'New',e:'🛠️',img:''},
{id:'p455',name:'Organic Okra Seeds Pack of 10',cat:'seeds',price:140,mrp:300,rating:4.8,reviews:70,tag:null,e:'🌰',img:''},
{id:'p456',name:'Trending Artificial Monstera Medium',cat:'decor',price:1370,mrp:2450,rating:4.7,reviews:262,tag:null,e:'🏺',img:''},
{id:'p457',name:'Festive Wedding Return Gift Single Piece',cat:'gifting',price:600,mrp:1030,rating:4.9,reviews:148,tag:null,e:'🎁',img:''},
{id:'p458',name:'Classic Rotating Plant Stand Small',cat:'stands',price:1560,mrp:3050,rating:4.1,reviews:159,tag:'New',e:'🪑',img:''},
{id:'p459',name:'Deluxe Entrance Decor Combo Single Set',cat:'makeover',price:1000,mrp:1480,rating:4.3,reviews:222,tag:null,e:'🏡',img:''},
{id:'p460',name:'Deluxe Monstera Deliciosa in 6 Inch Plastic Pot',cat:'plants',price:640,mrp:1350,rating:5.0,reviews:408,tag:null,e:'🌿',img:''},
{id:'p461',name:'Textured Wooden Planter Box 10 Inch',cat:'pots',price:770,mrp:1710,rating:4.4,reviews:206,tag:null,e:'🪴',img:''},
{id:'p462',name:'Organic Cocopeat Brick 2kg Pack',cat:'soil',price:350,mrp:560,rating:4.9,reviews:406,tag:null,e:'🪣',img:''},
{id:'p463',name:'Multi-Purpose Pruning Shears 5 Litre',cat:'tools',price:610,mrp:1050,rating:4.5,reviews:127,tag:null,e:'🛠️',img:''},
{id:'p464',name:'Organic Tomato Seeds Pack of 20',cat:'seeds',price:65,mrp:120,rating:4.7,reviews:385,tag:null,e:'🌰',img:''},
{id:'p465',name:'Designer Artificial Boxwood Table Top',cat:'decor',price:1930,mrp:4410,rating:4.3,reviews:437,tag:null,e:'🏺',img:''},
{id:'p466',name:'Premium Anniversary Hamper Gift Box',cat:'gifting',price:900,mrp:1910,rating:4.6,reviews:475,tag:null,e:'🎁',img:''},
{id:'p467',name:'Sturdy Round Plant Stand Set of 2',cat:'stands',price:590,mrp:1120,rating:4.0,reviews:422,tag:'New',e:'🪑',img:''},
{id:'p468',name:'Premium Study Table Greenery Kit Kit of 5',cat:'makeover',price:4520,mrp:6480,rating:3.9,reviews:316,tag:null,e:'🏡',img:''},
{id:'p469',name:'Deluxe Money Plant in 8 Inch White Pot',cat:'plants',price:80,mrp:140,rating:4.5,reviews:420,tag:null,e:'🌿',img:''},
{id:'p470',name:'Designer Self-Watering Pot 8 Inch',cat:'pots',price:190,mrp:270,rating:4.5,reviews:477,tag:null,e:'🪴',img:''},
{id:'p471',name:'Premium Root Booster 10kg Bag',cat:'soil',price:240,mrp:540,rating:4.2,reviews:347,tag:'Bestseller',e:'🪣',img:''},
{id:'p472',name:'Heavy Duty Soil Scoop 2 Litre',cat:'tools',price:380,mrp:640,rating:5.0,reviews:382,tag:'Bestseller',e:'🛠️',img:''},
{id:'p473',name:'Premium Okra Seeds Mini Pack',cat:'seeds',price:110,mrp:180,rating:4.6,reviews:295,tag:null,e:'🌰',img:''},
{id:'p474',name:'Rustic Rare Calathea Table Top',cat:'decor',price:1870,mrp:2910,rating:4.2,reviews:360,tag:null,e:'🏺',img:''},
{id:'p475',name:'Premium Anniversary Hamper Set of 2',cat:'gifting',price:1690,mrp:3810,rating:4.3,reviews:402,tag:null,e:'🎁',img:''},
{id:'p476',name:'Sturdy 3-Tier Plant Stand Large',cat:'stands',price:1960,mrp:4450,rating:4.1,reviews:297,tag:null,e:'🪑',img:''},
{id:'p477',name:'Starter Window Sill Garden Kit Kit of 7',cat:'makeover',price:1140,mrp:1840,rating:5.0,reviews:93,tag:null,e:'🏡',img:''},
{id:'p478',name:'Super Begonia in Hanging Planter',cat:'plants',price:420,mrp:760,rating:4.1,reviews:135,tag:null,e:'🌿',img:''},
{id:'p479',name:'Matte Self-Watering Pot 4 Inch',cat:'pots',price:70,mrp:100,rating:4.3,reviews:222,tag:null,e:'🪴',img:''},
{id:'p480',name:'Fast-Acting Enriched Potting Soil 5kg Pack',cat:'soil',price:240,mrp:410,rating:4.3,reviews:432,tag:'New',e:'🪣',img:''},
{id:'p481',name:'Multi-Purpose Garden Rake Pack of 2',cat:'tools',price:740,mrp:1540,rating:4.1,reviews:239,tag:null,e:'🛠️',img:''},
{id:'p482',name:'Non-GMO Okra Seeds Pack of 10',cat:'seeds',price:65,mrp:90,rating:4.1,reviews:61,tag:null,e:'🌰',img:''},
{id:'p483',name:'Designer Money Tree Bonsai Set of 3',cat:'decor',price:530,mrp:1090,rating:4.5,reviews:467,tag:null,e:'🏺',img:''},
{id:'p484',name:'Special Corporate Gift Combo Gift Box',cat:'gifting',price:1240,mrp:2520,rating:4.3,reviews:342,tag:null,e:'🎁',img:''},
{id:'p485',name:'Minimal Iron Plant Stand Medium',cat:'stands',price:410,mrp:610,rating:4.0,reviews:105,tag:'Bestseller',e:'🪑',img:''},
{id:'p486',name:'Deluxe Study Table Greenery Kit Kit of 7',cat:'makeover',price:2800,mrp:4670,rating:3.9,reviews:209,tag:'Trending',e:'🏡',img:''},
{id:'p487',name:'Compact Begonia in 6 Inch Plastic Pot',cat:'plants',price:130,mrp:220,rating:4.3,reviews:158,tag:'New',e:'🌿',img:''},
{id:'p488',name:'Premium Fiberglass Pot 4 Inch',cat:'pots',price:490,mrp:760,rating:4.2,reviews:49,tag:'New',e:'🪴',img:''},
{id:'p489',name:'Premium Liquid Fertilizer 2kg Pack',cat:'soil',price:250,mrp:460,rating:4.9,reviews:143,tag:null,e:'🪣',img:''},
{id:'p490',name:'Professional Pruning Saw 5 Litre',cat:'tools',price:260,mrp:450,rating:4.3,reviews:103,tag:'New',e:'🛠️',img:''},
{id:'p491',name:'Exotic Marigold Seeds Mini Pack',cat:'seeds',price:90,mrp:150,rating:4.8,reviews:296,tag:null,e:'🌰',img:''},
{id:'p492',name:'Handpicked Lucky Bamboo Set Floor Standing',cat:'decor',price:1560,mrp:2320,rating:4.6,reviews:421,tag:'Trending',e:'🏺',img:''},
{id:'p493',name:'Special Wedding Return Gift Set of 3',cat:'gifting',price:1380,mrp:2010,rating:4.3,reviews:275,tag:'Bestseller',e:'🎁',img:''},
{id:'p494',name:'Foldable Bamboo Plant Stand Single',cat:'stands',price:1470,mrp:3220,rating:4.4,reviews:48,tag:'Bestseller',e:'🪑',img:''},
{id:'p495',name:'Deluxe Balcony Garden Kit Kit of 5',cat:'makeover',price:1480,mrp:3340,rating:4.3,reviews:93,tag:null,e:'🏡',img:''},
{id:'p496',name:'Classic Ivy Plant in 6 Inch Plastic Pot',cat:'plants',price:120,mrp:210,rating:5.0,reviews:230,tag:null,e:'🌿',img:''},
{id:'p497',name:'Designer Matte Finish Planter 12 Inch',cat:'pots',price:600,mrp:1010,rating:4.7,reviews:421,tag:null,e:'🪴',img:''},
{id:'p498',name:'Fast-Acting Vermicompost 10kg Bag',cat:'soil',price:250,mrp:470,rating:4.8,reviews:274,tag:'New',e:'🪣',img:''},
{id:'p499',name:'Multi-Purpose Gardening Apron Standard',cat:'tools',price:870,mrp:1770,rating:4.5,reviews:408,tag:'Bestseller',e:'🛠️',img:''},
{id:'p500',name:'Heirloom Tomato Seeds Pack of 20',cat:'seeds',price:45,mrp:80,rating:4.5,reviews:59,tag:null,e:'🌰',img:''},
{id:'p501',name:'Handpicked Terrarium Bowl Small',cat:'decor',price:1810,mrp:3000,rating:4.4,reviews:184,tag:'Bestseller',e:'🏺',img:''},
{id:'p502',name:'Elegant Diwali Plant Gift Single Piece',cat:'gifting',price:1420,mrp:2770,rating:3.8,reviews:149,tag:'Bestseller',e:'🎁',img:''},
{id:'p503',name:'Sturdy 3-Tier Plant Stand Set of 2',cat:'stands',price:1690,mrp:3420,rating:3.8,reviews:463,tag:null,e:'🪑',img:''},
{id:'p504',name:'Complete Office Desk Greenery Kit Single Set',cat:'makeover',price:2700,mrp:5960,rating:3.8,reviews:426,tag:null,e:'🏡',img:''},
{id:'p505',name:'Premium Bamboo Palm in Self-Watering Pot',cat:'plants',price:580,mrp:1260,rating:4.6,reviews:452,tag:null,e:'🌿',img:''},
{id:'p506',name:'Matte Plastic Planter 14 Inch',cat:'pots',price:980,mrp:2050,rating:4.2,reviews:381,tag:'Bestseller',e:'🪴',img:''},
{id:'p507',name:'Premium Seaweed Extract 1kg Pack',cat:'soil',price:280,mrp:440,rating:4.8,reviews:387,tag:'New',e:'🪣',img:''},
{id:'p508',name:'Professional Garden Rake 2 Litre',cat:'tools',price:130,mrp:240,rating:4.0,reviews:167,tag:'Trending',e:'🛠️',img:''},
{id:'p509',name:'Organic Coriander Seeds Seed Kit',cat:'seeds',price:140,mrp:270,rating:4.0,reviews:456,tag:null,e:'🌰',img:''},
{id:'p510',name:'Trending Decorative Succulent Set Medium',cat:'decor',price:270,mrp:490,rating:4.9,reviews:368,tag:null,e:'🏺',img:''},
{id:'p511',name:'Classic Diwali Plant Gift Single Piece',cat:'gifting',price:1280,mrp:2250,rating:4.9,reviews:356,tag:null,e:'🎁',img:''},
{id:'p512',name:'Rustic Corner Plant Stand Single',cat:'stands',price:1520,mrp:2740,rating:5.0,reviews:250,tag:'Trending',e:'🪑',img:''},
{id:'p513',name:'Premium Vertical Garden Kit Kit of 5',cat:'makeover',price:2620,mrp:5430,rating:4.6,reviews:153,tag:null,e:'🏡',img:''},
{id:'p514',name:'Golden Calathea in 6 Inch Plastic Pot',cat:'plants',price:660,mrp:1390,rating:4.1,reviews:121,tag:null,e:'🌿',img:''},
{id:'p515',name:'Glossy Round Planter 8 Inch',cat:'pots',price:910,mrp:1690,rating:4.8,reviews:400,tag:null,e:'🪴',img:''},
{id:'p516',name:'Enriched Garden Soil 1kg Pack',cat:'soil',price:360,mrp:760,rating:4.1,reviews:319,tag:null,e:'🪣',img:''},
{id:'p517',name:'Rust-Free Hedge Shears 2 Litre',cat:'tools',price:500,mrp:1100,rating:4.8,reviews:243,tag:null,e:'🛠️',img:''},
{id:'p518',name:'Heirloom Chilli Seeds Pack of 50',cat:'seeds',price:120,mrp:220,rating:4.5,reviews:307,tag:null,e:'🌰',img:''},
{id:'p519',name:'Modern Bonsai Ficus Floor Standing',cat:'decor',price:1930,mrp:4160,rating:4.5,reviews:312,tag:null,e:'🏺',img:''},
{id:'p520',name:'Festive Diwali Plant Gift Set of 2',cat:'gifting',price:1240,mrp:1810,rating:5.0,reviews:335,tag:null,e:'🎁',img:''}
];


const byId = id => PRODUCTS.find(p=>p.id===id);
const catName = key => (CATS.find(c=>c.key===key)||{}).name || key;
const catIcon = key => (CATS.find(c=>c.key===key)||{}).icon || 'plants';

/* ================= STATE ================= */
let state = {
  user:null,
  cart:{},
  wishlist:[],
  orders:[],
  addresses:[],
  redirectAfter:'#/home',
  searchQuery:''
};

async function loadState(){
  try{
    const r = await window.storage.get('app-data');
    if(r && r.value){
      const saved = JSON.parse(r.value);
      state = {...state, ...saved};
    }
  }catch(e){ /* first run or storage unavailable */ }
}
async function saveState(){
  try{
    await window.storage.set('app-data', JSON.stringify({
      user:state.user, cart:state.cart, wishlist:state.wishlist,
      orders:state.orders, addresses:state.addresses
    }));
  }catch(e){ /* best effort */ }
}

/* ================= UTIL ================= */
function inr(n){ return '₹' + Number(n).toLocaleString('en-IN'); }
function offPct(price,mrp){ return mrp>price ? Math.round((1-price/mrp)*100) : 0; }
function cartCount(){ return Object.values(state.cart).reduce((a,b)=>a+b,0); }
function cartTotal(){ return Object.entries(state.cart).reduce((sum,[id,qty])=>sum + byId(id).price*qty, 0); }
function esc(s){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
let toastTimer;
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 1800);
}
function nav(hash){ location.hash = hash; }

/* ================= CART / WISHLIST ACTIONS ================= */
function addToCart(id){
  state.cart[id] = (state.cart[id]||0) + 1;
  saveState(); render();
  toast('Added to cart');
}
function decFromCart(id){
  if(!state.cart[id]) return;
  state.cart[id] -= 1;
  if(state.cart[id]<=0) delete state.cart[id];
  saveState(); render();
}
function removeFromCart(id){
  delete state.cart[id];
  saveState(); render();
  toast('Removed from cart');
}
function toggleWishlist(id){
  const i = state.wishlist.indexOf(id);
  if(i>-1){ state.wishlist.splice(i,1); toast('Removed from wishlist'); }
  else { state.wishlist.push(id); toast('Added to wishlist'); }
  saveState(); render();
}

/* ================= AUTH: Firebase Phone OTP ================= */
let fbAuth = null;
try{
  if(typeof firebase !== 'undefined' && firebaseConfig){
    firebase.initializeApp(firebaseConfig);
    fbAuth = firebase.auth();
  }
}catch(e){ console.error('Firebase init failed', e); }

let pendingPhone = '';
let recaptchaVerifier = null;
let confirmationResult = null;

function setupRecaptcha(){
  if(!fbAuth) return;
  try{
    if(recaptchaVerifier){ recaptchaVerifier.clear(); recaptchaVerifier = null; }
    recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { size: 'normal' }, fbAuth);
    recaptchaVerifier.render();
    window.recaptchaVerifier = recaptchaVerifier;
  }catch(e){ console.error('reCAPTCHA setup failed', e); }
}

async function submitPhone(){
  const phoneInput = document.getElementById('phoneInput');
  const val = phoneInput.value.trim();
  if(!/^[6-9]\d{9}$/.test(val)){ toast('Enter a valid 10-digit Indian mobile number'); return; }
  if(!fbAuth || !recaptchaVerifier){ toast('Login is not ready yet, please retry in a moment'); return; }
  try{
    const phoneNumber = '+91' + val;
    confirmationResult = await fbAuth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
    pendingPhone = val;
    toast('OTP sent successfully!');
    nav('#/otp');
  }catch(err){
    console.error(err);
    toast(err.message || 'Failed to send OTP');
    if(recaptchaVerifier){ recaptchaVerifier.clear(); recaptchaVerifier = null; }
  }
}

async function verifyOtp(){
  const digits = [...document.querySelectorAll('.otp-boxes input')].map(i=>i.value).join('');
  if(!/^\d{6}$/.test(digits)){ toast('Enter the 6-digit OTP'); return; }
  if(!confirmationResult){ toast('Please request the OTP first'); nav('#/login'); return; }
  try{
    const result = await confirmationResult.confirm(digits);
    const fbUser = result.user;
    state.user = state.user && state.user.phone===pendingPhone ? state.user : {phone:pendingPhone, name:'', email:''};
    state.user.phone = pendingPhone;
    state.user.uid = fbUser.uid;
    saveState();
    toast('Phone verified successfully!');
    nav(state.redirectAfter || '#/profile');
  }catch(err){
    console.error(err);
    toast('Invalid OTP. Please try again.');
  }
}

/* ================= AUTH: Google Sign-In ================= */
function decodeJwt(token){
  try{
    const base64 = token.split('.')[1].replace(/-/g,'+').replace(/_/g,'/');
    const json = decodeURIComponent(atob(base64).split('').map(c=>'%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(json);
  }catch(e){ return null; }
}
function handleGoogleCredential(response){
  const payload = decodeJwt(response.credential);
  if(!payload){ toast('Google sign-in failed'); return; }
  state.user = {
    phone: (state.user && state.user.phone) || '',
    name: payload.name || '',
    email: payload.email || '',
    picture: payload.picture || '',
    googleId: payload.sub
  };
  saveState();
  toast('Signed in with Google');
  nav(state.redirectAfter || '#/profile');
}
function setupGoogleButton(){
  try{
    if(!window.google || !google.accounts || !google.accounts.id) return;
    google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleCredential });
    const el = document.getElementById('google-btn-container');
    if(el) google.accounts.id.renderButton(el, { theme:'outline', size:'large', width: 320, text:'continue_with' });
  }catch(e){ console.error('Google button setup failed', e); }
}

function logout(){
  state.user = null;
  saveState();
  toast('Logged out');
  nav('#/home');
}
function saveProfileEdit(){
  const name = document.getElementById('editName').value.trim();
  const email = document.getElementById('editEmail').value.trim();
  state.user.name = name; state.user.email = email;
  saveState(); toast('Profile updated');
  nav('#/profile');
}

/* ================= ADDRESS ================= */
function addAddress(e){
  e.preventDefault();
  const f = e.target;
  const addr = {
    id:'A'+Date.now(),
    name:f.name.value.trim(),
    phone:f.phone.value.trim(),
    pincode:f.pincode.value.trim(),
    addr:f.addr.value.trim(),
    type:f.type.value
  };
  state.addresses.push(addr);
  saveState(); toast('Address saved');
  nav(state.redirectAfter && state.redirectAfter.startsWith('#/checkout') ? '#/checkout' : '#/addresses');
}
function deleteAddress(id){
  state.addresses = state.addresses.filter(a=>a.id!==id);
  saveState(); render(); toast('Address removed');
}
let selectedAddressId = null;
function selectAddress(id){ selectedAddressId = id; render(); }

/* ================= CHECKOUT + RAZORPAY ================= */
function goToCheckout(){
  if(cartCount()===0){ toast('Your cart is empty'); return; }
  if(!state.user){ state.redirectAfter = '#/checkout'; nav('#/login'); return; }
  nav('#/checkout');
}
function placeOrder(){
  if(!selectedAddressId){
    if(state.addresses.length>0) selectedAddressId = state.addresses[0].id;
    else { state.redirectAfter='#/checkout'; nav('#/add-address'); return; }
  }
  if(!window.Razorpay){ toast('Payment gateway not loaded, please retry'); return; }
  const total = cartTotal();
  const options = {
    key: RAZORPAY_KEY_ID,
    amount: total * 100,
    currency: 'INR',
    name: BRAND_NAME,
    description: 'Order payment',
    prefill: {
      name: (state.user && state.user.name) || '',
      email: (state.user && state.user.email) || '',
      contact: (state.user && state.user.phone) || ''
    },
    theme: { color: '#1F6E43' },
    handler: function(response){
      finalizeOrder(response.razorpay_payment_id);
    },
    modal: {
      ondismiss: function(){ toast('Payment cancelled'); }
    }
  };
  try{
    const rzp = new Razorpay(options);
    rzp.open();
  }catch(e){
    console.error(e);
    toast('Could not start payment');
  }
}
function finalizeOrder(paymentId){
  const items = Object.entries(state.cart).map(([id,qty])=>({id,name:byId(id).name,price:byId(id).price,qty,e:byId(id).e}));
  const order = {
    id: 'ORD' + Date.now().toString().slice(-8),
    paymentId: paymentId || null,
    items,
    total: cartTotal(),
    address: state.addresses.find(a=>a.id===selectedAddressId),
    status: 'Placed',
    date: new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})
  };
  state.orders.unshift(order);
  state.cart = {};
  saveState();
  nav('#/order-success/' + order.id);
}

/* ================= SEARCH ================= */
function doSearch(){
  const q = document.getElementById('searchInput').value;
  state.searchQuery = q;
  nav('#/search');
}
function onSearchKey(ev){ if(ev.key==='Enter') doSearch(); }

/* ================= COMPONENTS ================= */
function header({title=null, back=false, search=true}={}){
  return `
  <div class="topbar"><div class="topbar-inner">
    <div class="brand-row">
      ${back?`<button class="back-btn" onclick="history.back()">${icon('back')}</button>`:''}
      ${title ? `<div class="brand-title">${esc(title)}</div>`
        : `<div class="brand" onclick="nav('#/home')">
             <img class="brand-logo-img" src="logo.png" alt="${BRAND_NAME}" onerror="this.style.display='none';document.getElementById('brandLogoText').style.display='inline'">
             <span class="brand-logo" id="brandLogoText" style="display:none">🌱 ${BRAND_NAME}</span>
           </div>`}
      <div class="delivery-pill">
        <div class="free">Free Delivery</div>
        <div class="pin">110067 ✎</div>
      </div>
      <button class="avatar-btn" onclick="nav('#/profile')">${state.user && state.user.picture ? `<img src="${state.user.picture}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">` : (state.user && state.user.name ? esc(state.user.name[0].toUpperCase()) : icon('profile'))}</button>
    </div>
    ${search? `<div class="searchbar">
      <input id="searchInput" placeholder="Search by Products" value="${esc(state.searchQuery||'')}" onkeydown="onSearchKey(event)">
      <span class="icon" onclick="doSearch()">${icon('search')}</span>
    </div>`:''}
  </div></div>`;
}

function bottomNav(active){
  const items = [
    {key:'home', ic:'home', label:'Home', href:'#/home'},
    {key:'category', ic:'category', label:'Category', href:'#/category'},
    {key:'cart', ic:'cart', label:'Cart', href:'#/cart'},
    {key:'support', ic:'support', label:'Support', href:'#/support'},
    {key:'profile', ic:'profile', label:'Profile', href:'#/profile'},
  ];
  return `<div class="bottomnav"><div class="bottomnav-inner">
    ${items.map(it=>`
      <a class="nav-item ${active===it.key?'active':''}" href="${it.href}">
        ${icon(it.ic)}
        <span>${it.label}</span>
        ${it.key==='cart' && cartCount()>0 ? `<span class="nav-badge">${cartCount()}</span>`:''}
      </a>`).join('')}
  </div></div>`;
}

function productCard(p){
  const qty = state.cart[p.id]||0;
  const off = offPct(p.price,p.mrp);
  const wished = state.wishlist.includes(p.id);
  return `<div class="pcard">
    <div class="imgbox" style="background:${bgFor(p.cat)}">
      ${p.tag?`<span class="tag">${esc(p.tag)}</span>`:''}
      <button class="heart" onclick="toggleWishlist('${p.id}')">${wished?icon('heartFilled','sm'):icon('heart','sm')}</button>
      ${p.img ? `<img src="${esc(p.img)}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none">${p.e}</span>` : `<span>${p.e}</span>`}
    </div>
    <div class="body">
      <div class="name">${esc(p.name)}</div>
      <div class="rating">${icon('star','sm')} <b>${p.rating}</b> (${p.reviews})</div>
      <div class="price-row">
        <span class="price">${inr(p.price)}</span>
        ${off>0?`<span class="mrp">${inr(p.mrp)}</span><span class="off">${off}% OFF</span>`:''}
      </div>
      <div class="addrow">
        ${qty>0
          ? `<div class="qty-step">${'<button onclick="decFromCart(\''+p.id+'\')">'+icon('minus','sm')+'</button>'}<span>${qty}</span>${'<button onclick="addToCart(\''+p.id+'\')">'+icon('plus','sm')+'</button>'}</div>`
          : `<button class="btn-add" onclick="addToCart('${p.id}')">${icon('plus','sm')} Add</button>`}
      </div>
    </div>
  </div>`;
}
function bgFor(cat){
  const map = {plants:'#E7F3E4',pots:'#FDF1DC',soil:'#EDE7DA',tools:'#E4ECE8',seeds:'#F3E9D8',decor:'#F0E6EE',gifting:'#FCE8E6',stands:'#EAE6F5',makeover:'#E3EEF5'};
  return map[cat]||'#F0F0EA';
}

/* ================= BANNER CAROUSEL ================= */
let bannerIndex = 0;
let bannerTimer = null;
function renderBannerCarousel(){
  return `<div class="banner-carousel">
    <div class="banner-track" id="bannerTrack">
      ${BANNERS.map(b=>`
        <div class="banner-slide" data-emoji="${b.emoji}" style="background:${b.grad}">
          <div class="banner-eyebrow">${esc(b.eyebrow)}</div>
          <h2>${esc(b.title)}</h2>
          <p>${esc(b.sub)}</p>
          <span class="banner-cta">${esc(b.cta)} →</span>
        </div>`).join('')}
    </div>
    <div class="banner-dots">
      ${BANNERS.map((b,i)=>`<span class="banner-dot ${i===bannerIndex?'active':''}" onclick="goToBanner(${i})"></span>`).join('')}
    </div>
  </div>`;
}
function updateBannerTrack(){
  const track = document.getElementById('bannerTrack');
  if(track) track.style.transform = `translateX(-${bannerIndex*100}%)`;
  document.querySelectorAll('.banner-dot').forEach((d,i)=>d.classList.toggle('active', i===bannerIndex));
}
function goToBanner(i){ bannerIndex = i; updateBannerTrack(); resetBannerTimer(); }
function resetBannerTimer(){
  clearInterval(bannerTimer);
  bannerTimer = setInterval(()=>{
    bannerIndex = (bannerIndex+1) % BANNERS.length;
    updateBannerTrack();
  }, 4000);
}

/* ================= PAGES ================= */
function pageHome(){
  const bestsellers = PRODUCTS.filter(p=>p.tag==='Bestseller').slice(0,12);
  const trending = PRODUCTS.filter(p=>p.tag==='New'||p.tag==='Trending').slice(0,12);
  return `
  ${header({search:true})}
  <div class="page">
    <div class="section" style="margin-top:14px">
      <div class="chip-row">
        ${HOME_CHIPS.map(c=>`
          <a class="chip" href="${c.href}">
            <span class="swatch">${icon(c.icon,'lg')}</span>
            <span>${c.name}</span>
          </a>`).join('')}
      </div>
    </div>

    ${renderBannerCarousel()}

    <div class="section">
      <div class="section-head"><h2>Most Sold on ${BRAND_NAME}</h2><a href="#/listing/plants">View All</a></div>
      <div class="hscroll">${bestsellers.map(productCard).join('')}</div>
    </div>

    <div class="promo-2col">
      <a class="promo-card" style="background:linear-gradient(160deg,#F2B705,#8A5B00)" href="#/listing/plants">
        <b>Indoor Plants<br>Starting ₹99</b><span class="shop-now">Shop Now</span>
      </a>
      <a class="promo-card" style="background:linear-gradient(160deg,#2B8A57,#0F2E1C)" href="#/listing/decor">
        <b>Decor Picks<br>For Every Home</b><span class="shop-now">Shop Now</span>
      </a>
    </div>

    <div class="section">
      <div class="section-head"><h2>New &amp; Trending</h2><a href="#/listing/new">View All</a></div>
      <div class="hscroll">${trending.map(productCard).join('')}</div>
    </div>

    <div class="section">
      <p class="muted" style="font-size:12px;text-transform:uppercase;letter-spacing:0.05em;font-weight:700;margin:0">Handpicked for you</p>
      <h2 style="font-family:var(--font-display);font-size:20px;margin:2px 0 14px">Plants for all Moods</h2>
      <div class="mood-grid">
        ${MOODS.map(m=>`
          <a class="mood-item" href="#/listing/${m.key}">
            <div class="box" style="background:${bgFor(m.key)}">${m.e}</div>
            <span>${esc(m.name)}</span>
          </a>`).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-head"><h2>All Products</h2></div>
      <div class="pgrid">${PRODUCTS.slice(0,12).map(productCard).join('')}</div>
    </div>

    <div class="section">
      <div class="section-head"><h2>From The Blog</h2></div>
      ${BLOG_POSTS.map(b=>`
        <div class="row-card" style="margin-bottom:10px;padding:14px;display:flex;gap:12px;align-items:center">
          <div style="width:46px;height:46px;border-radius:10px;background:var(--green-100);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">${b.e}</div>
          <div><div style="font-weight:700;font-size:13px;line-height:1.3">${esc(b.title)}</div><div class="muted" style="font-size:11.5px;margin-top:4px">${b.date} · ${esc(b.author)}</div></div>
        </div>`).join('')}
    </div>
  </div>
  ${footerBrand()}
  ${bottomNav('home')}`;
}

function pageCategory(){
  return `
  ${header({title:'Category', search:true})}
  <div class="page">
    ${CATS.map(c=>`
      <div class="cat-block">
        <h3>${icon(c.icon)} ${c.name}</h3>
        <div class="cat-tiles">
          ${PRODUCTS.filter(p=>p.cat===c.key).slice(0,6).map(p=>`
            <a class="chip" href="#/listing/${c.key}">
              <span class="swatch" style="background:${bgFor(c.key)}">${p.img?`<img src="${esc(p.img)}" style="width:100%;height:100%;object-fit:cover;border-radius:50%" onerror="this.outerHTML='${p.e}'">`:p.e}</span>
              <span>${esc(p.name.split(' ').slice(0,2).join(' '))}</span>
            </a>`).join('')}
        </div>
      </div>`).join('')}
  </div>
  ${footerBrand()}
  ${bottomNav('category')}`;
}

function pageListing(catKey){
  let items, title;
  if(catKey === 'deals'){
    items = PRODUCTS.filter(p=>offPct(p.price,p.mrp)>=50);
    title = 'Deals';
  } else if(catKey === 'new'){
    items = PRODUCTS.filter(p=>p.tag==='New'||p.tag==='Trending');
    title = 'New In';
  } else if(catKey === 'under99'){
    items = PRODUCTS.filter(p=>p.price<99);
    title = 'Plants Under ₹99';
  } else {
    const cat = CATS.find(c=>c.key===catKey) || CATS[0];
    items = PRODUCTS.filter(p=>p.cat===cat.key);
    title = cat.name;
  }
  return `
  ${header({title, back:true, search:true})}
  <div class="page">
    <div class="filter-bar">
      <button>${icon('chevron','sm')} Sort by</button>
      <button>Filter</button>
    </div>
    <div class="listing">
      <div class="sidebar">
        ${CATS.map(c=>`
          <a class="sidebar-item ${c.key===catKey?'active':''}" href="#/listing/${c.key}">
            ${icon(c.icon)}<span>${esc(c.name)}</span>
          </a>`).join('')}
        <a class="sidebar-goback" href="#/home">
          <span class="circle">${icon('back','sm')}</span><span>Go Back</span>
        </a>
      </div>
      <div class="listing-main">
        <div class="pgrid">${items.map(productCard).join('')}</div>
      </div>
    </div>
  </div>
  ${bottomNav('category')}`;
}

function pageSearch(){
  const q = (state.searchQuery||'').toLowerCase().trim();
  const results = q ? PRODUCTS.filter(p=>p.name.toLowerCase().includes(q)) : [];
  return `
  ${header({title:'Search', back:true, search:true})}
  <div class="page">
    ${q ? `<p class="muted" style="font-size:13px;margin:4px 0 14px">${results.length} results for "${esc(q)}"</p>` : ''}
    ${results.length ? `<div class="pgrid">${results.map(productCard).join('')}</div>`
      : `<div class="empty-state"><div class="ic-wrap">${icon('search','lg')}</div><h3>${q?'No products found':'Search for plants, pots & more'}</h3><p>${q?'Try a different keyword':'Type something in the search bar above'}</p></div>`}
  </div>
  ${bottomNav('home')}`;
}

function pageCart(){
  const entries = Object.entries(state.cart);
  const total = cartTotal();
  return `
  ${header({title:'My Cart', back:true, search:false})}
  <div class="page">
    ${entries.length===0 ? `
      <div class="empty-state">
        <div class="ic-wrap">${icon('cart','lg')}</div>
        <h3>Your cart is empty</h3>
        <p>Add some green friends to get started</p>
        <div style="height:16px"></div>
        <a class="btn-secondary" style="display:inline-block;width:auto;padding:12px 24px" href="#/category">Start Shopping</a>
      </div>` : `
      ${entries.map(([id,qty])=>{
        const p = byId(id);
        return `<div class="cart-item">
          <div class="imgbox" style="background:${bgFor(p.cat)};font-size:26px">${p.img?`<img src="${esc(p.img)}" style="width:100%;height:100%;object-fit:cover;border-radius:10px" onerror="this.outerHTML='${p.e}'">`:p.e}</div>
          <div class="info">
            <div class="name">${esc(p.name)}</div>
            <div class="price">${inr(p.price)} <span style="color:var(--ink-muted);font-weight:400;font-size:11.5px">x ${qty}</span></div>
          </div>
          <div class="qty-step" style="width:96px">${'<button onclick="decFromCart(\''+id+'\')">'+icon('minus','sm')+'</button>'}<span>${qty}</span>${'<button onclick="addToCart(\''+id+'\')">'+icon('plus','sm')+'</button>'}</div>
        </div>`;
      }).join('')}
      <div class="cart-summary">
        <div class="sum-row"><span>Subtotal</span><span>${inr(total)}</span></div>
        <div class="sum-row"><span>Delivery</span><span style="color:var(--green-700);font-weight:700">FREE</span></div>
        <div class="sum-row total"><span>Total</span><span>${inr(total)}</span></div>
      </div>
      <div style="height:16px"></div>
      <button class="btn-primary" onclick="goToCheckout()">Proceed to Checkout</button>
    `}
  </div>
  ${bottomNav('cart')}`;
}

function pageLogin(){
  return `
  ${header({title:'Login', back:true, search:false})}
  <div class="page">
    <div class="card">
      <h2 style="font-family:var(--font-display);margin-top:0;text-align:center">Login to ${BRAND_NAME}</h2>
      <p class="muted" style="font-size:13px;margin-top:-6px;text-align:center">Enter your 10 digit phone number below</p>
      <div class="field">
        <label>Phone Number</label>
        <div class="phone-field">
          <span class="flag-pre">🇮🇳 +91</span>
          <input id="phoneInput" type="tel" maxlength="10" placeholder="81234 56789">
        </div>
      </div>
      <div id="recaptcha-container" style="margin-bottom:14px;display:flex;justify-content:center"></div>
      <button class="btn-primary" onclick="submitPhone()">Send OTP</button>

      <div class="or-divider">OR</div>
      <div id="google-btn-container" style="display:flex;justify-content:center"></div>

      <div class="link-row">New on ${BRAND_NAME}? Just verify your OTP to get started 🌱</div>
    </div>
  </div>
  ${footerBrand()}`;
}

function pageOtp(){
  return `
  ${header({title:'Verify OTP', back:true, search:false})}
  <div class="page">
    <div class="card" style="text-align:center">
      <h2 style="font-family:var(--font-display);margin-top:0">Enter OTP</h2>
      <p class="muted" style="font-size:13px">6-digit code sent to +91 ${esc(pendingPhone||'')}</p>
      <div class="otp-boxes">
        ${[0,1,2,3,4,5].map(i=>`<input maxlength="1" inputmode="numeric" oninput="if(this.value&&this.nextElementSibling)this.nextElementSibling.focus()">`).join('')}
      </div>
      <button class="btn-primary" onclick="verifyOtp()">Verify &amp; Continue</button>
    </div>
  </div>
  ${footerBrand()}`;
}

function pageProfile(){
  if(!state.user){
    return `
    ${header({title:'Profile', back:true, search:false})}
    <div class="page">
      <div class="empty-state">
        <div class="ic-wrap">${icon('profile','lg')}</div>
        <h3>You're not logged in</h3>
        <p>Login to view your orders, wishlist & address</p>
        <div style="height:16px"></div>
        <a class="btn-secondary" style="display:inline-block;width:auto;padding:12px 24px" href="#/login">Login Now</a>
      </div>
    </div>
    ${bottomNav('profile')}`;
  }
  const u = state.user;
  return `
  ${header({title:'Profile', back:true, search:false})}
  <div class="page">
    <div class="profile-head">
      <div class="profile-avatar">${u.picture?`<img src="${u.picture}">`:(u.name? esc(u.name[0].toUpperCase()) : icon('profile'))}</div>
      <div style="flex:1">
        <div style="font-weight:800;font-size:16px">${u.name? esc(u.name) : 'Add your name'}</div>
        ${u.phone?`<div class="muted" style="font-size:13px">+91 ${esc(u.phone)}</div>`:''}
        ${u.email?`<div class="muted" style="font-size:12px">${esc(u.email)}</div>`:''}
      </div>
      <button class="btn-ghost" onclick="nav('#/edit-profile')">${icon('edit','sm')}</button>
    </div>

    <div class="row-card">
      <a class="row-item" href="#/addresses"><span class="left">${icon('location','sm')} Saved Address</span><span class="chev">${icon('chevron','sm')}</span></a>
      <a class="row-item" href="#/orders"><span class="left">${icon('box','sm')} Order History</span><span class="chev">${icon('chevron','sm')}</span></a>
      <a class="row-item" href="#/wishlist"><span class="left">${icon('heart','sm')} Wishlist</span><span class="chev">${icon('chevron','sm')}</span></a>
      <a class="row-item" href="#/track"><span class="left">${icon('truck','sm')} Track My Order</span><span class="chev">${icon('chevron','sm')}</span></a>
      <a class="row-item" href="#/support"><span class="left">${icon('support','sm')} Support</span><span class="chev">${icon('chevron','sm')}</span></a>
    </div>
    <div style="height:16px"></div>
    <button class="btn-secondary" onclick="logout()">${icon('logout','sm')} Logout</button>
  </div>
  ${footerBrand()}
  ${bottomNav('profile')}`;
}

function pageEditProfile(){
  const u = state.user || {name:'',email:''};
  return `
  ${header({title:'Edit Profile', back:true, search:false})}
  <div class="page">
    <div class="card">
      <div class="field"><label>Name</label><input id="editName" value="${esc(u.name||'')}" placeholder="Your name"></div>
      <div class="field"><label>Email</label><input id="editEmail" value="${esc(u.email||'')}" placeholder="you@example.com"></div>
      <button class="btn-primary" onclick="saveProfileEdit()">Save Changes</button>
    </div>
  </div>`;
}

function pageAddresses(){
  return `
  ${header({title:'Saved Address', back:true, search:false})}
  <div class="page">
    ${state.addresses.length===0 ? `
      <div class="empty-state"><div class="ic-wrap">${icon('location','lg')}</div><h3>No addresses saved</h3><p>Add an address for faster checkout</p></div>
    ` : state.addresses.map(a=>`
      <div class="row-card" style="margin-bottom:12px;padding:14px 16px;">
        <div style="display:flex;justify-content:space-between;align-items:start">
          <div>
            <span class="badge-status">${esc(a.type)}</span>
            <div style="font-weight:700;margin-top:6px">${esc(a.name)} · ${esc(a.phone)}</div>
            <div class="muted" style="font-size:12.5px;margin-top:2px">${esc(a.addr)} — ${esc(a.pincode)}</div>
          </div>
          <button class="btn-ghost" onclick="deleteAddress('${a.id}')">Delete</button>
        </div>
      </div>`).join('')}
    <button class="btn-secondary" onclick="nav('#/add-address')">${icon('plus','sm')} Add New Address</button>
  </div>`;
}

function pageAddAddress(){
  return `
  ${header({title:'Add Address', back:true, search:false})}
  <div class="page">
    <form class="card" onsubmit="addAddress(event)">
      <div class="field"><label>Full Name</label><input name="name" required></div>
      <div class="field"><label>Phone Number</label><input name="phone" required maxlength="10"></div>
      <div class="field"><label>Pincode</label><input name="pincode" required maxlength="6"></div>
      <div class="field"><label>Full Address</label><textarea name="addr" rows="3" required></textarea></div>
      <div class="field"><label>Address Type</label>
        <select name="type"><option>Home</option><option>Work</option><option>Other</option></select>
      </div>
      <button class="btn-primary" type="submit">Save Address</button>
    </form>
  </div>`;
}

function pageOrders(){
  if(!state.user){ nav('#/login'); return ''; }
  return `
  ${header({title:'Order History', back:true, search:false})}
  <div class="page">
    ${state.orders.length===0 ? `
      <div class="empty-state"><div class="ic-wrap">${icon('box','lg')}</div><h3>No orders yet</h3><p>Your placed orders will show up here</p></div>
    ` : state.orders.map(o=>`
      <a class="order-card" style="display:block" href="#/order-success/${o.id}">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <span style="font-weight:800;font-size:13px">${o.id}</span>
          <span class="badge-status">${esc(o.status)}</span>
        </div>
        <div class="muted" style="font-size:12px;margin-bottom:6px">${o.date} · ${o.items.length} item(s)</div>
        <div style="font-weight:800">${inr(o.total)}</div>
      </a>`).join('')}
  </div>`;
}

function pageWishlist(){
  const items = state.wishlist.map(byId).filter(Boolean);
  return `
  ${header({title:'Wishlist', back:true, search:false})}
  <div class="page">
    ${items.length===0 ? `
      <div class="empty-state"><div class="ic-wrap">${icon('heart','lg')}</div><h3>Your wishlist is empty</h3><p>Tap the heart on any product to save it here</p></div>
    ` : `<div class="pgrid">${items.map(productCard).join('')}</div>`}
  </div>
  ${bottomNav('profile')}`;
}

function pageCheckout(){
  if(!state.user){ state.redirectAfter='#/checkout'; nav('#/login'); return ''; }
  if(cartCount()===0){ nav('#/cart'); return ''; }
  if(!selectedAddressId && state.addresses.length) selectedAddressId = state.addresses[0].id;
  const total = cartTotal();
  return `
  ${header({title:'Checkout', back:true, search:false})}
  <div class="page">
    <div class="section-head"><h2 style="font-size:15px">Deliver to</h2><a href="#/add-address">+ Add New</a></div>
    ${state.addresses.length===0 ? `
      <div class="empty-state" style="padding:24px"><p>No saved address. Please add one to continue.</p><a class="btn-secondary" style="display:inline-block;width:auto;padding:10px 20px" href="#/add-address">Add Address</a></div>
    ` : state.addresses.map(a=>`
      <div class="row-card" style="margin-bottom:10px;padding:14px 16px;border-color:${selectedAddressId===a.id?'var(--green-700)':'var(--border)'}" onclick="selectAddress('${a.id}')">
        <div style="display:flex;gap:10px;align-items:start;cursor:pointer">
          <span style="margin-top:2px">${selectedAddressId===a.id?'🟢':'⚪'}</span>
          <div>
            <span class="badge-status">${esc(a.type)}</span>
            <div style="font-weight:700;margin-top:6px">${esc(a.name)} · ${esc(a.phone)}</div>
            <div class="muted" style="font-size:12.5px;margin-top:2px">${esc(a.addr)} — ${esc(a.pincode)}</div>
          </div>
        </div>
      </div>`).join('')}

    <div class="divider"></div>
    <div class="section-head"><h2 style="font-size:15px">Order Summary</h2></div>
    ${Object.entries(state.cart).map(([id,qty])=>{
      const p = byId(id);
      return `<div class="cart-item"><div class="imgbox" style="background:${bgFor(p.cat)};font-size:22px">${p.e}</div>
        <div class="info"><div class="name">${esc(p.name)}</div><div class="price">${inr(p.price)} x ${qty}</div></div>
        <div style="font-weight:800">${inr(p.price*qty)}</div></div>`;
    }).join('')}
    <div class="cart-summary">
      <div class="sum-row"><span>Subtotal</span><span>${inr(total)}</span></div>
      <div class="sum-row"><span>Delivery</span><span style="color:var(--green-700);font-weight:700">FREE</span></div>
      <div class="sum-row total"><span>To Pay</span><span>${inr(total)}</span></div>
    </div>
    <div style="height:16px"></div>
    <button class="btn-primary" ${state.addresses.length===0?'disabled':''} onclick="placeOrder()">Pay &amp; Place Order</button>
  </div>`;
}

function pageOrderSuccess(orderId){
  const o = state.orders.find(x=>x.id===orderId);
  if(!o) return `${header({title:'Order',back:true})}<div class="page"><p>Order not found.</p></div>`;
  const steps = ['Placed','Packed','Shipped','Delivered'];
  const doneIdx = steps.indexOf(o.status);
  return `
  ${header({title:'Order Confirmed', back:true, search:false})}
  <div class="page">
    <div class="empty-state" style="padding:24px 20px 6px">
      <div class="ic-wrap">${icon('box','lg')}</div>
      <h3>Order Placed Successfully!</h3>
      <p>Order ID: <b>${o.id}</b></p>
    </div>
    <div class="timeline">
      ${steps.map((s,i)=>`
        <div class="tl-step ${i<=doneIdx?'done':''}">
          <div class="tl-dot">${i<=doneIdx?'✓':''}</div>
          <div><div class="tl-title">${s}</div><div class="tl-sub">${i===0?o.date:'Pending'}</div></div>
        </div>`).join('')}
    </div>
    <div class="cart-summary">
      <div class="sum-row total"><span>Total Paid</span><span>${inr(o.total)}</span></div>
    </div>
    <div style="height:16px"></div>
    <button class="btn-primary" onclick="nav('#/home')">Continue Shopping</button>
  </div>`;
}

function pageTrack(){
  return `
  ${header({title:'Track My Order', back:true, search:false})}
  <div class="page">
    ${state.orders.length===0 ? `<div class="empty-state"><div class="ic-wrap">${icon('truck','lg')}</div><h3>No orders to track</h3></div>`
    : state.orders.map(o=>`
      <a class="order-card" style="display:block" href="#/order-success/${o.id}">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-weight:800;font-size:13px">${o.id}</span>
          <span class="badge-status">${esc(o.status)}</span>
        </div>
        <div class="muted" style="font-size:12px;margin-top:4px">Placed on ${o.date} · Tap to view timeline</div>
      </a>`).join('')}
  </div>`;
}

function pageSupport(){
  return `
  ${header({title:'Support', back:true, search:false})}
  <div class="page">
    <p class="section-title-lg" style="margin-bottom:2px">We're here to help!</p>
    <p class="muted" style="font-size:13px;margin-top:0">Choose how you'd like to get in touch with us.</p>

    <div class="support-card">
      <div class="ic-circle">${icon('box')}</div>
      <h3>Track Your Order</h3>
      <p>Get real time status &amp; delivery details</p>
      <button class="btn-secondary" onclick="nav('#/track')">Track Order</button>
    </div>
    <div class="support-card">
      <div class="ic-circle">${icon('chat')}</div>
      <h3>Chat with Us</h3>
      <p>Get instant help through our chat support</p>
      <button class="btn-secondary" onclick="toast('Connecting you to support chat…')">Start Chat</button>
    </div>
    <div class="support-card">
      <div class="ic-circle">${icon('mail')}</div>
      <h3>Email Us</h3>
      <p>Send us a detailed message, we reply within 24 hours</p>
      <button class="btn-secondary" onclick="toast('Opening email composer…')">Send Email</button>
    </div>
  </div>
  ${footerBrand()}
  ${bottomNav('support')}`;
}

function footerBrand(){
  return `<div class="footer-brand" style="background:var(--green-900);border-radius:var(--radius) var(--radius) 0 0;margin-top:30px">
    <div class="fb-logo">🌱 ${BRAND_NAME}</div>
    <p>${BRAND_TAGLINE}</p>
  </div>`;
}

/* ================= ROUTER ================= */
function parseHash(){
  const h = (location.hash || '#/home').slice(2);
  const parts = h.split('/');
  return parts;
}
function render(){
  try{
    renderInner();
  }catch(err){
    console.error('Render error:', err);
    const app = document.getElementById('app');
    if(app){
      app.innerHTML = `<div style="padding:50px 20px;text-align:center;font-family:sans-serif;max-width:420px;margin:0 auto">
        <div style="font-size:40px;margin-bottom:10px">⚠️</div>
        <h2 style="color:#D6484A;font-size:18px;margin:0 0 8px">Something went wrong</h2>
        <p style="color:#555;font-size:13px;margin:0 0 14px">${esc(String((err && err.message) || err))}</p>
        <p style="color:#999;font-size:11.5px">Make sure index.html, style.css, app.js and config.js are all saved in the exact same folder, with those exact file names, and that you're opening the page through a local server (http://... not file://...).</p>
      </div>`;
    }
  }
}
function renderInner(){
  const parts = parseHash();
  const route = parts[0] || 'home';
  let html = '';
  switch(route){
    case 'home': html = pageHome(); break;
    case 'category': html = pageCategory(); break;
    case 'listing': html = pageListing(parts[1]); break;
    case 'search': html = pageSearch(); break;
    case 'cart': html = pageCart(); break;
    case 'login': html = pageLogin(); break;
    case 'otp': html = pageOtp(); break;
    case 'profile': html = pageProfile(); break;
    case 'edit-profile': html = pageEditProfile(); break;
    case 'addresses': html = pageAddresses(); break;
    case 'add-address': html = pageAddAddress(); break;
    case 'orders': html = pageOrders(); break;
    case 'wishlist': html = pageWishlist(); break;
    case 'checkout': html = pageCheckout(); break;
    case 'order-success': html = pageOrderSuccess(parts[1]); break;
    case 'track': html = pageTrack(); break;
    case 'support': html = pageSupport(); break;
    default: html = pageHome();
  }
  document.getElementById('app').innerHTML = html;
  window.scrollTo(0,0);
  if(route==='home'){ bannerIndex = 0; updateBannerTrack(); resetBannerTimer(); }
  else clearInterval(bannerTimer);
  if(route==='login'){ setupRecaptcha(); setTimeout(setupGoogleButton, 300); }
}

window.addEventListener('hashchange', render);
(async function init(){
  await loadState();
  if(!location.hash) location.hash = '#/home';
  render();
})();

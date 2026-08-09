/* =========================================================
   Mitti Manor — app logic
   Keys/config live in config.js
   ========================================================= */

const CATEGORIES = [
  { key: "Indoor", title: "Indoor Plants", img: "https://loremflickr.com/600/800/houseplant,indoor/all?lock=201" },
  { key: "Outdoor", title: "Outdoor Plants", img: "https://loremflickr.com/600/800/gardenplant,garden/all?lock=202" },
  { key: "Flowering", title: "Flowering Plants", img: "https://loremflickr.com/600/800/flowerplant,flower/all?lock=203" },
  { key: "Succulents", title: "Succulents & Cacti", img: "https://loremflickr.com/600/800/succulent,cactus/all?lock=204" },
  { key: "AirPurifying", title: "Air-Purifying Plants", img: "https://loremflickr.com/600/800/leafplant,plant/all?lock=205" },
  { key: "Medicinal", title: "Medicinal & Herbal", img: "https://loremflickr.com/600/800/herbplant,herb/all?lock=206" },
  { key: "Bonsai", title: "Bonsai", img: "https://loremflickr.com/600/800/bonsai,tree/all?lock=207" },
  { key: "Fruit", title: "Fruit Plants", img: "https://loremflickr.com/600/800/fruitplant,fruit/all?lock=208" },
];

const PLANTS = [
  { id: 'p1', name: 'Money Plant (Small)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 799, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=1', desc: 'Healthy Money Plant — small size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p2', name: 'Snake Plant (Medium)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 05, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=2', desc: 'Healthy Snake Plant — medium size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p3', name: 'Areca Palm (Large)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 299, size: 'Large', tag: 'new', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=3', desc: 'Healthy Areca Palm — large size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p4', name: 'Peace Lily (Small)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 249, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=4', desc: 'Healthy Peace Lily — small size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p5', name: 'ZZ Plant (Medium)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 799, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=5', desc: 'Healthy ZZ Plant — medium size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p6', name: 'Spider Plant (Large)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 199, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=6', desc: 'Healthy Spider Plant — large size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p7', name: 'Rubber Plant (Small)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 449, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=7', desc: 'Healthy Rubber Plant — small size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p8', name: 'Fiddle Leaf Fig (Medium)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 149, size: 'Medium', tag: 'bestseller', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=8', desc: 'Healthy Fiddle Leaf Fig — medium size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p9', name: 'Philodendron (Large)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 299, size: 'Large', tag: 'new', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=9', desc: 'Healthy Philodendron — large size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p10', name: 'Pothos Golden (Small)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 599, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=10', desc: 'Healthy Pothos Golden — small size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p11', name: 'Dracaena (Medium)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 149, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=11', desc: 'Healthy Dracaena — medium size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p12', name: 'Aglaonema (Large)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 299, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=12', desc: 'Healthy Aglaonema — large size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p13', name: 'Calathea (Small)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 449, size: 'Small', tag: 'new', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=13', desc: 'Healthy Calathea — small size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p14', name: 'Croton (Medium)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 499, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=14', desc: 'Healthy Croton — medium size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p15', name: 'Anthurium (Large)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 349, size: 'Large', tag: 'bestseller', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=15', desc: 'Healthy Anthurium — large size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p16', name: 'Monstera Deliciosa (Small)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 999, size: 'Small', tag: 'new', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=16', desc: 'Healthy Monstera Deliciosa — small size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p17', name: 'Bamboo Palm (Medium)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 899, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=17', desc: 'Healthy Bamboo Palm — medium size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p18', name: 'Boston Fern (Large)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 399, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=18', desc: 'Healthy Boston Fern — large size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p19', name: 'Parlor Palm (Small)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 249, size: 'Small', tag: 'new', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=19', desc: 'Healthy Parlor Palm — small size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p20', name: 'Chinese Evergreen (Medium)', category: 'Indoor', categoryLabel: 'Indoor Plants', price: 999, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/houseplant,plant/all?lock=20', desc: 'Healthy Chinese Evergreen — medium size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p21', name: 'Hibiscus (Small)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 199, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=21', desc: 'Healthy Hibiscus — small size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p22', name: 'Bougainvillea (Medium)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 449, size: 'Medium', tag: 'bestseller', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=22', desc: 'Healthy Bougainvillea — medium size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p23', name: 'Rose Plant (Large)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 399, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=23', desc: 'Healthy Rose Plant — large size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p24', name: 'Jasmine (Small)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 699, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=24', desc: 'Healthy Jasmine — small size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p25', name: 'Marigold (Medium)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 999, size: 'Medium', tag: 'bestseller', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=25', desc: 'Healthy Marigold — medium size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p26', name: 'Ixora (Large)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 899, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=26', desc: 'Healthy Ixora — large size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p27', name: 'Adenium Desert Rose (Small)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 599, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=27', desc: 'Healthy Adenium Desert Rose — small size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p28', name: 'Curry Leaf Tree (Medium)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 1499, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=28', desc: 'Healthy Curry Leaf Tree — medium size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p29', name: 'Ashoka Tree (Large)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 199, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=29', desc: 'Healthy Ashoka Tree — large size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p30', name: 'Champa Plumeria (Small)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 349, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=30', desc: 'Healthy Champa Plumeria — small size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p31', name: 'Ficus Hedge (Medium)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 1499, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=31', desc: 'Healthy Ficus Hedge — medium size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p32', name: 'Duranta (Large)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 699, size: 'Large', tag: 'new', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=32', desc: 'Healthy Duranta — large size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p33', name: 'Croton Garden (Small)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 899, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=33', desc: 'Healthy Croton Garden — small size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p34', name: 'Palm Tree (Medium)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 149, size: 'Medium', tag: 'new', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=34', desc: 'Healthy Palm Tree — medium size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p35', name: 'Neem Sapling (Large)', category: 'Outdoor', categoryLabel: 'Outdoor Plants', price: 999, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/gardenplant,plant/all?lock=35', desc: 'Healthy Neem Sapling — large size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p36', name: 'Petunia (Small)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 199, size: 'Small', tag: 'new', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=36', desc: 'Healthy Petunia — small size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p37', name: 'Dahlia (Medium)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 1299, size: 'Medium', tag: 'bestseller', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=37', desc: 'Healthy Dahlia — medium size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p38', name: 'Chrysanthemum (Large)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 449, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=38', desc: 'Healthy Chrysanthemum — large size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p39', name: 'Portulaca (Small)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 499, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=39', desc: 'Healthy Portulaca — small size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p40', name: 'Vinca (Medium)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 249, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=40', desc: 'Healthy Vinca — medium size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p41', name: 'Lantana (Large)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 399, size: 'Large', tag: 'new', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=41', desc: 'Healthy Lantana — large size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p42', name: 'Hydrangea (Small)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 799, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=42', desc: 'Healthy Hydrangea — small size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p43', name: 'Gerbera (Medium)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 899, size: 'Medium', tag: 'bestseller', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=43', desc: 'Healthy Gerbera — medium size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p44', name: 'Cosmos (Large)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 699, size: 'Large', tag: 'new', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=44', desc: 'Healthy Cosmos — large size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p45', name: 'Zinnia (Small)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 599, size: 'Small', tag: 'new', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=45', desc: 'Healthy Zinnia — small size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p46', name: 'Balsam (Medium)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 249, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=46', desc: 'Healthy Balsam — medium size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p47', name: 'Gaillardia (Large)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 449, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=47', desc: 'Healthy Gaillardia — large size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p48', name: 'Salvia (Small)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 1499, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=48', desc: 'Healthy Salvia — small size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p49', name: 'Torenia (Medium)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 299, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=49', desc: 'Healthy Torenia — medium size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p50', name: 'Celosia (Large)', category: 'Flowering', categoryLabel: 'Flowering Plants', price: 1299, size: 'Large', tag: 'bestseller', img: 'https://loremflickr.com/500/650/flowerplant,plant/all?lock=50', desc: 'Healthy Celosia — large size, perfect for garden & landscaping. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p51', name: 'Echeveria (Small)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 299, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=51', desc: 'Healthy Echeveria — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p52', name: 'Haworthia (Medium)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 999, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=52', desc: 'Healthy Haworthia — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p53', name: 'Jade Plant (Large)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 449, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=53', desc: 'Healthy Jade Plant — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p54', name: 'Aloe Vera (Small)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 199, size: 'Small', tag: 'new', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=54', desc: 'Healthy Aloe Vera — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p55', name: 'Sedum (Medium)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 1499, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=55', desc: 'Healthy Sedum — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p56', name: 'String of Pearls (Large)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 1499, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=56', desc: 'Healthy String of Pearls — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p57', name: 'Barrel Cactus (Small)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 299, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=57', desc: 'Healthy Barrel Cactus — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p58', name: 'Bunny Ear Cactus (Medium)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 449, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=58', desc: 'Healthy Bunny Ear Cactus — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p59', name: 'Crown of Thorns (Large)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 249, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=59', desc: 'Healthy Crown of Thorns — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p60', name: 'Kalanchoe (Small)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 249, size: 'Small', tag: 'new', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=60', desc: 'Healthy Kalanchoe — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p61', name: 'Sansevieria Mini (Medium)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 899, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=61', desc: 'Healthy Sansevieria Mini — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p62', name: 'Ghost Plant (Large)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 599, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=62', desc: 'Healthy Ghost Plant — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p63', name: 'Zebra Haworthia (Small)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 899, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=63', desc: 'Healthy Zebra Haworthia — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p64', name: 'Christmas Cactus (Medium)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 449, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=64', desc: 'Healthy Christmas Cactus — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p65', name: 'Moon Cactus (Large)', category: 'Succulents', categoryLabel: 'Succulents & Cacti', price: 449, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/succulent,plant/all?lock=65', desc: 'Healthy Moon Cactus — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p66', name: 'Areca Palm Air (Small)', category: 'AirPurifying', categoryLabel: 'Air-Purifying Plants', price: 299, size: 'Small', tag: 'new', img: 'https://loremflickr.com/500/650/leafplant,plant/all?lock=66', desc: 'Healthy Areca Palm Air — small size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p67', name: 'Snake Plant XL (Medium)', category: 'AirPurifying', categoryLabel: 'Air-Purifying Plants', price: 599, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/leafplant,plant/all?lock=67', desc: 'Healthy Snake Plant XL — medium size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p68', name: 'Peace Lily Air (Large)', category: 'AirPurifying', categoryLabel: 'Air-Purifying Plants', price: 199, size: 'Large', tag: 'bestseller', img: 'https://loremflickr.com/500/650/leafplant,plant/all?lock=68', desc: 'Healthy Peace Lily Air — large size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p69', name: 'Spider Plant Air (Small)', category: 'AirPurifying', categoryLabel: 'Air-Purifying Plants', price: 1299, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/leafplant,plant/all?lock=69', desc: 'Healthy Spider Plant Air — small size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p70', name: 'Bamboo Palm Air (Medium)', category: 'AirPurifying', categoryLabel: 'Air-Purifying Plants', price: 249, size: 'Medium', tag: 'new', img: 'https://loremflickr.com/500/650/leafplant,plant/all?lock=70', desc: 'Healthy Bamboo Palm Air — medium size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p71', name: 'English Ivy (Large)', category: 'AirPurifying', categoryLabel: 'Air-Purifying Plants', price: 999, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/leafplant,plant/all?lock=71', desc: 'Healthy English Ivy — large size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p72', name: 'Rubber Plant Air (Small)', category: 'AirPurifying', categoryLabel: 'Air-Purifying Plants', price: 699, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/leafplant,plant/all?lock=72', desc: 'Healthy Rubber Plant Air — small size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p73', name: 'Aloe Air (Medium)', category: 'AirPurifying', categoryLabel: 'Air-Purifying Plants', price: 449, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/leafplant,plant/all?lock=73', desc: 'Healthy Aloe Air — medium size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p74', name: 'ZZ Plant Air (Large)', category: 'AirPurifying', categoryLabel: 'Air-Purifying Plants', price: 699, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/leafplant,plant/all?lock=74', desc: 'Healthy ZZ Plant Air — large size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p75', name: 'Dracaena Air (Small)', category: 'AirPurifying', categoryLabel: 'Air-Purifying Plants', price: 599, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/leafplant,plant/all?lock=75', desc: 'Healthy Dracaena Air — small size, perfect for home & office decor. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p76', name: 'Tulsi Holy Basil (Small)', category: 'Medicinal', categoryLabel: 'Medicinal & Herbal', price: 599, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/herbplant,plant/all?lock=76', desc: 'Healthy Tulsi Holy Basil — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p77', name: 'Aloe Vera Medicinal (Medium)', category: 'Medicinal', categoryLabel: 'Medicinal & Herbal', price: 799, size: 'Medium', tag: 'bestseller', img: 'https://loremflickr.com/500/650/herbplant,plant/all?lock=77', desc: 'Healthy Aloe Vera Medicinal — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p78', name: 'Mint Pudina (Large)', category: 'Medicinal', categoryLabel: 'Medicinal & Herbal', price: 799, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/herbplant,plant/all?lock=78', desc: 'Healthy Mint Pudina — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p79', name: 'Lemongrass (Small)', category: 'Medicinal', categoryLabel: 'Medicinal & Herbal', price: 999, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/herbplant,plant/all?lock=79', desc: 'Healthy Lemongrass — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p80', name: 'Ajwain Plant (Medium)', category: 'Medicinal', categoryLabel: 'Medicinal & Herbal', price: 999, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/herbplant,plant/all?lock=80', desc: 'Healthy Ajwain Plant — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p81', name: 'Stevia (Large)', category: 'Medicinal', categoryLabel: 'Medicinal & Herbal', price: 199, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/herbplant,plant/all?lock=81', desc: 'Healthy Stevia — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p82', name: 'Ashwagandha (Small)', category: 'Medicinal', categoryLabel: 'Medicinal & Herbal', price: 449, size: 'Small', tag: 'new', img: 'https://loremflickr.com/500/650/herbplant,plant/all?lock=82', desc: 'Healthy Ashwagandha — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p83', name: 'Giloy (Medium)', category: 'Medicinal', categoryLabel: 'Medicinal & Herbal', price: 499, size: 'Medium', tag: 'bestseller', img: 'https://loremflickr.com/500/650/herbplant,plant/all?lock=83', desc: 'Healthy Giloy — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p84', name: 'Brahmi (Large)', category: 'Medicinal', categoryLabel: 'Medicinal & Herbal', price: 899, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/herbplant,plant/all?lock=84', desc: 'Healthy Brahmi — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p85', name: 'Curry Leaf Herbal (Small)', category: 'Medicinal', categoryLabel: 'Medicinal & Herbal', price: 599, size: 'Small', tag: 'new', img: 'https://loremflickr.com/500/650/herbplant,plant/all?lock=85', desc: 'Healthy Curry Leaf Herbal — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p86', name: 'Ficus Bonsai (Small)', category: 'Bonsai', categoryLabel: 'Bonsai', price: 599, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/bonsai,plant/all?lock=86', desc: 'Healthy Ficus Bonsai — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p87', name: 'Banyan Bonsai (Medium)', category: 'Bonsai', categoryLabel: 'Bonsai', price: 1299, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/bonsai,plant/all?lock=87', desc: 'Healthy Banyan Bonsai — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p88', name: 'Jade Bonsai (Large)', category: 'Bonsai', categoryLabel: 'Bonsai', price: 1299, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/bonsai,plant/all?lock=88', desc: 'Healthy Jade Bonsai — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p89', name: 'Chinese Elm Bonsai (Small)', category: 'Bonsai', categoryLabel: 'Bonsai', price: 699, size: 'Small', tag: 'new', img: 'https://loremflickr.com/500/650/bonsai,plant/all?lock=89', desc: 'Healthy Chinese Elm Bonsai — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p90', name: 'Bougainvillea Bonsai (Medium)', category: 'Bonsai', categoryLabel: 'Bonsai', price: 249, size: 'Medium', tag: 'none', img: 'https://loremflickr.com/500/650/bonsai,plant/all?lock=90', desc: 'Healthy Bougainvillea Bonsai — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p91', name: 'Juniper Bonsai (Large)', category: 'Bonsai', categoryLabel: 'Bonsai', price: 999, size: 'Large', tag: 'new', img: 'https://loremflickr.com/500/650/bonsai,plant/all?lock=91', desc: 'Healthy Juniper Bonsai — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p92', name: 'Peepal Bonsai (Small)', category: 'Bonsai', categoryLabel: 'Bonsai', price: 599, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/bonsai,plant/all?lock=92', desc: 'Healthy Peepal Bonsai — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p93', name: 'Money Plant Bonsai (Medium)', category: 'Bonsai', categoryLabel: 'Bonsai', price: 1499, size: 'Medium', tag: 'bestseller', img: 'https://loremflickr.com/500/650/bonsai,plant/all?lock=93', desc: 'Healthy Money Plant Bonsai — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p94', name: 'Lemon Plant (Small)', category: 'Fruit', categoryLabel: 'Fruit Plants', price: 699, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/fruitplant,plant/all?lock=94', desc: 'Healthy Lemon Plant — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p95', name: 'Guava Plant (Medium)', category: 'Fruit', categoryLabel: 'Fruit Plants', price: 499, size: 'Medium', tag: 'bestseller', img: 'https://loremflickr.com/500/650/fruitplant,plant/all?lock=95', desc: 'Healthy Guava Plant — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p96', name: 'Pomegranate Plant (Large)', category: 'Fruit', categoryLabel: 'Fruit Plants', price: 199, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/fruitplant,plant/all?lock=96', desc: 'Healthy Pomegranate Plant — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p97', name: 'Papaya Plant (Small)', category: 'Fruit', categoryLabel: 'Fruit Plants', price: 1499, size: 'Small', tag: 'none', img: 'https://loremflickr.com/500/650/fruitplant,plant/all?lock=97', desc: 'Healthy Papaya Plant — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p98', name: 'Fig Anjeer Plant (Medium)', category: 'Fruit', categoryLabel: 'Fruit Plants', price: 299, size: 'Medium', tag: 'bestseller', img: 'https://loremflickr.com/500/650/fruitplant,plant/all?lock=98', desc: 'Healthy Fig Anjeer Plant — medium size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p99', name: 'Mango Sapling (Large)', category: 'Fruit', categoryLabel: 'Fruit Plants', price: 299, size: 'Large', tag: 'none', img: 'https://loremflickr.com/500/650/fruitplant,plant/all?lock=99', desc: 'Healthy Mango Sapling — large size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
  { id: 'p100', name: 'Chikoo Sapling (Small)', category: 'Fruit', categoryLabel: 'Fruit Plants', price: 199, size: 'Small', tag: 'bestseller', img: 'https://loremflickr.com/500/650/fruitplant,plant/all?lock=100', desc: 'Healthy Chikoo Sapling — small size, perfect for plant lovers. Nursery-grown, well-rooted, ready to plant.' },
];const SAMPLES = PLANTS.filter((p) => p.tag === "bestseller").slice(0, 4);

/* =========================================================
   Product image gallery helper
   NOTE: real per-product photos/videos aren't wired up yet — this builds
   a placeholder multi-image gallery (product angles + one "customer
   photo") from the single p.img field so the swipeable gallery UI works
   today. Swap this out once real uploaded images/videos are added per
   product (just replace the returned array with real URLs).
   ========================================================= */
function getPlantGallerySlides(p) {
  const base = p.img.split("?")[0];
  return [
    { type: "product", img: `${base}?lock=${p.id}a` },
    { type: "product", img: `${base}?lock=${p.id}b` },
    { type: "product", img: `${base}?lock=${p.id}c` },
    { type: "review", img: `${base}?lock=${p.id}r`, label: "Customer Photo" },
  ];
}

/* =========================================================
   Demo review/rating data
   NOTE: there's no real reviews backend yet, so this generates
   consistent (not random-per-render) placeholder rating data per plant
   using its id. Replace with real review data once you have a backend
   or a review-collection flow.
   ========================================================= */
function getDemoReviewData(p) {
  let hash = 0;
  for (let i = 0; i < p.id.length; i++) hash = (hash * 31 + p.id.charCodeAt(i)) >>> 0;
  const rating = (3.7 + (hash % 13) / 10).toFixed(1); // 3.7 - 4.9
  const totalReviews = 40 + (hash % 260);
  const veryGoodPct = 55 + (hash % 20);
  const goodPct = Math.max(5, 25 - (hash % 15));
  const okPct = Math.max(3, 10 - (hash % 7));
  const badPct = Math.max(1, 6 - (hash % 4));
  const veryBadPct = Math.max(0, 100 - veryGoodPct - goodPct - okPct - badPct);
  return {
    rating,
    totalReviews,
    breakdown: [
      { label: "Very Good", pct: veryGoodPct },
      { label: "Good", pct: goodPct },
      { label: "Ok-Ok", pct: okPct },
      { label: "Bad", pct: badPct },
      { label: "Very Bad", pct: veryBadPct },
    ],
  };
}

/* ---------------- In-memory state ----------------
   NOTE: user auth + favorites are also mirrored into localStorage so
   they survive a page refresh once this is hosted for real (localStorage
   only works on an actual deployed URL, not inside a sandboxed preview).
------------------------------------------------------ */
const state = {
  activeTab: "explore",
  activeFilter: "grid",
  catDetailCategory: null,
  catDetailFilter: "all",
  searchQuery: "",
  favorites: new Set(),
  isSignedIn: false,
  user: null, // { name, email, picture }
  currentPlant: null,
  pendingOrderPlant: null, // plant waiting for delivery-details step
  cart: [], // [{ id, qty }]
  deliveryPincode: null,
  deliveryDateText: null,
};

/* =========================================================
   Init
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  loadFavoritesFromStorage();
  loadUserFromStorage();
  loadCartFromStorage();
  initGoogleSignIn();
  renderCollections();
  renderPlants();
  renderSamples();
  renderLegalPolicyList();
  wireSearch();
  updateProfileUI();
  updateCartBadge();
});

/* =========================================================
   Tabs / navigation
   ========================================================= */
function switchTab(tab, el) {
  state.activeTab = tab;

  document.querySelectorAll(".screen-content").forEach((s) => s.classList.remove("active"));
  document.getElementById(`screen-${tab}`).classList.add("active");

  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  if (el) el.classList.add("active");
}

/* ----- Collections (Categories tab) -----
   Infinite loop: we render the same set of cards 3x in a row, start the
   scroll position in the middle copy, then silently snap back by one
   set-width whenever the user scrolls near either edge — this gives a
   smooth, seamless infinite carousel with plain native scrolling. */
function renderCollections() {
  const el = document.getElementById("collection-carousel");
  const cardsHtml = CATEGORIES.map((c) => {
    const count = PLANTS.filter((p) => p.category === c.key).length;
    return `
      <div class="carousel-card" style="background-image:url('${c.img}')" onclick="openCategory('${c.key}')">
        <div class="carousel-info">
          <h2>${c.title}</h2>
          <p>${count} plant${count === 1 ? "" : "s"}</p>
          <button class="explore-pill-btn" onclick="event.stopPropagation(); openCategory('${c.key}')">Explore</button>
        </div>
      </div>
    `;
  }).join("");

  el.innerHTML = cardsHtml + cardsHtml + cardsHtml;

  requestAnimationFrame(() => {
    const setWidth = el.scrollWidth / 3;
    el.dataset.setWidth = setWidth;
    el.scrollLeft = setWidth; // start in the middle copy
  });

  if (!el.dataset.loopBound) {
    el.dataset.loopBound = "1";
    el.addEventListener("scroll", handleCollectionLoopScroll);
  }
}

let collectionLoopTimer;
function handleCollectionLoopScroll() {
  clearTimeout(collectionLoopTimer);
  collectionLoopTimer = setTimeout(() => {
    const el = document.getElementById("collection-carousel");
    const setWidth = parseFloat(el.dataset.setWidth || 0);
    if (!setWidth) return;
    if (el.scrollLeft < setWidth * 0.5) {
      el.scrollLeft += setWidth;
    } else if (el.scrollLeft > setWidth * 1.5) {
      el.scrollLeft -= setWidth;
    }
  }, 120);
}

/* ----- Category detail screen ----- */
function openCategory(category) {
  state.catDetailCategory = category;
  state.catDetailFilter = "all";
  document.getElementById("cat-detail-title").textContent =
    CATEGORIES.find((c) => c.key === category)?.title || category;

  document.querySelectorAll(".cat-tab").forEach((t) => t.classList.remove("active"));
  document.querySelector('.cat-tab[data-cat-filter="all"]').classList.add("active");

  switchTab("category-detail", null);
  renderCategoryDetailGrid();
}

function switchCatTab(el) {
  document.querySelectorAll(".cat-tab").forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  state.catDetailFilter = el.dataset.catFilter;
  renderCategoryDetailGrid();
}

function renderCategoryDetailGrid() {
  let list = PLANTS.filter((p) => p.category === state.catDetailCategory);
  if (state.catDetailFilter === "bestseller") list = list.filter((p) => p.tag === "bestseller");
  if (state.catDetailFilter === "new") list = list.filter((p) => p.tag === "new");

  const container = document.getElementById("cat-detail-grid");
  if (list.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:30px 0;">No plants found.</p>`;
    return;
  }
  container.innerHTML = list.map(cardHtml).join("");
}

function switchSubCat(el) {
  document.querySelectorAll(".sub-cat-item").forEach((s) => s.classList.remove("active"));
  el.classList.add("active");
  state.activeFilter = el.dataset.filter;
  renderPlants();
}

/* =========================================================
   Header shortcuts (heart -> favorites filter, search -> explore search)
   ========================================================= */
function goToFavorites() {
  switchTab("explore", document.getElementById("nav-explore"));
  const starTab = document.querySelector('.sub-cat-item[data-filter="star"]');
  if (starTab) switchSubCat(starTab);
}

function goToSearch() {
  switchTab("explore", document.getElementById("nav-explore"));
  setTimeout(() => {
    const input = document.getElementById("search-input");
    if (input) input.focus();
  }, 150);
}

/* =========================================================
   Search
   ========================================================= */
function wireSearch() {
  const input = document.getElementById("search-input");
  input.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    renderPlants();
  });
}

/* =========================================================
   Rendering (Explore tab)
   ========================================================= */
function getFilteredPlants() {
  let list = PLANTS.slice();

  if (state.searchQuery) {
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(state.searchQuery) ||
        p.categoryLabel.toLowerCase().includes(state.searchQuery)
    );
  }

  switch (state.activeFilter) {
    case "gift": // Budget
      list = list.filter((p) => p.price <= 300);
      break;
    case "diamond": // Premium
      list = list.filter((p) => p.price > 300);
      break;
    case "star":
      list = list.filter((p) => state.favorites.has(p.id));
      break;
    case "fire":
      list = list.filter((p) => p.tag === "bestseller" || p.tag === "new");
      break;
    case "shuffle":
      list = list.sort(() => Math.random() - 0.5);
      break;
    default:
      break;
  }

  return list;
}

function renderPlants() {
  const container = document.getElementById("wallpaper-grid-container");
  const list = getFilteredPlants();

  if (list.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:30px 0;">No plants found.</p>`;
    return;
  }

  container.innerHTML = list.map(cardHtml).join("");
}

function renderSamples() {
  document.getElementById("samples-grid").innerHTML = SAMPLES.map(cardHtml).join("");
}

function cardHtml(p) {
  // NOTE: the favorite heart is intentionally NOT shown here in the grid —
  // it only appears on the product detail page (see openPlant / pd-fav-btn).
  let badge = "";
  if (p.tag === "bestseller") badge = `<div class="premium-badge">BEST SELLER</div>`;
  else if (p.tag === "new") badge = `<div class="new-badge">NEW</div>`;
  else badge = `<div class="free-badge">IN STOCK</div>`;

  return `
    <div class="wallpaper-card" style="background-image:url('${p.img}')" onclick="openPlant('${p.id}')">
      <div class="card-top">
        <div></div>
        ${badge}
      </div>
      <div class="card-bottom">
        <div class="card-time">${p.categoryLabel}</div>
        <div class="card-clock">₹${p.price}</div>
        <div class="card-title">${p.name}</div>
      </div>
    </div>
  `;
}

function toggleFavorite(event, id) {
  event.stopPropagation();
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
  saveFavoritesToStorage();
  renderPlants();
  renderSamples();
  renderCategoryDetailGrid();
}

function loadFavoritesFromStorage() {
  try {
    const raw = localStorage.getItem("mitti_favorites");
    if (raw) state.favorites = new Set(JSON.parse(raw));
  } catch (e) {}
}
function saveFavoritesToStorage() {
  try {
    localStorage.setItem("mitti_favorites", JSON.stringify([...state.favorites]));
  } catch (e) {}
}

/* =========================================================
   Cart
   ========================================================= */
function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem("mitti_cart");
    if (raw) state.cart = JSON.parse(raw);
  } catch (e) {}
}
function saveCartToStorage() {
  try {
    localStorage.setItem("mitti_cart", JSON.stringify(state.cart));
  } catch (e) {}
}

function addToCartCurrentPlant() {
  if (!state.currentPlant) return;
  addToCart(state.currentPlant.id);
}

function addToCart(id) {
  const existing = state.cart.find((c) => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id, qty: 1 });
  }
  saveCartToStorage();
  updateCartBadge();
  showToast("Added to cart");
}

function changeCartQty(id, delta) {
  const item = state.cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((c) => c.id !== id);
  }
  saveCartToStorage();
  updateCartBadge();
  renderCartModal();
}

function removeFromCart(id) {
  state.cart = state.cart.filter((c) => c.id !== id);
  saveCartToStorage();
  updateCartBadge();
  renderCartModal();
}

function getCartCount() {
  return state.cart.reduce((sum, c) => sum + c.qty, 0);
}
function getCartTotal() {
  return state.cart.reduce((sum, c) => {
    const p = PLANTS.find((x) => x.id === c.id);
    return sum + (p ? p.price * c.qty : 0);
  }, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("pd-cart-badge");
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

function openCartModal() {
  renderCartModal();
  document.getElementById("cart-modal-overlay").classList.add("show");
}
function closeCartModal() {
  document.getElementById("cart-modal-overlay").classList.remove("show");
}

function renderCartModal() {
  const listEl = document.getElementById("cart-items-list");
  const emptyEl = document.getElementById("cart-empty-state");
  const totalEl = document.getElementById("cart-total-amount");

  if (state.cart.length === 0) {
    listEl.innerHTML = "";
    emptyEl.style.display = "flex";
    totalEl.textContent = "₹0";
    return;
  }

  emptyEl.style.display = "none";
  listEl.innerHTML = state.cart
    .map((c) => {
      const p = PLANTS.find((x) => x.id === c.id);
      if (!p) return "";
      return `
        <div class="cart-item-row">
          <div class="cart-item-img" style="background-image:url('${p.img}')"></div>
          <div class="cart-item-info">
            <h5>${p.name}</h5>
            <span>₹${p.price}</span>
          </div>
          <div class="cart-qty-control">
            <button onclick="changeCartQty('${p.id}', -1)">-</button>
            <span>${c.qty}</span>
            <button onclick="changeCartQty('${p.id}', 1)">+</button>
          </div>
          <div class="cart-item-remove" onclick="removeFromCart('${p.id}')"><i class="fa-solid fa-trash"></i></div>
        </div>
      `;
    })
    .join("");

  totalEl.textContent = `₹${getCartTotal()}`;
}

function checkoutCartOnWhatsApp() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty");
    return;
  }
  const lines = ["Hi, I'd like to order the following plants:", ""];
  state.cart.forEach((c) => {
    const p = PLANTS.find((x) => x.id === c.id);
    if (p) lines.push(`- ${p.name} x${c.qty} — ₹${p.price * c.qty}`);
  });
  lines.push("", `Total: ₹${getCartTotal()}`);
  openWhatsApp(lines.join("\n"));
  closeCartModal();
}

/* =========================================================
   Plant detail screen
   ========================================================= */
function openPlant(id) {
  const p = PLANTS.find((x) => x.id === id);
  if (!p) return;
  state.currentPlant = p;

  document.getElementById("product-name").textContent = p.name;
  document.getElementById("product-category").textContent = p.categoryLabel;
  document.getElementById("product-price").textContent = `₹${p.price}`;
  document.getElementById("product-description").textContent = p.desc;

  const badgeEl = document.getElementById("product-tag-badge");
  if (p.tag === "bestseller") {
    badgeEl.textContent = "BEST SELLER";
    badgeEl.className = "premium-badge";
    badgeEl.style.display = "inline-block";
  } else if (p.tag === "new") {
    badgeEl.textContent = "NEW";
    badgeEl.className = "new-badge";
    badgeEl.style.display = "inline-block";
  } else {
    badgeEl.style.display = "none";
  }

  renderPdGallery(p);
  renderPdHighlights(p);
  renderPdDetails(p);
  renderPdCarousel("pd-related-carousel", getRelatedPlants(p));
  renderPdCarousel("pd-alsoviewed-carousel", getAlsoViewedPlants(p));
  renderPdReviews(p);
  resetPdDelivery();
  updatePdFavIcon();
  updateCartBadge();

  // Collapse accordions back to closed state each time a product opens.
  document.querySelectorAll(".pd-accordion").forEach((a) => a.classList.remove("open"));

  switchTab("editor", null);
}

function closeEditorScreen() {
  switchTab("explore", document.getElementById("nav-explore"));
}

/* ----- Image gallery ----- */
function renderPdGallery(p) {
  const slides = getPlantGallerySlides(p);
  const track = document.getElementById("pd-gallery-track");
  const dotsEl = document.getElementById("pd-gallery-dots");
  const countEl = document.getElementById("pd-gallery-count");

  track.innerHTML = slides
    .map(
      (s) => `
      <div class="pd-gallery-slide" style="background-image:url('${s.img}')">
        ${s.type === "review" ? `<div class="pd-review-tag">${s.label}</div>` : ""}
      </div>
    `
    )
    .join("");

  dotsEl.innerHTML = slides.map((_, i) => `<div class="dot ${i === 0 ? "active" : ""}"></div>`).join("");
  countEl.textContent = `1/${slides.length}`;

  track.scrollLeft = 0;
  track.onscroll = () => {
    const idx = Math.round(track.scrollLeft / track.clientWidth);
    countEl.textContent = `${Math.min(idx + 1, slides.length)}/${slides.length}`;
    dotsEl.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i === idx));
  };
}

/* ----- Product Highlights ----- */
function renderPdHighlights(p) {
  const body = document.getElementById("pd-highlights-body");
  body.innerHTML = `
    <ul>
      <li>${p.size} size, nursery-grown &amp; well-rooted</li>
      <li>Category: ${p.categoryLabel}</li>
      <li>Comes with a sturdy nursery pot, ready to repot</li>
      <li>Ideal for ${p.category === "Outdoor" ? "gardens, balconies &amp; landscaping" : "home &amp; office decor"}</li>
      ${p.tag === "bestseller" ? "<li>One of our most-loved best sellers</li>" : ""}
      ${p.tag === "new" ? "<li>Newly added to our collection</li>" : ""}
    </ul>
  `;
}

/* ----- Additional Details ----- */
function renderPdDetails(p) {
  const body = document.getElementById("pd-details-body");
  body.innerHTML = `
    <table>
      <tr><td>Category</td><td>${p.categoryLabel}</td></tr>
      <tr><td>Size</td><td>${p.size}</td></tr>
      <tr><td>Price</td><td>₹${p.price}</td></tr>
      <tr><td>Advance Payment</td><td>${Math.round(ADVANCE_PERCENT * 100)}% now, rest on delivery</td></tr>
      <tr><td>Availability</td><td>In stock</td></tr>
    </table>
  `;
}

/* ----- You might also like / People also viewed carousels ----- */
function getRelatedPlants(p) {
  return PLANTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 8);
}
function getAlsoViewedPlants(p) {
  return PLANTS.filter((x) => x.category !== p.category).slice(0, 8);
}
function renderPdCarousel(containerId, list) {
  const el = document.getElementById(containerId);
  if (!list.length) {
    el.innerHTML = "";
    return;
  }
  el.innerHTML = list
    .map(
      (p) => `
      <div class="pd-carousel-card" onclick="openPlant('${p.id}')">
        <div class="pd-carousel-card-img" style="background-image:url('${p.img}')"></div>
        <div class="pd-carousel-card-info">
          <h5>${p.name}</h5>
          <span>₹${p.price}</span>
        </div>
      </div>
    `
    )
    .join("");
}

/* ----- Customer Ratings & Reviews (demo data — see getDemoReviewData) ----- */
function renderPdReviews(p) {
  const data = getDemoReviewData(p);
  const maxPct = Math.max(...data.breakdown.map((b) => b.pct));
  const slides = getPlantGallerySlides(p);

  document.getElementById("pd-reviews-card").innerHTML = `
    <div class="pd-review-summary">
      <div class="pd-review-score">
        <div class="num">${data.rating} <i class="fa-solid fa-star" style="font-size:12px;"></i></div>
        <div class="label">${data.totalReviews} ratings</div>
      </div>
      <div class="pd-review-bars">
        ${data.breakdown
          .map(
            (b) => `
          <div class="pd-review-bar-row">
            <span style="width:52px;flex-shrink:0;">${b.label}</span>
            <div class="pd-review-bar-track"><div class="pd-review-bar-fill" style="width:${Math.round(
              (b.pct / maxPct) * 100
            )}%"></div></div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
    <div class="pd-review-count">${data.totalReviews} customers shared photos &amp; feedback</div>
    <div class="pd-review-photos">
      ${slides.map((s) => `<div class="pd-review-photo" style="background-image:url('${s.img}')"></div>`).join("")}
    </div>
    <div class="pd-review-note">Showing sample ratings — real customer reviews will appear here as orders come in.</div>
  `;
}

/* ----- Delivery info ----- */
function resetPdDelivery() {
  const dateEl = document.getElementById("pd-delivery-date");
  const pinEl = document.getElementById("pd-delivery-pincode");
  if (state.deliveryPincode && state.deliveryDateText) {
    dateEl.textContent = state.deliveryDateText;
    pinEl.textContent = `to ${state.deliveryPincode}`;
  } else {
    dateEl.textContent = "-";
    pinEl.textContent = "Enter pincode to check delivery date";
  }
}

function changeDeliveryPincode() {
  const pin = prompt("Enter your 6-digit delivery pincode:", state.deliveryPincode || "");
  if (!pin) return;
  const clean = pin.trim();
  if (!/^\d{6}$/.test(clean)) {
    showToast("Please enter a valid 6-digit pincode");
    return;
  }
  state.deliveryPincode = clean;
  const d = new Date();
  d.setDate(d.getDate() + 5);
  state.deliveryDateText = d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
  resetPdDelivery();
  showToast("Delivery estimate updated");
}

/* ----- Accordions ----- */
function toggleAccordion(id) {
  const body = document.getElementById(`${id}-body`);
  const wrapper = body.closest(".pd-accordion");
  wrapper.classList.toggle("open");
}

/* ----- Favorite on product detail page ----- */
function toggleFavoriteCurrentPlant() {
  if (!state.currentPlant) return;
  toggleFavorite({ stopPropagation: () => {} }, state.currentPlant.id);
  updatePdFavIcon();
}
function updatePdFavIcon() {
  const btn = document.getElementById("pd-fav-btn");
  if (!btn || !state.currentPlant) return;
  btn.classList.toggle("favorited", state.favorites.has(state.currentPlant.id));
}

/* =========================================================
   WhatsApp
   ========================================================= */
function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function openWhatsAppForCurrentPlant() {
  if (!state.currentPlant) {
    openWhatsApp("Hi, I want to know more about your plants.");
    return;
  }
  openWhatsApp(
    `Hi, I'm interested in "${state.currentPlant.name}" (₹${state.currentPlant.price}). Can you share more details?`
  );
}

/* =========================================================
   Google Sign-In
   ========================================================= */
function initGoogleSignIn() {
  if (!window.google || !google.accounts || !google.accounts.id) {
    // GIS script may still be loading; retry shortly.
    setTimeout(initGoogleSignIn, 300);
    return;
  }
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredential,
    auto_select: false,
  });

  // Render an actual (invisible-ish) Google button we can trigger,
  // since Google requires its own button for the styled prompt to work
  // reliably across browsers.
  const wrapper = document.getElementById("g_id_signin_wrapper");
  if (wrapper) {
    google.accounts.id.renderButton(wrapper, {
      theme: "outline",
      size: "large",
      shape: "pill",
      width: 260,
    });
  }
}

function triggerGoogleLogin() {
  // Clicking our custom button "forwards" the click to Google's real button.
  const realBtn = document.querySelector("#g_id_signin_wrapper div[role=button]");
  if (realBtn) {
    realBtn.click();
  } else if (window.google && google.accounts && google.accounts.id) {
    google.accounts.id.prompt();
  } else {
    showToast("Google Sign-In is still loading, try again in a second.");
  }
}

function decodeJwt(token) {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(decodeURIComponent(escape(atob(base64))));
  } catch (e) {
    return null;
  }
}

function handleGoogleCredential(response) {
  const payload = decodeJwt(response.credential);
  if (!payload) {
    showToast("Login failed, please try again.");
    return;
  }
  state.isSignedIn = true;
  state.user = {
    name: payload.name || "",
    email: payload.email || "",
    picture: payload.picture || "",
  };
  saveUserToStorage();
  updateProfileUI();
  showToast(`Welcome, ${state.user.name.split(" ")[0]}!`);

  // If the user was in the middle of ordering, continue automatically.
  if (state.pendingOrderPlant) {
    const plant = state.pendingOrderPlant;
    state.pendingOrderPlant = null;
    openDeliveryDetailsScreen(plant);
  }
}

function logoutUser() {
  state.isSignedIn = false;
  state.user = null;
  try {
    localStorage.removeItem("mitti_user");
  } catch (e) {}
  if (window.google && google.accounts && google.accounts.id) {
    google.accounts.id.disableAutoSelect();
  }
  updateProfileUI();
  showToast("Logged out");
}

function updateProfileUI() {
  const out = document.getElementById("profile-logged-out");
  const inn = document.getElementById("profile-logged-in");
  const contact = document.getElementById("profile-contact-info");
  const options = document.getElementById("profile-account-options");
  if (state.isSignedIn && state.user) {
    out.style.display = "none";
    inn.style.display = "flex";
    contact.style.display = "block";
    options.style.display = "block";
    document.getElementById("profile-name").textContent = state.user.name;
    document.getElementById("profile-email").textContent = state.user.email;
    const avatar = document.getElementById("profile-avatar");
    if (state.user.picture) {
      avatar.style.backgroundImage = `url('${state.user.picture}')`;
      avatar.textContent = "";
    } else {
      avatar.style.backgroundImage = "";
      avatar.textContent = (state.user.name || "?").charAt(0).toUpperCase();
    }
  } else {
    out.style.display = "flex";
    inn.style.display = "none";
    contact.style.display = "none";
    options.style.display = "none";
  }
}

function saveUserToStorage() {
  try {
    localStorage.setItem("mitti_user", JSON.stringify(state.user));
  } catch (e) {}
}
function loadUserFromStorage() {
  try {
    const raw = localStorage.getItem("mitti_user");
    if (raw) {
      state.user = JSON.parse(raw);
      state.isSignedIn = true;
    }
  } catch (e) {}
}

/* =========================================================
   Order flow: Order Now -> (login if needed) -> delivery details -> advance payment
   ========================================================= */
function startOrder() {
  if (!state.currentPlant) return;

  if (!state.isSignedIn) {
    state.pendingOrderPlant = state.currentPlant;
    showToast("Please login with Google to continue your order");
    switchTab("settings", document.getElementById("nav-settings"));
    setTimeout(() => triggerGoogleLogin(), 400);
    return;
  }

  openDeliveryDetailsScreen(state.currentPlant);
}

function openDeliveryDetailsScreen(plant) {
  state.currentPlant = plant;

  // Prefill from logged-in user where possible
  document.getElementById("ord-name").value = state.user?.name || "";
  document.getElementById("ord-phone").value = "";
  document.getElementById("ord-email").value = state.user?.email || "";
  document.getElementById("ord-address").value = "";
  document.getElementById("ord-pincode").value = "";
  document.getElementById("ord-area").value = "";
  document.getElementById("ord-landmark").value = "";

  const advance = Math.round(plant.price * ADVANCE_PERCENT);
  document.getElementById("ord-summary-plant").textContent = plant.name;
  document.getElementById("ord-summary-full").textContent = `₹${plant.price}`;
  document.getElementById("ord-summary-advance").textContent = `₹${advance}`;

  switchTab("premium", null);
}

function closeOrderFlow() {
  switchTab("editor", null);
}

function validateDeliveryForm() {
  const name = document.getElementById("ord-name").value.trim();
  const phone = document.getElementById("ord-phone").value.trim();
  const email = document.getElementById("ord-email").value.trim();
  const address = document.getElementById("ord-address").value.trim();
  const pincode = document.getElementById("ord-pincode").value.trim();
  const area = document.getElementById("ord-area").value.trim();

  if (!name || !phone || !email || !address || !pincode || !area) {
    showToast("Please fill all required delivery details");
    return null;
  }
  if (!/^\d{10}$/.test(phone.replace(/\D/g, "").slice(-10))) {
    showToast("Please enter a valid 10-digit phone number");
    return null;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    showToast("Please enter a valid email");
    return null;
  }

  return {
    name,
    phone,
    email,
    address,
    pincode,
    area,
    landmark: document.getElementById("ord-landmark").value.trim(),
  };
}

function payAdvance() {
  const plant = state.currentPlant;
  if (!plant) return;

  const details = validateDeliveryForm();
  if (!details) return;

  const advanceAmount = Math.round(plant.price * ADVANCE_PERCENT);
  const btn = document.getElementById("ord-pay-advance-btn");
  btn.disabled = true;
  btn.textContent = "Opening payment...";

  const rzp = new Razorpay({
    key: RAZORPAY_KEY_ID,
    amount: advanceAmount * 100, // paise
    currency: "INR",
    name: "Mitti Manor",
    description: `Advance for ${plant.name}`,
    prefill: {
      name: details.name,
      email: details.email,
      contact: details.phone,
    },
    theme: { color: "#1a6cf0" },
    handler: function (response) {
      sendOrderEmail(plant, details, advanceAmount, response.razorpay_payment_id);
      showToast("Payment successful! Order confirmed.");
      switchTab("explore", document.getElementById("nav-explore"));
      btn.disabled = false;
      btn.textContent = "Pay Advance & Confirm Order";
    },
    modal: {
      ondismiss: function () {
        btn.disabled = false;
        btn.textContent = "Pay Advance & Confirm Order";
      },
    },
  });

  rzp.on("payment.failed", function () {
    showToast("Payment failed. Please try again.");
    btn.disabled = false;
    btn.textContent = "Pay Advance & Confirm Order";
  });

  rzp.open();
}

function sendOrderEmail(plant, details, advanceAmount, paymentId) {
  const remaining = plant.price - advanceAmount;
  const message = [
    `NEW PLANT ORDER`,
    ``,
    `Plant: ${plant.name}`,
    `Category: ${plant.categoryLabel}`,
    `Price: ₹${plant.price}`,
    `Advance Paid (25%): ₹${advanceAmount}`,
    `Remaining (on delivery): ₹${remaining}`,
    `Razorpay Payment ID: ${paymentId || "N/A"}`,
    ``,
    `Customer Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Email: ${details.email}`,
    `Address: ${details.address}`,
    `Pincode: ${details.pincode}`,
    `Area: ${details.area}`,
    `Landmark: ${details.landmark || "-"}`,
  ].join("\n");

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Order: ${plant.name} — Advance Paid ₹${advanceAmount}`,
      from_name: "Mitti Manor Website",
      name: details.name,
      email: details.email,
      message: message,
    }),
  }).catch(() => {
    // Even if the email fails to send, the payment has gone through;
    // don't block the user, but let them know to follow up on WhatsApp.
    showToast("Order placed, but confirmation email failed. We'll reach out on WhatsApp.");
  });

  // Also open WhatsApp so the customer/owner has an instant channel too.
  openWhatsApp(
    `Hi, I just placed an order for "${plant.name}" and paid ₹${advanceAmount} advance (Payment ID: ${paymentId || "N/A"}). My delivery address: ${details.address}, ${details.area}, ${details.pincode}.`
  );
}

/* =========================================================
   Landscaping enquiry
   ========================================================= */
function openLandscapingScreen() {
  switchTab("order", null);
}

function submitLandscapingEnquiry() {
  const name = document.getElementById("land-name").value.trim();
  const phone = document.getElementById("land-phone").value.trim();
  const email = document.getElementById("land-email").value.trim();
  const propertyType = document.getElementById("land-property-type").value;
  const location = document.getElementById("land-location").value.trim();
  const requirement = document.getElementById("order-message").value.trim();

  if (!name || !phone || !email || !location || !requirement) {
    showToast("Please fill all details");
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    showToast("Please enter a valid email");
    return;
  }

  const btn = document.getElementById("order-pay-btn");
  btn.disabled = true;
  btn.textContent = "Sending...";

  const message = [
    `NEW LANDSCAPING ENQUIRY`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Property Type: ${propertyType}`,
    `Location: ${location}`,
    ``,
    `Requirement:`,
    requirement,
  ].join("\n");

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Landscaping Enquiry from ${name} (${propertyType})`,
      from_name: "Mitti Manor Website",
      name: name,
      email: email,
      message: message,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      showToast("Enquiry sent! We'll contact you soon.");
      openWhatsApp(
        `Hi, I sent a landscaping enquiry for my ${propertyType} in ${location}. Requirement: ${requirement}`
      );
      document.getElementById("land-name").value = "";
      document.getElementById("land-phone").value = "";
      document.getElementById("land-email").value = "";
      document.getElementById("land-location").value = "";
      document.getElementById("order-message").value = "";
      switchTab("request", document.getElementById("nav-request"));
    })
    .catch(() => {
      showToast("Something went wrong. Please try WhatsApp instead.");
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "Send Enquiry";
    });
}

/* =========================================================
   Legal & Policies
   NOTE: only policies relevant to a small plant-nursery e-commerce
   business are included (out of the full reference list given). Dropped:
   Responsible Disclosure / Hall of Fame / Whistleblower Policy (bug-bounty
   & corporate-governance policies for large platforms), M-Deliver
   (a marketplace's own delivery-partner brand), Influencer Marketing
   T&Cs (not currently running an influencer program), and CCPA Dark
   Pattern Declaration (California-specific, large-platform regulation).
   Edit LEGAL_POLICIES below any time to add/remove/edit a policy.
   ========================================================= */
const LEGAL_POLICIES = {
  terms: {
    title: "Terms and Conditions",
    content: `
      <p>By using the Mitti Manor website and placing an order, you agree to these terms. Mitti Manor sells live plants, pots and related landscaping services for personal and commercial use.</p>
      <h4>Orders</h4>
      <p>Orders are confirmed only after the advance payment (25% of the order value) is received. The remaining balance is collected on delivery.</p>
      <h4>Pricing</h4>
      <p>Prices shown are in Indian Rupees (INR) and may change without prior notice. The price at the time of order confirmation applies.</p>
      <h4>Plant Nature</h4>
      <p>As live products, plants may show minor natural variation in size, colour or leaf pattern from the photos shown.</p>
    `,
  },
  privacy: {
    title: "Privacy Policy",
    content: `
      <p>We collect only the information needed to process your order and provide support: your name, phone number, email, delivery address and, if you sign in, your Google account name/email.</p>
      <h4>How we use your data</h4>
      <p>Your details are used to confirm orders, arrange delivery, send order updates on WhatsApp/email, and respond to enquiries. We do not sell your personal information to third parties.</p>
      <h4>Third-party services</h4>
      <p>We use Google Sign-In for login, Razorpay for payments, and WhatsApp/email for order communication. These providers process your data under their own privacy policies.</p>
      <h4>Your choices</h4>
      <p>You can request that we delete your account information at any time by contacting us on WhatsApp or email.</p>
    `,
  },
  returns: {
    title: "Returns, Refunds and Replacement Policy",
    content: `
      <p>Because plants are living, perishable goods, returns are only accepted in specific cases:</p>
      <ul>
        <li>The plant arrived damaged, dead, or significantly different from what was ordered.</li>
        <li>The wrong item was delivered.</li>
      </ul>
      <p>Please share clear photos/video within 24 hours of delivery on WhatsApp. Approved cases are eligible for a free replacement or refund of the amount paid.</p>
      <h4>Refund timeline</h4>
      <p>Approved refunds are processed back to the original payment method within 5–7 business days.</p>
    `,
  },
  cancellation: {
    title: "Cancellation Policy",
    content: `
      <p>Orders can be cancelled free of charge before the plant is dispatched for delivery. Once dispatched, cancellation is no longer possible since plants cannot be re-shipped.</p>
      <p>To cancel, message us on WhatsApp with your order details as soon as possible. If an advance payment was made and the order is cancelled before dispatch, it will be refunded within 5–7 business days.</p>
    `,
  },
  ip: {
    title: "Intellectual Property Policy",
    content: `
      <p>All content on this website — including the Mitti Manor name, logo, photographs, and descriptions — belongs to Mitti Manor unless otherwise stated.</p>
      <p>You may not copy, reproduce or use our branding, photos or written content for commercial purposes without written permission.</p>
    `,
  },
  antiphishing: {
    title: "Anti Phishing Alert",
    content: `
      <p>Mitti Manor will never ask for your bank OTP, UPI PIN, or full card details over call, SMS, WhatsApp, or email. All payments are processed securely through Razorpay's checkout screen only.</p>
      <p>If you receive a suspicious message claiming to be from Mitti Manor asking for payment outside our official checkout, or asking for your OTP/PIN, please do not respond and report it to us directly at mittimanor@gmail.com.</p>
    `,
  },
  thirdparty: {
    title: "Third Party Functionality - Terms and Conditions",
    content: `
      <p>Our website uses the following third-party services to operate:</p>
      <ul>
        <li><strong>Google Sign-In</strong> — for account login</li>
        <li><strong>Razorpay</strong> — for secure payment processing</li>
        <li><strong>Web3Forms</strong> — to deliver order/enquiry notifications to our team</li>
        <li><strong>WhatsApp</strong> — for order communication and support</li>
      </ul>
      <p>Use of these services is also governed by each provider's own terms and privacy policy. We are not responsible for outages or issues originating from these third-party providers.</p>
    `,
  },
};

function renderLegalPolicyList() {
  const el = document.getElementById("legal-policy-list");
  if (!el) return;
  el.innerHTML = Object.keys(LEGAL_POLICIES)
    .map((key) => {
      const policy = LEGAL_POLICIES[key];
      return `
        <div class="settings-row" onclick="openLegalPolicy('${key}')">
          <div class="settings-row-icon"><i class="fa-solid fa-file-lines"></i></div>
          <div class="settings-row-text"><h4>${policy.title}</h4></div>
          <div class="settings-row-arrow"><i class="fa-solid fa-chevron-right"></i></div>
        </div>
      `;
    })
    .join("");
}

function openLegalPolicy(key) {
  const policy = LEGAL_POLICIES[key];
  if (!policy) return;
  document.getElementById("legal-modal-title").textContent = policy.title;
  document.getElementById("legal-modal-body").innerHTML = policy.content;
  document.getElementById("legal-modal-overlay").classList.add("show");
}
function closeLegalModal() {
  document.getElementById("legal-modal-overlay").classList.remove("show");
}

/* =========================================================
   Toast
   ========================================================= */
let toastTimeout;
function showToast(msg) {
  const el = document.getElementById("app-toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    el.classList.remove("show");
  }, 3000);
}

import rigidImg from '../assets/images/product-rigid-box.png';
import corrugatedImg from '../assets/images/product-corrugated-box.png';
import monoImg from '../assets/images/product-mono-carton.jpg';
import tubeImg from '../assets/images/product-paper-tube.jpg';
import bagImg from '../assets/images/product-paper-bag.jpg';
import tagsImg from '../assets/images/product-tags.jpg';

export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: ImageMetadata;
  minOrder: string;
  leadTime: string;
  specs: { label: string; value: string }[];
  features: (string | { text: string })[];
  industries: string[];
}

export const products: Product[] = [
  { 
    id: 'rigid-box',
    name: 'Rigid Boxes', 
    category: 'rigid box',
    tagline: 'Unbox the extraordinary',
    description: 'Our rigid boxes combine structural precision with luxury presentation. Constructed from high-density greyboard and finished with premium paper wraps, they deliver an unboxing experience that reflects the quality of your product.',
    image: rigidImg,
    minOrder: '300 units',
    leadTime: '18–22 working days',
    specs: [
      { label: 'Material', value: 'Rigid board + Art paper wrap, Premium color/texture paper' },
      { label: 'Finish', value: 'Matte / Gloss / Soft-touch lamination' },
      { label: 'Closure', value: 'Magnetic, ribbon pull, or lid-off' },
      { label: 'Printing', value: 'CMYK offset + spot UV, foil stamping' },
    ],
    features: [
      'Magnetic closure options',
      'Custom EVA foam inserts',
      'Gold & silver foil embossing',
      'Soft-touch matte lamination',
    ],
    industries: ['Luxury Goods', 'Electronics', 'Cosmetics', 'Jewellery']
  },
  { 
    id: 'corrugated-box',
    name: 'Corrugated Boxes', 
    category: 'corrugated box',
    tagline: 'Protection meets presentation',
    description: 'Engineered for strength without compromising on aesthetics. Our corrugated solutions provide superior protection for transit while serving as a powerful canvas for your brand identity.',
    image: corrugatedImg,
    minOrder: '1000 units',
    leadTime: '10–12 working days',
    specs: [
      { label: 'Flute Type', value: 'E, B, or C-Flute options' },
      { label: 'Material', value: 'Fluted corrugated sheet' },
      { label: 'Printing', value: 'Flexo or High-end Offset litho' },
      { label: 'Sustainability', value: '100% Recyclable materials' },
    ],
    features: [
      'Double-wall protection',
      'Easy-fold assembly',
      'Eco-friendly soy inks',
      'Custom die-cut inserts',
      'Water-resistant coatings',
    ],
    industries: ['E-Commerce', 'Subscription Boxes', 'Heavy Goods', 'Retail']
  },
  { 
    id: 'mono-carton',
    name: 'Mono Cartons', 
    category: 'mono carton',
    tagline: 'Clean lines, clear message',
    description: 'Versatile folding cartons precision-engineered for product-shelf impact. Available in a wide range of board weights and finishes, our mono cartons deliver consistent print quality at scale — ideal for retail and pharmaceutical applications.',
    image: monoImg,
    minOrder: '1000 units',
    leadTime: '10–12 working days',
    specs: [
      { label: 'Material', value: 'FBB, Ultima or Duplex board' },
      { label: 'Printing', value: 'Offset 4-colour process' },
      { label: 'Finish', value: 'Lamination, varnish, or aqueous coating' },
    ],
    features: [
      'Reverse tuck, straight tuck, auto-bottom',
      'Spot UV and embossing',
      'Child-resistant closures available',
      'Perforations and window cutouts',
      'Serialisation and barcoding',
    ],
    industries: ['Pharmaceuticals', 'Cosmetics', 'Food & Beverage', 'Retail']
  },
  { 
    id: 'paper-tube',
    name: 'Paper Tubes', 
    category: 'paper tube',
    tagline: 'Round is the new premium',
    description: 'Handsome cylindrical packaging that commands shelf presence. Our paper tubes are wound from premium kraft or coated paper with precision-fit lids — perfect for candles, teas, spirits, and cosmetic collections that demand a tactile premium feel.',
    image: tubeImg,
    minOrder: '1000 units',
    leadTime: '16–20 working days',
    specs: [
      { label: 'Material', value: 'Spiral-wound kraft or coated paper' },
      { label: 'Diameter', value: '25mm – 150mm custom' },
      { label: 'Length', value: 'Fully customisable' },
      { label: 'Closure', value: 'Friction-fit or telescopic lid' },
    ],
    features: [
      '360° full-wrap printing',
      'Embossed and debossed labels',
      'Metal or kraft end caps',
      'Food-safe interior lining',
      'Sustainable FSC-certified materials',
    ],
    industries: ['Luxury Goods', 'Food & Beverage', 'Cosmetics', 'Gifts']
  },
  { 
    id: 'paper-bag',
    name: 'Paper Bags', 
    category: 'paper bag',
    tagline: 'Carry your brand further',
    description: 'Premium retail bags that serve as walking advertisements for your brand. From minimalist kraft designs to high-gloss laminated finishes with luxury handles, we craft bags that customers want to keep and reuse.',
    image: bagImg,
    minOrder: '1000 units',
    leadTime: '10–12 working days',
    specs: [
      { label: 'Material', value: '60-120 GSM Kraft paper' },
      { label: 'Handles', value: 'Cotton rope, Ribbon, or Die-cut' },
      { label: 'Finish', value: 'Matte/Gloss lamination, UV coating' },
    ],
    features: [
      'Reinforced top and base',
      'Custom pantone matching',
      'Eco-friendly water-based inks',
      'Hidden magnetic closures available',
      'Range of luxury handle materials',
    ],
    industries: ['Fashion Retail', 'Cosmetics', 'Events', 'Gifts']
  },
  { 
    id: 'tags',
    name: 'Tags & Labels', 
    category: 'tags',
    tagline: 'The detail that defines your brand',
    description: 'Small details that make a significant impact. Our custom tags and labels are the final touch of sophistication for your product, offering high-precision printing and specialty finishes on a variety of premium stocks.',
    image: tagsImg,
    minOrder: '5000 units',
    leadTime: '7–10 working days',
    specs: [
      { label: 'Material', value: 'Coated board, Kraft, Texture paper, 600-700 GSM' },
      { label: 'Attachment', value: 'Strings, seals, or adhesive' },
      { label: 'Specialty', value: 'Die-cutting to any shape' },
    ],
    features: [
      'Gold, silver, and copper foiling',
      { text: 'Deep letterpress embossing' },
      'Variable data and QR codes',
      'Wide range of stringing options',
      'Custom blade-cut shapes',
    ],
    industries: ['Apparel', 'Artisanal Goods', 'Packaging Seals', 'Bottling']
  },
];

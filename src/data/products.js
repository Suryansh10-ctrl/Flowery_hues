export const PRODUCTS = [
  {
    id: 'velvet-santal',
    name: 'Velvet Santal',
    subtitle: 'Eau de Parfum',
    category: 'Signature',
    gender: 'Unisex',
    price: 89.99,
    priceOld: 115.00,
    rating: 4.9,
    reviewsCount: 142,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=900&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Creamy Australian sandalwood embraced by warm amber, iris, and a whisper of smoked cardamom.',
    description: 'Velvet Santal is an intimate sanctuary captured in glass. Blending sacred sandalwood harvested with profound respect with soothing iris, soft amber, and dried spices, it creates a second-skin radiance that lingers for over 14 hours. A quiet statement of refined taste.',
    notes: {
      top: ['Cardamom', 'Violet Leaf', 'Papyrus'],
      heart: ['Tuscan Iris', 'Amyris', 'Cedarwood'],
      base: ['Australian Sandalwood', 'Warm Amber', 'Velvet Musk']
    },
    volume: '50ml / 1.7 FL. OZ.',
    longevity: 'Long Lasting (10-12h)',
    sillage: 'Moderate & Elegant',
    stock: 24
  },
  {
    id: 'rose-eternelle',
    name: 'Rose Éternelle',
    subtitle: 'Extrait de Parfum',
    category: 'Women',
    gender: 'Women',
    price: 94.00,
    priceOld: 120.00,
    rating: 5.0,
    reviewsCount: 98,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=900&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Velvety Damask rose bathed in early morning dew, enriched with pink pepper and French honey.',
    description: 'An ode to dawn in Grasse. Rose Éternelle avoids powdery sweetness, embracing the living vitality of freshly picked petals, peppery stem notes, and an intoxicating dry-down of spun honey, cashmeran, and cedar.',
    notes: {
      top: ['Pink Pepper', 'Bergamot Dew', 'Lychee'],
      heart: ['Grasse Damask Rose', 'Peony', 'Geranium Leaf'],
      base: ['Provence Honey', 'White Cedar', 'Cashmeran']
    },
    volume: '50ml / 1.7 FL. OZ.',
    longevity: 'All Day (12h+)',
    sillage: 'Radiant',
    stock: 18
  },
  {
    id: 'ambre-nocturne',
    name: 'Ambre Nocturne',
    subtitle: 'Eau de Parfum Intense',
    category: 'Men',
    gender: 'Men',
    price: 105.00,
    priceOld: 130.00,
    rating: 4.8,
    reviewsCount: 86,
    isBestSeller: true,
    isNew: false,
    image: 'https://res2.weblium.site/res/686ccbb8d45784bfc280416f/687a012f65e5dac27becf4d6_optimized_1140_c1140x1140-0x0',
    secondaryImage: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'A hypnotic tapestry of golden amber resins, toasted tonka, smoky labdanum, and birch.',
    description: 'Designed for moonlit conversations and evening magnetism. Ambre Nocturne unfolds in slow, sensual waves of caramelised benzoin, rich bourbon vanilla, and polished birch smoke that wraps you in enduring warmth.',
    notes: {
      top: ['Nutmeg', 'Bitter Orange', 'Cognac Accord'],
      heart: ['Amber Resin', 'Smoked Labdanum', 'Roasted Tonka'],
      base: ['Bourbon Vanilla', 'Birch Wood', 'Grey Amber']
    },
    volume: '100ml / 3.4 FL. OZ.',
    longevity: 'Long Lasting (12-14h)',
    sillage: 'Enveloping',
    stock: 15
  },
  {
    id: 'the-vert-serenite',
    name: 'Thé Vert Sérénité',
    subtitle: 'Eau Fraîche Concentrée',
    category: 'New',
    gender: 'Unisex',
    price: 48.00,
    priceOld: 65.00,
    rating: 4.7,
    reviewsCount: 39,
    isBestSeller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1583445013765-46c20c4a6772?q=80&w=900&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Crisp green tea leaves infused with Calabrian bergamot, crushed mint, and solar bamboo.',
    description: 'Inspired by misty tea plantations at sunrise. Thé Vert Sérénité awakens the senses with sparkling citrus and clean botanical energy, drying down to an airy white musk and luminous bamboo accord.',
    notes: {
      top: ['Calabrian Bergamot', 'Crushed Mint', 'Mandarin'],
      heart: ['Japanese Sencha Tea', 'Bamboo Mist', 'Orange Blossom'],
      base: ['Clean White Musk', 'Blonde Woods', 'Mate Absolute']
    },
    volume: '50ml / 1.7 FL. OZ.',
    longevity: 'Moderate (6-8h)',
    sillage: 'Subtle & Clean',
    stock: 30
  },
  {
    id: 'fleur-blanche',
    name: 'Fleur Blanche',
    subtitle: 'Eau de Parfum',
    category: 'Women',
    gender: 'Women',
    price: 82.00,
    priceOld: 98.00,
    rating: 4.9,
    reviewsCount: 114,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=900&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Sunlit jasmine sambac, creamy tuberose petals, and Madagascar vanilla pod.',
    description: 'Pure floral enchantment without excess weight. Night-blooming white jasmine unites with solar tuberose and silky vanilla milk, radiating effortless French grace and timeless romance.',
    notes: {
      top: ['Neroli Petals', 'White Peach', 'Dewy Greens'],
      heart: ['Jasmine Sambac', 'Tuberose Milk', 'Gardenia'],
      base: ['Madagascar Vanilla', 'Soft Cedar', 'Silken Musks']
    },
    volume: '50ml / 1.7 FL. OZ.',
    longevity: 'Long Lasting (8-10h)',
    sillage: 'Elegant Trail',
    stock: 22
  },
  {
    id: 'cuir-sublime',
    name: 'Cuir Sublime',
    subtitle: 'Parfum',
    category: 'Men',
    gender: 'Men',
    price: 118.00,
    priceOld: 145.00,
    rating: 4.9,
    reviewsCount: 73,
    isBestSeller: false,
    isNew: true,
    image: 'https://res2.weblium.site/res/686ccbb8d45784bfc280416f/687a012f65e5dac27becf4d6_optimized_1140_c1140x1140-0x0',
    secondaryImage: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Supple Italian leather enriched with saffron thread, wild thyme, and dark raspberry.',
    description: 'A tribute to bespoke craftsmanship. Cuir Sublime is textured, aristocratic, and modern: combining the tactile richness of Tuscan saddle leather with the mysterious contrast of tart raspberry and golden saffron.',
    notes: {
      top: ['Wild Thyme', 'Saffron Threads', 'Dark Raspberry'],
      heart: ['Olibanum', 'Night Jasmine', 'Black Suede'],
      base: ['Tuscan Leather', 'Smoked Amber', 'Vetiver Root']
    },
    volume: '100ml / 3.4 FL. OZ.',
    longevity: 'Exceptional (14h+)',
    sillage: 'Commanding',
    stock: 12
  },
  {
    id: 'vanille-celeste',
    name: 'Vanille Céleste',
    subtitle: 'Extrait de Parfum',
    category: 'Signature',
    gender: 'Unisex',
    price: 92.00,
    priceOld: 110.00,
    rating: 4.9,
    reviewsCount: 165,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=900&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Smoked Bourbon vanilla bean, roasted tonka bean, dark cocoa, and creamy heliotrope.',
    description: 'A sophisticated departure from confectionery vanilla. Vanille Céleste showcases the dark, balsamic, and woody depth of raw vanilla orchids, balanced by dry cedar and velvety amber.',
    notes: {
      top: ['Almond Blossom', 'Bitter Cacao', 'Anise'],
      heart: ['Smoked Orchid Vanilla', 'Heliotrope', 'Tonka Bean'],
      base: ['Bourbon Vanilla Pod', 'Guaiacwood', 'Skin Musks']
    },
    volume: '50ml / 1.7 FL. OZ.',
    longevity: 'All Day (12h+)',
    sillage: 'Warm & Cozy',
    stock: 20
  },
  {
    id: 'soleil-dor',
    name: 'Soleil d\'Or',
    subtitle: 'Eau de Parfum',
    category: 'New',
    gender: 'Women',
    price: 76.00,
    priceOld: 95.00,
    rating: 4.8,
    reviewsCount: 52,
    isBestSeller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=900&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Sun-warmed solar citrus, golden frangipani blossoms, coconut nectar, and white amber.',
    description: 'The luminous warmth of afternoon sun shimmering across Mediterranean turquoise waters. Soleil d\'Or delivers instant optimism with sparkling blood orange, opulent island flowers, and salted driftwood.',
    notes: {
      top: ['Blood Orange', 'Yuzu', 'Sea Salt Spray'],
      heart: ['Frangipani', 'Solar Ylang-Ylang', 'Coconut Water'],
      base: ['Driftwood', 'Golden Amber', 'Solar Musk']
    },
    volume: '50ml / 1.7 FL. OZ.',
    longevity: 'Long Lasting (8-10h)',
    sillage: 'Breezy & Radiant',
    stock: 25
  },
  {
    id: 'smoky-cedar',
    name: 'Smoky Cedar & Moss',
    subtitle: 'Eau de Parfum',
    category: 'Men',
    gender: 'Men',
    price: 68.00,
    priceOld: 85.00,
    rating: 4.7,
    reviewsCount: 44,
    isBestSeller: false,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=900&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Atlas cedarwood paired with damp forest oakmoss, vetiver, and crushed pine needles.',
    description: 'An early dawn hike through ancient alpine forests. Crisp mountain air carries the scent of resinous pines, damp granite stones, and centuries-old cedar trunks.',
    notes: {
      top: ['Crushed Pine Needle', 'Juniper Berry', 'Grapefruit'],
      heart: ['Atlas Cedarwood', 'Forest Moss', 'Cypress'],
      base: ['Haitian Vetiver', 'Patchouli', 'Clean Earth']
    },
    volume: '50ml / 1.7 FL. OZ.',
    longevity: 'Long Lasting (9-11h)',
    sillage: 'Fresh & Grounding',
    stock: 19
  },
  {
    id: 'discovery-set-mini',
    name: 'The Storyteller Discovery Set',
    subtitle: '5 x 10ml Travel Sprays',
    category: 'Signature',
    gender: 'Unisex',
    price: 29.99,
    priceOld: 45.00,
    rating: 5.0,
    reviewsCount: 289,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=900&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Five iconic Flowery Hues fragrances in deluxe 10ml flacons with an exclusive discount coupon inside.',
    description: 'Your olfactory exploration begins here. Experience Velvet Santal, Rose Éternelle, Ambre Nocturne, Fleur Blanche, and Thé Vert Sérénité at your own leisure. Includes a $30 gift voucher redeemable toward any full-size bottle.',
    notes: {
      top: ['Assorted Floral', 'Citrus & Spices'],
      heart: ['Precious Woods', 'Iris & Tea'],
      base: ['Warm Ambers', 'Sandalwood & Musks']
    },
    volume: '5 x 10ml / 1.7 FL. OZ. Total',
    longevity: 'Variable by Scent',
    sillage: 'Varies',
    stock: 50
  },
  {
    id: 'jasmin-sauvage',
    name: 'Jasmin Sauvage',
    subtitle: 'Eau de Parfum',
    category: 'Women',
    gender: 'Women',
    price: 88.00,
    priceOld: 105.00,
    rating: 4.8,
    reviewsCount: 67,
    isBestSeller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=900&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Untamed Sambac jasmine picked at midnight, complemented by wet honeysuckle and green fig leaves.',
    description: 'Wild, narcotic, and breathtakingly genuine. Jasmin Sauvage captures the untamed intoxicating scent of moonlit gardens where creeping jasmine vines twine around ancient stone arches.',
    notes: {
      top: ['Green Fig Leaf', 'Pear Nectar', 'Honeysuckle'],
      heart: ['Night Jasmine Sambac', 'Ylang-Ylang', 'Magnolia'],
      base: ['Blonde Cedar', 'Clean White Musk', 'Ambrette']
    },
    volume: '50ml / 1.7 FL. OZ.',
    longevity: 'Long Lasting (9-11h)',
    sillage: 'Hypnotic',
    stock: 16
  },
  {
    id: 'oud-imperial',
    name: 'Oud Impérial',
    subtitle: 'Extrait de Parfum',
    category: 'Signature',
    gender: 'Unisex',
    price: 135.00,
    priceOld: 165.00,
    rating: 4.9,
    reviewsCount: 91,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=900&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Aged Cambodian agarwood intertwined with Turkish rose, saffron, and rich smokey patchouli.',
    description: 'The pinnacle of oriental perfumery. Sourced from sustainably managed agarwood trees, Oud Impérial delivers royal majesty softened by velvety rose petals and warm balsamic amber.',
    notes: {
      top: ['Saffron', 'Black Pepper', 'Rosemary'],
      heart: ['Turkish Rose Absolute', 'Cypriol', 'Smoke'],
      base: ['Cambodian Oud', 'Dark Patchouli', 'Ambergris']
    },
    volume: '100ml / 3.4 FL. OZ.',
    longevity: 'Exceptional (16h+)',
    sillage: 'Regal & Magnetic',
    stock: 9
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'signature', name: 'Signature' },
  { id: 'new', name: 'New' },
  { id: 'men', name: 'Men' },
  { id: 'women', name: 'Women' }
];

export const SIGNATURE_CARDS = [
  {
    id: 'women',
    title: 'Women',
    category: 'Women',
    description: 'Enchanting floral, soft amber & delicate botanical compositions',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop',
    link: '/#catalog'
  },
  {
    id: 'men',
    title: 'Men',
    category: 'Men',
    description: 'Deep leather, smoky cedar, warm spice & charismatic woods',
    image: 'https://res2.weblium.site/res/686ccbb8d45784bfc280416f/687a012f65e5dac27becf4d6_optimized_1140_c1140x1140-0x0',
    link: '/#catalog'
  },
  {
    id: 'new',
    title: 'New',
    category: 'New',
    description: 'Fresh olfactory arrivals and contemporary seasonal releases',
    image: 'https://images.unsplash.com/photo-1583445013765-46c20c4a6772?q=80&w=800&auto=format&fit=crop',
    link: '/#catalog'
  },
  {
    id: 'signature',
    title: 'Signature',
    category: 'Signature',
    description: 'Our most iconic formulations celebrated around the world',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    link: '/#catalog'
  }
];

export const MILESTONES = [
  {
    year: '2005',
    title: 'A Fragrant Beginning',
    description: 'Single scent sparked a new vision in a small atelier workshop.'
  },
  {
    year: '2010',
    title: 'Craft Refined',
    description: 'Tradition and botanical innovation found enduring harmonious balance.'
  },
  {
    year: '2018',
    title: 'Signature Scents',
    description: 'Bold handcrafted collections captured devoted and loyal hearts worldwide.'
  },
  {
    year: '2025',
    title: 'Future in Every Bottle',
    description: 'Pioneering sustainable practices while honoring our deep artisanal heritage.'
  }
];

export const FRAGRANCE_NOTES = [
  {
    step: '1st note',
    name: 'Jasmine',
    tagline: 'Softly charming.',
    description: 'Delicate white petals picked under moonlight, exuding sweet ethereal romanticism.',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop'
  },
  {
    step: '2nd note',
    name: 'Rose',
    tagline: 'Velvety & romantic.',
    description: 'Rich Damask petals with velvety texture, carrying hints of morning dew and honey.',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=600&auto=format&fit=crop'
  },
  {
    step: '3rd note',
    name: 'Green Tea',
    tagline: 'Airy and fresh.',
    description: 'Crisp hand-harvested young leaves offering calming clarity and herbal sparkle.',
    image: 'https://images.unsplash.com/photo-1583445013765-46c20c4a6772?q=80&w=600&auto=format&fit=crop'
  },
  {
    step: '4th note',
    name: 'Vanilla',
    tagline: 'Warm & enveloping.',
    description: 'Dark cured Madagascar pods with balsamic woody facets, avoiding flat sweetness.',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop'
  },
  {
    step: '5th note',
    name: 'Sandalwood',
    tagline: 'Smooth and grounding.',
    description: 'Sacred creamy wood with milky comforting warmth and meditative stillness.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop'
  },
  {
    step: '6th note',
    name: 'Musk',
    tagline: 'Sensual & lasting.',
    description: 'Clean animalic whisper that melds seamlessly with skin warmth for intimate depth.',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=600&auto=format&fit=crop'
  }
];

export const BENEFITS = [
  {
    icon: 'Leaf',
    title: 'Eco-friendly',
    description: 'Crafted with care for sustainability, recyclable flacons, and ethical harvesting.'
  },
  {
    icon: 'Truck',
    title: 'Fast Delivery',
    description: 'Your scent dispatched safely within 24 hours in insulated protective luxury packaging.'
  },
  {
    icon: 'PackageCheck',
    title: 'Free Shipping',
    description: 'Complimentary tracked courier delivery on every domestic order over $50.'
  },
  {
    icon: 'Sparkles',
    title: 'Special Discount',
    description: 'Enjoy 15% off your very first order with code WINTER15 at checkout.'
  }
];

export const FAQS = [
  {
    id: 'longevity',
    question: 'How long does the scent typically last?',
    answer: 'Our perfumes are formulated with high concentrations of essential oils and absolutes (18% to 25%), allowing them to last between 8 to 14 hours on skin, and even longer on natural fabrics. Eau de parfums stay longer, while lighter fresh scents are ideal for refreshing top-ups throughout the day.'
  },
  {
    id: 'ordering',
    question: 'How can I make the order?',
    answer: 'Simply choose the fragrance that fits your style, select your preferred bottle size, and click "Add to Cart". You can proceed through our frictionless checkout online in under two minutes with instant order tracking sent to your email.'
  },
  {
    id: 'samples',
    question: 'Do you offer samples or discovery sets?',
    answer: 'Yes! We offer The Storyteller Discovery Set containing five 10ml travel flacons of our most celebrated creations. Every discovery set includes a $30 gift certificate redeemable toward your first full-size bottle purchase.'
  },
  {
    id: 'ingredients',
    question: 'Are your ingredients cruelty-free and ethical?',
    answer: 'All Flowery Hues fragrances are 100% cruelty-free, Leaping Bunny certified, and formulated without phthalates, parabens, or synthetic dyes. We partner directly with family-run farms in Grasse, Madagascar, and Mysore to guarantee fair wages and ethical harvesting.'
  },
  {
    id: 'delivery',
    question: 'What are your delivery times and return policies?',
    answer: 'Orders are dispatched within 24 hours on business days. Standard delivery takes 2-4 business days. We provide a 30-day scent satisfaction guarantee: test the complimentary 2ml sample included with your full-size bottle; if it is not your perfect match, return the unopened full bottle for a full refund.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sam Smith',
    role: 'Fashion Consultant',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: 'These perfumes have changed how I think about fragrance. Each one is carefully crafted to tell a story, blending notes that feel both fresh and timeless. Finding a scent that truly resonates with me was easy, and the quality shows in every spritz. It’s a luxurious experience that makes me feel confident and unique.'
  },
  {
    id: 2,
    name: 'Sophia Bennett',
    role: 'Marketing Specialist',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: 'Wearing these scents feels like wrapping myself in emotion and artistry. The subtle layers unfold beautifully throughout the day, creating a personal and unique expression. It’s rare to find perfumes that balance tradition and modernity so perfectly, and I love how each one connects to my mood.'
  },
  {
    id: 3,
    name: 'Elena Ward',
    role: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    quote: 'From the first time I experienced these fragrances, I was captivated by how each scent evokes a memory or feeling. The depth and complexity in every bottle make it more than just a perfume — it’s a journey through moments and emotions. The craftsmanship sets them apart from anything I have tried before.'
  }
];


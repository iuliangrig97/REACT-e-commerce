const products = [
    {
        id: 1,
        name: "Quantum X1 Smartphone",
        price: 899.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        description: "A flagship device featuring a 120Hz OLED display and a revolutionary triple-lens camera system."
    },
    {
        id: 2,
        name: "Zenith Pro Laptop",
        price: 1249.00,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        description: "Ultra-slim aluminum chassis with a powerful M-series chip, perfect for creative professionals on the go."
    },
    {
        id: 3,
        name: "Classic Chronograph Watch",
        price: 150.50,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
        description: "A timeless stainless steel timepiece with a leather strap and water resistance up to 50 meters."
    },
    {
        id: 5,
        name: "Scandi Minimalist Desk",
        price: 210.00,
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd",
        description: "Sustainable oak wood desk with integrated cable management and a sleek, matte finish."
    },
    {
        id: 6,
        name: "Artisan Chocolate Box",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1548907040-4baa42d10919",
        description: "A curated selection of 12 hand-poured truffles made from 70% single-origin cocoa."
    },
    {
        id: 7,
        name: "Ethiopian Yirgacheffe Beans",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
        description: "Light roast whole bean coffee featuring floral notes and a bright, citrusy acidity."
    },
    {
        id: 11,
        name: "AeroStream Wireless Mouse",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
        description: "Ergonomic vertical design reduces wrist strain with a high-precision 4000 DPI sensor."
    },
    {
        id: 14,
        name: "Vantage DSLR Camera",
        price: 1499.00,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        description: "Full-frame sensor with 4K video capabilities and lightning-fast autofocus."
    },
    {
        id: 17,
        name: "Aura Diffuser",
        price: 65.00,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
        description: "Ultrasonic cool-mist diffuser with a natural stone finish and 7 LED color modes."
    },
    {
        id: 18,
        name: "Precision Mechanical Keyboard",
        price: 155.00,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
        description: "Hot-swappable tactile switches with customizable RGB and PBT double-shot keycaps."
    },
    {
        id: 19,
        name: "Bamboo Bath Caddy",
        price: 38.00,
        image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9",
        description: "Water-resistant bamboo tray with holders for a tablet, wine glass, and candle."
    },
    {
        id: 20,
        name: "Slate Peak Backpack",
        price: 110.00,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        description: "Waterproof roll-top backpack with magnetic buckles and 30L capacity."
    },
    {
        id: 21,
        name: "Urban Botanist Terrarium",
        price: 55.00,
        image: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
        description: "Closed glass ecosystem featuring three types of slow-growing moss and ferns."
    },
    {
        id: 24,
        name: "Eclipse Smart Mirror",
        price: 420.00,
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013",
        description: "Wall-mounted mirror with built-in weather display and adjustable ring lighting."
    },
    {
        id: 27,
        name: "Retro Vinyl Player",
        price: 199.00,
        image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617",
        description: "Belt-driven turntable with Bluetooth output and built-in stereo speakers."
    },
    {
        id: 30,
        name: "Terra Yoga Mat",
        price: 78.00,
        image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2",
        description: "Natural tree rubber mat with a non-slip grip even during intense sweat sessions."
    },
    {
        id: 31,
        name: "Canvas Field Jacket",
        price: 145.00,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
        description: "Rugged cotton canvas with a water-resistant wax coating and multiple utility pockets."
    },
    {
        id: 33,
        name: "Modern Copper Kettle",
        price: 88.00,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5",
        description: "Gooseneck spout for precise pouring, finished in a brilliant polished copper."
    },
    {
        id: 34,
        name: "Abstract Canvas Print",
        price: 125.00,
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
        description: "Giclée print on gallery-wrapped canvas featuring vibrant indigo and gold leaf."
    },
    {
        id: 35,
        name: "Velvet Accent Chair",
        price: 299.00,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        description: "Mid-century modern design with gold-finished legs and plush emerald green upholstery."
    },
    {
        id: 36,
        name: "Bluetooth Sleep Headphones",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
        description: "Ultra-thin speakers inside a soft headband for side-sleepers and meditation."
    },
    {
        id: 38,
        name: "Cast Iron Dutch Oven",
        price: 115.00,
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62",
        description: "6-quart enameled cast iron pot with excellent heat retention for slow cooking."
    },
    {
        id: 40,
        name: "Minimalist Table Lamp",
        price: 95.00,
        image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c",
        description: "Brushed nickel finish with a spherical frosted glass globe for soft ambient light."
    },
    {
        id: 43,
        name: "Organic Honey Sampler",
        price: 28.00,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
        description: "Three jars of raw, unpasteurized honey: Wildflower, Lavender, and Buckwheat."
    },
    {
        id: 47,
        name: "Compact Air Fryer",
        price: 89.00,
        image: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1",
        description: "2-quart capacity air fryer that uses 85% less fat than traditional deep frying."
    },
    {
        id: 48,
        name: "Wool Felt Laptop Sleeve",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
        description: "Sustainable wool felt sleeve with a leather clasp for Macbook Pro and Air."
    },
    {
        id: 49,
        name: "Magnetic Dart Board",
        price: 30.00,
        image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d",
        description: "Family-safe dart board with strong magnets and a reversible design."
    },
    {
        id: 50,
        name: "Aroma Coffee Grinder",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62",
        description: "Stainless steel conical burr grinder with 40 grind settings for any brew method."
    },
    {
        id: 51,
        name: "Linen Bedding Set",
        price: 195.00,
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        description: "Pre-washed French flax linen sheets that get softer with every wash."
    },
    {
        id: 52,
        name: "Adjustable Dumbbells",
        price: 320.00,
        image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a",
        description: "All-in-one dumbbell set ranging from 5 to 52.5 lbs with a quick-dial system."
    },
    {
        id: 53,
        name: "Handheld Milk Frother",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980",
        description: "Battery-operated whisk that creates creamy foam for coffee in 15 seconds."
    },
    {
        id: 54,
        name: "Walnut Monitor Stand",
        price: 75.00,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        description: "Solid walnut wood riser to improve posture and clear desk space."
    },
    {
        id: 56,
        name: "Cloud Knit Hoodie",
        price: 85.00,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
        description: "Incredibly soft modal-blend hoodie designed for travel and lounge."
    },
    {
        id: 57,
        name: "Portable Power Station",
        price: 499.00,
        image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a",
        description: "500Wh capacity with AC, DC, and USB ports for off-grid power needs."
    },
    {
        id: 59,
        name: "Gourmet Popcorn Kit",
        price: 42.00,
        image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58",
        description: "Stovetop popper with non-GMO kernels and four savory seasoning blends."
    },
    {
        id: 60,
        name: "E-Ink E-Reader",
        price: 180.00,
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646",
        description: "High-resolution 300ppi display with warm light adjustment and waterproof casing."
    }
];

export function getProducts() {
    return products
}

export function getProductById(id) {
    return products.find((p) => p.id === Number(id))
}
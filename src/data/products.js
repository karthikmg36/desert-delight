import ajwaImg from '../assets/images/ajwa_dates_1763660793815.png';
import medjoolImg from '../assets/images/medjool_dates_1763660802108.png';
import safawiImg from '../assets/images/safawi_dates_1763660810004.png';
import mabroomImg from '../assets/images/mabroom_dates_1763660818282.png';

export const products = [
    {
        id: 1,
        name: 'Ajwa Dates',
        description: 'The "Holy Date" from Medina. Soft, luscious, and rich in nutrients.',
        price: 800.00,
        wholesalePrice: 650.00,
        image: ajwaImg,
        type: 'Ajwa',
        variety: 'Premium Ajwa Al-Madinah',
        origin: 'Medina, Saudi Arabia',
        harvestDate: '2024-09-15',
        expiryDate: '2025-09-15',
        featured: true,
        nutritionalHighlights: ['Rich in antioxidants', 'High in fiber', 'Natural energy source', 'Contains essential minerals'],
        certifications: ['Organic', 'Non-GMO', 'Halal Certified'],
        weight: '500g',
        storageInstructions: 'Store in a cool, dry place. Refrigerate after opening.'
    },
    {
        id: 2,
        name: 'Medjool Dates',
        description: 'The "King of Dates". Large, sweet, and caramel-like texture.',
        price: 850.00,
        wholesalePrice: 700.00,
        image: medjoolImg,
        type: 'Medjool',
        variety: 'Jumbo Medjool Premium',
        origin: 'Jordan Valley',
        harvestDate: '2024-10-01',
        expiryDate: '2025-10-01',
        featured: true,
        nutritionalHighlights: ['Natural sweetness', 'High in potassium', 'Rich in vitamins', 'Energy boosting'],
        certifications: ['Organic', 'Fair Trade', 'Kosher'],
        weight: '500g',
        storageInstructions: 'Keep at room temperature or refrigerate for extended freshness.'
    },
    {
        id: 3,
        name: 'Safawi Dates',
        description: 'Dark, chewy, and intense. Known for their healing properties.',
        price: 400.00,
        wholesalePrice: 300.00,
        image: safawiImg,
        type: 'Safawi',
        variety: 'Premium Safawi',
        origin: 'Al-Madinah, Saudi Arabia',
        harvestDate: '2024-08-20',
        expiryDate: '2025-08-20',
        featured: true,
        nutritionalHighlights: ['Immune boosting', 'Anti-inflammatory', 'Heart healthy', 'Digestive benefits'],
        certifications: ['Organic', 'Halal Certified'],
        weight: '500g',
        storageInstructions: 'Store in airtight container. Best when refrigerated.'
    },
    {
        id: 4,
        name: 'Mabroom Dates',
        description: 'Slender, firm, and pleasantly chewy. A unique treat.',
        price: 590.00,
        wholesalePrice: 480.00,
        image: mabroomImg,
        type: 'Mabroom',
        variety: 'Select Mabroom',
        origin: 'Al-Qassim, Saudi Arabia',
        harvestDate: '2024-09-10',
        expiryDate: '2025-09-10',
        featured: true,
        nutritionalHighlights: ['High in calcium', 'Rich in iron', 'Natural energy', 'Bone health support'],
        certifications: ['Premium Quality', 'Halal Certified'],
        weight: '500g',
        storageInstructions: 'Keep in cool environment. Refrigeration extends shelf life.'
    },
];
//a
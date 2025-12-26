
import { products } from '../src/data/products.js';

console.log(`\n🔍 Starting Image Validation for ${products.length} products...\n`);

const validateImages = async () => {
    let errors = 0;

    for (const product of products) {
        try {
            const response = await fetch(product.image, { method: 'HEAD' });

            if (response.ok) {
                console.log(`✅ [${product.id}] ${product.name}: OK`);
            } else {
                console.error(`❌ [${product.id}] ${product.name}: Broken (Status: ${response.status}) - ${product.image}`);
                errors++;
            }
        } catch (error) {
            console.error(`❌ [${product.id}] ${product.name}: Fetch Error - ${error.message}`);
            errors++;
        }
    }

    console.log(`\n--------------------------------------------------`);
    if (errors === 0) {
        console.log(`🎉 All product images are valid!`);
    } else {
        console.log(`⚠️  Found ${errors} broken images.`);
    }
    console.log(`--------------------------------------------------\n`);
};

validateImages();

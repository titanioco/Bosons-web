import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/ProductCard';
import { DEMO_PRODUCTS, CATEGORIES } from '@/constants/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export default function ProductsSection() {
  const { language } = useLanguage();
  const allLabel = translations.products.all[language];
  const [selectedCategory, setSelectedCategory] = useState<string>(allLabel);

  // Filter products by language: show English versions (-en suffix) when language is 'en', Spanish otherwise
  const languageFilteredProducts = DEMO_PRODUCTS.filter(product => {
    const isEnglishProduct = product.id.endsWith('-en');
    return language === 'en' ? isEnglishProduct : !isEnglishProduct;
  });

  const filteredProducts = selectedCategory === allLabel
    ? languageFilteredProducts 
    : languageFilteredProducts.filter(product => product.category === selectedCategory);

  return (
    <section id="productos" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {translations.products.title[language]}
          </h2>
          <p className="text-lg text-muted-foreground">
            {translations.products.subtitle[language]}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Button
            variant={selectedCategory === allLabel ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(allLabel)}
            className="rounded-full"
          >
            {allLabel}
          </Button>
          {CATEGORIES.map((category) => {
            const translatedCategory = translations.categories[category as keyof typeof translations.categories]?.[language] || category;
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {translatedCategory}
              </Button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            {translations.products.showing[language]} {filteredProducts.length} {translations.products.of[language]} 500+ {translations.products.availableProducts[language]}
          </p>
          <Button size="lg" variant="outline">
            {translations.products.viewFullCatalog[language]}
          </Button>
        </div>
      </div>
    </section>
  );
}

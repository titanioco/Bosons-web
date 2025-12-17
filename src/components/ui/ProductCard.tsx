import { ShoppingCart, CheckCircle, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-card-hover transition-all duration-300 border-border">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button size="sm" variant="secondary" className="gap-2">
            <Eye className="h-4 w-4" />
            Ver
          </Button>
          <Button size="sm" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
            <ShoppingCart className="h-4 w-4" />
            Agregar
          </Button>
        </div>

        {/* Stock Badge */}
        {product.inStock && (
          <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            Disponible
          </Badge>
        )}

        {/* Material Badge */}
        {product.material && (
          <Badge variant="secondary" className="absolute top-3 left-3">
            {product.material}
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <p className="text-xs text-primary font-semibold mb-1">{product.category}</p>
        
        {/* Product Name */}
        <h3 className="font-semibold text-foreground text-base mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Specifications Preview */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mb-4 pb-4 border-b border-border">
            <div className="grid grid-cols-2 gap-2 text-xs">
              {product.specifications.slice(0, 2).map((spec, index) => (
                <div key={index}>
                  <span className="text-muted-foreground">{spec.label}:</span>
                  <span className="ml-1 font-medium text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-foreground">
              {formatPrice(product.price)}
            </p>
            <p className="text-xs text-muted-foreground">IVA incluido</p>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary-600">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

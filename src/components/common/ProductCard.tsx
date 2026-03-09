import type { Product } from "@/types/product";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/ui/Button";

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
  onViewDetails?: () => void;
}

export const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600 ml-1">{product.rating.rate.toFixed(1)}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-600">{product.rating.count} reviews</span>
        </div>
        <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
        <div className="mt-auto flex gap-2">
          {onViewDetails && (
            <Button variant="outline" size="sm" className="flex-1" onClick={onViewDetails}>
              View Details
            </Button>
          )}
          {onAddToCart && (
            <Button variant="primary" size="sm" className="flex-1" onClick={onAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

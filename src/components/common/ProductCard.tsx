import type { Product } from "@/types/product";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/ui/Button";

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
  onViewDetails?: () => void;
}

export const ProductCard = ({
  product,
  onAddToCart,
  onViewDetails,
}: ProductCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
      <div className="relative w-full h-48 sm:h-64 bg-gray-100 flex items-center justify-center p-2 sm:p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-2 sm:p-4 flex flex-col flex-1">
        <div className="mb-1 sm:mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] text-base sm:text-lg">
          {product.title}
        </h3>
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-xs sm:text-sm text-gray-600 ml-1">
              {product.rating.rate.toFixed(1)}
            </span>
          </div>
          <span className="text-gray-400 hidden sm:inline">•</span>
          <span className="text-xs sm:text-sm text-gray-600">
            {product.rating.count} reviews
          </span>
        </div>
        <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-2 sm:mb-4">
          ${product.price.toFixed(2)}
        </p>
        <div className="mt-auto flex flex-col sm:flex-row gap-2">
          {onViewDetails && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={onViewDetails}
            >
              View Details
            </Button>
          )}
          {onAddToCart && (
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={onAddToCart}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

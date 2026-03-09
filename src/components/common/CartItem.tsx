import type { Product } from "@/types/product";
import { Button } from "@/components/common/ui/Button";

interface CartItemProps {
  product: Product;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export const CartItem = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border-b border-gray-200 last:border-b-0">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto object-contain rounded-lg bg-gray-100 mb-2 sm:mb-0"
      />
      <div className="flex-1 min-w-0 w-full">
        <h3 className="font-semibold text-gray-900 truncate text-base sm:text-lg">
          {product.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">{product.category}</p>
        <p className="text-base sm:text-lg font-bold text-blue-600 mt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 w-full sm:w-auto mt-2 sm:mt-0">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onDecrease}
            disabled={quantity <= 1}
            className="w-8 h-8 sm:w-8 sm:h-8"
          >
            -
          </Button>
          <span className="w-8 text-center font-medium text-base">
            {quantity}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={onIncrease}
            className="w-8 h-8 sm:w-8 sm:h-8"
          >
            +
          </Button>
        </div>
        <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
          <p className="text-base sm:text-lg font-bold text-gray-900">
            ${(product.price * quantity).toFixed(2)}
          </p>
          <Button variant="danger" size="sm" onClick={onRemove}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

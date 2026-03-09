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
        className="sm:w-20 sm:h-20 w-full h-auto object-contain rounded-lg bg-gray-100"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-lg font-bold text-blue-600 mt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onDecrease}
          disabled={quantity <= 1}
        >
          -
        </Button>
        <span className="w-8 text-center font-medium">{quantity}</span>
        <Button variant="outline" size="sm" onClick={onIncrease}>
          +
        </Button>
      </div>
      <div className="flex flex-col sm:items-end items-center gap-2">
        <p className="text-lg font-bold text-gray-900">
          ${(product.price * quantity).toFixed(2)}
        </p>
        <Button variant="danger" size="sm" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

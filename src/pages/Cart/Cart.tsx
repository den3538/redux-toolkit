import { useState, useEffect } from "react";
import { Container } from "@/components/common/Container";
import { CartItem } from "@/components/common/CartItem";
import { Button } from "@/components/common/ui/Button";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { useCart } from "@/hooks/useCart";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/store/slices/cartSlice";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";

export const Cart = () => {
  // TODO: Replace with actual cart state from Redux
  // const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [loading] = useState(false);
  const dispatch = useAppDispatch();

  const { cartItems, total } = useCart();

  useEffect(() => {}, []);

  const handleIncrease = (productId: number) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = (productId: number) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleRemove = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  if (loading) {
    return (
      <Container className="py-12">
        <LoadingSpinner size="lg" />
      </Container>
    );
  }

  return (
    <Container className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
        <p className="text-gray-600">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
          <Button variant="primary" as={Link} to={"/"}>
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  product={item}
                  quantity={item.quantity}
                  onIncrease={() => handleIncrease(item.id)}
                  onDecrease={() => handleDecrease(item.id)}
                  onRemove={() => handleRemove(item.id)}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${(total * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button variant="primary" size="lg" className="w-full" disabled>
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

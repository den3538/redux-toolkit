import { useEffect } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/ui/Button';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '@/hooks/useProducts';
import { useAppDispatch } from '@/store/hooks/useAppDispatch';
import { addToCart } from '@/store/slices';
import { fetchProductById } from '@/store/slices/productsSlice';

export const Product = () => {
  const { getById, loading, selectedProduct: product } = useProducts();
  const dispatch = useAppDispatch();

  const { id: productId } = useParams<{ id: string }>();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(parseInt(productId)));
    }
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    if (!productId) {
      return;
    }
    const product = getById(parseInt(productId));
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) {
    return (
      <Container className="py-12">
        <LoadingSpinner size="lg" />
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The product you're looking for doesn't exist.
          </p>
          <Button variant="primary" as={Link} to={'/'}>
            Go Back Home
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wide">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              {product.title}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="text-lg text-gray-700 ml-2 font-semibold">
                  {product.rating.rate.toFixed(1)}
                </span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">
                {product.rating.count} reviews
              </span>
            </div>
            <p className="text-4xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={() => console.log('Buy now')}
              disabled
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

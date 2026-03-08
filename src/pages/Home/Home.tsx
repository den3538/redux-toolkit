import { Container } from '@/components/common/Container';
import { ProductCard } from '@/components/common/ProductCard';
import { addToCart } from '@/store/slices';
import { useProducts } from '@/hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '@/components/common';
import { useAppDispatch } from '@/store/hooks/useAppDispatch';

export const Home = () => {
  const { productsList, getById, loading } = useProducts();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (productId: number) => {
    const product = getById(productId);
    // let's imagine it's sentry or any other logging
    if (!product) {
      return console.error("product wasn't found in the list");
    }
    dispatch(addToCart(product));
  };

  const handleViewDetails = (productId: number) => {
    console.log('View details:', productId);
    navigate(`/product/${productId}`);
  };

  if (loading) {
    return (
      <Container className="py-8">
        <LoadingSpinner size="lg" />
      </Container>
    );
  }

  return (
    <Container className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p className="text-gray-600">
          Discover our amazing collection of products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {!productsList.length && (
          <div className="flex items-center text-white">Empty list</div>
        )}
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product.id)}
            onViewDetails={() => handleViewDetails(product.id)}
          />
        ))}
      </div>
    </Container>
  );
};

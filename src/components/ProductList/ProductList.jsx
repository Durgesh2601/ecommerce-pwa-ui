import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { fetchAllProducts } from '../../api/products';
import Loader from '../Loader/Loader';
import { setProducts } from '../../redux/productsSlice';
import Header from '../Header/Header';

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const products = useSelector((state) => state.products?.products);
  const dispatch = useDispatch();

  const isEmptyList = !products?.length;

  useEffect(() => {
    if (products?.length) return;
    (async function getProducts() {
      try {
        setLoading(true);
        const data = await fetchAllProducts();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Error fetching products:', error);
        dispatch(setProducts([]));
      } finally {
        setLoading(false);
      }
    })();
  }, [products, dispatch]);

  return (
    <main className="flex-grow pt-12 pb-12 p-4">
      {loading ? (
        <Loader />
      ) : products?.length === 0 ? (
        <p className="text-center">No products available.</p>
      ) : (
        <>
          <Header
            content={`All products ${
              !isEmptyList ? `(${products?.length})` : ''
            }`}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default ProductList;

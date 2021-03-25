import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';
import ProductPage from './ProductPage';
import ProductSuccessPage from './ProductSuccessPage';
import ReviewPage from './ReviewPage';
import {
  fetchProduct,
  selectProduct,
  selectProductError,
} from '../state/productSlice';

const ProductSplitViewPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProduct(state, productId));
  const error = useSelector(selectProductError);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (error) {
    return <ErrorPage />;
  }

  if (!product) {
    return <LoadingPage />;
  }

  const { status: productStatus } = product;

  if (productStatus === 'APPROVED') {
    return <ProductSuccessPage />;
  }

  if (productStatus === 'SUBMITTED') {
    return (
      <div className="grid">
        <div className="col-6 border-right">
          <ProductPage />
        </div>
        <div className="col-6">
          <ReviewPage />
        </div>
      </div>
    );
  }

  return <ProductPage />;
}

export default ProductSplitViewPage;

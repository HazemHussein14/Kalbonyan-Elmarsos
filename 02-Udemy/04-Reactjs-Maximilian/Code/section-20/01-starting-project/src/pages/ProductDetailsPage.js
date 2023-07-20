import { Link, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <Link to='..' relative="path">Back</Link>
    </>
  );
};

export default ProductDetailsPage;

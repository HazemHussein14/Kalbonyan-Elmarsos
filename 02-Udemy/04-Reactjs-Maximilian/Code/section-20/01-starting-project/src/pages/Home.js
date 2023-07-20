import { Link,useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate('/products');
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Got to <Link to="/products">the list of products</Link>
      </p>
      <button onClick={navigationHandler}>Navigate</button>
    </>
  );
};

export default HomePage;

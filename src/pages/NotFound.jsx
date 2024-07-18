import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="page-not-found">
      <h1>Oops!</h1>
      <h2>404 - Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, est
        consequuntur rem quaerat animi non repellendus debitis illum ipsum quae,
        optio, voluptatibus itaque commodi illo enim. Temporibus error a
        pariatur?
      </p>
      <Link to="/home">
        <button>Go to Homepage</button>
      </Link>
    </main>
  );
};

export default NotFound;

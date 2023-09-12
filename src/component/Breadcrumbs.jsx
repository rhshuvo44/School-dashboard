import { Link } from "react-router-dom";

const Breadcrumbs = ({ item }) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>

        <li>{item}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;

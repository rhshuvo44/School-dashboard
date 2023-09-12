import { Link } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>

        <li className="text-primary">{title}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;

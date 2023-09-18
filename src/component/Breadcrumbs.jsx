import { Link } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  return (
    <>
      <h2 className="text-2xl font-bold capitalize">{title}</h2>
      <div className="text-sm breadcrumbs mb-5">
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>

          <li className="text-primary capitalize">{title}</li>
        </ul>
      </div>
    </>
  );
};

export default Breadcrumbs;

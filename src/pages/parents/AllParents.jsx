import Breadcrumbs from "../../component/Breadcrumbs";

const AllParents = () => {
  return (
    <div>
      <Breadcrumbs title="All Parents" />
      <div className="bg-base-100 shadow-2xl p-5">
        <h1 className="text-2xl font-bold mb-5">
          All Parents Data
        </h1>
      </div>
    </div>
  );
};

export default AllParents;

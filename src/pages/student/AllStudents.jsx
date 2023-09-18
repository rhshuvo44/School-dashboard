import Breadcrumbs from "../../component/Breadcrumbs";

const AllStudents = () => {
  return (
    <div>
      <Breadcrumbs title="All Students" />
      <div className="bg-base-100 shadow-2xl p-5">
        <h1 className="text-2xl font-bold mb-5">All Students Data</h1>
      </div>
    </div>
  );
};

export default AllStudents;

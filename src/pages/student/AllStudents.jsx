import Breadcrumbs from "../../component/Breadcrumbs";
import DataTable from "../../component/DataTable";

const AllStudents = () => {
  return (
    <div>
      <Breadcrumbs title="All Students" />
      <div className="bg-base-100 shadow-2xl p-5">
        <h1 className="text-2xl font-bold mb-5">All Students Data</h1>
        <DataTable/>
      </div>
    </div>
  );
};

export default AllStudents;

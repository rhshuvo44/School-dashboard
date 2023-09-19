import Breadcrumbs from "../../component/Breadcrumbs";
import DataTable from "../../component/DataTable";
import data from "../../../MOCK_DATA.json";

const columns = [
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Ip Address",
    accessorKey: "ip_address",
  },
];
const AllStudents = () => {
  return (
    <div>
      <Breadcrumbs title="All Students" />
      <div className="bg-base-100 shadow-2xl p-5">
        <h1 className="text-2xl font-bold mb-5">All Students Data</h1>
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
};

export default AllStudents;

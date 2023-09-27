import { useEffect, useState } from "react";
import Breadcrumbs from "../../component/Breadcrumbs";
import DataTable from "../../component/DataTable";

const columns = [
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorFn: (row) => `${row.firstName} ${row.lastlame} ${row.maidenName}`,
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Website",
    accessorKey: "website",
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
];

const AllStudents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);
  return (
    <section>
      <Breadcrumbs title="All Students" />
      {/* <div className="bg-base-100 shadow-2xl p-5">
        <h2 className="text-2xl font-bold mb-5">All Students Data</h2> */}
        <DataTable data={data} columns={columns} />
       
      </section>
    // </div>
  );
};

export default AllStudents;

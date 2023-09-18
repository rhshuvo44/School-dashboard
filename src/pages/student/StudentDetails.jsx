import Breadcrumbs from "../../component/Breadcrumbs";
import UserDatails from "../../component/UserDatails";

const StudentDetails = () => {
  return (
    <div>
      <Breadcrumbs title="Student Details" />
      <div className="bg-base-100 shadow-2xl p-5">
        <h1 className="text-2xl font-bold text-center mb-5">About Me</h1>
        <UserDatails />
      </div>
    </div>
  );
};

export default StudentDetails;

import { useFormik } from "formik";
import * as yup from "yup";
import InputText from "../../component/InputText";
import Breadcrumbs from "../../component/Breadcrumbs";

let schema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  gender: yup.string().required("Gender is Required"),
  dob: yup.string().required("Date of Birth is Required"),
  roll: yup.string().required("Roll is Required"),
  blood: yup.string().required("Blood Group is Required"),
  religion: yup.string().required("Religion is Required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is Required"),
});
const AdmissionForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      roll: "",
      blood: "",
      religion: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });
  return (
    <div>
      <Breadcrumbs title="Student Admit Form" />
      <div className="bg-base-100 shadow-2xl p-5">
        <h2 className="text-2xl font-bold mb-5">Add New Students</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div>
              <InputText
                id="firstName"
                name="firstName"
                label="First Name"
                placeholder="Enter Your First Name"
                type="text"
                classname="focus:outline-0 bg-[#F0F1F3]"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-error text-sm">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div>
              <InputText
                id="lastName"
                label="Last Name"
                name="lastName"
                placeholder="Enter Your Last Name"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-error text-sm">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <InputText
                id="lastName"
                name="lastName"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </div>
            <div>
              <InputText
                id="lastName"
                name="lastName"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;

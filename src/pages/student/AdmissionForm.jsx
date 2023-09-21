import { useFormik } from "formik";
import * as yup from "yup";
import InputText from "../../component/InputText";
import Breadcrumbs from "../../component/Breadcrumbs";
import InputTextarea from "../../component/InputTextarea";

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
  class: yup.string().required("Class is Required"),
  section: yup.string().required("Section is Required"),
  admissionID: yup.string().required("Admission ID is Required"),
  phone: yup.string().required("Phone Number is Required"),
  shortBIO: yup.string().required("Short BIO is Required"),
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
      class: "",
      section: "",
      admissionID: "",
      phone: "",
      shortBIO: "",
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
                placeholder="Enter First Name"
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
                placeholder="Enter Last Name"
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
            <div>
              <InputText
                id="roll"
                label="Roll"
                name="roll"
                placeholder="Enter Roll"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.roll}
              />
              {formik.touched.roll && formik.errors.roll ? (
                <div className="text-error text-sm">{formik.errors.roll}</div>
              ) : null}
            </div>
            <div>
              <InputText
                id="email"
                label="Email"
                name="email"
                placeholder="Enter Email"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-error text-sm">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <InputText
                id="admissionID"
                label="Admission ID"
                name="admissionID"
                placeholder="Enter admission ID"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.admissionID}
              />
              {formik.touched.admissionID && formik.errors.admissionID ? (
                <div className="text-error text-sm">
                  {formik.errors.admissionID}
                </div>
              ) : null}
            </div>
            <div>
              <InputText
                id="phone"
                label="Phone"
                name="phone"
                placeholder="Enter Phone"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="tel"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-error text-sm">{formik.errors.phone}</div>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <InputTextarea
                id="shortBIO"
                label="Short BIO"
                name="shortBIO"
                placeholder="Enter Short BIO"
                classname="focus:outline-0 bg-[#F0F1F3]"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.shortBIO}
              />
              {formik.touched.shortBIO && formik.errors.shortBIO ? (
                <div className="text-error text-sm">
                  {formik.errors.shortBIO}
                </div>
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

          <button className="btn-common" type="submit">
            save
            <span></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;

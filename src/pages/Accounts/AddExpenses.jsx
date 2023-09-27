import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import * as yup from "yup";
import Breadcrumbs from "../../component/Breadcrumbs";
import FormLabe from "../../component/Form/FormLabe";
import InputText from "../../component/Form/InputText";
import InputTextarea from "../../component/Form/InputTextarea";
import Inputselect from "../../component/Form/Inputselect";
import { bloods, classes, ganders, religions, sections } from "../../services";
import SubmitBtn from "../../utils/SubmitBtn";
let schema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  gander: yup.string().required("Gender is Required"),
  dob: yup.string().required("Date of Birth is Required"),
  idNo: yup.string().required("ID No is Required"),
  blood: yup.string().required("Blood Group is Required"),
  religion: yup.string().required("Religion is Required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is Required"),
  class: yup.string().required("Class is Required"),
  section: yup.string().required("Section is Required"),
  address: yup.string().required("Address ID is Required"),
  phone: yup.string().required("Phone Number is Required"),
  shortBIO: yup.string().required("Short BIO is Required"),
  // img: yup.string().required("Image is Required"),
});

const AddExpenses = () => {
  const [gander, setGander] = useState("");
  const [blood, setBlood] = useState("");
  const [religion, setReligion] = useState("");
  const [StudentClass, setStudentClass] = useState("");
  const [section, setSection] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gander: "",
      dob: "",
      idNo: "",
      blood: "",
      religion: "",
      email: "",
      class: "",
      section: "",
      address: "",
      phone: "",
      shortBIO: "",
      img: [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      formik.resetForm();
    },
  });
  useEffect(() => {
    formik.values.gander = gander ? gander : "";
    formik.values.blood = blood ? blood : "";
    formik.values.religion = religion ? religion : "";
    formik.values.class = StudentClass ? StudentClass : "";
    formik.values.section = section ? section : "";
    formik.values.img = uploadedFiles ? uploadedFiles : "";
  }, [
    formik.values,
    gander,
    blood,
    religion,
    StudentClass,
    section,
    uploadedFiles,
  ]);
  return (
    <section>
      <Breadcrumbs title="Add New Teacher" />
      <div className="bg-base-100 shadow-2xl p-5">
        <h2 className="text-2xl font-bold mb-5">Add New Teacher</h2>
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
              <Inputselect
                label="gander"
                onChange={(e) => setGander(e.value)}
                options={ganders}
                placeholder="Select Gander"
                id="gander"
                name="gander"
              ></Inputselect>
              {formik.touched.gander && formik.errors.gander ? (
                <div className="text-error text-sm">{formik.errors.gander}</div>
              ) : null}
            </div>
            <div>
              <InputText
                id="dob"
                label="Date of Birth"
                name="dob"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="date"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.dob}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <div className="text-error text-sm">{formik.errors.dob}</div>
              ) : null}
            </div>
            <div>
              <InputText
                id="idNo"
                label="ID No"
                name="idNo"
                placeholder="Enter ID No"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.idNo}
              />
              {formik.touched.idNo && formik.errors.idNo ? (
                <div className="text-error text-sm">{formik.errors.idNo}</div>
              ) : null}
            </div>
            <div>
              <Inputselect
                label="Blood Group "
                onChange={(e) => setBlood(e.value)}
                options={bloods}
                placeholder="Please Select Blood"
                id="blood"
                name="blood"
              ></Inputselect>
              {formik.touched.blood && formik.errors.blood ? (
                <div className="text-error text-sm">{formik.errors.blood}</div>
              ) : null}
            </div>
            <div>
              <Inputselect
                label="Religion"
                onChange={(e) => setReligion(e.value)}
                options={religions}
                placeholder="Please Select Religion "
                id="religion"
                name="religion"
              ></Inputselect>
              {formik.touched.religion && formik.errors.religion ? (
                <div className="text-error text-sm">
                  {formik.errors.religion}
                </div>
              ) : null}
            </div>
            <div>
              <InputText
                id="email"
                label="E-mail"
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
              <Inputselect
                label="Class"
                onChange={(e) => setStudentClass(e.value)}
                options={classes}
                placeholder="Please Select Class"
                id="class"
                name="class"
              />
              {formik.touched.class && formik.errors.class ? (
                <div className="text-error text-sm">{formik.errors.class}</div>
              ) : null}
            </div>
            <div>
              <Inputselect
                label="Section"
                onChange={(e) => setSection(e.value)}
                options={sections}
                placeholder="Please Select Section "
                id="section"
                name="section"
              ></Inputselect>
              {formik.touched.section && formik.errors.section ? (
                <div className="text-error text-sm">
                  {formik.errors.section}
                </div>
              ) : null}
            </div>
            <div>
              <InputText
                id="address"
                label="Address "
                name="address"
                placeholder="Enter Address"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-error text-sm">
                  {formik.errors.address}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
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
              <FormLabe id="img" label="Upload Student Photo (150px X 150px)" />
              <Dropzone
                onDrop={(acceptedFiles) => setUploadedFiles(acceptedFiles)}
              >
                {({ getRootProps, getInputProps }) => (
                  <section className="file-input">
                    <div {...getRootProps()}>
                      <input
                        {...getInputProps()}
                        id="img"
                        name="img"
                        className="input-file"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                        className="icon"
                      >
                        <polyline points="16 16 12 12 8 16"></polyline>
                        <line y2="21" x2="12" y1="12" x1="12"></line>
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                        <polyline points="16 16 12 12 8 16"></polyline>
                      </svg>
                    </div>
                  </section>
                )}
              </Dropzone>

              {formik.touched.img && formik.errors.img ? (
                <div className="text-error text-sm">{formik.errors.img}</div>
              ) : null}

              <div>
                {uploadedFiles.map((file) => (
                  <>
                    <div className="avatar mt-2" key={file.name}>
                      <div className="w-24 rounded">
                        <img src="https://i.ibb.co/c3BmNsD/DSC-0814.jpg" />
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-10">
            <SubmitBtn type="submit">Save</SubmitBtn>
            <SubmitBtn
              type="reset"
              className=" from-pink-500 to-yellow-500  hover:from-green-400 hover:to-blue-500 "
            >
              Reset
            </SubmitBtn>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddExpenses;

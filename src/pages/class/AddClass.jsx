import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import Breadcrumbs from "../../component/Breadcrumbs";
import InputText from "../../component/Form/InputText";
import Inputselect from "../../component/Form/Inputselect";
import { classes, ganders, sections, subjects } from "../../services";
import SubmitBtn from "../../utils/SubmitBtn";
let schema = yup.object().shape({
  teacherName: yup.string().required("First Name is Required"),
  gander: yup.string().required("Gender is Required"),
  date: yup.string().required("Dateis Required"),
  idNo: yup.string().required("ID No is Required"),
  subject: yup.string().required("Subject is Required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is Required"),
  class: yup.string().required("Class is Required"),
  section: yup.string().required("Section is Required"),
  time: yup.string().required("Time is Required"),
  phone: yup.string().required("Phone Number is Required"),
});

const AddClass = () => {
  const [gander, setGander] = useState("");
  const [subject, setSubject] = useState("");
  const [StudentClass, setStudentClass] = useState("");
  const [section, setSection] = useState("");

  const formik = useFormik({
    initialValues: {
      teacherName: "",
      gander: "",
      date: "",
      idNo: "",
      time: "",
      email: "",
      class: "",
      section: "",
      subject: "",
      phone: "",
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
    formik.values.subject = subject ? subject : "";
    formik.values.class = StudentClass ? StudentClass : "";
    formik.values.section = section ? section : "";
  }, [formik.values, gander, subject, StudentClass, section]);
  return (
    <section>
      <Breadcrumbs title="Add New Class" />
      <div className="bg-base-100 shadow-2xl p-5">
        <h2 className="text-2xl font-bold mb-5">Add New Class Schedule</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div>
              <InputText
                id="teacherName"
                name="teacherName"
                label="Teacher Name"
                placeholder="Enter Teacher Name"
                type="text"
                classname="focus:outline-0 bg-[#F0F1F3]"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.teacherName}
              />
              {formik.touched.teacherName && formik.errors.teacherName ? (
                <div className="text-error text-sm">
                  {formik.errors.teacherName}
                </div>
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
                label="Subject"
                onChange={(e) => setSubject(e.value)}
                options={subjects}
                placeholder="Please Select Subject"
                id="subject"
                name="subject"
              ></Inputselect>
              {formik.touched.subject && formik.errors.subject ? (
                <div className="text-error text-sm">
                  {formik.errors.subject}
                </div>
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
                id="time"
                label="Time "
                name="time"
                placeholder="Enter Time"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.time}
              />
              {formik.touched.time && formik.errors.time ? (
                <div className="text-error text-sm">{formik.errors.time}</div>
              ) : null}
            </div>
            <div>
              <InputText
                id="date"
                label="Date"
                name="date"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="date"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.date}
              />
              {formik.touched.date && formik.errors.date ? (
                <div className="text-error text-sm">{formik.errors.date}</div>
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

export default AddClass;

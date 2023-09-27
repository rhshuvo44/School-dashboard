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
  bookName: yup.string().required("Book Name is Required"),
  subject: yup.string().required("Subject is Required"),
  writterName: yup.string().required("Writter Name is Required"),
  idNo: yup.string().required("ID No is Required"),
  publishing: yup.string().required("Publishing Date is Required"),
  update: yup.string().required("Update Date is Required"),
  class: yup.string().required("Class is Required"),
});

const AddBook = () => {
  const [StudentClass, setStudentClass] = useState("");

  const formik = useFormik({
    initialValues: {
      bookName: "",
      subject: "",
      writterName: "",
      class: "",
      idNo: "",
      publishing: "",
      update: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      formik.resetForm();
    },
  });
  useEffect(() => {
    formik.values.class = StudentClass ? StudentClass : "";
  }, [formik.values, StudentClass]);
  return (
    <section>
      <Breadcrumbs title="Add New Book" />
      <div className="bg-base-100 shadow-2xl p-5">
        <h2 className="text-2xl font-bold mb-5">Add New Book</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div>
              <InputText
                id="bookName"
                name="bookName"
                label="Book Name"
                placeholder="Enter Book Name"
                type="text"
                classname="focus:outline-0 bg-[#F0F1F3]"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.bookName}
              />
              {formik.touched.bookName && formik.errors.bookName ? (
                <div className="text-error text-sm">
                  {formik.errors.bookName}
                </div>
              ) : null}
            </div>
            <div>
              <InputText
                id="subject"
                label="Subject"
                name="subject"
                placeholder="Enter Subject"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.subject}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="text-error text-sm">
                  {formik.errors.subject}
                </div>
              ) : null}
            </div>
            <div>
              <InputText
                id="writterName"
                label="Writter Name"
                name="writterName"
                placeholder="Enter Writter Name"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.writterName}
              />
              {formik.touched.writterName && formik.errors.writterName ? (
                <div className="text-error text-sm">
                  {formik.errors.writterName}
                </div>
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
              <InputText
                id="publishing"
                label="Publishing Date"
                name="publishing"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="date"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.publishing}
              />
              {formik.touched.publishing && formik.errors.publishing ? (
                <div className="text-error text-sm">
                  {formik.errors.publishing}
                </div>
              ) : null}
            </div>
            <div>
              <InputText
                id="update"
                label="Update Date"
                name="update"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="date"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.update}
              />
              {formik.touched.update && formik.errors.update ? (
                <div className="text-error text-sm">{formik.errors.update}</div>
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

export default AddBook;

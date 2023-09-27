import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import Breadcrumbs from "../../component/Breadcrumbs";
import InputText from "../../component/Form/InputText";
import Inputselect from "../../component/Form/Inputselect";
import {
    expenses,
    statuss
} from "../../services";
import SubmitBtn from "../../utils/SubmitBtn";
let schema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  expense: yup.string().required("Expense is Required"),
  date: yup.string().required("Date is Required"),
  idNo: yup.string().required("ID No is Required"),
  status: yup.string().required("status is Required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is Required"),
  amount: yup.string().required("amount is Required"),
  phone: yup.string().required("Phone Number is Required"),
});

const AddExpenses = () => {
  const [expense, setExpense] = useState("");
  const [status, setStatus] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      expense: "",
      date: "",
      idNo: "",
      amount: "",
      email: "",
      phone: "",
      status: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      formik.resetForm();
    },
  });
  useEffect(() => {
    formik.values.expense = expense ? expense : "";
    formik.values.status = status ? status : "";
  }, [formik.values, expense, status]);
  return (
    <section>
      <Breadcrumbs title="Add New Expense" />
      <div className="bg-base-100 shadow-2xl p-5">
        <h2 className="text-2xl font-bold mb-5">Add New Expense</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div>
              <InputText
                id="name"
                name="name"
                label="Name"
                placeholder="Enter Name"
                type="text"
                classname="focus:outline-0 bg-[#F0F1F3]"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-error text-sm">{formik.errors.name}</div>
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
                label="Expense Type"
                onChange={(e) => setExpense(e.value)}
                options={expenses}
                placeholder="Select Expense"
                id="expense"
                name="expense"
              ></Inputselect>
              {formik.touched.expense && formik.errors.expense ? (
                <div className="text-error text-sm">
                  {formik.errors.expense}
                </div>
              ) : null}
            </div>

            <div>
              <InputText
                id="amount"
                label="Amount"
                name="amount"
                placeholder="Enter Amount"
                classname="focus:outline-0 bg-[#F0F1F3]"
                type="text"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                value={formik.values.amount}
              />
              {formik.touched.amount && formik.errors.amount ? (
                <div className="text-error text-sm">{formik.errors.amount}</div>
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
                label="status"
                onChange={(e) => setStatus(e.value)}
                options={statuss}
                placeholder="Please Select status "
                id="status"
                name="status"
              ></Inputselect>
              {formik.touched.status && formik.errors.status ? (
                <div className="text-error text-sm">{formik.errors.status}</div>
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

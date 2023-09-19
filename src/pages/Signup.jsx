import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).max(32).required("Password is required"),
});
import signupImg from "../assets/signup-animate.svg";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard/admin");
    toast.success("Login Success");
  };
  return (
    <div className="hero min-h-screen bg-primary">
      <div className="hero-content w-full flex-col lg:flex-row">
        <div className="w-full md:w-1/2">
          <img className="w-full h-full" src={signupImg} alt="" />
        </div>
        <div className="card w-full md:w-1/2 shadow-2xl bg-base-100 max-w-md">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
              <div className="form-control w-full mt-5">
                <label
                  htmlFor="email"
                  className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                >
                  Email
                </label>
                <div className="relative flex items-center my-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                    className="peer relative h-10 w-full rounded-md bg-gray-50 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                  />
                  <AiFillMail className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400" />
                </div>
              </div>
              <p className="text-xs text-error">{errors.email?.message}</p>
              <div className="form-control w-full mt-5">
                <label
                  htmlFor="password"
                  className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                >
                  Password
                </label>
                <div className="relative flex items-center my-2">
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                    className="peer relative h-10 w-full rounded-md bg-gray-50 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                  />
                  <RiLockPasswordLine className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400" />
                </div>
              </div>
              <p className="text-xs text-error">{errors.password?.message}</p>
              <div className="flex flex-col md:flex-row justify-between my-2 gap-5">
                <Link className="capitalize underline" to="/login">
                  Already Have a Account
                </Link>
              </div>
              <button
                type="submit"
                className="btn btn-block mt-5 bg-primary capitalize text-white hover:bg-secondary"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

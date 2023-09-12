import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="hero min-h-screen bg-primary">
      <div className="hero-content text-neutral-content">
        <div className="max-w-md">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body ">
              <h2 className="text-secondary text-center font-3xl font-bold">
                Login
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                <div className="form-control w-full max-w-xs mt-5">
                  <label
                    htmlFor="email"
                    className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                  >
                    Email
                  </label>
                  <div className="relative flex items-center">
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

                {errors.email && (
                  <span className="text-xs text-error">
                    This field is required
                  </span>
                )}
                <div className="form-control w-full max-w-xs mt-5">
                  <label
                    htmlFor="email"
                    className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                  >
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="email"
                      type="password"
                      placeholder="Password"
                      {...register("password", { required: true })}
                      className="peer relative h-10 w-full rounded-md bg-gray-50 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                    />
                    <RiLockPasswordLine className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400" />
                  </div>
                </div>
                {errors.password && (
                  <span className="text-error text-xs">
                    This field is required
                  </span>
                )}

                <div className="flex flex-col md:flex-row justify-between my-2 gap-5">
                  <Link className="capitalize underline" to="/">
                    create new Account
                  </Link>
                  <Link className="text-error capitalize" to="forgot-password">
                    Forgot Password?
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
    </div>
  );
};

export default Login;

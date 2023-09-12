import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="hero min-h-screen bg-primary">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body  text-center">
              <h2 className="text-secondary font-3xl font-bold">Login</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email && <span>This field is required</span>}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", { required: true })}
                  />
                </div>
                {errors.password && <span>This field is required</span>}
                <div className="flex flex-col md:flex-row justify-between mt-2 ">
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

import { useForm } from "react-hook-form";
import { RiLockPasswordLine } from "react-icons/ri";

const Resetpassword = () => {
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
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body  ">
              <h2 className="text-secondary text-center font-3xl font-bold">
                Reset Password
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                <div className="form-control w-full max-w-xs mb-5">
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
                  <span className="my-2 text-error">
                    This field is required
                  </span>
                )}

                <button
                  type="submit"
                  className="btn btn-block mt-5 bg-primary capitalize text-white hover:bg-secondary"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;

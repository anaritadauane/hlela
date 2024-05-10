import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLogin } from "./useLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginMutation, { data }] = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await loginMutation.mutateAsync({ email, password });
      console.log({ data: response.data });
      // redirects to the home page only visible to the user logged in
      console.log({ data: response.data });
      navigate("/home", { state: { ...data, data: response.data } });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <Header />

      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='card w-full lg:w-96 max-w-sm shadow-2xl shadow-orange-300/40 bg-base-100'>
            <form
              onSubmit={handleSubmit}
              className='card-body items-center text-center'
            >
              <h2 className='card-title'>Login</h2>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>{" "}
                <input
                  type='email'
                  placeholder='Email'
                  className='input input-bordered border-orange w-full lg:w-96 max-w-xs rounded-full'
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>

                <input
                  type='current-password'
                  id='current-password'
                  placeholder='Password'
                  className='input input-bordered w-full lg:w-96 max-w-xs rounded-full'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <div className='flex justify-between'>
                  <label className='label cursor-pointer'>
                    <input
                      type='checkbox'
                      defaultChecked
                      className='checkbox checkbox-xs'
                    />
                    <span className='label-text text-xs pl-2'>Remember me</span>
                  </label>
                  <label className='label'>
                    <a href='#' className='label-text-alt link link-hover'>
                      Forgot password?
                    </a>
                  </label>
                </div>
              </div>
              {error ? <p>{error}</p> : null}
              <div className='form-control mt-6'>
                <button type='submit' className='btn btn-wide rounded-full'>
                  Login
                </button>
                <br />
                <p className='text-xs'>
                  Don't have an account?
                  <a className='link link-hover'>Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;

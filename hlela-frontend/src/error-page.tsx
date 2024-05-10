import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='font-bold'>Uups!</h1>

          <p>Sorry, an unexpected error has occurred.</p>
          {
            <i className='font-bold'>
              {isRouteErrorResponse(error)
                ? error.status + " | " + error.statusText
                : "Unknown error message"}
            </i>
          }
          <br />
          <br />
          <button
            className='btn btn-secondary rounded-full'
            onClick={() => navigate("/")}
          >
            Go back home
          </button>
        </div>
      </div>
    </div>
  );
}

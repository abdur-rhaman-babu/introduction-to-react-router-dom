import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="font-bold text-5xl">Oops!!!</h1> 
            {
                error.status === 404 && <div>
                    <h1 className="font-bold text-5xl">Data not found: {error.status}</h1>
                </div>
            }
            <Link to = '/'><button>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;
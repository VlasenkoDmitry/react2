import { useRouteError } from "react-router-dom"

interface RouteError {
    status?: number;
    statusText?: string;
    message?: string;
}

export default function ErrorPage() {

    const error = useRouteError() as RouteError; 


    return(
        <>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.statusText || error.message}</p>
        </>
    )
}
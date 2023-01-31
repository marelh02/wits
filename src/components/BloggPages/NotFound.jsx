import { useRouteError } from "react-router-dom";
export default function NotFound() {
    const error = useRouteError();
  console.error(error);
    return <>
        <h1>Oops! an error occured</h1>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </>;
}
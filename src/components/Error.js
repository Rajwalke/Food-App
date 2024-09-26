import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>someting went wrong</h1>
        </div>
    )
}
export default Error;
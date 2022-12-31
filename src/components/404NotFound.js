import { Link } from "react-router-dom";

export default function NotFound (){
    return (
        <div >
         <div >
            <h2>
               404
            </h2>
            <h4 >
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
            <div>
               <Link to="/">return home</Link>
            </div>
         </div>
      </div>
    )
}
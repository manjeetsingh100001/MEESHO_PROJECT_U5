import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Otp } from "../Signup/Otp";
import NavBar from "../Components/NavBar/Navbar.module";
import { SignUp } from "../Signup/SignUp";


const newHistory = createBrowserHistory();
const AllRoutes = ()=>{
    return (
        <>
                <Switch>
                    <Route exact path="/">
                        <NavBar />
                        {/* <Home/> */}
                    </Route>

                    <Route exact={true} path="/signup">
                        <SignUp />
                    </Route>
                    <Route exact={true} path="/otp">
                        <Otp />
                    </Route>
                    
                 
                </Switch>
        </>
    )
}
export default AllRoutes
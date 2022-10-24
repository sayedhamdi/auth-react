import { Route ,Routes} from "react-router-dom";
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Register from "./pages/Register";

export default function MainRouter(){



    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/profile" element={<Profile />} />

        </Routes>
    )
}
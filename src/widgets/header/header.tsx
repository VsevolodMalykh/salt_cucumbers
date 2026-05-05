import { Link } from "react-router"

export const Header = () => {
    return (
        <nav>
            <Link to={"/bookings"}>Booking</Link>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/reviews"}>Reviews</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/spaces"}>Spaces</Link>
        </nav>
    )
}
import { Link } from "react-router"
import styles from './header.module.css'

export const Header = () => {
    return (
        <nav className={styles.nav}>
            <Link to={"/"}>Home</Link>
            <Link to={"/bookings"}>Booking</Link>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/reviews"}>Reviews</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/spaces"}>Spaces</Link>
        </nav>
    )
}
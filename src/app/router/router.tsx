import { createBrowserRouter } from "react-router";
import { Layout } from "../layout/layout";
import { HomePage } from "../../pages/home/home-page";
import { RegPage } from "../../pages/user/reg-page";
import { LoginPage } from "../../pages/user/login-page";
import { SpacesPage } from "../../pages/space/spaces-page";
import { ReviewsPage } from "../../pages/reviews/reviews-page";
import { BookingPage } from "../../pages/booking/booking-page";
import { DetailBookingPage } from "../../pages/booking/detail-booking-page";
import { DetailReviewsPage } from "../../pages/reviews/detail-reviews-page";
import { DetailSpacesPage } from "../../pages/space/detail-spaces-page";
import { ProfilePage } from "../../pages/user/profile-page";
import { NotFoundPage } from "../../pages/error/not-found-page";

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/register",
            element: <RegPage />
        },
        {
            path: "/login",
            element: <LoginPage />
        },
        {
            path: "/spaces",
            element: <SpacesPage />
        },
        {
            path: "/reviews",
            element: <ReviewsPage />
        },
        {
            path: "/bookings",
            element: <BookingPage />
        },
        {
            path: "/bookings/:id",
            element: <DetailBookingPage />
        },
        {
            path: "/reviews/:id",
            element: <DetailReviewsPage />
        },
        {
            path: "/spaces/:id",
            element: <DetailSpacesPage />
        },
        {
            path: "/profile",
            element: <ProfilePage />
        },
        {
            path: "*",
            element: <NotFoundPage />
        },
    ]
}])
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
import GuardPage from "../../pages/guard/guard-page";

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <GuardPage>
                <HomePage />
            </GuardPage>
        },
        {
            path: "/register",
            element: <GuardPage>
                <RegPage />
            </GuardPage>
        },
        {
            path: "/login",
            element: <GuardPage>
                <LoginPage />
            </GuardPage>
        },
        {
            path: "/spaces",
            element: <GuardPage>
                <SpacesPage />
            </GuardPage>
        },
        {
            path: "/reviews",
            element: <GuardPage approveRoles={["manager", "admin"]}>
                <ReviewsPage />
            </GuardPage>
        },
        {
            path: "/bookings",
            element: <GuardPage>
                <BookingPage />
            </GuardPage>
        },
        {
            path: "/bookings/:id",
            element: <GuardPage approveRoles={["manager", "admin"]}>
                <DetailBookingPage />
            </GuardPage>
        },
        {
            path: "/reviews/:id",
            element: <GuardPage>
                <DetailReviewsPage />
            </GuardPage>
        },
        {
            path: "/spaces/:id",
            element: <GuardPage>
                <DetailSpacesPage />
            </GuardPage>
        },
        {
            path: "/profile",
            element: <GuardPage approveRoles={["client", "manager", "admin"]}>
                <ProfilePage />
            </GuardPage>
        },
        {
            path: "*",
            element: <GuardPage>
                <NotFoundPage />
            </GuardPage>
        },
    ]
}])
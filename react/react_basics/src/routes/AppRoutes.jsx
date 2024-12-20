import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import AboutPage from "../pages/AboutPage";
import DashboardPage, {
    DashboardMessages,
    DashboardTasks,
} from "../pages/DashboardPage";
import Homepage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import PostPage, { Post, PostList } from "../pages/PostPage";
import ProtectedRoute from "./ProtectedRoutes";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<Homepage {...props} />} />
            <Route path="login" element={<LoginForm {...props} />} />
            {/* nested routes, will match on /dash/tasks */}
            {/* /dash */}
            <Route
                path="dash"
                element={
                    <ProtectedRoute>
                        <DashboardPage {...props} />
                    </ProtectedRoute>
                }
            >
                {/* /dash/messages */}
                <Route
                    path="messages"
                    element={<DashboardMessages {...props} />}
                />
                {/* /dash/tasks */}
                <Route path="tasks" element={<DashboardTasks {...props} />} />
            </Route>

            <Route path="/about" element={<AboutPage {...props} />} />

            <Route path="/posts" element={<PostPage {...props} />}>
                <Route index element={<PostList />} />
                {/* dynamic param taken from route, stored in variable called id */}
                <Route path=":id" element={<Post />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRoutes;

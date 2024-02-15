import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  AdminDashboard,
  UsersTable,
  PostsTable,
  CategoriesTable,
  CommentsTable,
  ForgotPassword,
  Login,
  ResetPassword,
  Signup,
  Landing,
  Posts,
  Category,
  PostDetails,
  CreatePost,
  Profile,
  VerifyEmail,
  NotFound,
  Contact,
  Favorite,
} from "./pages";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./hocs/Layout";
import { useSelector } from "react-redux";

export default function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Router>
      <ToastContainer theme="colored" position="top-center" />
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/users/:userId/verify/:token"
            element={!user ? <VerifyEmail /> : <Navigate to="/" />}
          />
          <Route
            path="/reset-password/:userId/:token"
            element={<ResetPassword />}
          />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="posts">
            <Route index element={<Posts />} />
            <Route
              path="favorite-posts"
              element={user ? <Favorite /> : <Navigate to="/" />}
            />
            <Route path="details/:id" element={<PostDetails />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="categories/:category" element={<Category />} />
          </Route>
          <Route path="admin-dashboard">
            <Route
              index
              element={user?.isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
            />
            <Route
              path="users-table"
              element={user?.isAdmin ? <UsersTable /> : <Navigate to="/" />}
            />
            <Route
              path="posts-table"
              element={user?.isAdmin ? <PostsTable /> : <Navigate to="/" />}
            />
            <Route
              path="categories-table"
              element={
                user?.isAdmin ? <CategoriesTable /> : <Navigate to="/" />
              }
            />
            <Route
              path="comments-table"
              element={user?.isAdmin ? <CommentsTable /> : <Navigate to="/" />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

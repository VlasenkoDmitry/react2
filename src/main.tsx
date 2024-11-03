import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from "./routes/Dashboard/Dashboard.tsx"
import Posts from "./routes/Posts/Posts.tsx"
import Users from "./routes/Users/Users.tsx"
import User from "./routes/User/User.tsx"
import Home from "./routes/Home/Home.tsx"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/Layout/Layout.tsx'
import ErrorPage from './routes/Error/ErrorPage.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="posts" element={<Posts />} />
      <Route path="users" element={<Users />} />
      <Route path="user/:userId" element={<User />} />
  </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

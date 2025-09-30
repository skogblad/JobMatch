import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home/Home";
import { JobInfo } from "./pages/JobInfo/JobInfo";
import { JobList } from "./pages/ListPage/JobList";
import { NoJobsFound } from "./components/noJobsFound/NoJobsFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <JobList />,
      },
      {
        path: "/jobs/:id",
        element: <JobInfo />,
      },
      {
        path: "/no-jobs-found",
        element: <NoJobsFound />,
      },
    ],
  },
], {
  basename: import.meta.env.DEV ? "" : "JobMatch",
});

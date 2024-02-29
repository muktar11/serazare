import { RouteObject } from "react-router";
import Layout from "../layout";
import Home from "../pages/Home";
import SingleJob from "../pages/SingleJob";
import Search from "../Apps";
import RegistrationForm from "../Registration Form";
const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				children: [
					{
						path: "",
						element: <Home />,
					},
					{
						path: "/jobs/:jobId",
						element: <SingleJob />,
					},
					{
						path: "/jobs/search",
						element: <Search />,
					},
					{
						path: "/register",
						element: <RegistrationForm />,
					},
				],
			},
		],
	},
];

export default routes;

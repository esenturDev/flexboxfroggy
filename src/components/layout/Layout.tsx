import Home from "../pages/Home";
import Footer from "./footer/Footer";
import { Header } from "./header/Header";
import scss from "./Layout.module.scss";
export const Layout = () => {
	return (
		<div className={scss.layout}>
			<Header />
			<main>
				<Home />
			</main>
			<Footer />
		</div>
	);
};

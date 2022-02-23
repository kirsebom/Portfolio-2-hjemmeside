import "./sass/style.scss";

import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";

function App() {
	return (
		<>
			<Header />
			<HomeSection />
			<AboutSection />
			<WorkSection />
			<ContactSection />
		</>
	);
}

export default App;

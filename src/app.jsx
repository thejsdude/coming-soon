import "./app.css";
import BodyContent from "./components/BodyContent";
import Header from "./components/Header";
import Services from "./components/Services";

import TimeCount from "./components/TimeCount";

export function App() {
  return (
    <div className="bg-[url('./assets/Hero.png')] bg-[#111121] bg-no-repeat bg-contain bg-center py-4 ">
      <Header />
      <BodyContent />
      <TimeCount />
      <Services />
    </div>
  );
}

import NavBar from "../NavBar";
import NavWrapper from "../NavWrapper";
import Fields from "./Fields.jsx";
import WorkFlow from "./WorkFlow.jsx";

const Home = () => {
  return (
    <div className="max-h-full home">
      <NavWrapper />
      <Fields />
      <WorkFlow />
    </div>
  );
};

export default Home;

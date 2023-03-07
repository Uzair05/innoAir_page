import DisplayBoard from "./Components/DisplayBoard/DisplayBoard";
import Header from "./Components/Header/Header";
import AppBarComponent from "../../Components/AppBarComponent";

export default function Dashboard() {
  return (
    <div>
      <AppBarComponent />
      <Header />
      <DisplayBoard />
    </div>
  );
}

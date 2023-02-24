import Header from "./components/Header";
import MainContent from "./components/MainContent";
import MainVisual from "./components/MainVisual";
import TopBanner from "./components/TopBanner";
import { common, basic, menu } from "./data/common";

const App = () => {
    console.log(common, basic)
    return (
        <>
            <TopBanner common={common} basic={basic} menu={menu} ok />
            <Header common={common} basic={basic} menu={menu} ok />
            <MainContent common={common} basic={basic} menu={menu} ok />
            <MainVisual />
        </>
    )
}

export default App;

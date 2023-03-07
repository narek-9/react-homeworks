import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

export interface Obj {
   header: string;
   content: string;
   footer: string;
}

const obj: Obj = {
   header: "Header",
   content: "Content",
   footer: "Footer",
};

const App = () => {
   return (
      <>
         <Header headerText={obj.header} />
         <Content contentText={obj.content} />
         <Footer footerText={obj.footer} />
      </>
   );
};

export default App;

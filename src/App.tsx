const obj = {
   header: "Header",
   content: "Content",
   footer: "Footer",
};

const Header = ({ headerText }) => <header>{headerText}</header>;
const Content = ({ contentText }) => <p>{contentText}</p>;
const Footer = ({ footerText }) => <footer>{footerText}</footer>;

const App = () => {
   return (
      <div>
         <Header headerText={obj.header} />
         <Content contentText={obj.content} />
         <Footer footerText={obj.footer} />
      </div>
   );
};

export default App;

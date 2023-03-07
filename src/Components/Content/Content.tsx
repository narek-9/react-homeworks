import { FC } from "react";
import "./Content.css";

interface ContentProps {
   contentText: string;
}

const Content: FC<ContentProps> = ({ contentText }) => {
   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log("login");
   };

   return (
      <main className="Content">
         <p>{contentText}</p>
         <form>
            <label>
               Username
               <input type="text" name="username" />
            </label>
            <label>
               Password
               <input type="password" name="password" />
            </label>
            <button onClick={handleClick}>login</button>
         </form>
      </main>
   );
};

export default Content;

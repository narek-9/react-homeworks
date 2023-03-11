import { FC, useState } from "react";
import "./Content.css";

interface ContentProps {
   contentText: string;
}

const Content: FC<ContentProps> = ({ contentText }) => {
   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log("login");
   };

   const inputState = useState("");
   const value = inputState[0];
   const setState = inputState[1];

   const inputState2 = useState("");
   const value2 = inputState2[0];
   const setState2 = inputState2[1];

   return (
      <main className="Content">
         <p>{contentText}</p>
         <form>
            <label>
               Username
               <input
                  type="text"
                  name="username"
                  onChange={(e) => setState(e.target.value)}
                  defaultValue={123}
               />
            <h1>{value}</h1>
            </label>

            <label>
               Password
               <input
                  type="password"
                  name="password"
                  onChange={(e) => setState2(e.target.value)}
               />
            <h1>{value2}</h1>
            </label>
            <button onClick={handleClick}>login</button>
         </form>
      </main>
   );
};

export default Content;

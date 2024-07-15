import ButtonCV from "../ButtonCV";

function Menu() {
 return (
   <div className="flex gap-10 items-center font-bold font-condensed ">
     <ul className="flex text-xs gap-6 ">
       <li>
         <a
           href=""
           className="hover:text-blue-500  transition delay-100 ease-linear"
         >
           HOME
         </a>
       </li>
       <li>
         <a
           href=""
           className="hover:text-blue-500  transition delay-100 ease-linear"
         >
           SOBRE
         </a>
       </li>
       <li>
         <a
           href=""
           className="hover:text-blue-500  transition delay-100 ease-linear"
         >
           PROJETOS
         </a>
       </li>
       <li>
         <a
           href=""
           className="hover:text-blue-500  transition delay-100 ease-linear"
         >
           CONTATO
         </a>
       </li>
     </ul>
     <ButtonCV />
   </div>
 );
}

export default Menu;
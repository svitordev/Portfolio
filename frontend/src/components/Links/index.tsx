interface LinkProps{
 href: string,
 children: React.ReactNode;
}
function LinkMenu({href,children}:LinkProps) {
 return (
   <li>
     <a
       href={href}
       className="hover:text-blue-600  text-sm  transition delay-100 ease-linear"
     >
       {children}
     </a>
   </li>
 );
}

export default LinkMenu;
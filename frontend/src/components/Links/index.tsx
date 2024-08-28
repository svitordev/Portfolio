interface LinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}
function LinkMenu({ href, children, isActive }: LinkProps) {
  return (
    <li>
      <a
        href={href}
        className={`hover:text-blue-600  text-sm  transition delay-100 ease-linear ${
          isActive ? "text-blue-600" : ""
        }`}
      >
        {children}
      </a>
    </li>
  );
}

export default LinkMenu;

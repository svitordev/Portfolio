interface BoxSocialProps {
  href: string;
  children: React.ReactNode;
}
function BoxSocial(props: BoxSocialProps) {
  return (
    <a
      href={props.href}
      className="w-16 h-16 border-2 border-blue-900 hover:border-blue-600 rounded-md flex items-center justify-center cursor-pointer transition  duration-400 ease-linear text-4xl hover:text-[2.5rem]"
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}

export default BoxSocial;

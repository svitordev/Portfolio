interface tagProp {
  children: React.ReactNode;
}
function Tag({ children }: tagProp) {
  return <div className="border-2 border-blue-600 px-2 rounded-lg text-sm">{children}</div>;
}

export default Tag;

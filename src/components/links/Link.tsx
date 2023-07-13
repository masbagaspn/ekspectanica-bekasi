interface LinkProps {
  variant?: string;
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-[min(240px,100%)] text-sm text-center font-bold border-2 border-white py-2 uppercase rounded-full hover:bg-white hover:text-black transition"
    >
      {children}
    </a>
  );
};

export default Link;

interface ButtonProps {
  variant?: string;
  handleClick: () => void;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      className="w-[min(240px,100%)] text-sm font-bold border-2 border-white py-2 uppercase rounded-full hover:bg-white hover:text-black transition"
    >
      {children}
    </button>
  );
};

export default Button;

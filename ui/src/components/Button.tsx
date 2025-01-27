import { cn } from "lib/utils";

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={cn(
        "bg-blue-500 hover:bg-blue-700 text-white font-normal rounded disabled:opacity-25 inline-flex items-center justify-center h-10 py-2 px-3",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

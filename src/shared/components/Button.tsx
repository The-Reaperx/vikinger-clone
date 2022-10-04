import { CSSProperties } from "react";
interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

const defaultProps: Partial<ButtonProps> = {
  type: "button",
  color: "primary",
};

const Button = ({
  text,
  type,
  color,
  disabled,
  onClick,
  style,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn btn-${color}`}
      color={color}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = defaultProps;
export default Button;

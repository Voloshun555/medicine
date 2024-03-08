
import { Link, useMatch } from "react-router-dom";

export function CustomLink({ children, to, ...props }) {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{
        color: match ? "rgb(60 168 11)" : "blue",
      }}
      {...props}
    >
      {children}
    </Link>
  );
}

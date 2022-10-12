// Node modules
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" - "}
      <Link to="/formulary">Upload image</Link>
      {" - "}
      <Link to="/gallery">Gallery</Link>
    </nav>
  );
}

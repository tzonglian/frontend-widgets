import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="/accordions">Accordions widgets</Link>
    </div>
  );
}
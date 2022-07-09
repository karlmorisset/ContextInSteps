import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <Link className="nextBtn" to="/step1">
        S'inscrire
      </Link>
    </div>
  );
}

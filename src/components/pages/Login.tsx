// src/components/pages/Login.tsx
import { useNavigate } from "react-router";
import { useAuth} from "../../context/AuthContext";

function Login() {
  const { dispatch } = useAuth();
  const naviguer = useNavigate();

  function connecter() {
    dispatch({ type: "CONNEXION", user: { id: "u1", nom: "Mohamed" } });
    // Après connexion, on redirige par code vers les réglages (zone protégée).
    naviguer("/reglages", { replace: true });
  }

  return (
    <div className="login">
      <h2>Connexion</h2>
      <button onClick={connecter}>Se connecter (démo)</button>
    </div>
  );
}
export default Login;

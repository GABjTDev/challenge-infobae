import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <h2 className="container-main">No tienes permisos para entrar a esta ruta.</h2>;
  }

  return children;
}

export default ProtectedRoute;
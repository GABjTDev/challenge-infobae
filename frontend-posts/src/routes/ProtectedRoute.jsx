import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <div>No tienes permisos para entrar a esta ruta.</div>;
  }

  return children;
}

export default ProtectedRoute;
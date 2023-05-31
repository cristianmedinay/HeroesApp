import { AppRouter } from "../public/router/AppRouter";
import "./styles.css";
import "animate.css";
import { AuthProvider } from "../public/auth";
export default function HeroesApp() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

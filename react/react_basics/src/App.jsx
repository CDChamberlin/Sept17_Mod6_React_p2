import "./App.css";
import NavBar from "./components/Navbar";
// import ThemeProvider from "./context/themeContext";
import { UserProvider } from "./context/userContext";
import AppRoutes from "./routes/AppRoutes";
function App() {
    return (
        <UserProvider>
            {/*<ThemeProvider>*/}
            <NavBar />
            <AppRoutes />
            {/*</ThemeProvider>*/}
        </UserProvider>
    );
}

export default App;

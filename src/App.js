import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from'./components/global/Topbar';
import SideBar from './components/global/SideBar';
import Order from './components/Order';
import CustomizeFood from "./components/CustomizeFood";
import { Route, Routes } from "react-router-dom";
import StepContext from "./components/CustomizeFood/stepContext";
import VendorProfile from "./components/VendorProfile";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <SideBar/>
          <main className="content" style={{marginLeft: "300px"}}>
            <Topbar/>
            <Routes>
            <Route path="/order" element={<Order />} />
            <Route path="/vendorprofile" element={<VendorProfile/>} />
            <Route path="/customizefood" element={<StepContext><CustomizeFood /></StepContext>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;

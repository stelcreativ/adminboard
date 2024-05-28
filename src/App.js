import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import Topbar from "./layout/aside/Topbar"
import Sidebar from "./layout/aside/Sidebar"
import Dashboard from "./layout/dashboard"
import Team from "./layout/team"
import Contacts from "./layout/contacts"
import Calendar from "./layout/calendar"
import Pie from "./layout/pie"
import Line from "./layout/line"

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          {/**  <Sidebar />*/}
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>

    </ColorModeContext.Provider>
  );
}

export default App;

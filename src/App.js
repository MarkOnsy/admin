import React from "react";
import { ColorModeContext, useMode } from "./Theme";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scense/global/Topbar";
import Sidebar from "./scense/global/Sidebar";
import Dashboard from "./scense/dashboard";
import Team from "./scense/team";
import Invoices from "./invoices/invoices";
import Contacts from "./scense/contacts";
import Bar from "./scense/bar";
import Form from "./scense/form";
import Line from "./scense/line";
import Pie from "./scense/pie";
import FAQ from "./scense/faq";
import Calendar from "./scense/calendar";
import Geography from "./scense/geography/index";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

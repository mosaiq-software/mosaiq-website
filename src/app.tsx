import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import LandingPage from "@msq/pages/landing-page";
const theme = createTheme({

});
const App = () => {
    return (
        <MantineProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
};

export default App;
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@gfazioli/mantine-marquee/styles.css';
import '@gfazioli/mantine-reflection/styles.css';

import LandingPage from "@msq/pages/landing-page";

const lightBlue: MantineColorsTuple = ['#e6f7ff','#d4eafb','#aad3f0','#7dbae7','#58a5df','#4198da','#3292d9','#2384ca','#1270ae','#00619b'];
const deepPink: MantineColorsTuple =  ['#ffeaf3','#fdd3e2','#f5a5c1','#ef749e','#e94c81','#e6326e','#e62465','#d31757','#b70d4b','#a1003f'];
const textColor: MantineColorsTuple = ['#13173e','#13173e','#13173e','#13173e','#13173e','#13173e','#13173e','#13173e','#13173e','#13173e'];
  
const theme = createTheme({
    fontFamily: 'Lato, sans-serif',
    headings: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: "500",
    },
    primaryColor: 'deepPink',
    primaryShade: 7,
    colors: {
        lightBlue,
        deepPink,
        textColor,
    },
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
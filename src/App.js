import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./componenets/Headers";
import Feed from "./componenets/Feed";
import CedioDetails from "./componenets/CedioDetails";
import SerachResuult from "./componenets/SerachResuult";

import { AppContext } from "./context/contextApi";
const App = () => {
  return (
    <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Headers />
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route
                            path="/searchResult/:searchQuery"
                            element={<SerachResuult />}
                        />
                        <Route path="/video/:id" element={<CedioDetails  />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );

};

export default App;

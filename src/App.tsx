import React, { lazy, Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPageFound from "./components/pages/NoPageFound";
import Home from "./components/pages/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Loading from "./components/shared/Loading";

const Userprofile = lazy(() => delay(import('./components/pages/Userprofile')));

// // lazy import or // dynamic import
// const Userprofile = React.lazy(() =>
//   delay(import("./components/pages/Userprofile"))
// );

// delay is an async function which will delay importing of file by 1 seconds
async function delay(promise: any) {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return promise;
}

const App = () => {

   const [count , setCount ] = React.useState(0)


  return (
    <BrowserRouter>
      <Navbar />

      <div className="main-container">
        <Routes>
          <Route path="*" element={<NoPageFound />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/user-profile"
            element={
              <Suspense fallback={<Loading/>}>
                <Userprofile />
              </Suspense>
            }
          />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

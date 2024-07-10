import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";

import "./index.scss";

const App = () => {
  const [showHeader, setShowHeader] = React.useState(false);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<div>Loading</div>}>
        <Header />
      </Suspense>
      <div className="my-10">Pdp page content</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

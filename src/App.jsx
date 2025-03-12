// importo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importo il Layout
import DefaultLayout from "./layout/DefaultLayout";

// importo le pagine
import HomePage from "./pages/HomePage";
import DetailPageMovie from "./pages/DetailPageMovie";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<DetailPageMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

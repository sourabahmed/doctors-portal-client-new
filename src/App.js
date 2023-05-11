import "./App.css";
import "react-day-picker/dist/style.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-backgroundColor text-backgroundColor-200">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}
export default App;

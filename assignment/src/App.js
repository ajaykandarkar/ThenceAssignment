
import { Routes,Route } from "react-router-dom";
import { Home } from "./Componenets/Home";
import { GetProjects } from "./Componenets/GetProjects";
import { Succes } from "./Componenets/Succes";


function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route  path="/getProject" element={<GetProjects/>}></Route>
       <Route  path="/sucess" element={<Succes/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;

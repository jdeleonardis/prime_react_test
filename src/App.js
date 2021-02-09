import logo from './logo.svg';
import './App.css';
import MenubarDemo from './MenubarDemo'
import testpage from './testpage'
import { BrowserRouter, Route, Switch } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <MenubarDemo />
//     </div>
//   );
// }

 function App() {
   return (
      <BrowserRouter>
        <div>        
            <Switch>
                <Route exact path="/" component={MenubarDemo} />
                <Route exact path="/testpage" component={testpage} />
            </Switch>
         </div>

     </BrowserRouter>
   );
 }
 export default App;


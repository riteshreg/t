import './App.css';
import Navbar from './Component/Navbar'
import Content from './Component/Content'
import Data from './Resources/Data'

function App() {

const data = Data.map(item=>{
  return (

    <Content  
       {...item}
    />

  )
})

  return (
    <>
    <Navbar />
    {data}
    </>
  );
}

export default App;

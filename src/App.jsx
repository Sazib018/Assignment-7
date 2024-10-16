import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/Navbar/Navbar'


function App() {

  return (
    <div className='max-w-[1320px] mx-auto'>
    <Navbar></Navbar>
    <div>
      <Banner></Banner>
    </div>
    </div>
  )
}

export default App


import './App.css'
import ActiveAuc from './Components/ActiveAuc'
import Banner from './Components/Banner'
import FavItems from './Components/FavItems'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Banner></Banner>
      <div className='w-10/12 mx-auto my-24 space-y-7'>
        <h2 className='text-[#0E2954] text-2xl font-semibold'>Active Auctions</h2>
        <p className='text-gray-400'>Discover and bid on extraordinary items</p>
        <div className='grid grid-cols-3 gap-6'>
          <div className='col-span-2'>
            <ActiveAuc></ActiveAuc>
          </div>
          <div>
            <FavItems></FavItems>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

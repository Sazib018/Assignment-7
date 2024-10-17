import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/Navbar/Navbar'
import RecipeAdd from './component/RecipeAdd/RecipeAdd'
import RecipeCard from './component/RecipeCard/RecipeCard'



function App() {

  return (
    <div className='max-w-[1320px] mx-auto'>
    <Navbar></Navbar>
    <div>
      <Banner></Banner>
    </div>
    <div className="text-center mt-20">
    <h1 className="text-[40px] text-[#150B2B] font-semibold mb-4">Our Recipes</h1>
    <p className="text-gray-600 font-normal mb-6">
        Explore a variety of delicious dishes with easy-to-follow instructions.
    </p>
</div>

      <div className='flex justify-between mt-12'>
        <div><RecipeCard></RecipeCard></div>

        <div><RecipeAdd></RecipeAdd></div>
      </div>
    
    </div>
  )
}

export default App

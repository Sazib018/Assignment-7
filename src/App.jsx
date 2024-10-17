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
          This recipe is a delightful blend of fresh ingredients and rich flavors, designed for both novice and experienced cooks. With easy-to-follow steps, <br /> you'll prepare a delicious, nutritious meal that’s perfect for any occasion and satisfying for all.
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

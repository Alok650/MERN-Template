import React from 'react'
import {Link} from 'react-router-dom';


function Dashboard() {
  return (
        <>
        <div class="flex justify-center items-center ">
          <div class="mt-4 h-auto md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
            
            {/* TOOL 1 */}
            <div class="max-w-sm bg-gray-50 hover:bg-gray-100 cursor-pointer px-4 pt-4 pb-2 rounded shadow-lg transform hover:scale-105 transition duration-500">
              <h3 class="mb-2 text-base font-bold text-black">Tool1</h3>
              <div class="relative">
                <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="tool1" />
                <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Use</p>
              </div>
              <h1 class="mt-2 text-gray-800 text-sm font-bold cursor-pointer">Book a ride</h1>
              <div class="my-4">
                <Link to='/tool1' style={{textDecoration: 'none', color: 'white', padding:8, paddingLeft:110, paddingRight:110}} className="mt-2 text-base w-full text-white bg-indigo-400 hover:bg-indigo-500 rounded-xl shadow-lg" >Buy Lesson</Link>
              </div>
              <br/>
            </div>

            {/* Tool 2 */}
            <div class="max-w-sm bg-gray-50 hover:bg-gray-100 cursor-pointer px-4 pt-4 pb-2 rounded shadow-lg transform hover:scale-105 transition duration-500">
              <h3 class="mb-2 text-base font-bold text-black">Tool2</h3>
              <div class="relative">
                <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="tool1" />
                <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Use</p>
              </div>
              <h1 class="mt-2 text-gray-800 text-sm font-bold cursor-pointer">Book a ride</h1>
              <div class="my-4">
              <Link to='/tool2' style={{textDecoration: 'none', color: 'white', padding:8, paddingLeft:110, paddingRight:110}} className="mt-2 text-base w-full text-white bg-indigo-400 hover:bg-indigo-500 rounded-xl shadow-lg" >Buy Lesson</Link>
              </div>
            </div>

            {/* Tool 3 */}
            <div class="max-w-sm bg-gray-50 hover:bg-gray-100 cursor-pointer px-4 pt-4 pb-2 rounded shadow-lg transform hover:scale-105 transition duration-500">
              <h3 class="mb-2 text-base font-bold text-black">Tool3</h3>
              <div class="relative">
                <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="tool1" />
                <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Use</p>
              </div>
              <h1 class="mt-2 text-gray-800 text-sm font-bold cursor-pointer">Book a ride</h1>
              <div class="my-4">
              <Link to='/tool3' style={{textDecoration: 'none', color: 'white', padding:8, paddingLeft:110, paddingRight:110}} className="mt-2 text-base w-full text-white bg-indigo-400 hover:bg-indigo-500 rounded-xl shadow-lg" >Buy Lesson</Link>
              </div>
            </div>
          </div>
        </div>
  
    </>
  );
}

export default Dashboard;
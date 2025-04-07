import React from 'react'

const MenuBar = () => {
    return (
        <div class="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-around py-2 shadow-md z-50 font-bold">
            <a href="#" class="flex flex-col items-center text-gray-600 hover:text-blue-500">
                <i class="fas fa-sign-in-alt text-xl"></i>
                <span class="text-xs">Login</span>
            </a>

            <a href="#" class="flex flex-col items-center text-gray-600 hover:text-blue-500">
                <i class="fas fa-home text-xl"></i>
                <span class="text-xs">Home</span>
            </a>

            <a href="#" class="flex flex-col items-center text-gray-600 hover:text-blue-500">
                <i class="fas fa-briefcase text-xl"></i>
                <span class="text-xs">Jobs</span>
            </a>

            <a href="#" class="flex flex-col items-center text-gray-600 hover:text-blue-500">
                <i class="fas fa-arrow-left text-xl"></i>
                <span class="text-xs">Back</span>
            </a>
        </div>

    )
}

export default MenuBar

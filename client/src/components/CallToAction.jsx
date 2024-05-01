import { Button } from 'flowbite-react';

export default function CallToAction() {
    return (
        <div className='flex flex-col sm:flex-row p-3 border-t-2 border-b-2 border-gray-200 justify-center items-center text-center'>
          <div className="flex-1 justify-center flex flex-col text-black">
            <h2 className='text-3xl'>
              Place to visit in Sri Lanka 2024
            </h2>
            <p className='text-gray-600 my-2'>
              Discover 50 amazing natural places I`ve traveled to
            </p>
            <Button className='w-1/3 sm:w-auto rounded-tl-xl rounded-bl-none bg-yellow-400 hover:bg-black-500'>
                <a href="https://traveltriangle.com/blog/most-beautiful-places-in-sri-lanka/" target='_blank' rel='noopener noreferrer'>
                    Explore the places
                </a>
                </Button>
          </div>
          <div className="p-7 flex-1">
            <img src="https://www.tourist-destinations.com/wp-content/uploads/2012/06/merlin_148552275_74c0d250-949c-46e0-b8a1-e6d499e992cf-superJumbo.jpg" alt="Sri Lanka" />
          </div>
        </div>
      );
}
import React from 'react'

function Cards({username='Vini jr'}) {
    
  return (
   <>
      <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="https://images.pexels.com/photos/30337239/pexels-photo-30337239/free-photo-of-romantic-couples-hands-with-wedding-rings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        {username}
      </a>
      <p class="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </p>
    </div>
  </div>
</div>
   </>
  )
}

export default Cards
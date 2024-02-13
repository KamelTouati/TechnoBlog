import React from 'react'

const NotFound = () => {
  return (
    <div className="bg-bgColor">
      <div class="rounded-[2.5rem] flex justify-around items-center relative">
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 py-10 text-transparent bg-clip-text">
            Not Found :)
          </h1>
        </div>
        <div>
          <img className="w-[500px]" src="/assets/illustration10.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default NotFound
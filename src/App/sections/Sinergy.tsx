import React from "react"

function Sinergy() {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
          Trusted by world className companies, design teams & popular designers
        </h2>
      </div>

      <div className="grid grid-cols-1 mt-8 md:grid-cols-3 gap-6">
        <div className="md:px-4 lg:px-10">
          <img
            className="-rotate-1 w-48 h-48 object-cover mx-auto"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg"
            alt=""
          />
          <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
            Join as a team
          </h3>
          <p className="mt-4 text-base text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint.
          </p>
        </div>

        <div className="md:px-4 lg:px-10">
          <img
            className="rotate-1 w-48 h-48 object-cover mx-auto"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg"
            alt=""
          />
          <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
            Work from anywhere
          </h3>
          <p className="mt-4 text-base text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint.
          </p>
        </div>

        <div className="md:px-4 lg:px-10">
          <img
            className="-rotate-1 w-48 h-48 object-cover mx-auto"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
            alt=""
          />
          <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
            Get success
          </h3>
          <p className="mt-4 text-base text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sinergy

import { PiSailboat } from "react-icons/pi";
import { PiBuildingApartmentBold } from "react-icons/pi";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";


export const FiltersPanel = () => {
  return (
    <div className="w-full m-1">
      <div className="flex justify-between">
        <div>filter</div>
        <div className="p-1 bg-gray-300 rounded">
          clear filters
        </div>
      </div>

      {/* price range */}
      <div className="my-2">
        <div>
          Price Range
        </div>
        <div className="relative mb-6">
          <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
          <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
        </div>

        <div className="flex w-full">
          <div className="w-full">
            <input type="text" placeholder="min." />
          </div>
          <div className="w-full">
            <input type="text" placeholder="max." />
          </div>
        </div>
      </div>


      {/* property types filter */}
      <div className="my-2">
        <div>
          Property type
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center">
            <PiSailboat className="text-6xl" />
            {`Boats`}
          </div>
          <div className="flex flex-col items-center">
            <PiBuildingApartmentBold className="text-6xl" />
            {`Boats`}
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineHolidayVillage className="text-6xl" />
            {`Boats`}
          </div>
          <div className="flex flex-col items-center">
            <LiaHotelSolid className="text-6xl" />
            {`Boats`}
          </div>
        </div>
      </div>
    </div >
  )
}
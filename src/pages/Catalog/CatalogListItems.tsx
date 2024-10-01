import { FaRegHeart } from "react-icons/fa6";

export const CatalogListItems = () => {
  return (
    <div className="w-full p-2 bg-gray-500 rounded-md m-1">
      <div>
        <div className="h-44 relative">
          <div className="absolute top-0 right-0 p-2 bg-gray-300 rounded-3xl m-1 flex items-center self-center">
            <FaRegHeart />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="bg-green-200">
            <h3 className="font-bold">W South Beach</h3>
            <p className="grayscale">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure nisi voluptate! Voluptate maiores sed recusandae illo perspiciatis nostrum et sint quis adipisci provident minima nihil pariatur magni, corrupti quia!</p>
          </div>

          <div className="bg-gray-300">
            {`* 5.3 (355)`}
          </div>
        </div>

        <div>
          <strong>$ 3.500</strong>
        </div>

      </div>
      <div>
        <div className="h-44 relative">
          <div className="absolute top-0 right-0 p-2 bg-gray-300 rounded-3xl m-1 flex items-center self-center">
            <FaRegHeart />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="bg-green-200">
            <h3 className="font-bold">W South Beach</h3>
            <p className="grayscale">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure nisi voluptate! Voluptate maiores sed recusandae illo perspiciatis nostrum et sint quis adipisci provident minima nihil pariatur magni, corrupti quia!</p>
          </div>

          <div className="bg-gray-300">
            {`* 5.3 (355)`}
          </div>
        </div>

        <div>
          <strong>$ 3.500</strong>
        </div>

      </div>
      <div>
        <div className="h-44 relative">
          <div className="absolute top-0 right-0 p-2 bg-gray-300 rounded-3xl m-1 flex items-center self-center">
            <FaRegHeart />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="bg-green-200">
            <h3 className="font-bold">W South Beach</h3>
            <p className="grayscale">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure nisi voluptate! Voluptate maiores sed recusandae illo perspiciatis nostrum et sint quis adipisci provident minima nihil pariatur magni, corrupti quia!</p>
          </div>

          <div className="bg-gray-300">
            {`* 5.3 (355)`}
          </div>
        </div>

        <div>
          <strong>$ 3.500</strong>
        </div>

      </div>
    </div>
  )
}
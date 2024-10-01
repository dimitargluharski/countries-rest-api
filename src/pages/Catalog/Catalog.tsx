import { BuildingPlace } from "./BuildingPlace"
import { CatalogListItems } from "./CatalogListItems"
import { FiltersPanel } from "./Filters"

export const Catalog = () => {
  return(
    <div className="bg-red-500 flex w-full">
      <FiltersPanel />
      <CatalogListItems />
      <BuildingPlace />
    </div>
  )
}
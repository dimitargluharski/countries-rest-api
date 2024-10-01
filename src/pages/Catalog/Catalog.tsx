import { BuildingPlace } from "./BuildingPlace"
import { CatalogListItems } from "./CatalogListItems"
import { FiltersPanel } from "./Filters"

export const Catalog = () => {
  return (
    <div className="flex w-full">
      <FiltersPanel />
      <CatalogListItems />
      <BuildingPlace />
    </div>
  )
}
import { Link, Outlet } from "react-router-dom"

export const DetailsPage = () => {
  return (
    <div>
      <nav className="flex gap-2 bg-slate-500">
        <Link to="details">Overview</Link>
        <Link to="information">Information</Link>
        <Link to="amenities">Amenities</Link>
        <Link to="important">Important</Link>
        <Link to="reviews">Reviews</Link>
      </nav>

      <Outlet />
    </div>
  )
}
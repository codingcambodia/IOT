import { AppSidebar } from '@/components/app-sidebar'
import Header from '@/components/header'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'


export const Route = createRootRoute({
  component: () => (
    <>
      {/* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div> */}
      <AppSidebar />
      <div className='w-full'>
        <Header />
        <Outlet />
      </div>

      <TanStackRouterDevtools />
    </>
  ),
})
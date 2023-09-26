import { Route, Routes } from 'react-router-dom'

import SuspenseLoader from '@/components/ui/SuspenseLoader'
import { mainRoutes, nestedRoutes } from '@/config/routes'

function App() {
  return (
    <SuspenseLoader>
      <Routes>
        {mainRoutes.map((route, index) => (
          <Route path={route.path} element={<route.element />} key={index} />
        ))}

        {nestedRoutes.map((route, index) => (
          <Route path={route.path} element={<route.element />} key={index}>
            {route.children?.map((child, index) => (
              <Route
                path={child.path}
                element={<child.element />}
                key={index}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </SuspenseLoader>
  )
}

export default App

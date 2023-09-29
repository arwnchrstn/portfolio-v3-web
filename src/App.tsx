import { Route, Routes } from 'react-router-dom'

import SuspenseLoader from '@/components/ui/Loading/SuspenseLoader'
import { mainRoutes, nestedRoutes } from '@/config/routes'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

function App() {
  const { isSmallScreen } = useIsSmallScreen()

  return (
    <Routes>
      {mainRoutes.map((route, index) => (
        <Route
          path={route.path}
          element={
            <SuspenseLoader type="global">
              <route.element />
            </SuspenseLoader>
          }
          key={index}
        />
      ))}

      {nestedRoutes.map((route, index) => (
        <Route
          path={route.path}
          element={
            <SuspenseLoader type="global">
              <route.element />
            </SuspenseLoader>
          }
          key={index}
        >
          {route.children?.map((child, index) => {
            if (!isSmallScreen && child.path === 'connect') return

            return (
              <Route
                path={child.path}
                element={
                  <SuspenseLoader type="page">
                    <child.element />
                  </SuspenseLoader>
                }
                key={index}
              />
            )
          })}
        </Route>
      ))}
    </Routes>
  )
}

export default App

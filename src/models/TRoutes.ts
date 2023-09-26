import React from 'react'

export interface TRoutes {
  path: string
  index?: boolean
  element: () => React.JSX.Element
  children?: TRoutes[]
}

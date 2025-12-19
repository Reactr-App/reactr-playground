import CreatorDashboardContainer from '../layouts/CreatorDashboardContainer'
import { ReactNode } from 'react'

export function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <CreatorDashboardContainer>
        {children}
      </CreatorDashboardContainer>
    </>
  )
}

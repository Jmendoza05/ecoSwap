import React from 'react'
import NavbarComponent from './navbar.component'
import FooterComponent from './footer.component'

export default function LayoutComponent({ children }) {
  return (
    <>
      <NavbarComponent/>
      <main>
        {children}
      </main>
      <FooterComponent/>
    </>
  )
}

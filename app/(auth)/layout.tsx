import { Main } from 'next/document'
import { Chilanka } from 'next/font/google'
import React, { Children } from 'react'

const Layout= ({children}:{children:React.ReactNode}) => {
  return (
    <main className="auth">{children}</main>
  )
}

export default Layout
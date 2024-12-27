import React from "react"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"

import '../styles/base.css';

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    )
  }
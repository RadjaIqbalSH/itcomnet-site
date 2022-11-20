import * as React from "react"
import Layout from "../layouts"
import Home from "../components/home"

const IndexPage = () => {
  return (
    <Layout>
      <Home/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>

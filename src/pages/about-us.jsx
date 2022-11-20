import * as React from "react"
import Layout from "../layouts"
import AboutUs from '../components/about-us'

const AboutUsPage = () => {
    return (
        <Layout>
        <AboutUs/>
        </Layout>
    )
}

export default AboutUsPage

export const Head = () => <title>About Us</title>

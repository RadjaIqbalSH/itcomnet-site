import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    // <main style={pageStyles}>
    //   <h1 style={headingStyles}>Page not found</h1>
    //   <p style={paragraphStyles}>
    //     Sorry 😔, we couldn’t find what you were looking for.
    //     <br />
    //     {process.env.NODE_ENV === "development" ? (
    //       <>
    //         <br />
    //         Try creating a page in <code style={codeStyles}>src/pages/</code>.
    //         <br />
    //       </>
    //     ) : null}
    //     <br />
    //     <Link to="/">Go home</Link>.
    //   </p>
    // </main>
    <>
      <main className="w-full h-[100vh] flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold mb-4">Page Not Found 😢</h1>
        <Link className="border-b-black hover:border-b-orange-400 hover:text-orange-400 border-b-[1px]" to="/">Go home</Link>.
      </main>
      <style>{`
          main {
            background-image: url(https://www.skyline.net.id/wp-content/uploads/2019/03/05-3.png);
            background-position: 0px 0px;
            background-repeat: repeat;
            animation: animatedBackground 10s linear infinite;
          }

          @keyframes animatedBackground {
            from {
                background-position: 0;
            }
            to {
                background-position: 100%;
            }
          }
      `}</style>
    </>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>

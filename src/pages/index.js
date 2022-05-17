// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import CounterComponent from "../Components/CounterComponent";

// Step 2: Define your component
const IndexPage = () => {
    return (
        <main>
            <title>Home Page</title>
            <h1>Welcome to my Gatsby site!</h1>
            <Link to="/product">Product page</Link>
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <CounterComponent/>
        </main>
    )
}

// Step 3: Export your component
export default IndexPage
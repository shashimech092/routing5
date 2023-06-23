import Footer from "./Footer"
import Header from "./Header"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Home"
import Post from "./Post"
import PostDetails from "./PostDetails"
import Profile from "./Profile"


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Route exact path='/' component={Home} />
                    <Route exact path='/post' component={Post} />
                    <Route exact path='/post/:topic' component={PostDetails} />
                    <Route path="/profile" component={Profile} />
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Routing
import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {


    return (
        <div className=" main">

            <div className="styleStart">
                <div className=" ">
                    {/* <img src="anna-earl-l2ARBUWlHbU-unsplash.jpg" alt="" /> */}
                    <Link to="/quiz"><h2 style={{ backgroundColor: "blue" }} className="btn btn-primary">Start Quiz</h2> </Link>

                </div>
            </div>


        </div >
    )
}

export default HomeScreen

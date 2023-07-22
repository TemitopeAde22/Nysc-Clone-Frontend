// AuthWrapper.js
import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

export const AuthWrapper = (WrappedComponent) => {
    const HOCIndex = ({ isLoggedIn, ...rest }) => {
        // Add your authentication logic here
        if (!isLoggedIn) {
            // Redirect to login page if the user is not logged in
            return <Navigate to="/login" />
        }

        // Render the WrappedComponent if the user is logged in
        return <WrappedComponent {...rest} />
    }

    // mapStateToProps to access the isLoggedIn state from the Redux store
    const mapStateToProps = (state) => ({
        isLoggedIn: state.auth.isLoggedIn,
    })

    // Connect the component to the Redux store
    return connect(mapStateToProps)(HOCIndex)
}

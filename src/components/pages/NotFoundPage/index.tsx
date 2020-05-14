import React from 'react'
import Layout from '../../Layout'
import { Link } from 'react-router-dom';
import HWCenter from '../../sz-ui/HWCenter';

export default function NotFoundPage() {
    return <HWCenter>
            <img className="img-fluid d-block mr-auto ml-auto" src={require("../../../public/icon.png")}></img>
            <h1>404 NOT FOUND!</h1>
            <Link to="/" className="d-block text-center">Back to home page</Link>
        </HWCenter>
}

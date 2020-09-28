import React from 'react'
import { Link } from 'react-router-dom';
import HWCenter from '../../sz-ui/HWCenter';

export default function NotFoundPage() {
    return <HWCenter>
        <h1>404 NOT FOUND!</h1>
        <p>The resource you are finding is unavaliable.</p>
        <Link to="/" className="d-block text-center">Back to home page</Link>
    </HWCenter>
}

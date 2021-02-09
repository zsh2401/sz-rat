import React from 'react'
import { Link } from 'react-router-dom';
import HWCenter from '../../../sz-support/ui/HWCenter';

export default function NotFoundPage() {
    return <HWCenter style={{ textAlign: "center" }}>
        <h1>404 NOT FOUND!</h1>
        <p>The resource you are looking for is not avaliable now.</p>
        <Link to="/" style={{
            display: "block",
            textAlign: "center"
        }}>Back to home page</Link>
    </HWCenter>
}

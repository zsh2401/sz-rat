import React, { useState } from 'react'
import {useTitle,useEffectOnce} from '../../../common/hooks'
import Layout from '../../sz-ui/Layout'
import { Link, useHistory } from 'react-router-dom';
import HWCenter from '../../sz-ui/HWCenter';
import useTopPace from '../../../common/hooks/useTopPace';
const GOBACK_SECONDS = 10;
export default function NotFoundPage() {
    let [lastSencond,setLastSecond] = useState(GOBACK_SECONDS);
    let history = useHistory();
   
    console.log( history);
    let [,paceSetter] = useTopPace();
    let timer = ()=>{
        let interval = setInterval(()=>{
            if(lastSencond === 0){
                clearInterval(interval);
                history.go(-1);
            }else{
                setLastSecond(--lastSencond);
                paceSetter((lastSencond / GOBACK_SECONDS) * 100.0)
            }
        },1000);
    }

    useEffectOnce(timer);

    useTitle("404 NOT FOUND!");
    return <Layout>
        <HWCenter>
            <img className="img-fluid d-block mr-auto ml-auto" src={require("../../../public/icon.png")}></img>
            <h1>404 NOT FOUND!</h1>
            <Link to="/" className="d-block text-center">Back to home page ({lastSencond})</Link>
        </HWCenter>
    </Layout>
}

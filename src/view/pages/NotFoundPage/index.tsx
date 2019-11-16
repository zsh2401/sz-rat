import React, { useState, useEffect } from 'react'
import {useTitle,useEffectOnce} from '../../../common/hooks/'
import { Template} from '../../components'
import { Link, useHistory } from 'react-router-dom';
import HWCenter from '../../components/HWCenter';
import useTopPace from '../../../common/hooks/useTopPace';
import historyManager from '../../../common/history-manager';
const GOBACK_SECONDS = 10;
export default function NotFoundPage() {
    let history = useHistory();
    let [lastSencond,setLastSecond] = useState(GOBACK_SECONDS);

  
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
    return <Template>
        <HWCenter>
            <img className="img-fluid d-block mr-auto ml-auto" src={require("../../../app/icon/icon.png")}></img>
            <h1>404 NOT FOUND!</h1>
            <Link to="/" className="d-block text-center">Back to home page ({lastSencond})</Link>
        </HWCenter>
    </Template>
}

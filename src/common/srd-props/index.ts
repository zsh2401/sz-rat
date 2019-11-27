import React from 'react'
export default interface StdProps<T = any> extends React.Props<T>{
    className?:string;
    id?:string;
}
import * as React from 'react';
import Layout from '../../sz-ui/Layout'
import BilibiliVideo from '../../sz-ui/BilibiliVideo';
import SZRatInfo from '../../sz-ui/SZRatInfo';
export default function IndexPage(){
  return <Layout childrenWrapperClassName="container">
      <div className="row">
        <div className="col-md-6">
          <SZRatInfo/>
          <br/>
        </div>
        
        <div className="col-md-6">
          <div className="d-flex h-100 w-100 flex-column justify-content-center">
            <BilibiliVideo className="mr-auto ml-auto w-100" source="//player.bilibili.com/player.html?aid=67214844&cid=116546077&page=1"/>
          </div>
        </div>
      </div>
</Layout>
}
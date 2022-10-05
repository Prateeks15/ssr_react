import React from 'react'
//react app

 const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
    {/* <div>IM A Home componnet</div> */}
    {/* 
    1. This button event handler will work coz 
    this is not normal react app this is an ssr app and express is currently sending only html to bpwser and nothing else 
    2. express is step 1 only for htm , to run js events we need to run react app after initial html render
    3. for solving this problem we will create 2 bundle file one for html and one for react i.e for browser client
    4. and in client.js file we will home component using reactdom.render
    */}
    {/* <button onClick={() => console.log('hey THERE !!!!')}> Press me !</button>  */}
    <h3>Welcome</h3>
     <p>Check out these awesome features</p>
    </div>
  )
}

export default {
component: Home,
};
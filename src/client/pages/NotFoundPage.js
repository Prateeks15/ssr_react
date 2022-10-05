import React from 'react'
 
// 404 page handling in server
function NotFoundPage({ staticContext = {} }) {

  staticContext.notFound = true;
  
  return (
    <h1>NotFoundPage</h1>
  )
}

export default {
component: NotFoundPage
};
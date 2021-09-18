import React, { useState, useEffect } from 'react'

function Shop () {
  useEffect(() => {
    fetchItems()
  }, [])
  const fetchItems = async () => {
    const data = await fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand')
    const items = await data.json()
    console.log(items)
  }

  return (
    <>
      <h1>Shop Page!</h1>
    </>
  )
}

export default Shop

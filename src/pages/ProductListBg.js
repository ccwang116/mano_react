import React, { Component } from 'react'
import './ProductList-style.css'

function ProductListBg() {
  const display = (
    <>
      <div className="bgSvg"></div>
    </>
  )

  return (
    <>
      <div className="container">{display}</div>
    </>
  )
}

export default ProductListBg
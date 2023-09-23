import React from 'react'
import styled , { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({

  gameContentWrapper: {
    width: `300px`,
    height: `224px`,
    margin: 'auto',
    padding: 0,
    position: 'absolute',
    overflow: 'hidden',
    '& canvas': {
      position: 'absolute',
      display: 'block',
      margin: 'auto',
      imageRendering: 'pixelated',
      '-ms-interpolation-mode': 'nearest-neighbor',
      boxShadow: '0px 0px 0px 3px rgba(0,0,0,0.75)',
    },
  },
  
  
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('blackAlpha.100', '#0d1117')(props)
    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const breakpoints = {
  sm: '30em',
  md: '50em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const customeTheme = extendTheme({ config, styles, breakpoints })

export default customeTheme
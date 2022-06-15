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
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({ config, styles, breakpoints })

export default theme
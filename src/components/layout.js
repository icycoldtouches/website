import React             from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme             from '../theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Layout = ({ children }) => {
	return (
	  <ThemeProvider theme={theme}>
		  {children}
	  </ThemeProvider>
	)
}

export default Layout

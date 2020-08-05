import React               from 'react'
import { ThemeProvider }   from '@material-ui/core/styles'
import theme               from '../theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CssBaseline         from '@material-ui/core/CssBaseline'
import SimpleReactLightbox from 'simple-react-lightbox'

const Layout = ({ children }) => {
	return (
	  <SimpleReactLightbox>
		  <ThemeProvider theme={theme}>
			  <CssBaseline/>
			  {children}
		  </ThemeProvider>
	  </SimpleReactLightbox>
	)
}

export default Layout

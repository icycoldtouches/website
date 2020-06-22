import { createMuiTheme }      from '@material-ui/core'
import { responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
	overrides: {
		MuiInputBase: {
			input: {
				'&:-webkit-autofill': {
					transitionDelay: '9999s',
					transitionProperty: '#c8ae5e, #3a4051'
				}
			}
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
			mobile: 414,
			tablet: 768,
			desktop: 1280
		}
	},
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
			'"Shadows Into Light"',
			'Raleway',
			'Poppins'
		].join(','),
		htmlFontSize: 10,
		body1: {
			fontSize: '16px',
			fontFamily: 'Raleway',
			fontWeight: 300
		},
		body2: {
			fontSize: '14px',
			fontFamily: 'Raleway',
			fontWeight: 300
		},
		h1: {
			fontFamily: 'Shadows Into Light',
			fontWeight: 400
		},
		h2: {
			fontFamily: 'Shadows Into Light',
			fontWeight: 400
		},
		h3: {
			fontFamily: 'Shadows Into Light',
			fontWeight: 400
		},
		h4: {
			fontFamily: 'Shadows Into Light',
			fontWeight: 400
		},
		h5: {
			fontFamily: 'Shadows Into Light',
			fontWeight: 400
		},
		h6: {
			fontFamily: 'Shadows Into Light',
			fontWeight: 400
		},
		subtitle1: {
			fontFamily: 'Raleway',
			fontWeight: 400
		},
		subtitle2: {
			fontFamily: 'Raleway',
			fontWeight: 500
		},
		button: {
			fontFamily: 'Shadows Into Light',
			fontWeight: 500,
			letterSpacing: '1px'
		},
		caption: {
			fontFamily: 'Shadows Into Light',
			fontWeight: 400,
			letterSpacing: '1.2px'
		},
		overline: {
			fontFamily: 'Raleway',
			fontWeight: 400
		}
	},
	palette: {
		primary: {
			main: '#3a4051'
		},
		secondary: {
			main: '#c8ae5e',
			transparent: 'rgba(58, 64, 81, 0.6)'
		},
		white: {
			main: '#ffffff'
		},
		gray: {
			main: '#424242'
		},
		tonalOffset: 0.3,
		background: {
			paper: '#3a4051'
		},
		text: {
			reversed: '#c8ae5e'
		}
	}
})

theme = responsiveFontSizes(theme)

export default theme
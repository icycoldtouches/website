import React          from 'react'
import Container      from '@material-ui/core/Container'
import Grid           from '@material-ui/core/Grid'
import Typography     from '@material-ui/core/Typography'
import { Link }       from 'gatsby-theme-material-ui'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		padding: theme.spacing(4, 0)
	},
	itemColor: {
		color: theme.palette.primary.contrastText
	}
}))

const Footer = ({ lang }) => {
	const classes = useStyles()
	const year = new Date().getFullYear()
	return (
	  <Container maxWidth={false} component={'footer'} className={classes.root}>
		  <Container maxWidth={'lg'}>
			  <Grid container spacing={4} justify={'space-around'}>
				  <Grid item xs={12} md={3}>
					  <Typography variant={'caption'} align={'center'} gutterBottom>
						  <Link to={lang === 'de' ? '/sitemap' : '/en/sitemap'}
						        className={classes.itemColor}>{'Sitemap'}</Link>
					  </Typography>
				  </Grid>
				  <Grid item xs={12} md={3}>
					  <Typography variant={'caption'} align={'center'} gutterBottom>
						  <Link to={lang === 'de' ? '/impressum' : '/en/impressum'}
						        className={classes.itemColor}>Impressum</Link>
					  </Typography>
				  </Grid>
				  <Grid item xs={12} md={3}>
					  <Typography variant={'caption'} align={'center'} gutterBottom>
						  <Link to={lang === 'de' ? '/datenschutz/' : '/en/privacy-policy'}
						        className={classes.itemColor}>{lang === 'de' ? 'Datenschutz' : 'Privacy Policy'}</Link>
					  </Typography>
				  </Grid>
				  <Grid item xs={12} md={3}>
					  <Typography variant={'caption'} align={'center'} gutterBottom>
						  <Link to={lang === 'de' ? '/kontakt' : '/en/contact'}
						        className={classes.itemColor}>{lang === 'de' ? 'Kontakt' : 'Contact'}</Link>
					  </Typography>
				  </Grid>
			  </Grid>
		  </Container>
		  <Container maxWidth={'lg'}>
			  <Grid container spacing={4} justify={'center'}>
				  <Grid item xs={12}>
					  <Typography variant={'caption'} color={'textPrimary'} align={'center'}
					              className={classes.itemColor}>
						  &copy; copyright {year} || av photography
					  </Typography>
				  </Grid>
			  </Grid>
		  </Container>
	  </Container>
	)
}

export default Footer
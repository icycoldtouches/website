import React            from 'react'
import Container        from '@material-ui/core/Container'
import { makeStyles }   from '@material-ui/core/styles'
import { Grid }         from '@material-ui/core'
import { Link }         from 'gatsby'
import ChevronLeftIcon  from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Button           from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.white.main,
		padding: theme.spacing(10, 2, 0, 2),
		margin: theme.spacing(0, 0, 0, 0)
	},
	containerInner: {
		padding: theme.spacing(4, 0),
		[theme.breakpoints.up(768)]: {
			padding: theme.spacing(4, 1)
		}
	},
	flex: {
		display: 'flex'
	},
	prev: {
		marginRight: `auto`
	},
	next: {
		marginLeft: `auto`
	}
}))


const PrevNextProject = ({ prev, next, lang }) => {
	const classes = useStyles()

	return (
	  <Container maxWidth={false} className={classes.container}>
		  <Container maxWidth={'lg'} className={classes.containerInner}>
			  <Grid container spacing={4} justify={'space-between'}>
				  <Grid item xs={12} md={6} className={classes.flex}>
					  {prev && (
						<Button
						  variant={'contained'}
						  component={Link}
						  color={'secondary'}
						  size="small"
						  startIcon={<ChevronLeftIcon/>}
						  to={lang === 'de' ? `/projekte/${prev.fields.slug}` : `/en/projects/${prev.fields.slug}`}
						  aria-label={'previous project.'}
						  className={classes.prev}
						> {lang === 'de' ? `Vorheriges Projekt` : `Previous Project`}
						</Button>
					  )}
				  </Grid>
				  <Grid item xs={12} md={6} className={classes.flex}>
					  {next && (
						<Button
						  variant={'contained'}
						  component={Link}
						  color={'secondary'}
						  size="small"
						  endIcon={<ChevronRightIcon/>}
						  to={lang === 'de' ? `/projekte/${next.fields.slug}` : `/en/projects/${next.fields.slug}`}
						  aria-label={'previous project.'}
						  className={classes.next}
						> {lang === 'de' ? `Nächstes Projekt` : `Next Project`}
						</Button>
					  )}
				  </Grid>
			  </Grid>
		  </Container>
	  </Container>
	)
}

export default PrevNextProject
import React          from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container      from '@material-ui/core/Container'
import Typography     from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(0, 0, 4, 0)
	},
	title: {
		textAlign: 'center',
		position: 'relative',
		paddingBottom: theme.spacing(2),
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: '50%',
			transform: 'translateX(-50%)',
			width: 200,
			height: '2px',
			backgroundColor: theme.palette.secondary.main
		}
	},
	subTitle: {
		textAlign: 'center'
	}
}))

const SectionHeader = ({ data }) => {
	const classes = useStyles()
	return (
	  <Container maxWidth={'md'} className={classes.container}>
		  <Typography component={'h2'} variant={'h4'} gutterBottom className={classes.title}>
			  {data.title}
		  </Typography>
		  <Typography component={'p'} variant={'body2'} gutterBottom className={classes.subTitle}>
			  {data.subTitle}
		  </Typography>
	  </Container>
	)
}

export default SectionHeader
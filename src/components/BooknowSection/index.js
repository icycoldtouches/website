import React          from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container      from '@material-ui/core/Container'
import Grid           from '@material-ui/core/Grid'

import TextField from '@material-ui/core/TextField'
import Button    from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(10, 2)
	},
	containerInner: {
		padding: 0
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		[theme.breakpoints.up(768)]: {
			flexDirection: 'row'
		}
	},
	textField: {
		margin: theme.spacing(3, 0),
		width: '100%',
		'& label': {
			marginBottom: theme.spacing(2),
			display: 'block',
			fontFamily: theme.typography.h6.fontFamily,
			color: theme.palette.secondary.contrastText
		},
		[theme.breakpoints.up(768)]: {
			margin: theme.spacing(3, 1),
			width: 'calc(50% - 16px)'
		},
		[theme.breakpoints.up('md')]: {
			width: 200
		}
	},
	button: {
		margin: theme.spacing(3, 0),
		width: '100%',
		[theme.breakpoints.up(768)]: {
			margin: theme.spacing(3, 1),
			width: 200
		}
	}
}))

const Booknow = () => {
	const classes = useStyles()

	let current = new Date()
	let dd = current.getDate()
	let mm = current.getMonth() + 1
	let h = current.getHours()
	let m = current.getMinutes()

	const yyyy = current.getFullYear()
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	if (m < 10) {
		m = '0' + m
	}
	const today = `${yyyy}-${mm}-${dd}`
	const time = `${h}:${m}`
	return (
	  <Container maxWidth={false} className={classes.container}>
		  <Container maxWidth={'lg'} className={classes.containerInner}>
			  <Grid container justify={'space-between'} component={'form'}>

				  <TextField
					id="date"
					label="Date"
					type="date"
					defaultValue={today}
					className={classes.textField}
					InputLabelProps={{
						shrink: true
					}}
				  />

				  <TextField
					id="time"
					label="Time"
					type="time"
					defaultValue={time}
					className={classes.textField}
					InputLabelProps={{
						shrink: true
					}}
					inputProps={{
						step: 300 // 5 min
					}}
				  />

				  <TextField
					id="name"
					label="Name"
					type="text"
					className={classes.textField}
					InputLabelProps={{
						shrink: true
					}}
				  />

				  <TextField
					id="email"
					label="Email"
					type="email"
					className={classes.textField}
					InputLabelProps={{
						shrink: true
					}}
				  />
				  <Grid item xs={12} md={2}>
					  <Button variant="contained" color="secondary" size={'large'} className={classes.button}>
						  Book Now
					  </Button>
				  </Grid>
			  </Grid>
		  </Container>
	  </Container>
	)
}

export default Booknow
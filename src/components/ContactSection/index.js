import React          from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container      from '@material-ui/core/Container'
import SectionHeader  from '../SectionHeader'
import TextField      from '@material-ui/core/TextField'
import Grid           from '@material-ui/core/Grid'
import Button         from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.white.main,
		padding: theme.spacing(10, 2)
	},
	containerInner: {
		padding: theme.spacing(0)
	},
	hiddenFields: {
		visibility: 'hidden'
	},
	input: {
		width: '100%'
	}
}))

const Contact = () => {
	const classes = useStyles()
	const data = {
		title: `Contact`,
		subTitle: ``
	}

	return (
	  <Container maxWidth={false} className={classes.container}>
		  <SectionHeader data={data}/>
		  <Container maxWidth={'md'} className={classes.containerInner}>
			  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
				  <Grid container spacing={4}>
					  <Grid xs={12} item className={classes.hiddenFields}>
						  <input type="hidden" name={'form-name'} value={'contact-home'}/>
						  <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
					  </Grid>

					  <Grid item xs={12} md={6}>
						  <TextField required id={'first-name'} label={'First name'} variant={'outlined'}
						             className={classes.input}/>
					  </Grid>
					  <Grid item xs={12} md={6}>
						  <TextField required id={'last-name'} label={'Last name'} variant={'outlined'}
						             className={classes.input}/>
					  </Grid>
					  <Grid item xs={12} md={6}>
						  <TextField required id={'phone'} label={'Phone number'} variant={'outlined'}
						             className={classes.input}/>
					  </Grid>
					  <Grid item xs={12} md={6}>
						  <TextField required id={'email'} label={'Email'} variant={'outlined'}
						             className={classes.input}/>
					  </Grid>
					  <Grid item xs={12}>
						  <TextField
							id="massage"
							label="Message"
							placeholder="Message"
							multiline
							rows={4}
							rowsMax={8}
							variant="outlined"
							className={classes.input}
						  />
					  </Grid>
					  <Grid item xs={6}>
						  <Button variant="contained" color="secondary">
							  Send Message
						  </Button>
					  </Grid>
				  </Grid>

			  </form>
		  </Container>
	  </Container>
	)

}

export default Contact
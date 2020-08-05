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
		visibility: 'hidden',
		height: 0,
		padding: theme.spacing(0)
	},
	input: {
		width: '100%'
	}
}))

const Contact = ({ title, subTitle, lang }) => {
	const classes = useStyles()
	const data = {
		title: title,
		subTitle: subTitle
	}

	return (
	  <Container maxWidth={false} className={classes.container}>
		  {title !== undefined ? (<SectionHeader data={data}/>) : (<></>)}
		  <Container maxWidth={'md'} className={classes.containerInner}>
			  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
				  <Grid container spacing={4}>
					  <Grid xs={12} item className={classes.hiddenFields}>
						  <label htmlFor="form-name">bot field</label>
						  <input type="hidden" name={'form-name'} value={'contact-home'} id={'form-name'}
						         aria-label={'hidden form field for netlify'}/>
						  <label htmlFor={'bot-field'}>Don’t fill this out if you're human: <input
							name="bot-field" id={'bot-field'}
							aria-label={'hidden bot field, do not fill this form if you are human.'}/></label>
					  </Grid>

					  <Grid item xs={12} md={6}>
						  <TextField required id={'first-name'} label={lang === 'de' ? 'Vorname' : 'First name'}
						             variant={'outlined'}
						             className={classes.input}/>
					  </Grid>
					  <Grid item xs={12} md={6}>
						  <TextField required id={'last-name'} label={lang === 'de' ? 'Nachname' : 'Last name'}
						             variant={'outlined'}
						             className={classes.input}/>
					  </Grid>
					  <Grid item xs={12} md={6}>
						  <TextField required id={'phone'} label={lang === 'de' ? 'Telefonnummer' : 'Phone number'}
						             variant={'outlined'}
						             className={classes.input}/>
					  </Grid>
					  <Grid item xs={12} md={6}>
						  <TextField required id={'email'} label={'Email'} variant={'outlined'}
						             className={classes.input}/>
					  </Grid>
					  <Grid item xs={12}>
						  <TextField
							id="massage"
							label={lang === 'de' ? 'Nachricht' : 'Message'}
							placeholder={lang === 'de' ? 'Nachricht' : 'Message'}
							multiline
							rows={4}
							rowsMax={8}
							variant="outlined"
							className={classes.input}
						  />
					  </Grid>
					  <Grid item xs={6}>
						  <Button variant="contained" color="secondary">
							  {lang === 'de' ? 'Nachricht senden' : 'Send Message'}
						  </Button>
					  </Grid>
				  </Grid>

			  </form>
		  </Container>
	  </Container>
	)

}

export default Contact
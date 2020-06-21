import React          from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid           from '@material-ui/core/Grid'
import Container      from '@material-ui/core/Container'
import SectionHeader  from '../SectionHeader'
import Typography     from '@material-ui/core/Typography'
import Image          from 'material-ui-image'

const image = require('../../images/_DSC3293.jpeg')

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.white.main,
		padding: theme.spacing(10, 2)
	},
	containerInner: {
		padding: theme.spacing(4, 0),
		[theme.breakpoints.up(768)]: {
			padding: theme.spacing(4, 1)
		}
	},
	image: {
		borderRadius: '5px'
	}
}))

const About = () => {
	const classes = useStyles()
	const data = {
		title: `About AV Photography`,
		subTitle: ``
	}

	return (
	  <Container maxWidth={false} className={classes.container}>
		  <SectionHeader data={data}/>
		  <Container maxWidth={'lg'} className={classes.containerInner}>
			  <Grid container spacing={4}>
				  <Grid item xs={12} md={6}>
					  <Typography variant={'h5'} color={'textSecondary'} gutterBottom={true}>
						  I am just a dreamer soul with a star-dusted body.
					  </Typography>
					  <Typography variant={'body1'} color={'textPrimary'} gutterBottom={true}>
						  I like to create beautiful pictures of my dog, the
						  horses I meet and humans surrounding me.
					  </Typography>
					  <Typography variant={'body1'} color={'textPrimary'} gutterBottom={true}>
						  I grew up on a farm, and I was always surrounded by animals and nature.
						  I broke that connection when I
						  moved to Germany but found it again in 2016 through my dog, Thor.
					  </Typography>
					  <Typography variant={'h5'} color={'textSecondary'} gutterBottom={true}>
						  How I got to photography?
					  </Typography>
					  <Typography variant={'body1'} color={'textPrimary'} gutterBottom={true}>
						  Well, through my dog.
						  Most people are scared of him because of the breed and
						  size, so I thought well if ONLY they would be able to see his soul than they would understand.
					  </Typography>
					  <Typography variant={'h5'} color={'textSecondary'} gutterBottom={true}>
						  So what better way to capture his soul, then through photography?
					  </Typography>
					  <Typography variant={'body1'} color={'textPrimary'} gutterBottom={true}>
						  This was the plan, and then I got a semi-professional camera… and the results where… well,
						  not what I
						  expected. :-)
					  </Typography>
					  <Typography variant={'body1'} color={'textPrimary'} gutterBottom={true}>
						  I started reading, watching tons of videos, attending workshops and taking photos again and
						  again.
						  The theory began to make sense, the images started to get better, and today I am still
						  learning
						  and
						  practising any chance I get.
					  </Typography>
				  </Grid>
				  <Grid item xs={12} md={6}>
					  <Image src={image} aspectRatio={(1 / 1)} className={classes.image}/>
				  </Grid>
			  </Grid>
		  </Container>
	  </Container>
	)
}

export default About
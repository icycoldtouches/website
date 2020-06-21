import React, { useState } from 'react'
import { makeStyles }      from '@material-ui/core/styles'
import SectionHeader       from '../SectionHeader'
import Container           from '@material-ui/core/Container'
import Grid                from '@material-ui/core/Grid'
import CardMedia           from '@material-ui/core/CardMedia'
import AppBar              from '@material-ui/core/AppBar'
import Tabs                from '@material-ui/core/Tabs'
import Tab                 from '@material-ui/core/Tab'
import Typography          from '@material-ui/core/Typography'
import Box                 from '@material-ui/core/Box'
import PetsIcon            from '@material-ui/icons/Pets'
import BusinessCenterIcon  from '@material-ui/icons/BusinessCenter'
import FaceIcon            from '@material-ui/icons/Face'

const imageOne = require('../../images/02_Melanie & Lotte/Original/_DSC4397.jpg')
const imageTwo = require('../../images/_DSC1927.jpg')
const imageThree = require('../../images/_DSC1910.jpg')

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(10, 2)
	},
	containerInner: {
		padding: theme.spacing(0)
	},
	containerInnerItem: {
		padding: 0
	},
	tabs: {
		display: 'flex',
		flexDirection: 'column'
	},
	tabContainer: {
		padding: theme.spacing(4, 0),
		maxWidth: 1280,
		width: '100%',
		margin: 'auto',
		'& div': {
			paddingLeft: 0,
			paddingRight: 0
		},
		[theme.breakpoints.up(768)]: {
			padding: theme.spacing(8, 1)
		}
	},
	tabHeader: {
		maxWidth: 920,
		width: '100%',
		margin: 'auto'
	},
	media: {
		height: 0,
		paddingTop: '70.25%' // 16:9
	},
	mediaContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.up(1024)]: {
			justifyContent: 'start'
		}
	}
}))

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`services-tabpanel-${index}`}
		aria-labelledby={`services-tab-${index}`}
		{...other}
	  >
		  {value === index && (
			<Box p={3}>
				<Typography>{children}</Typography>
			</Box>
		  )}
	  </div>
	)
}

function a11yProps(index) {
	return {
		id: `services-tab-${index}`,
		'aria-controls': `services-tabpanel-${index}`
	}
}

const Services = () => {
	const classes = useStyles()
	const data = {
		title: 'Things I\'m Specialised In',
		subTitle: `
			
		`
	}

	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
	  <Container maxWidth={'xl'} className={classes.container}>
		  <SectionHeader data={data}/>
		  <Grid container spacing={4} className={classes.containerInner}>
			  <Grid item xs={12} className={classes.containerInnerItem}>
				  <AppBar position="static" className={classes.tabHeader}>
					  <Tabs value={value} onChange={handleChange} aria-label="services tabs"
					        className={classes.tabs} variant={'fullWidth'}>
						  <Tab label={<PetsIcon/>} {...a11yProps(0)} />
						  <Tab label={<BusinessCenterIcon/>} {...a11yProps(1)} />
						  <Tab label={<FaceIcon/>} {...a11yProps(2)} />
					  </Tabs>
				  </AppBar>
				  <TabPanel value={value} index={0} className={classes.tabContainer}>
					  <Grid container component={'span'} spacing={4}>
						  <Grid item component={'span'} xs={12} md={6} className={classes.mediaContainer}>
							  <CardMedia image={imageOne} title={'animal photography'} component={'span'}
							             className={classes.media}/>
						  </Grid>
						  <Grid item component={'span'} xs={12} md={6}>
							  <Typography component={'span'} variant={'h3'} color={'textSecondary'}>
								  Animal Photography
							  </Typography>
							  <br/>
							  <br/>
							  <Typography component={'span'} variant={'body1'}>
								  The bond you share with your horse or dog is like none other,
								  and it’s a feeling you will always want to remember.
							  </Typography>
							  <br/>
							  {' '}<br/>
							  <Typography component={'span'} variant={'body1'}>
								  The touch of their soft coat, the way they make you laugh,
								  how it feels to spend time together and wonder through golden fields at sunset.
							  </Typography>
						  </Grid>
					  </Grid>
				  </TabPanel>
				  <TabPanel value={value} index={1} className={classes.tabContainer}>
					  <Grid container component={'span'} spacing={4}>
						  <Grid item component={'span'} xs={12} md={6} className={classes.mediaContainer}>
							  <CardMedia image={imageTwo} title={'animal photography'} component={'span'}
							             className={classes.media}/>
						  </Grid>
						  <Grid item component={'span'} xs={12} md={6}>
							  <Typography component={'span'} variant={'h3'} color={'textSecondary'}>
								  Business & Corporate Photography
							  </Typography>
							  <br/>
							  <br/>
							  <Typography component={'span'} variant={'body1'}>
								  For people that want to show their work passion throughout professional photographs.
								  The photographs will showcase your work place as well as the work you do.
							  </Typography>
							  <br/>
							  {' '}<br/>
							  <Typography component={'span'} variant={'body1'}>
								  I am open to try new adventures. Feel free to contact me and let’s get this
								  challenge rolling.
							  </Typography>
						  </Grid>
					  </Grid>
				  </TabPanel>
				  <TabPanel value={value} index={2} className={classes.tabContainer}>
					  <Grid container component={'span'} spacing={4}>
						  <Grid item component={'span'} xs={12} md={6} className={classes.mediaContainer}>
							  <CardMedia image={imageThree} title={'animal photography'} component={'span'}
							             className={classes.media}/>
						  </Grid>
						  <Grid item component={'span'} xs={12} md={6}>
							  <Typography component={'span'} variant={'h3'} color={'textSecondary'}>
								  Adult & Baby Photography
							  </Typography>
							  <br/>
							  <br/>
							  <Typography component={'span'} variant={'body1'}>
								  Capturing the eyes and the mimic of a human is like an invitation and sacred
								  permission to look into their soul.
							  </Typography>
							  <br/>
							  {' '}<br/>
							  <Typography component={'span'} variant={'body1'}>
								  Looking back at some of the photographs I took,
								  I remember the laughter and even bits of the conversation I had with the person.
							  </Typography>
						  </Grid>
					  </Grid>
				  </TabPanel>
			  </Grid>
		  </Grid>
	  </Container>
	)
}

export default Services
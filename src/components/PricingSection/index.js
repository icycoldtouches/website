import React          from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container      from '@material-ui/core/Container'
import SectionHeader  from '../SectionHeader'
import Grid           from '@material-ui/core/Grid'
import Card           from '@material-ui/core/Card'
import CardActions    from '@material-ui/core/CardActions'
import CardContent    from '@material-ui/core/CardContent'
import CardHeader     from '@material-ui/core/CardHeader'
import Button         from '@material-ui/core/Button'
import Typography     from '@material-ui/core/Typography'
import List           from '@material-ui/core/List'
import ListItem       from '@material-ui/core/ListItem'
import ListItemText   from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(10, 2)
	},
	card: {
		minWidth: 275,
		backgroundColor: theme.palette.white.main,
		padding: theme.spacing(0, 0, 4, 0),
		boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), ' +
		  '0px 4px 5px 0px rgba(0,0,0,0.14), ' +
		  '0px 1px 10px 0px rgba(0,0,0,0.12)'
	},
	cardHeader: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		textAlign: 'center'
	},
	cardContent: {
		padding: theme.spacing(2, 1)
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'center'
	},
	title: {
		textAlign: 'center'
	},
	price: {
		color: theme.palette.secondary.main,
		fontSize: '4rem',
		textAlign: 'center',
		fontFamily: theme.typography.h1.fontFamily
	},
	list: {
		marginBottom: 12
	},
	listItemText: {
		textAlign: 'center',
		fontSize: theme.typography.body1.fontSize
	},
	gridCenter: {
		display: 'flex',
		justifyContent: 'center',
		alignSelf: 'center',
		flexDirection: 'column',
		width: '100%',
		height: 'fit-content'
	}
}))

const Pricing = () => {
	const classes = useStyles()
	const data = {
		title: `Pricing`,
		subTitle: ``
	}

	return (
	  <Container maxWidth={false} className={classes.container}>
		  <SectionHeader data={data}/>
		  <Container maxWidth={'lg'}>
			  <Grid container spacing={4}>
				  <Grid item xs={12} md={4} className={classes.gridCenter}>
					  <Card className={classes.card} variant="outlined" raised={true}>
						  <CardContent className={classes.cardContent}>
							  <Typography className={classes.title} variant={'h5'} component={'h2'}
							              color={'textSecondary'} gutterBottom>
								  Single Session
							  </Typography>
							  <Typography component={'h3'} className={classes.price}>
								  119€
							  </Typography>
							  <List component="ul" aria-label="single session included" className={classes.list}>
								  <ListItem>
									  <ListItemText primary={'2h of photographing'} className={classes.listItemText}/>
								  </ListItem>
								  <ListItem>
									  <ListItemText primary={'10-15 Photographs'} className={classes.listItemText}/>
								  </ListItem>
								  <ListItem>
									  <ListItemText primary={'extra 1h: €59'} className={classes.listItemText}/>
								  </ListItem>
								  <ListItem>
									  <ListItemText primary={' 1h drive from Aachen'} className={classes.listItemText}/>
								  </ListItem>
							  </List>
						  </CardContent>
						  <CardActions className={classes.cardActions}>
							  <Button size="small" variant={'contained'} color={'secondary'}>Learn More</Button>
						  </CardActions>
					  </Card>
				  </Grid>
				  <Grid item xs={12} md={4} className={classes.gridCenter}>
					  <Card className={classes.card} variant="outlined" raised={true}>
						  <CardHeader title={'Popular Choice'} className={classes.cardHeader}/>
						  <CardContent className={classes.cardContent}>
							  <Typography className={classes.title} variant={'h5'} component={'h2'}
							              color={'textSecondary'} gutterBottom>
								  Full Service
							  </Typography>
							  <Typography component={'h3'} className={classes.price}>
								  359€
							  </Typography>
							  <Typography component={'p'} className={classes.listItemText}>
								  Everything in single service plus:
							  </Typography>
							  <List component="ul" aria-label="full service included" className={classes.list}>
								  <ListItem>
									  <ListItemText primary={'electronically compiled album included'}
									                className={classes.listItemText}/>
								  </ListItem>
								  <ListItem>
									  <ListItemText primary={'Album Print Out on hardcover'} secondary={'28x21cm'}
									                className={classes.listItemText}/>
								  </ListItem>
								  <ListItem>
									  <ListItemText primary={'Poster Print Out on Canvas'} secondary={'80x60cm'}
									                className={classes.listItemText}/>
								  </ListItem>
							  </List>
						  </CardContent>
						  <CardActions className={classes.cardActions}>
							  <Button size="small" variant={'contained'} color={'secondary'}>Learn More</Button>
						  </CardActions>
					  </Card>
				  </Grid>
				  <Grid item xs={12} md={4} className={classes.gridCenter}>
					  <Card className={classes.card} variant="outlined" raised={true}>
						  <CardContent className={classes.cardContent}>
							  <Typography className={classes.title} variant={'h5'} component={'h2'}
							              color={'textSecondary'} gutterBottom>
								  Day Session
							  </Typography>
							  <Typography component={'h3'} className={classes.price}>
								  899€
							  </Typography>
							  <List component="ul" aria-label="day session included" className={classes.list}>
								  <ListItem>
									  <ListItemText primary={'8h - 10h of photographing'}
									                className={classes.listItemText}/>
								  </ListItem>
								  <ListItem>
									  <ListItemText primary={'100 - 150 Photographs'} className={classes.listItemText}/>
								  </ListItem>
								  <ListItem>
									  <ListItemText primary={'extra 1h: €59'} className={classes.listItemText}/>
								  </ListItem>
								  <ListItem>
									  <ListItemText primary={'3h drive from Aachen'} className={classes.listItemText}/>
								  </ListItem>
							  </List>
						  </CardContent>
						  <CardActions className={classes.cardActions}>
							  <Button size="small" variant={'contained'} color={'secondary'}>Learn More</Button>
						  </CardActions>
					  </Card>
				  </Grid>
			  </Grid>
		  </Container>
	  </Container>
	)
}

export default Pricing
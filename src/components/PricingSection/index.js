import React          from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container      from '@material-ui/core/Container'
import SectionHeader  from '../SectionHeader'
import Grid           from '@material-ui/core/Grid'
import Card           from '@material-ui/core/Card'
import CardActions    from '@material-ui/core/CardActions'
import CardContent    from '@material-ui/core/CardContent'
import Button         from '@material-ui/core/Button'
import Typography     from '@material-ui/core/Typography'
import List           from '@material-ui/core/List'
import CardHeader     from '@material-ui/core/CardHeader'
import ListItem       from '@material-ui/core/ListItem'
import ListItemText   from '@material-ui/core/ListItemText'
import { Link }       from 'gatsby'

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(10, 2)
	},
	containerInner: {
		padding: theme.spacing(0)
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

const Pricing = ({ title, subTitle, lang, prices }) => {
	const classes = useStyles()
	const data = {
		title: title,
		subTitle: subTitle
	}

	return (
	  <Container maxWidth={false} className={classes.container}>
		  <SectionHeader data={data}/>
		  <Container maxWidth={'lg'} className={classes.containerInner}>
			  <Grid container spacing={4}>
				  {prices.edges.map(({ node }, index) => (
					<Grid key={index} item xs={12} md={4} className={classes.gridCenter}>
						<Card className={classes.card} variant="outlined" raised={true}>
							{node.popular === true ? (
							  <CardHeader title={lang === 'de' ? 'Beliebte Wahl' : 'Popular Choice'}
							              className={classes.cardHeader}/>) : (<></>)}
							<CardContent className={classes.cardContent}>
								<Typography className={classes.title} variant={'h5'} component={'h2'}
								            color={'textPrimary'} gutterBottom>
									{node.title}
								</Typography>
								<Typography component={'h3'} className={classes.price}>
									{node.sessionPrice}€
								</Typography>
								<List component="ul" aria-label="full service included" className={classes.list}>
									{node.included.map((item, index) => (
									  <ListItem key={index}>
										  <ListItemText
											primary={
												<Typography variant={'body2'} component={'p'} color={'textPrimary'}>
													{item}
												</Typography>
											}
											className={classes.listItemText}/>
									  </ListItem>
									))}
								</List>
							</CardContent>
							<CardActions className={classes.cardActions}>
								<Button variant={'contained'} component={Link} color={'secondary'} size="small"
								        to={lang === 'de' ? `kontakt` : `contact`}
								        aria-label={'book this session.'}>{lang === 'de' ? `Kontakt aufnehmen` : `Contact me`}</Button>
							</CardActions>
						</Card>
					</Grid>
				  ))}
			  </Grid>
		  </Container>
	  </Container>
	)
}

export default Pricing
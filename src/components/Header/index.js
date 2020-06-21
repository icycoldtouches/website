import React, { useState } from 'react'
import { makeStyles }      from '@material-ui/core/styles'
import AppBar              from '@material-ui/core/AppBar'
import Drawer              from '@material-ui/core/Drawer'
import Toolbar             from '@material-ui/core/Toolbar'
import IconButton          from '@material-ui/core/IconButton'
import Typography          from '@material-ui/core/Typography'
import MoreIcon            from '@material-ui/icons/MoreVert'
import { Link }            from 'gatsby-theme-material-ui'

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1
	},
	appBar: {
		backgroundColor: theme.palette.white.main,
		color: theme.palette.text.reversed,
		borderBottom: '2px solid',
		borderBottomColor: theme.palette.background.default
	},
	navBar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	menuItem: {
		padding: theme.spacing(2),
		minHeight: '62px',
		display: 'flex',
		placeItems: 'flex-end',
		borderBottom: '2px solid',
		borderWidth: '0%',
		transition: 'all 300ms ease-in-out',
		borderBottomColor: 'transparent',
		fontSize: '20px',
		textDecoration: 'none !important',
		color: theme.palette.background.paper
	},
	menuItemActive: {
		borderWidth: '100%',
		borderBottomColor: theme.palette.text.reversed,
		color: theme.palette.text.reversed
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		display: 'block',
		paddingLeft: theme.spacing(2)
	},

	inputRoot: {
		color: 'inherit'
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	list: {
		width: 300
	},
	drawer: {
		backgroundColor: theme.palette.white.main,
		width: 300,
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	}
}))

const Header = () => {
	const classes = useStyles()

	const [state, setState] = useState({
		right: false
	})

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return
		}

		setState({ ...state, [anchor]: open })
	}

	const mobileMenuId = 'mobile-menu'
	const list = (anchor) => (
	  <nav
		className={classes.drawer}
		role="presentation"
		onClick={toggleDrawer(anchor, false)}
		onKeyDown={toggleDrawer(anchor, false)}
		id={mobileMenuId}
	  >

		  <Typography variant={'h6'}>
			  <Link to={'/'} className={classes.menuItem}
			        activeClassName={classes.menuItemActive}>Home</Link>
		  </Typography>
		  <Typography variant={'h6'}>
			  <Link to={'/projects/'} className={classes.menuItem}
			        activeClassName={classes.menuItemActive}>Projects</Link>
		  </Typography>
		  <Typography variant={'h6'}>
			  <Link to={'/pricing/'} className={classes.menuItem}
			        activeClassName={classes.menuItemActive}>Pricing</Link>
		  </Typography>
		  <Typography variant={'h6'}>
			  <Link to={'/blog/'} className={classes.menuItem}
			        activeClassName={classes.menuItemActive}>Blog</Link>
		  </Typography>
		  <Typography variant={'h6'}>
			  <Link to={'/contact/'} className={classes.menuItem}
			        activeClassName={classes.menuItemActive}>Contact</Link>
		  </Typography>
	  </nav>

	)

	const renderMobileMenu = (
	  <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
		  {list('right')}
	  </Drawer>
	)

	return (
	  <div className={classes.grow}>
		  <AppBar className={classes.appBar} elevation={0}>
			  <Toolbar>
				  <Typography variant="h6" noWrap color={'textSecondary'} className={classes.title}>
					  AV Photography
				  </Typography>
				  <div className={classes.grow}/>
				  <div className={classes.sectionDesktop}>
					  <nav className={classes.navBar}>
						  <Typography variant={'h6'}>
							  <Link to={'/'} className={classes.menuItem}
							        activeClassName={classes.menuItemActive}>Home</Link>
						  </Typography>
						  <Typography variant={'h6'}>
							  <Link to={'/projects/'} className={classes.menuItem}
							        activeClassName={classes.menuItemActive}>Projects</Link>
						  </Typography>
						  <Typography variant={'h6'}>
							  <Link to={'/pricing/'} className={classes.menuItem}
							        activeClassName={classes.menuItemActive}>Pricing</Link>
						  </Typography>
						  <Typography variant={'h6'}>
							  <Link to={'/blog/'} className={classes.menuItem}
							        activeClassName={classes.menuItemActive}>Blog</Link>
						  </Typography>
						  <Typography variant={'h6'}>
							  <Link to={'/contact/'} className={classes.menuItem}
							        activeClassName={classes.menuItemActive}>Contact</Link>
						  </Typography>
					  </nav>
				  </div>
				  <div className={classes.sectionMobile}>
					  <IconButton
						aria-label="menu"
						aria-controls={mobileMenuId}
						onClick={toggleDrawer('right', true)}
						color="inherit"
					  >
						  <MoreIcon/>
					  </IconButton>
				  </div>
			  </Toolbar>
		  </AppBar>
		  {renderMobileMenu}
	  </div>
	)
}

export default Header
require('dotenv').config()

module.exports = {
	siteMetadata: {
		title: `Alexandra Vlad - Photography`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@av`,
		siteUrl: `https://alexandra-vlad.com`
	},
	plugins: [
		{
			resolve: `gatsby-theme-material-ui`,
			options: {
				webFontsConfig: {
					fonts: {
						google: [
							{
								family: `Raleway`,
								variants: [`300`, `400`, `500`]
							},
							{
								family: `Shadows Into Light`,
								variants: [`400`]
							}
						]
					}
				}
			}
		},
		{
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				host: `https://alexandra-vlad.com`,
				sitemap: `https://alexandra-vlad.com/sitemap.xml`,
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/sitemap.xml`
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-react-helmet-canonical-urls`,
			options: {
				siteUrl: `https://alexandra-vlad.com`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-i18n`,
			options: {
				langKeyDefault: '',
				langKeyForNull: '',
				prefixDefault: false,
				useLangKeyLayout: false
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: 'UA-174590387-1',
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: ['/preview/**', '/do-not-track/me/too/'],
				// Delays sending pageview hits on route update (in milliseconds)
				pageTransitionDelay: 0,
				// Defers execution of google analytics script after page load
				defer: true,
				// Any additional optional fields
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: 'https://alexandra-vlad.com'
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images-contentful`,
						options: {
							maxWidth: 800,
							withWebp: true,
							loading: 'lazy'
						}
					}
				]
			}
		},
		// {
		//   resolve: `gatsby-plugin-manifest`,
		//   options: {
		//     name: `gatsby-starter-default`,
		//     short_name: `starter`,
		//     start_url: `/`,
		//     background_color: `#c8ae5e`,
		//     theme_color: `#c8ae5e`,
		//     display: `minimal-ui`,
		//     icon: `src/images/gatsby-icon.png`,
		//   },
		// },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`
	]
}

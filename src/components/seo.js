/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React                       from 'react'
import PropTypes                   from 'prop-types'
import { Helmet }                  from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

function SEO({ lang, meta, title, img, projectDescription, isProject }) {
	const { site } = useStaticQuery(
	  graphql`
          query {
              site {
                  siteMetadata {
                      title
                      author
                  }
              }
          }
	  `
	)

	const description = lang === 'de'
	  ?
	  `
    Professionelle, einzigartige und authentische Fotografie, um Ihre liebsten Erinnerungen lebendig zu halten. Tier- und Menschenfotografie, Unternehmens- und Geschäftsporträts sind meine Leidenschaft.
    `
	  :
	  `
    Professional, unique and authentic photography to keep your dearest memories alive. Animal & People Photography, Corporate & Business Portraits are my  passion.
    `
	const strippedProjectDescription = projectDescription ? projectDescription.replace(/(<([^>]+)>)/gi, '') : ''
	const metaDescription = isProject === true ? strippedProjectDescription : description

	return (
	  <Helmet
		htmlAttributes={{
			lang
		}}
		title={title}
		titleTemplate={`%s | ${site.siteMetadata.title}`}
		meta={[
			{
				name: `description`,
				content: metaDescription
			},
			{
				property: `og:title`,
				content: title
			},
			{
				property: `og:description`,
				content: metaDescription
			},
			{
				property: `og:locale`,
				content: lang === 'de' ? `de` : `en`
			},
			{
				property: `og:locale:alternate`,
				content: lang === 'de' ? `en` : `de`
			},
			{
				property: `og:type`,
				content: `website`
			},
			{
				property: `og:image`,
				content: img
			},
			{
				name: `twitter:card`,
				content: `summary`
			},
			{
				name: `twitter:creator`,
				content: site.siteMetadata.author
			},
			{
				name: `twitter:title`,
				content: title
			},
			{
				name: `twitter:description`,
				content: metaDescription
			},
			{
				name: `twitter:image`,
				content: `${img}`
			}
		].concat(meta)}
	  />
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired
}

export default SEO

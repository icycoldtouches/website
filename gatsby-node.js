const path = require('path')

exports.onCreateWebpackConfig = ({ stage, rules, loaders, actions }) => {
	switch (stage) {
		case 'build-html':
			actions.setWebpackConfig({
				module: {
					rules: [
						{
							test: /isotope-layout/,
							use: [loaders.null()]
						}
					]
				}
			})
			break
	}
}

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `ContentfulProject`) {
		const slug = node.projectSlug
		createNodeField({
			node,
			name: `slug`,
			value: slug,
			title: node.projectTitle
		})
	}


	if (node.internal.type === `ContentfulPage`) {
		const slug = node.slug
		createNodeField({
			node,
			name: `slug`,
			value: slug,
			title: node.projectTitle
		})
	}
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const result = await graphql(
	  `
	    query {
		    projects: allContentfulProject(filter: { node_locale: { eq: "de" } }) {
			    edges {
			      node {
			        fields {
			          slug
			        }
			      }
			    }
			}
			projectsEN: allContentfulProject(filter: { node_locale: { eq: "en" } }) {
			    edges {
			      node {
			        fields {
			          slug
			        }
			      }
			    }
			}
			pages: allContentfulPage(filter: { node_locale: { eq: "de" } }) {
			    edges {
			      node {
			        fields {
			            slug
			          }
			      }
			    }
			}
			pagesEN: allContentfulPage(filter: { node_locale: { eq: "en" } }) {
			    edges {
			      node {
			        fields {
			            slug
			          }
			      }
			    }
			}
		}
	  `
	)


	const projects = result.data.projects.edges

	projects.forEach(({ node }, index) => {

		const previous = index === projects.length - 1 ? null : projects[index + 1].node
		const next = index === 0 ? null : projects[index - 1].node

		createPage({
			path: `/projekte/${node.fields.slug}`,
			component: path.resolve(`./src/templates/project.js`),
			context: {
				slug: node.fields.slug,
				next: next,
				prev: previous
			}
		})
	})

	const projectsEN = result.data.projectsEN.edges

	projectsEN.forEach(({ node }, index) => {

		const previous = index === projectsEN.length - 1 ? null : projectsEN[index + 1].node
		const next = index === 0 ? null : projectsEN[index - 1].node

		createPage({
			path: `/en/projects/${node.fields.slug}`,
			component: path.resolve(`./src/templates/project.en.js`),
			context: {
				slug: node.fields.slug,
				next: next,
				prev: previous
			}
		})
	})

	const pages = result.data.pages.edges

	pages.forEach(({ node, next, prev }) => {
		console.log(node.fields)
		createPage({
			path: `/${node.fields.slug}`,
			component: path.resolve(`./src/templates/page.js`),
			context: {
				slug: node.fields.slug,
				next,
				prev
			}
		})
	})

	const pagesEN = result.data.pagesEN.edges

	pagesEN.forEach(({ node, next, prev }) => {
		console.log(node.fields)
		createPage({
			path: `/en/${node.fields.slug}`,
			component: path.resolve(`./src/templates/page.en.js`),
			context: {
				slug: node.fields.slug,
				next,
				prev
			}
		})
	})
}
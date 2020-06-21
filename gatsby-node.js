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

        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	dados_Line5: tryRequire('./dados_Line5.png') || require('./questionMark.png'),
	dados_Line6: tryRequire('./dados_Line6.png') || require('./questionMark.png'),
}
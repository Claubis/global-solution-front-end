
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
	_7educao_marvetor1: tryRequire('./_7educao_marvetor1.png') || require('./questionMark.png'),
	_7educao_Line15: tryRequire('./_7educao_Line15.png') || require('./questionMark.png'),
	_7educao_Line16: tryRequire('./_7educao_Line16.png') || require('./questionMark.png'),
	_7educao_Line17: tryRequire('./_7educao_Line17.png') || require('./questionMark.png'),
	_7educao_Forward: tryRequire('./_7educao_Forward.png') || require('./questionMark.png'),
}
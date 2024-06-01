
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
	loginverdados_background: tryRequire('./loginverdados_background.png') || require('./questionMark.png'),
	loginverdados_logoimage: tryRequire('./loginverdados_logoimage.png') || require('./questionMark.png'),
	loginverdados_imagegradiente: tryRequire('./loginverdados_imagegradiente.png') || require('./questionMark.png'),
	loginverdados_Vector: tryRequire('./loginverdados_Vector.png') || require('./questionMark.png'),
	loginverdados_Line8: tryRequire('./loginverdados_Line8.png') || require('./questionMark.png'),
	loginverdados_Line8_1: tryRequire('./loginverdados_Line8_1.png') || require('./questionMark.png'),
	loginverdados_Line8_2: tryRequire('./loginverdados_Line8_2.png') || require('./questionMark.png'),
	loginverdados_Line9: tryRequire('./loginverdados_Line9.png') || require('./questionMark.png'),
}
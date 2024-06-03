
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
	login_imagegradiente: tryRequire('./login_imagegradiente.png') || require('./questionMark.png'),
	login_Vector: tryRequire('./login_Vector.png') || require('./questionMark.png'),
	login_Vector_1: tryRequire('./login_Vector_1.png') || require('./questionMark.png'),
	login_Vector_2: tryRequire('./login_Vector_2.png') || require('./questionMark.png'),
	login_Vector_3: tryRequire('./login_Vector_3.png') || require('./questionMark.png'),
	login_Letter: tryRequire('./login_Letter.png') || require('./questionMark.png'),
}
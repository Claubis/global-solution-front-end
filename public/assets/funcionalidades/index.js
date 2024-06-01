
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
	_4funcionalidades_Vector: tryRequire('./_4funcionalidades_Vector.png') || require('./questionMark.png'),
	_4funcionalidades_mockupcel22: tryRequire('./_4funcionalidades_mockupcel22.png') || require('./questionMark.png'),
	_4funcionalidades_BookAndPencil: tryRequire('./_4funcionalidades_BookAndPencil.png') || require('./questionMark.png'),
	_4funcionalidades_Siren: tryRequire('./_4funcionalidades_Siren.png') || require('./questionMark.png'),
	_4funcionalidades_Country: tryRequire('./_4funcionalidades_Country.png') || require('./questionMark.png'),
	_4funcionalidades_TailOfWhale: tryRequire('./_4funcionalidades_TailOfWhale.png') || require('./questionMark.png'),
	_4funcionalidades_Vector_1: tryRequire('./_4funcionalidades_Vector_1.png') || require('./questionMark.png'),
	_4funcionalidades_mockupcel12: tryRequire('./_4funcionalidades_mockupcel12.png') || require('./questionMark.png'),
}
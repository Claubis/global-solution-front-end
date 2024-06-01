
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
	_2misso_carouselimage: tryRequire('./_2misso_carouselimage.png') || require('./questionMark.png'),
	_2misso_Line2: tryRequire('./_2misso_Line2.png') || require('./questionMark.png'),
	_2misso_Line3: tryRequire('./_2misso_Line3.png') || require('./questionMark.png'),
	_2misso_Line4: tryRequire('./_2misso_Line4.png') || require('./questionMark.png'),
	_2misso_arrowfoward: tryRequire('./_2misso_arrowfoward.png') || require('./questionMark.png'),
	_2misso_arrowback: tryRequire('./_2misso_arrowback.png') || require('./questionMark.png'),
	_2misso_contbackground: tryRequire('./_2misso_contbackground.png') || require('./questionMark.png'),
	_2misso_Address: tryRequire('./_2misso_Address.png') || require('./questionMark.png'),
	_2misso_Storytelling: tryRequire('./_2misso_Storytelling.png') || require('./questionMark.png'),
	_2misso_Alarm: tryRequire('./_2misso_Alarm.png') || require('./questionMark.png'),
}
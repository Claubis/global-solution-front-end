
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
	_3sobreoprojeto_video: tryRequire('./_3sobreoprojeto_video.png') || require('./questionMark.png'),
	_3sobreoprojeto_play: tryRequire('./_3sobreoprojeto_play.png') || require('./questionMark.png'),
}
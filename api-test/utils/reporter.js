const addContext = require('mochawesome/addContext');

export function addContextToReport(_this, res) {
	addContext(_this, '*********************************************');
	delete res.text;
	addContext(_this, JSON.stringify(res, undefined, 3));
	addContext(_this, JSON.stringify(res.body, undefined, 3));
}

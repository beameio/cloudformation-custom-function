const cfn_response = require('cfn-response');
const debug = require("debug")('beameio:cfn');

exports.handler = (event, context) => {
	try {
		debug('Event %o', event);

		switch (event.RequestType) {
			case 'Create':
				debug(`Creating was called`);
				break;
			case 'Update':
				debug(`Update was called`);
				break;
			case 'Delete':
				debug(`Delete was called`);
				break;
			default:
				cfn_response.send(event, context, cfn_response.FAILED, {});
				break;
		}
		cfn_response.send(event, context, cfn_response.SUCCESS, {});
	} catch (err) {
		console.error(err);
		cfn_response.send(event, context, cfn_response.FAILED, {});
	}
};

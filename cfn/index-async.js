const cfn_response = require('cfn-response-async');
const debug = require("debug")('beameio:cfn');

exports.handler = async (event, context) => {
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
				await cfn_response.send(event, context, cfn_response.FAILED, {});
				break;
		}
		await cfn_response.send(event, context, cfn_response.SUCCESS, {});
	} catch (err) {
		console.error(err);
		await cfn_response.send(event, context, cfn_response.FAILED, {});
	}
};

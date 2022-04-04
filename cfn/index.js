const debug = require("debug")('beameio:cfn');
const cfnresponse = require('cfn-response');

exports.handler = async (event, context) => {
	try {
		debug('Event', event.RequestType, event.StackId, event.RequestId, event.LogicalResourceId);

		switch (event.RequestType) {
			case 'Create':
				debug(`Creating was called`);
				cfnresponse.send(event, context, cfnresponse.SUCCESS, {});
				break;
			case 'Update':
				debug(`Update was called`);
				cfnresponse.send(event, context, cfnresponse.SUCCESS, {});
				break;
			case 'Delete':
				debug(`Delete was called`);
				cfnresponse.send(event, context, cfnresponse.SUCCESS, {});
				break;
			default:
				cfnresponse.send(event, context, cfnresponse.FAILED, {});
				break;
		}
	} catch (err) {
		console.error(err);
		cfnresponse.send(event, context, cfnresponse.FAILED, {});
	}
};

import debug0 from "debug";
import {send, SUCCESS, FAILED} from "cfn-response-async";

const debug = debug0('beameio:cfn');

export const handler = async (event, context) => {
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
				await send(event, context, FAILED, {});
				break;
		}
		await send(event, context, SUCCESS, {});
	} catch (err) {
		console.error(err);
		await send(event, context, FAILED, {});
	}
};

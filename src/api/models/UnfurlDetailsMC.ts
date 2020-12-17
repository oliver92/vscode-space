/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachmentInfo } from './AttachmentInfo';
import type { MCMessage } from './MCMessage';

export type UnfurlDetailsMC = {
    message: MCMessage;
    inlineUnfurls?: Array<AttachmentInfo> | null;
}

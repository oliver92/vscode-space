/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageRecipient_Channel } from './MessageRecipient_Channel';
import type { MessageRecipient_CodeReview } from './MessageRecipient_CodeReview';
import type { MessageRecipient_Issue } from './MessageRecipient_Issue';
import type { MessageRecipient_Member } from './MessageRecipient_Member';

export type MessageRecipient = (MessageRecipient_Channel | MessageRecipient_Member | MessageRecipient_Issue | MessageRecipient_CodeReview);

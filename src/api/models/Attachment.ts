/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeletedAttachment } from './DeletedAttachment';
import type { FileAttachment } from './FileAttachment';
import type { ImageAttachment } from './ImageAttachment';
import type { ProfileLinkPreview } from './ProfileLinkPreview';
import type { UnfurlAttachment } from './UnfurlAttachment';
import type { VideoAttachment } from './VideoAttachment';

export type Attachment = (ProfileLinkPreview | DeletedAttachment | FileAttachment | VideoAttachment | ImageAttachment | UnfurlAttachment);

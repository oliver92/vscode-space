/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UnfurlDetails } from './UnfurlDetails';

export type Unfurl = {
    title: string;
    link: string;
    text: string;
    details?: UnfurlDetails | null;
    sitename?: string | null;
    image?: string | null;
    imageMime?: string | null;
    imageWidth?: number | null;
    imageHeight?: number | null;
    video?: string | null;
    videoIFrame?: string | null;
    videoMime?: string | null;
    videoHeight?: number | null;
    videoWidth?: number | null;
    favicon?: string | null;
}

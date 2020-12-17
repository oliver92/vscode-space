/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExternalArticle = {
    title: string;
    content: string;
    authorId: string;
    created: string;
    teams?: Array<string> | null;
    locations?: Array<string> | null;
    externalId?: string | null;
    externalUrl?: string | null;
}

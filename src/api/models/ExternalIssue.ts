/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExternalIssue = {
    summary: string;
    description?: string | null;
    status: string;
    assignee?: string | null;
    externalId: string;
    externalName?: string | null;
    externalUrl?: string | null;
}

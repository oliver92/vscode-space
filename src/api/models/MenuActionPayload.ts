/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MenuActionContext } from './MenuActionContext';

export type MenuActionPayload = {
    extensionName: string;
    context: MenuActionContext;
    accessToken?: string | null;
    verificationToken?: string | null;
    userId: string;
}

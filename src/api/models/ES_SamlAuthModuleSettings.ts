/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ES_SamlAttributeNames } from './ES_SamlAttributeNames';
import type { SSLKeystore } from './SSLKeystore';

export type ES_SamlAuthModuleSettings = {
    idpUrl: string;
    idpEntityId: string;
    idpCertificateSHA256: string;
    spEntityId: string;
    sslKeystore?: SSLKeystore | null;
    registerNewUsers: boolean;
    contactProfileId?: string | null;
    attributeNames: ES_SamlAttributeNames;
}

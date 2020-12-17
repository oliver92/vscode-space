/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CertificateInfo } from './CertificateInfo';

export type TrustedCertificate = {
    id: string;
    alias: string;
    data: string;
    info: CertificateInfo;
    archived: boolean;
}

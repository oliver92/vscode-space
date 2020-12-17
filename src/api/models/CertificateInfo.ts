/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Fingerprint } from './Fingerprint';

export type CertificateInfo = {
    certificateType: string;
    version: number;
    serialNumber: string;
    issuedBy: string;
    issuedTo: string;
    validFrom: string;
    validTo: string;
    algorithm: string;
    fingerprint: Fingerprint;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QRCode } from './QRCode';

export type TwoFactorAuthenticationSecret = {
    secretKey: string;
    qrCode: QRCode;
    scratchCodes: Array<number>;
}

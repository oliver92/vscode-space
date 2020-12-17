/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PasswordStrength } from './PasswordStrength';

export type ES_BuiltinAuthModuleSettings = {
    passwordStrengthPolicy: PasswordStrength;
    domains?: Array<string> | null;
}

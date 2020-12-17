/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImportExistsPolicy_Skip } from './ImportExistsPolicy_Skip';
import type { ImportExistsPolicy_Update } from './ImportExistsPolicy_Update';

export type ImportExistsPolicy = (ImportExistsPolicy_Skip | ImportExistsPolicy_Update);

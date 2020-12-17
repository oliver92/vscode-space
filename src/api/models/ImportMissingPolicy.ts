/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImportMissingPolicy_ReplaceWithDefault } from './ImportMissingPolicy_ReplaceWithDefault';
import type { ImportMissingPolicy_Skip } from './ImportMissingPolicy_Skip';

export type ImportMissingPolicy = (ImportMissingPolicy_Skip | ImportMissingPolicy_ReplaceWithDefault);

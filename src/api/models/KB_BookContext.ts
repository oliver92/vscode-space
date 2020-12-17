/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KbGlobalContext } from './KbGlobalContext';
import type { KbPersonalContext } from './KbPersonalContext';
import type { KbProjectContext } from './KbProjectContext';

export type KB_BookContext = (KbGlobalContext | KbProjectContext | KbPersonalContext);

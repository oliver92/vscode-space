/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LaunchResult_Error } from './LaunchResult_Error';
import type { LaunchResult_Success } from './LaunchResult_Success';

export type LaunchResult = (LaunchResult_Success | LaunchResult_Error);

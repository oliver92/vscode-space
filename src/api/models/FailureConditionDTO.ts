/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NonZeroExitCodeDTO } from './NonZeroExitCodeDTO';
import type { OutOfMemoryDTO } from './OutOfMemoryDTO';
import type { TestFailedDTO } from './TestFailedDTO';
import type { TimeOutDTO } from './TimeOutDTO';

export type FailureConditionDTO = (NonZeroExitCodeDTO | TestFailedDTO | OutOfMemoryDTO | TimeOutDTO);

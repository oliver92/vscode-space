/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RecurrenceRuleEnds } from './RecurrenceRuleEnds';
import type { RecurrenceRuleFreq } from './RecurrenceRuleFreq';

export type RecurrenceRule = {
    freq: RecurrenceRuleFreq;
    ends: RecurrenceRuleEnds;
}

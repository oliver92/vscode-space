/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RecurrenceRuleEnds_Never } from './RecurrenceRuleEnds_Never';
import type { RecurrenceRuleEnds_OnDate } from './RecurrenceRuleEnds_OnDate';
import type { RecurrenceRuleEnds_TotalCount } from './RecurrenceRuleEnds_TotalCount';

export type RecurrenceRuleEnds = (RecurrenceRuleEnds_Never | RecurrenceRuleEnds_TotalCount | RecurrenceRuleEnds_OnDate);

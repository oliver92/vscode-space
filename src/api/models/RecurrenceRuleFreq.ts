/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RecurrenceRuleFreq_Daily } from './RecurrenceRuleFreq_Daily';
import type { RecurrenceRuleFreq_MonthlyOnDate } from './RecurrenceRuleFreq_MonthlyOnDate';
import type { RecurrenceRuleFreq_MonthlyOnFirstWeekday } from './RecurrenceRuleFreq_MonthlyOnFirstWeekday';
import type { RecurrenceRuleFreq_MonthlyOnLastWeekday } from './RecurrenceRuleFreq_MonthlyOnLastWeekday';
import type { RecurrenceRuleFreq_MonthlyOnStartDate } from './RecurrenceRuleFreq_MonthlyOnStartDate';
import type { RecurrenceRuleFreq_Weekly } from './RecurrenceRuleFreq_Weekly';
import type { RecurrenceRuleFreq_Yearly } from './RecurrenceRuleFreq_Yearly';

export type RecurrenceRuleFreq = (RecurrenceRuleFreq_Daily | RecurrenceRuleFreq_Weekly | RecurrenceRuleFreq_MonthlyOnFirstWeekday | RecurrenceRuleFreq_MonthlyOnLastWeekday | RecurrenceRuleFreq_MonthlyOnDate | RecurrenceRuleFreq_MonthlyOnStartDate | RecurrenceRuleFreq_Yearly);

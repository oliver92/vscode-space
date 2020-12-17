/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TodoContent } from './TodoContent';
import type { TodoItemContentMdText } from './TodoItemContentMdText';
import type { TodoItemContentText } from './TodoItemContentText';

export type TodoItemContent = (TodoItemContentText | TodoContent | TodoItemContentMdText);

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TodoItemContent } from './TodoItemContent';

export type TodoItemRecord = {
    id: string;
    archived: boolean;
    created: string;
    updated: string;
    content: TodoItemContent;
    _status: string;
    dueDate?: string | null;
}

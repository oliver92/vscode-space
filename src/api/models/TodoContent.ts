/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';
import type { TodoItemContentKind } from './TodoItemContentKind';

export type TodoContent = {
    originalText: string;
    link?: string | null;
    kind?: TodoItemContentKind | null;
    principal?: CPrincipal | null;
    time?: number | null;
    text: string;
    extId?: string | null;
}

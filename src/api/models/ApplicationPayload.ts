/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListCommandsPayload } from './ListCommandsPayload';
import type { ListMenuExtensionsPayload } from './ListMenuExtensionsPayload';
import type { MenuActionPayload } from './MenuActionPayload';
import type { MessageActionPayload } from './MessageActionPayload';
import type { MessagePayload } from './MessagePayload';

export type ApplicationPayload = (ListMenuExtensionsPayload | MenuActionPayload | MessageActionPayload | MessagePayload | ListCommandsPayload);

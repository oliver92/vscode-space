/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelSpecificDefaults } from './ChannelSpecificDefaults';
import type { M2_Access } from './M2_Access';
import type { TD_Team } from './TD_Team';

export type M2SharedChannelContent = {
    name: string;
    group: string;
    access: M2_Access;
    description: string;
    iconId?: string | null;
    notificationDefaults: ChannelSpecificDefaults;
    teams?: Array<TD_Team> | null;
    canEdit?: boolean | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelSpecificDefaults } from './ChannelSpecificDefaults';
import type { TD_Location } from './TD_Location';

export type M2ChannelContentLocation = {
    location: TD_Location;
    notificationDefaults: ChannelSpecificDefaults;
}

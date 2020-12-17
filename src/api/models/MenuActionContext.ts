/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseMenuActionContext } from './BaseMenuActionContext';
import type { ChannelAttachmentMenuActionContext } from './ChannelAttachmentMenuActionContext';
import type { ChannelMessageMenuActionContext } from './ChannelMessageMenuActionContext';
import type { LocationMenuActionContext } from './LocationMenuActionContext';
import type { ProjectMenuActionContext } from './ProjectMenuActionContext';
import type { RepositoryMenuActionContext } from './RepositoryMenuActionContext';
import type { TeamMenuActionContext } from './TeamMenuActionContext';

export type MenuActionContext = (BaseMenuActionContext | TeamMenuActionContext | ChannelMessageMenuActionContext | ChannelAttachmentMenuActionContext | ProjectMenuActionContext | RepositoryMenuActionContext | LocationMenuActionContext);

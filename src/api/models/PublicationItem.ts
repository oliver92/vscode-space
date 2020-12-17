/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentFolderPublicationItem } from './DocumentFolderPublicationItem';
import type { DocumentPublicationItem } from './DocumentPublicationItem';
import type { PublicationItemStub } from './PublicationItemStub';

export type PublicationItem = (DocumentFolderPublicationItem | PublicationItemStub | DocumentPublicationItem);

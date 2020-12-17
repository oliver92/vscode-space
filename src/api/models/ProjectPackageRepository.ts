/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PackageRepository } from './PackageRepository';
import type { PackageRepositoryMirror } from './PackageRepositoryMirror';
import type { PR_Project } from './PR_Project';

export type ProjectPackageRepository = {
    id: string;
    project: PR_Project;
    name: string;
    description?: string | null;
    repository: PackageRepository;
    archived: boolean;
    mirrors: Array<PackageRepositoryMirror>;
}

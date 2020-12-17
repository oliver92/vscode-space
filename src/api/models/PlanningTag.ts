/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PlanningTag = {
    id: string;
    projectId: string;
    parent?: PlanningTag | null;
    name: string;
}

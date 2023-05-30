/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AbsenceEvent } from '../models/AbsenceEvent';
import type { AbsenceListMode } from '../models/AbsenceListMode';
import type { AbsenceReasonRecord } from '../models/AbsenceReasonRecord';
import type { AbsenceRecord } from '../models/AbsenceRecord';
import type { AccessRecord } from '../models/AccessRecord';
import type { AccessType } from '../models/AccessType';
import type { AllChannelsListEntry } from '../models/AllChannelsListEntry';
import type { ArticleImportResult } from '../models/ArticleImportResult';
import type { ArticleRecord } from '../models/ArticleRecord';
import type { AttachmentIn } from '../models/AttachmentIn';
import type { AuthModuleUsage } from '../models/AuthModuleUsage';
import type { AvatarCropSquare } from '../models/AvatarCropSquare';
import type { BG_ArticleId } from '../models/BG_ArticleId';
import type { BG_Stats } from '../models/BG_Stats';
import type { BillingReport } from '../models/BillingReport';
import type { BirthdayEvent } from '../models/BirthdayEvent';
import type { BlogCalendarEvent } from '../models/BlogCalendarEvent';
import type { Branch } from '../models/Branch';
import type { CalendarEventSpec } from '../models/CalendarEventSpec';
import type { CertificateInfo } from '../models/CertificateInfo';
import type { CFConstraint } from '../models/CFConstraint';
import type { CFEnumValuesModification } from '../models/CFEnumValuesModification';
import type { CFInputValue } from '../models/CFInputValue';
import type { CFType } from '../models/CFType';
import type { ChannelItemRecord } from '../models/ChannelItemRecord';
import type { ChatMessage } from '../models/ChatMessage';
import type { ChatMessageIdentifier } from '../models/ChatMessageIdentifier';
import type { Checklist } from '../models/Checklist';
import type { ChecklistSorting } from '../models/ChecklistSorting';
import type { CodeDiscussionRecord } from '../models/CodeDiscussionRecord';
import type { CodeReviewDetailedInfo } from '../models/CodeReviewDetailedInfo';
import type { CodeReviewParticipantRole } from '../models/CodeReviewParticipantRole';
import type { CodeReviewRecord } from '../models/CodeReviewRecord';
import type { CodeReviewState } from '../models/CodeReviewState';
import type { CodeReviewStateFilter } from '../models/CodeReviewStateFilter';
import type { CodeReviewWithCount } from '../models/CodeReviewWithCount';
import type { ColumnSortOrder } from '../models/ColumnSortOrder';
import type { CommitExecutionStatus } from '../models/CommitExecutionStatus';
import type { CommitSetReviewRecord } from '../models/CommitSetReviewRecord';
import type { CustomField } from '../models/CustomField';
import type { CustomFieldInputValue } from '../models/CustomFieldInputValue';
import type { CustomFieldsRecord } from '../models/CustomFieldsRecord';
import type { Diff } from '../models/Diff';
import type { DiffContext } from '../models/DiffContext';
import type { DocumentFolderRecord } from '../models/DocumentFolderRecord';
import type { DR_Draft } from '../models/DR_Draft';
import type { DraftDocumentType } from '../models/DraftDocumentType';
import type { DTO_Meeting } from '../models/DTO_Meeting';
import type { DTO_RightsWithHierarchy } from '../models/DTO_RightsWithHierarchy';
import type { EmojiSearchMatchData } from '../models/EmojiSearchMatchData';
import type { EnumValueData } from '../models/EnumValueData';
import type { EnumValueOrdering } from '../models/EnumValueOrdering';
import type { ES_App } from '../models/ES_App';
import type { ES_ApplicationPassword } from '../models/ES_ApplicationPassword';
import type { ES_AuthenticationSession } from '../models/ES_AuthenticationSession';
import type { ES_AuthModule } from '../models/ES_AuthModule';
import type { ES_AuthModuleSettings } from '../models/ES_AuthModuleSettings';
import type { ES_BuiltinAuthModuleSettings } from '../models/ES_BuiltinAuthModuleSettings';
import type { ES_DefaultProfileLoginDetails } from '../models/ES_DefaultProfileLoginDetails';
import type { ES_LdapAuthModuleSettings } from '../models/ES_LdapAuthModuleSettings';
import type { ES_OAuthConsent } from '../models/ES_OAuthConsent';
import type { ES_PackageRepositorySettings } from '../models/ES_PackageRepositorySettings';
import type { ES_PermanentToken } from '../models/ES_PermanentToken';
import type { ES_SshKey } from '../models/ES_SshKey';
import type { EventParticipationStatus } from '../models/EventParticipationStatus';
import type { ExecutionStatus } from '../models/ExecutionStatus';
import type { ExtendedType } from '../models/ExtendedType';
import type { ExtendedTypeScope } from '../models/ExtendedTypeScope';
import type { ExtendedTypeScopeType } from '../models/ExtendedTypeScopeType';
import type { ExternalArticle } from '../models/ExternalArticle';
import type { ExternalCheckDTO } from '../models/ExternalCheckDTO';
import type { ExternalIssue } from '../models/ExternalIssue';
import type { GitCommitInfo } from '../models/GitCommitInfo';
import type { GitMergeResultHttp } from '../models/GitMergeResultHttp';
import type { GitRebaseResultHttp } from '../models/GitRebaseResultHttp';
import type { HA_Model } from '../models/HA_Model';
import type { HolidaysEvent } from '../models/HolidaysEvent';
import type { ImageAttachmentMeta } from '../models/ImageAttachmentMeta';
import type { ImportExistsPolicy } from '../models/ImportExistsPolicy';
import type { ImportMetadata } from '../models/ImportMetadata';
import type { ImportMissingPolicy } from '../models/ImportMissingPolicy';
import type { Invitation } from '../models/Invitation';
import type { InvitationLink } from '../models/InvitationLink';
import type { Issue } from '../models/Issue';
import type { IssueImportResult } from '../models/IssueImportResult';
import type { IssuesSorting } from '../models/IssuesSorting';
import type { IssueStatus } from '../models/IssueStatus';
import type { IssueStatusData } from '../models/IssueStatusData';
import type { IssueStatusWithUsages } from '../models/IssueStatusWithUsages';
import type { JobDTO } from '../models/JobDTO';
import type { JobExecutionDTO } from '../models/JobExecutionDTO';
import type { JobTriggerType } from '../models/JobTriggerType';
import type { LaunchResult } from '../models/LaunchResult';
import type { M2ChannelRecord } from '../models/M2ChannelRecord';
import type { MeetingJoiningPreference } from '../models/MeetingJoiningPreference';
import type { MeetingModificationPreference } from '../models/MeetingModificationPreference';
import type { MeetingOccurrenceTime } from '../models/MeetingOccurrenceTime';
import type { MeetingRecord } from '../models/MeetingRecord';
import type { MeetingVisibility } from '../models/MeetingVisibility';
import type { MembershipEvent } from '../models/MembershipEvent';
import type { MergeRequestRecord } from '../models/MergeRequestRecord';
import type { MessageForImport } from '../models/MessageForImport';
import type { MessageLink } from '../models/MessageLink';
import type { MessageRecipient } from '../models/MessageRecipient';
import type { NavBarMenuItem } from '../models/NavBarMenuItem';
import type { NonWorkingDaysEvent } from '../models/NonWorkingDaysEvent';
import type { OIDCDiscovery } from '../models/OIDCDiscovery';
import type { Overdrafts } from '../models/Overdrafts';
import type { PackageData } from '../models/PackageData';
import type { PackageRepositoryMirror } from '../models/PackageRepositoryMirror';
import type { PackageRepositoryMode } from '../models/PackageRepositoryMode';
import type { PackageType } from '../models/PackageType';
import type { PackageVersionData } from '../models/PackageVersionData';
import type { PackageVersionDetails } from '../models/PackageVersionDetails';
import type { PermissionTarget } from '../models/PermissionTarget';
import type { PlainParameterRecord } from '../models/PlainParameterRecord';
import type { PlanItemChildren } from '../models/PlanItemChildren';
import type { PlanningTag } from '../models/PlanningTag';
import type { PR_PrivateProject } from '../models/PR_PrivateProject';
import type { PR_Project } from '../models/PR_Project';
import type { PR_RepositoryInfo } from '../models/PR_RepositoryInfo';
import type { PR_Tag } from '../models/PR_Tag';
import type { PrincipalIn } from '../models/PrincipalIn';
import type { ProfileIdentifier } from '../models/ProfileIdentifier';
import type { ProfileOrder } from '../models/ProfileOrder';
import type { ProjectIdentifier } from '../models/ProjectIdentifier';
import type { ProjectKey } from '../models/ProjectKey';
import type { ProjectPackageRepository } from '../models/ProjectPackageRepository';
import type { PublicationDetails } from '../models/PublicationDetails';
import type { PublicHoliday } from '../models/PublicHoliday';
import type { PublicHolidayCalendarRecord } from '../models/PublicHolidayCalendarRecord';
import type { RecurrentModification } from '../models/RecurrentModification';
import type { ReviewerParam } from '../models/ReviewerParam';
import type { ReviewSorting } from '../models/ReviewSorting';
import type { ReviewType } from '../models/ReviewType';
import type { RevisionInReview } from '../models/RevisionInReview';
import type { SamlMetadataResponse } from '../models/SamlMetadataResponse';
import type { SecretParameterRecord } from '../models/SecretParameterRecord';
import type { SettingsValue } from '../models/SettingsValue';
import type { SSLKeystore } from '../models/SSLKeystore';
import type { SubjectResponsibilitiesTable } from '../models/SubjectResponsibilitiesTable';
import type { SupportProfileDTO } from '../models/SupportProfileDTO';
import type { TD_Language } from '../models/TD_Language';
import type { TD_Location } from '../models/TD_Location';
import type { TD_LocationEquipmentType } from '../models/TD_LocationEquipmentType';
import type { TD_LocationMap } from '../models/TD_LocationMap';
import type { TD_LocationMapPoint } from '../models/TD_LocationMapPoint';
import type { TD_LocationWithTimeZone } from '../models/TD_LocationWithTimeZone';
import type { TD_MemberInLocationMap } from '../models/TD_MemberInLocationMap';
import type { TD_MemberLocation } from '../models/TD_MemberLocation';
import type { TD_MemberProfile } from '../models/TD_MemberProfile';
import type { TD_Membership } from '../models/TD_Membership';
import type { TD_MergedEvent } from '../models/TD_MergedEvent';
import type { TD_ProfileLanguage } from '../models/TD_ProfileLanguage';
import type { TD_ProfileWorkingDays } from '../models/TD_ProfileWorkingDays';
import type { TD_Role } from '../models/TD_Role';
import type { TD_Stats } from '../models/TD_Stats';
import type { TD_Team } from '../models/TD_Team';
import type { TD_WorkingDays } from '../models/TD_WorkingDays';
import type { ThrottledLogin } from '../models/ThrottledLogin';
import type { TodoItemRecord } from '../models/TodoItemRecord';
import type { TrustedCertificate } from '../models/TrustedCertificate';
import type { TwoFactorAuthenticationSecret } from '../models/TwoFactorAuthenticationSecret';
import type { TwoFactorAuthenticationStatus } from '../models/TwoFactorAuthenticationStatus';
import type { UA_UserAgreement } from '../models/UA_UserAgreement';
import type { UA_UserAgreementStatus } from '../models/UA_UserAgreementStatus';
import type { UnfurlsBlockListEntry } from '../models/UnfurlsBlockListEntry';
import type { VcsHostingPassword } from '../models/VcsHostingPassword';
import type { Weekday } from '../models/Weekday';
import type { WorkingDaysSpec } from '../models/WorkingDaysSpec';
import { request as __request } from '../core/request';
import {RepositoryUrls} from "../models/RepositoryUrls";

export class Service {

    /**
     * Create Absence
     * Create an absence for a given profile (member).
     * @param requestBody
     * @param fields
     * @result AbsenceRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService(
        requestBody: {
            member: string,
            reason: string,
            description: string,
            location?: string | null,
            since: string,
            till: string,
            available?: boolean,
            icon: string,
            customFieldValues?: Array<CustomFieldInputValue> | null,
        },
        fields?: string,
    ): Promise<AbsenceRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/absences`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Absences
     * Search absences. Parameters are applied as 'AND' filters.
     * @param skip
     * @param top
     * @param member
     * @param members
     * @param location
     * @param team
     * @param since
     * @param till
     * @param viewMode
     * @param reason
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService(
        skip?: string | null,
        top: number | null = 100,
        member?: string | null,
        members?: Array<string> | null,
        location?: string | null,
        team?: string | null,
        since?: string | null,
        till?: string | null,
        viewMode?: 'All',
        reason?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<AbsenceRecord>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/absences`,
            query: {
                '$skip': skip,
                '$top': top,
                'member': member,
                'members': members,
                'location': location,
                'team': team,
                'since': since,
                'till': till,
                'viewMode': viewMode,
                'reason': reason,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Approve Absence
     * Approve/unapprove an existing absence. Setting approve to true will approve the absence, false will remove the approval.
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService1(
        id: string,
        requestBody: {
            approve: boolean,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/absences/${id}/approve`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Absences by Member
     * Get absences for a given profile id.
     * @param member
     * @param fields
     * @result AbsenceRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService1(
        member: string,
        fields?: string,
    ): Promise<Array<AbsenceRecord> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/absences/member:${member}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Absence
     * Get an absence.
     * @param id
     * @param fields
     * @result AbsenceRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService2(
        id: string,
        fields?: string,
    ): Promise<AbsenceRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/absences/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Absence
     * Update an existing absence. Optional parameters will be ignored when not specified, and updated otherwise.
     * @param id
     * @param requestBody
     * @param fields
     * @result AbsenceRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService(
        id: string,
        requestBody: {
            member?: string | null,
            reason?: string | null,
            description?: string | null,
            location?: string | null,
            since?: string | null,
            till?: string | null,
            available: boolean,
            icon?: string | null,
            customFieldValues?: Array<CustomFieldInputValue> | null,
        },
        fields?: string,
    ): Promise<AbsenceRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/absences/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Absence
     * Archive/restore an existing absence. Setting delete to true will archive the absence, false will restore it.
     * @param id
     * @param delete
     * @result any Success
     * @throws ApiError
     */
    // public static async deleteService(
    //     id: string,
    //     delete: boolean = true,
    // ): Promise<any> {
    //     const result = await __request({
    //         method: 'DELETE',
    //         path: `/absences/${id}`,
    //         query: {
    //             'delete': delete,
    //         },
    //     });
    //     return result.body;
    // }

    /**
     * Delete Absence Approval
     * Delete approval for a given absence.
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/absences/${id}/delete-approval`,
        });
        return result.body;
    }

    /**
     * Create Absence Reason
     * Create a new absence reason.
     * @param requestBody
     * @param fields
     * @result AbsenceReasonRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService2(
        requestBody: {
            name: string,
            description: string,
            defaultAvailability: boolean,
            approvalRequired: boolean,
            icon?: string | null,
        },
        fields?: string,
    ): Promise<AbsenceReasonRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/absences/absence-reasons`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Absence Reasons
     * Get available absence reasons.
     * @param withArchived
     * @param fields
     * @result AbsenceReasonRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService3(
        withArchived: boolean = false,
        fields?: string,
    ): Promise<Array<AbsenceReasonRecord> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/absences/absence-reasons`,
            query: {
                'withArchived': withArchived,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Absence Reason
     * Update an existing absence reason.
     * @param id
     * @param requestBody
     * @param fields
     * @result AbsenceReasonRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService3(
        id: string,
        requestBody: {
            name: string,
            description: string,
            defaultAvailability: boolean,
            approvalRequired: boolean,
            icon?: string | null,
        },
        fields?: string,
    ): Promise<AbsenceReasonRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/absences/absence-reasons/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Absence Reason
     * Get an absence reason.
     * @param id
     * @param fields
     * @result AbsenceReasonRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService4(
        id: string,
        fields?: string,
    ): Promise<AbsenceReasonRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/absences/absence-reasons/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete Absence Reason
     * Archive/restore an existing absence reason. Setting delete to true will archive the absence reason, false will restore it.
     * @param id
     * @param delete
     * @result any Success
     * @throws ApiError
     */
    // public static async deleteService2(
    //     id: string,
    //     delete: boolean = true,
    // ): Promise<any> {
    //     const result = await __request({
    //         method: 'DELETE',
    //         path: `/absences/absence-reasons/${id}`,
    //         query: {
    //             'delete': delete,
    //         },
    //     });
    //     return result.body;
    // }

    /**
     * Create Support
     * Create a profile for support.
     * @param fields
     * @result SupportProfileDTO Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService4(
        fields?: string,
    ): Promise<SupportProfileDTO | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/administration/support`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get User Agreement
     * @param fields
     * @result UA_UserAgreement Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService5(
        fields?: string,
    ): Promise<UA_UserAgreement | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/administration/user-agreement`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Upload New User Agreement
     * @param requestBody
     * @param fields
     * @result UA_UserAgreement Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService1(
        requestBody: {
            newContent: string,
            invalidate: boolean,
        },
        fields?: string,
    ): Promise<UA_UserAgreement | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/administration/user-agreement`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Enable / Disable User Agreement
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService5(
        requestBody: {
            enabled: boolean,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/administration/user-agreement/enabled`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Is User Agreement Enabled?
     * @result boolean Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService6(): Promise<boolean | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/administration/user-agreement/enabled`,
        });
        return result.body;
    }

    /**
     * Get All User Agreement Statuses
     * @param skip
     * @param top
     * @param query
     * @param accepted
     * @param activeProfilesOnly
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService7(
        skip?: string | null,
        top: number | null = 100,
        query: string = '',
        accepted?: boolean | null,
        activeProfilesOnly: boolean = true,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<UA_UserAgreementStatus>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/administration/user-agreement/status`,
            query: {
                '$skip': skip,
                '$top': top,
                'query': query,
                'accepted': accepted,
                'activeProfilesOnly': activeProfilesOnly,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get User Agreement Status for Profile
     * @param profile
     * @param fields
     * @result UA_UserAgreementStatus Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService8(
        profile: string,
        fields?: string,
    ): Promise<UA_UserAgreementStatus | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/administration/user-agreement/status/${profile}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Application
     * @param requestBody
     * @param fields
     * @result ES_App Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService6(
        requestBody: {
            name: string,
            clientId?: string | null,
            clientSecret?: string | null,
            clientCredentialsFlowEnabled?: boolean | null,
            codeFlowEnabled?: boolean | null,
            codeFlowRedirectURIs?: string | null,
            implicitFlowEnabled?: boolean | null,
            implicitFlowRedirectURIs?: string | null,
            endpointUri?: string | null,
        },
        fields?: string,
    ): Promise<ES_App | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/applications`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Applications
     * @param query
     * @param withArchived
     * @param fields
     * @result ES_App Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService9(
        query: string,
        withArchived: boolean = false,
        fields?: string,
    ): Promise<Array<ES_App> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/applications`,
            query: {
                'query': query,
                'withArchived': withArchived,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Refresh Menu
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService7(
        requestBody?: {
            appId?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/applications/refresh-menu`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Restore Application
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async postService8(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/applications/${id}/restore`,
        });
        return result.body;
    }

    /**
     * Get Application
     * @param id
     * @param fields
     * @result ES_App Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService10(
        id: string,
        fields?: string,
    ): Promise<ES_App | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/applications/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Application
     * @param id
     * @param fields
     * @param requestBody
     * @result ES_App Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService2(
        id: string,
        fields?: string,
        requestBody?: {
            name?: string | null,
            clientSecret?: string | null,
            clientCredentialsFlowEnabled?: boolean | null,
            codeFlowEnabled?: boolean | null,
            codeFlowRedirectURIs?: string | null,
            implicitFlowEnabled?: boolean | null,
            implicitFlowRedirectURIs?: string | null,
            endpointUri?: string | null,
        },
    ): Promise<ES_App | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/applications/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Application
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/applications/${id}`,
        });
        return result.body;
    }

    /**
     * Get Last Client Credentials Access Info
     * @param id
     * @param fields
     * @result AccessRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService11(
        id: string,
        fields?: string,
    ): Promise<AccessRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/applications/${id}/last-client-credentials-access`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Regenerate
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async postService9(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/applications/${id}/client-secret/regenerate`,
        });
        return result.body;
    }

    /**
     * Get Client Secret
     * @param id
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService12(
        id: string,
    ): Promise<string | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/applications/${id}/client-secret`,
        });
        return result.body;
    }

    /**
     * Regenerate
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async postService10(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/applications/${id}/signing-key/regenerate`,
        });
        return result.body;
    }

    /**
     * Get Signing Key
     * @param id
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService13(
        id: string,
    ): Promise<string | null | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/applications/${id}/signing-key`,
        });
        return result.body;
    }

    /**
     * Add Ssh Key
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService11(
        id: string,
        requestBody: {
            publicKey: string,
            comment: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/applications/${id}/ssh-keys`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Ssh Key
     * @param id
     * @param fields
     * @result ES_SshKey Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService14(
        id: string,
        fields?: string,
    ): Promise<Array<ES_SshKey> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/applications/${id}/ssh-keys`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete Ssh Key
     * @param id
     * @param fingerprint
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService4(
        id: string,
        fingerprint: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/applications/${id}/ssh-keys/${fingerprint}`,
        });
        return result.body;
    }

    /**
     * Regenerate
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async postService12(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/applications/${id}/verification-token/regenerate`,
        });
        return result.body;
    }

    /**
     * Get Verification Token
     * @param id
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService15(
        id: string,
    ): Promise<string | null | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/applications/${id}/verification-token`,
        });
        return result.body;
    }

    /**
     * Create Auth Module
     * Create a new authentication module. Settings are specific to the type of authentication module being created.
     * @param requestBody
     * @param fields
     * @result ES_AuthModule Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService13(
        requestBody: {
            key: string,
            name: string,
            enabled: boolean,
            settings: ES_AuthModuleSettings,
        },
        fields?: string,
    ): Promise<ES_AuthModule | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/auth-modules`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Auth Modules
     * Get all authentication modules.
     * @param withDisabled
     * @param fields
     * @result ES_AuthModule Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService16(
        withDisabled: boolean = false,
        fields?: string,
    ): Promise<Array<ES_AuthModule> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/auth-modules`,
            query: {
                'withDisabled': withDisabled,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Reorder
     * Define the order of authentication modules. This affects the order of the federated authentication module buttons on the sign-in page.
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService14(
        requestBody: {
            order: Array<string>,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/auth-modules/reorder`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Saml Metadata
     * @param id
     * @param requestBody
     * @param fields
     * @result SamlMetadataResponse Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService15(
        id: string,
        requestBody: {
            idpUrl: string,
            idpEntityId: string,
            idpCertificateSHA256: string,
            spEntityId: string,
            sslKeystore?: SSLKeystore | null,
            contactProfileId?: string | null,
        },
        fields?: string,
    ): Promise<SamlMetadataResponse | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/auth-modules/${id}/saml-metadata`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Discover Oidc
     * Automatically discovers the endpoints for the OpenID Connect provider via discovery document
     * @param discoveryEndpoint
     * @param fields
     * @result OIDCDiscovery Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService17(
        discoveryEndpoint: string,
        fields?: string,
    ): Promise<OIDCDiscovery | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/auth-modules/discover-oidc`,
            query: {
                'discoveryEndpoint': discoveryEndpoint,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Auth Module by Key
     * Get an existing authentication module.
     * @param key
     * @param fields
     * @result ES_AuthModule Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService18(
        key: string,
        fields?: string,
    ): Promise<ES_AuthModule | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/auth-modules/key:${key}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Auth Module
     * Update an existing authentication module. Optional parameters will be ignored when not specified, and updated otherwise.
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService3(
        id: string,
        requestBody?: {
            key?: string | null,
            name?: string | null,
            enabled?: boolean | null,
            settings?: ES_AuthModuleSettings | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/auth-modules/${id}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Auth Module
     * Delete an existing authentication module.
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService5(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/auth-modules/${id}`,
        });
        return result.body;
    }

    /**
     * Test Built-in Settings
     * For a username/password combination, test built-in authentication with updated settings.
     * @param requestBody
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService16(
        requestBody: {
            settings: ES_BuiltinAuthModuleSettings,
            username: string,
            password: string,
        },
        fields?: string,
    ): Promise<TD_MemberProfile | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/auth-modules/test/built-in`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Test LDAP Settings
     * For a username/password combination, test LDAP authentication with updated settings.
     * @param requestBody
     * @param fields
     * @result ES_DefaultProfileLoginDetails Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService17(
        requestBody: {
            settings: ES_LdapAuthModuleSettings,
            username: string,
            password: string,
        },
        fields?: string,
    ): Promise<ES_DefaultProfileLoginDetails | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/auth-modules/test/ldap`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Throttled Logins
     * Returns logins that are currently subjected to rate limits when logging in to Space.
     * @param skip
     * @param top
     * @param login
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService19(
        skip?: string | null,
        top: number | null = 100,
        login?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<ThrottledLogin>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/auth-modules/throttled-logins`,
            query: {
                '$skip': skip,
                '$top': top,
                'login': login,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Reset Throttling Status
     * Resets the counter that tracks failed login attempts for the account with the specified ID. The member who uses this account is no longer blocked from attempting to log in to Space.
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async patchService4(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/auth-modules/throttled-logins/${id}`,
        });
        return result.body;
    }

    /**
     * Get All Usages
     * Retrieve a list of authentication module usage count.
     * @param fields
     * @result AuthModuleUsage Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService20(
        fields?: string,
    ): Promise<Array<AuthModuleUsage> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/auth-modules/usages`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Change
     * Change password for a given authentication module (id) and profile (identifier).
     * @param id
     * @param identifier
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService18(
        id: string,
        identifier: string,
        requestBody: {
            oldPassword: string,
            newPassword: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/auth-modules/${id}/logins/${identifier}/change`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Reset
     * Request a password reset for a given authentication module (id) and profile (identifier).
     * @param id
     * @param identifier
     * @result any Success
     * @throws ApiError
     */
    public static async postService19(
        id: string,
        identifier: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/auth-modules/${id}/logins/${identifier}/reset`,
        });
        return result.body;
    }

    /**
     * Delete Login
     * Detach a profile login from an authentication module. The id parameter refers to the authentication module, the identifier parameter refers to the login.
     * @param identifier
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService6(
        identifier: string,
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/auth-modules/${id}/logins/${identifier}`,
        });
        return result.body;
    }

    /**
     * Get overdrafts
     * @param fields
     * @result Overdrafts Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService21(
        fields?: string,
    ): Promise<Overdrafts | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/billing-admin/overdrafts`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Set overdrafts
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async putService(
        requestBody: {
            storage: number,
            bandwidth: number,
            ciCredits: number,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/billing-admin/overdrafts`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get billing report
     * Returns a billing report for the given
     * @param billingPeriod
     * @param fields
     * @result BillingReport Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService22(
        billingPeriod: string,
        fields?: string,
    ): Promise<BillingReport | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/billing-admin/reports/${billingPeriod}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Publish Blog post
     * @param requestBody
     * @param fields
     * @result ArticleRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService20(
        requestBody: {
            title: string,
            content: string,
            locations?: Array<string> | null,
            teams?: Array<string> | null,
            event?: BlogCalendarEvent | null,
        },
        fields?: string,
    ): Promise<ArticleRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/blog`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Blog posts
     * @param skip
     * @param top
     * @param term
     * @param dateFrom
     * @param dateTo
     * @param authorId
     * @param teamId
     * @param locationId
     * @param forProfile
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService23(
        skip?: string | null,
        top: number | null = 100,
        term?: string | null,
        dateFrom?: string | null,
        dateTo?: string | null,
        authorId?: string | null,
        teamId?: string | null,
        locationId?: string | null,
        forProfile?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<ArticleRecord>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/blog`,
            query: {
                '$skip': skip,
                '$top': top,
                'term': term,
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'authorId': authorId,
                'teamId': teamId,
                'locationId': locationId,
                'forProfile': forProfile,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Import Blog posts
     * @param requestBody
     * @param fields
     * @result ArticleImportResult Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService21(
        requestBody: {
            metadata: ImportMetadata,
            articles: Array<ExternalArticle>,
        },
        fields?: string,
    ): Promise<Array<ArticleImportResult> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/blog/import`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Stats
     * @param dateFrom
     * @param dateTo
     * @param authorId
     * @param teamId
     * @param locationId
     * @param fields
     * @result BG_Stats Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService24(
        dateFrom?: string | null,
        dateTo?: string | null,
        authorId?: string | null,
        teamId?: string | null,
        locationId?: string | null,
        fields?: string,
    ): Promise<BG_Stats | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/blog/stats`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'authorId': authorId,
                'teamId': teamId,
                'locationId': locationId,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Blog post by Alias
     * @param alias
     * @param fields
     * @result ArticleRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService25(
        alias: string,
        fields?: string,
    ): Promise<ArticleRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/blog/alias:${alias}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Blog post by External Id
     * @param id
     * @param fields
     * @result ArticleRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService26(
        id: string,
        fields?: string,
    ): Promise<ArticleRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/blog/external-id:${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Blog post
     * @param id
     * @param fields
     * @result ArticleRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService27(
        id: string,
        fields?: string,
    ): Promise<ArticleRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/blog/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Blog post
     * @param id
     * @param fields
     * @param requestBody
     * @result ArticleRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService5(
        id: string,
        fields?: string,
        requestBody?: {
            title?: string | null,
            content?: string | null,
            locations?: Array<string> | null,
            teams?: Array<string> | null,
            event?: BlogCalendarEvent | null,
        },
    ): Promise<ArticleRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/blog/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Unpublish Blog post
     * Unpublish Blog post
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService7(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/blog/${id}`,
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get All Articles
     * @param skip
     * @param top
     * @param term
     * @param dateFrom
     * @param dateTo
     * @param authorId
     * @param teamId
     * @param locationId
     * @param forProfile
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService28(
        skip?: string | null,
        top: number | null = 100,
        term?: string | null,
        dateFrom?: string | null,
        dateTo?: string | null,
        authorId?: string | null,
        teamId?: string | null,
        locationId?: string | null,
        forProfile?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<ArticleRecord>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/blogs/articles`,
            query: {
                '$skip': skip,
                '$top': top,
                'term': term,
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'authorId': authorId,
                'teamId': teamId,
                'locationId': locationId,
                'forProfile': forProfile,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get Article
     * @param id
     * @param fields
     * @result ArticleRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService29(
        id: string,
        fields?: string,
    ): Promise<ArticleRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/blogs/articles/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Publish Document to Blog
     * @param draftId
     * @param fields
     * @result BG_ArticleId Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService22(
        draftId: string,
        fields?: string,
    ): Promise<BG_ArticleId | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/blogs/articles/drafts/${draftId}/publish`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Unpublish the article, but keeps its draft
     * Unpublish the article, but keeps its draft
     * @param draftId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService8(
        draftId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/blogs/articles/drafts/${draftId}/unpublish`,
        });
        return result.body;
    }

    /**
     * Get All Absence Events
     * Get/search absences. Parameters are applied as 'AND' filters.
     * @param dateFrom
     * @param dateTo
     * @param team
     * @param location
     * @param role
     * @param fields
     * @result AbsenceEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService30(
        dateFrom: string,
        dateTo: string,
        team?: string | null,
        location?: string | null,
        role?: string | null,
        fields?: string,
    ): Promise<Array<AbsenceEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/absence-events`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'team': team,
                'location': location,
                'role': role,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Birthday Events
     * Get/search birthdays. Parameters are applied as 'AND' filters.
     * @param dateFrom
     * @param dateTo
     * @param team
     * @param location
     * @param role
     * @param fields
     * @result BirthdayEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService31(
        dateFrom: string,
        dateTo: string,
        team?: string | null,
        location?: string | null,
        role?: string | null,
        fields?: string,
    ): Promise<Array<BirthdayEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/birthday-events`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'team': team,
                'location': location,
                'role': role,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Starred Birthday Events
     * Get/search birthdays in a specific time period for starred profiles.
     * @param dateFrom
     * @param dateTo
     * @param fields
     * @result BirthdayEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService32(
        dateFrom: string,
        dateTo: string,
        fields?: string,
    ): Promise<Array<BirthdayEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/birthday-events/starred`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Event Participation
     * Update RSVP / calendar event participation status for a calendar event attached to an article.
     * @param id
     * @param requestBody
     * @param fields
     * @result MeetingRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService6(
        id: string,
        requestBody: {
            newStatus: EventParticipationStatus,
        },
        fields?: string,
    ): Promise<MeetingRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/calendars/event-participations/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Events
     * Get calendar events attached to an article in a specific time period.
     * @param dateFrom
     * @param dateTo
     * @param fields
     * @result MeetingRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService33(
        dateFrom: string,
        dateTo: string,
        fields?: string,
    ): Promise<Array<MeetingRecord> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/events`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Event
     * Get a calendar event attached to an article.
     * @param id
     * @param fields
     * @result MeetingRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService34(
        id: string,
        fields?: string,
    ): Promise<MeetingRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/events/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Holidays
     * Get/search holidays. Parameters are applied as 'AND' filters.
     * @param startDate
     * @param endDate
     * @param team
     * @param location
     * @param role
     * @param workingDays
     * @param fields
     * @result HolidaysEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService35(
        startDate: string,
        endDate: string,
        team?: string | null,
        location?: string | null,
        role?: string | null,
        workingDays?: boolean | null,
        fields?: string,
    ): Promise<Array<HolidaysEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/holidays`,
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'team': team,
                'location': location,
                'role': role,
                'workingDays': workingDays,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Meeting
     * Create a meeting.
     * @param requestBody
     * @param fields
     * @result DTO_Meeting Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService23(
        requestBody: {
            summary: string,
            description?: string | null,
            occurrenceRule: CalendarEventSpec,
            locations?: Array<string>,
            profiles?: Array<string>,
            externalParticipants?: Array<string>,
            teams?: Array<string>,
            visibility?: MeetingVisibility,
            modificationPreference?: MeetingModificationPreference,
            joiningPreference?: MeetingJoiningPreference,
            notifyOnExport?: boolean,
            organizer?: string | null,
        },
        fields?: string,
    ): Promise<DTO_Meeting | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/calendars/meetings`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Meetings
     * Search meetings by name, location, time period and other parameters. Parameters are applied as 'AND' filters while values in lists of locations, profiles and teams have 'OR' semantics.
     * @param skip
     * @param top
     * @param summaryQuery
     * @param locationsQuery
     * @param startingAfter
     * @param endingAfter
     * @param endingBefore
     * @param startingBefore
     * @param profiles
     * @param teams
     * @param organizer
     * @param includePrivate
     * @param includeArchived
     * @param includeMeetingInstances
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService36(
        skip?: string | null,
        top: number | null = 100,
        summaryQuery: string = '',
        locationsQuery?: Array<string>,
        startingAfter?: string | null,
        endingAfter?: string | null,
        endingBefore?: string | null,
        startingBefore?: string | null,
        profiles?: Array<string>,
        teams?: Array<string>,
        organizer?: string | null,
        includePrivate: boolean = false,
        includeArchived: boolean = false,
        includeMeetingInstances: boolean = true,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<DTO_Meeting>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/meetings`,
            query: {
                '$skip': skip,
                '$top': top,
                'summaryQuery': summaryQuery,
                'locationsQuery': locationsQuery,
                'startingAfter': startingAfter,
                'endingAfter': endingAfter,
                'endingBefore': endingBefore,
                'startingBefore': startingBefore,
                'profiles': profiles,
                'teams': teams,
                'organizer': organizer,
                'includePrivate': includePrivate,
                'includeArchived': includeArchived,
                'includeMeetingInstances': includeMeetingInstances,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get next meeting occurrence
     * Search for the next meeting occurrence that starts after the provided time point or after the current time if it is not specified
     * @param meetingId
     * @param since
     * @param fields
     * @result MeetingOccurrenceTime Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService37(
        meetingId: string,
        since?: string | null,
        fields?: string,
    ): Promise<MeetingOccurrenceTime | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/meetings/next-occurrence`,
            query: {
                'meetingId': meetingId,
                'since': since,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get meeting occurrences for period
     * Search for occurrences of a meeting that start in the provided time interval. Interval limits are inclusive, response is limited by the first 1_000 results by default.
     * @param meetingId
     * @param since
     * @param until
     * @param limit
     * @param fields
     * @result MeetingOccurrenceTime Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService38(
        meetingId: string,
        since: string,
        until: string,
        limit?: number | null,
        fields?: string,
    ): Promise<Array<MeetingOccurrenceTime> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/meetings/occurrences`,
            query: {
                'meetingId': meetingId,
                'since': since,
                'until': until,
                'limit': limit,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Meeting
     * @param id
     * @param fields
     * @result DTO_Meeting Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService39(
        id: string,
        fields?: string,
    ): Promise<DTO_Meeting | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/meetings/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Meeting
     * Patch a meeting. Only not-null parameters and not empty diffs will be applied.
     * @param id
     * @param fields
     * @param requestBody
     * @result DTO_Meeting Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService7(
        id: string,
        fields?: string,
        requestBody?: {
            summary?: string | null,
            description?: string | null,
            occurrenceRule?: CalendarEventSpec | null,
            locationsDiff?: Diff,
            profilesDiff?: Diff,
            externalParticipantsDiff?: Diff,
            teamsDiff?: Diff,
            visibility?: MeetingVisibility | null,
            modificationPreference?: MeetingModificationPreference | null,
            joiningPreference?: MeetingJoiningPreference | null,
            notifyOnExport?: boolean,
            organizer?: string | null,
            targetDate?: string | null,
            modificationKind?: RecurrentModification,
        },
    ): Promise<DTO_Meeting | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/calendars/meetings/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Meeting
     * @param id
     * @param targetDate
     * @param modificationKind
     * @param fields
     * @result DTO_Meeting Success
     * @result any Error
     * @throws ApiError
     */
    public static async deleteService9(
        id: string,
        targetDate?: string | null,
        modificationKind?: 'All',
        fields?: string,
    ): Promise<DTO_Meeting | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'DELETE',
            path: `/calendars/meetings/${id}`,
            query: {
                'targetDate': targetDate,
                'modificationKind': modificationKind,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Membership Events
     * Get/search membership events. Parameters are applied as 'AND' filters.
     * @param dateFrom
     * @param dateTo
     * @param team
     * @param location
     * @param role
     * @param fields
     * @result MembershipEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService40(
        dateFrom: string,
        dateTo: string,
        team?: string | null,
        location?: string | null,
        role?: string | null,
        fields?: string,
    ): Promise<Array<MembershipEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/membership-events`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'team': team,
                'location': location,
                'role': role,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Non Working Days Events
     * Get/search non-working day events. Parameters are applied as 'AND' filters.
     * @param dateFrom
     * @param dateTo
     * @param member
     * @param team
     * @param location
     * @param role
     * @param fields
     * @result NonWorkingDaysEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService41(
        dateFrom: string,
        dateTo: string,
        member?: string | null,
        team?: string | null,
        location?: string | null,
        role?: string | null,
        fields?: string,
    ): Promise<Array<NonWorkingDaysEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/calendars/non-working-days-events`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'member': member,
                'team': team,
                'location': location,
                'role': role,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get or create direct messages channel
     * Create or get a direct messages channel with a profile.
     * @param requestBody
     * @param fields
     * @result M2ChannelRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService24(
        requestBody: {
            profile: string,
        },
        fields?: string,
    ): Promise<M2ChannelRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/chats/channels/dm`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Is Name Free
     * Check whether a channel name is available. Returns true when the channel name can be used to create a new channel, false otherwise.
     * @param requestBody
     * @result boolean Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService25(
        requestBody: {
            name: string,
        },
    ): Promise<boolean | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/chats/channels/is-name-free`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Import Message History
     * @param channelId
     * @param requestBody
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService26(
        channelId: string,
        requestBody: {
            messages: Array<MessageForImport>,
        },
    ): Promise<Array<string> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/chats/channels/${channelId}/import`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Restore Archived Channel
     * Restore an archived channel, and allow new messages to be added.
     * @param channelId
     * @result any Success
     * @throws ApiError
     */
    public static async postService27(
        channelId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/chats/channels/${channelId}/restore-archived`,
        });
        return result.body;
    }

    /**
     * List All Channels
     * @param query
     * @param skip
     * @param top
     * @param quickFilter
     * @param sortColumn
     * @param sortOrder
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService42(
        query: string,
        skip?: string | null,
        top: number | null = 100,
        quickFilter?: string | null,
        sortColumn?: string | null,
        sortOrder?: 'ASC',
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<AllChannelsListEntry>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/chats/channels/all-channels`,
            query: {
                'query': query,
                '$skip': skip,
                '$top': top,
                'quickFilter': quickFilter,
                'sortColumn': sortColumn,
                'sortOrder': sortOrder,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete Channel
     * Delete a channel. No one will be able to view this channel or its threads. This action cannot be undone.
     * @param channelId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService10(
        channelId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/chats/channels/${channelId}`,
        });
        return result.body;
    }

    /**
     * Archive Channel
     * Archive a channel, and reject new messages being added. It is still possible to view messages from an archived channel. It is possible to restore the channel later.
     * @param channelId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService11(
        channelId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/chats/channels/${channelId}/archive`,
        });
        return result.body;
    }

    /**
     * Send Text Message
     * Send a message to a channel. Message text is a string.
     * @param channelId
     * @param requestBody
     * @param fields
     * @result ChannelItemRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService28(
        channelId: string,
        requestBody: {
            text: string,
            temporaryId?: string | null,
        },
        fields?: string,
    ): Promise<ChannelItemRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/chats/channels/${channelId}/messages`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Message
     * Delete a message from a channel.
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService29(
        requestBody: {
            channel: string,
            id: ChatMessageIdentifier,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/chats/messages/delete-message`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Edit Message
     * Edit an existing message. Message content can be a string, or a block with one or several sections of information.
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService30(
        requestBody: {
            channel: string,
            message: ChatMessageIdentifier,
            content: ChatMessage,
            unfurlLinks?: boolean | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/chats/messages/edit-message`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @deprecated
     * Edit Text Message
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService31(
        requestBody: {
            channelId: string,
            text: string,
            messageId: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/chats/messages/edit-text-message`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @deprecated
     * Send Text Message
     * @param requestBody
     * @param fields
     * @result ChannelItemRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService32(
        requestBody: {
            channel: string,
            text: string,
            pending?: boolean,
            temporaryId?: string | null,
        },
        fields?: string,
    ): Promise<ChannelItemRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/chats/messages/send`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Send Message
     * Send a message to a recipient, such as a channel, member, issue, code review, ... Message content can be a string, or a block with one or several sections of information.
     * @param requestBody
     * @param fields
     * @result ChannelItemRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService33(
        requestBody: {
            recipient: MessageRecipient,
            content: ChatMessage,
            unfurlLinks?: boolean | null,
            attachments?: Array<AttachmentIn> | null,
            externalId?: string | null,
        },
        fields?: string,
    ): Promise<ChannelItemRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/chats/messages/send-message`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Extended Types
     * Get all types that support custom fields.
     * @param scope
     * @param fields
     * @result ExtendedType Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService43(
        scope: 'Org',
        fields?: string,
    ): Promise<Array<ExtendedType> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/custom-fields/extended-types`,
            query: {
                'scope': scope,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Values
     * Get all custom field values for a type. Optionally, extendedEntityIds can be used to get data for one or more entity ids.
     * @param typeKey
     * @param skip
     * @param top
     * @param extendedEntityIds
     * @param scope
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService44(
        typeKey: string,
        skip?: string | null,
        top: number | null = 100,
        extendedEntityIds?: Array<string> | null,
        scope?: string,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<CustomFieldsRecord>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/custom-fields/${typeKey}/all-values`,
            query: {
                '$skip': skip,
                '$top': top,
                'extendedEntityIds': extendedEntityIds,
                'scope': scope,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Enum Value
     * Add new option to custom field of `Select from options` type. Options can only be added via this API call if custom field has the `New options can be added on the fly` flag set. Returns saved records.
     * @param typeKey
     * @param customFieldId
     * @param requestBody
     * @param fields
     * @result EnumValueData Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService34(
        typeKey: string,
        customFieldId: string,
        requestBody: {
            valuesToAdd: Array<EnumValueData>,
            scope: ExtendedTypeScope,
        },
        fields?: string,
    ): Promise<Array<EnumValueData> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/custom-fields/${typeKey}/enum-values/${customFieldId}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Enum Values
     * Get all types that support custom fields.
     * @param typeKey
     * @param customFieldId
     * @param skip
     * @param top
     * @param query
     * @param ordering
     * @param scope
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService45(
        typeKey: string,
        customFieldId: string,
        skip?: string | null,
        top: number | null = 100,
        query?: string | null,
        ordering?: 'NAME_ASC',
        scope?: string,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<EnumValueData>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/custom-fields/${typeKey}/enum-values/${customFieldId}`,
            query: {
                '$skip': skip,
                '$top': top,
                'query': query,
                'ordering': ordering,
                'scope': scope,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Field
     * Create custom field for a type.
     * @param typeKey
     * @param requestBody
     * @param fields
     * @result CustomField Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService35(
        typeKey: string,
        requestBody: {
            name: string,
            description?: string | null,
            type: CFType,
            constraint?: CFConstraint | null,
            required: boolean,
            private: boolean,
            access?: AccessType | null,
            defaultValue: CFInputValue,
            openEnumValuesModification?: CFEnumValuesModification | null,
            scope: ExtendedTypeScope,
        },
        fields?: string,
    ): Promise<CustomField | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/custom-fields/${typeKey}/fields`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Fields
     * Get custom fields for a type.
     * @param typeKey
     * @param withArchived
     * @param scope
     * @param fields
     * @result CustomField Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService46(
        typeKey: string,
        withArchived: boolean = false,
        scope?: string,
        fields?: string,
    ): Promise<Array<CustomField> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/custom-fields/${typeKey}/fields`,
            query: {
                'withArchived': withArchived,
                'scope': scope,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Reorder
     * Re-order custom fields. Pass IDs of the custom fields in the order you wish the custom fields to be.
     * @param typeKey
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService36(
        typeKey: string,
        requestBody: {
            customFieldOrder: Array<string>,
            scope: ExtendedTypeScope,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/custom-fields/${typeKey}/fields/reorder`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Archive
     * Archive a custom field for a type.
     * @param typeKey
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService37(
        typeKey: string,
        id: string,
        requestBody: {
            scope: ExtendedTypeScope,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/custom-fields/${typeKey}/fields/${id}/archive`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Restore
     * Restore custom field for a type.
     * @param typeKey
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService38(
        typeKey: string,
        id: string,
        requestBody: {
            scope: ExtendedTypeScope,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/custom-fields/${typeKey}/fields/${id}/restore`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Update Field
     * Update custom field for a type. Optional parameters will be ignored when not specified, and updated otherwise.
     * @param typeKey
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService8(
        typeKey: string,
        id: string,
        requestBody: {
            name?: string | null,
            description?: string | null,
            constraint?: CFConstraint | null,
            required?: boolean | null,
            private?: boolean | null,
            access?: AccessType | null,
            defaultValue?: CFInputValue | null,
            enumValues?: Array<EnumValueData> | null,
            openEnumValuesModification?: CFEnumValuesModification | null,
            scope: ExtendedTypeScope,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/custom-fields/${typeKey}/fields/${id}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Field
     * Remove custom field for a type.
     * @param typeKey
     * @param id
     * @param scope
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService12(
        typeKey: string,
        id: string,
        scope: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/custom-fields/${typeKey}/fields/${id}`,
            query: {
                'scope': scope,
            },
        });
        return result.body;
    }

    /**
     * Get Value
     * Get custom field value for a type and entity id.
     * @param typeKey
     * @param entityId
     * @param scope
     * @param fields
     * @result CustomFieldsRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService47(
        typeKey: string,
        entityId: string,
        scope?: string,
        fields?: string,
    ): Promise<CustomFieldsRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/custom-fields/${typeKey}/${entityId}/values`,
            query: {
                'scope': scope,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Value
     * Update custom field value(s) for a type and entity id.
     * @param entityId
     * @param typeKey
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService9(
        entityId: string,
        typeKey: string,
        requestBody: {
            values: Array<CustomFieldInputValue>,
            scope: ExtendedTypeScope,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/custom-fields/${typeKey}/${entityId}/values`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Create Draft
     * @param fields
     * @param requestBody
     * @result DR_Draft Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService39(
        fields?: string,
        requestBody?: {
            title?: string | null,
            text?: string | null,
            textVersion?: number | null,
            type?: DraftDocumentType,
            folder?: string | null,
            publicationDetails2?: PublicationDetails | null,
        },
    ): Promise<DR_Draft | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/docs/drafts`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Draft
     * @param id
     * @param fields
     * @result DR_Draft Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService48(
        id: string,
        fields?: string,
    ): Promise<DR_Draft | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/docs/drafts/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Draft
     * @param id
     * @param fields
     * @param requestBody
     * @result DR_Draft Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService10(
        id: string,
        fields?: string,
        requestBody?: {
            title?: string | null,
            text?: string | null,
            textVersion?: number | null,
            type?: DraftDocumentType | null,
            folder?: string | null,
            publicationDetails2?: PublicationDetails | null,
        },
    ): Promise<DR_Draft | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/docs/drafts/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Draft
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService13(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/docs/drafts/${id}`,
        });
        return result.body;
    }

    /**
     * Create Folder
     * @param requestBody
     * @param fields
     * @result DocumentFolderRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService40(
        requestBody: {
            name: string,
            parentId?: string | null,
        },
        fields?: string,
    ): Promise<DocumentFolderRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/docs/drafts/folder`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Folder by Alias
     * @param alias
     * @param fields
     * @result DocumentFolderRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService49(
        alias: string,
        fields?: string,
    ): Promise<DocumentFolderRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/docs/drafts/folder/alias:${alias}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete Folder
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService14(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/docs/drafts/folder/${id}`,
        });
        return result.body;
    }

    /**
     * Update Name
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService11(
        id: string,
        requestBody: {
            name: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/docs/drafts/folder/${id}/name`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Update Parent
     * @param id
     * @param requestBody
     * @param fields
     * @result DocumentFolderRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService12(
        id: string,
        requestBody: {
            parentFolderId: string,
        },
        fields?: string,
    ): Promise<DocumentFolderRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/docs/drafts/folder/${id}/parent`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Create Profile
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService41(
        id: string,
        requestBody: {
            editorId: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/docs/drafts/${id}/editors/profiles`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Profiles
     * @param id
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService50(
        id: string,
        fields?: string,
    ): Promise<Array<TD_MemberProfile> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/docs/drafts/${id}/editors/profiles`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete Profile
     * @param id
     * @param editorId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService15(
        id: string,
        editorId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/docs/drafts/${id}/editors/profiles/${editorId}`,
        });
        return result.body;
    }

    /**
     * Create Team
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService42(
        id: string,
        requestBody: {
            teamId: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/docs/drafts/${id}/editors/teams`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Teams
     * @param id
     * @param fields
     * @result TD_Team Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService51(
        id: string,
        fields?: string,
    ): Promise<Array<TD_Team> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/docs/drafts/${id}/editors/teams`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete Team
     * @param id
     * @param teamId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService16(
        id: string,
        teamId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/docs/drafts/${id}/editors/teams/${teamId}`,
        });
        return result.body;
    }

    /**
     * Add
     * Add custom emoji.
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService43(
        requestBody: {
            emoji: string,
            attachmentId: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/emojis/add`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete
     * Delete an emoji by its name.
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService44(
        requestBody: {
            emoji: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/emojis/delete`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Record Usage
     * Record emojis usage and update frequently used list.
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService45(
        requestBody: {
            emojis: Array<string>,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/emojis/record-usage`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Exists
     * Check whether a given emoji name exists.
     * @param emoji
     * @result boolean Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService52(
        emoji: string,
    ): Promise<boolean | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/emojis/exists`,
            query: {
                'emoji': emoji,
            },
        });
        return result.body;
    }

    /**
     * Frequently Used
     * List frequently used emojis.
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService53(): Promise<Array<string> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/emojis/frequently-used`,
        });
        return result.body;
    }

    /**
     * Search
     * Search for emoji.
     * @param query
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService54(
        query: string,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<EmojiSearchMatchData>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/emojis/search`,
            query: {
                'query': query,
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get HTTP API Model
     * Get the HTTP API model that describes the available HTTP API's
     * @param fields
     * @result HA_Model Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService55(
        fields?: string,
    ): Promise<HA_Model | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/http-api-model`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Check Permission
     * @param requestBody
     * @result boolean Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService46(
        requestBody: {
            principal: PrincipalIn,
            uniqueRightCode: string,
            target: PermissionTarget,
        },
    ): Promise<boolean | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/permissions/check-permission`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Permissions
     * @param fields
     * @result DTO_RightsWithHierarchy Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService56(
        fields?: string,
    ): Promise<DTO_RightsWithHierarchy | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/permissions`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Project
     * Create a new project.
     * @param requestBody
     * @param fields
     * @result PR_Project Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService47(
        requestBody: {
            key: ProjectKey,
            name: string,
            description?: string | null,
            private?: boolean,
            tags?: Array<string>,
        },
        fields?: string,
    ): Promise<PR_Project | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Projects
     * Get/search all projects. Parameters are applied as 'AND' filters.
     * @param skip
     * @param top
     * @param term
     * @param tag
     * @param starred
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService57(
        skip?: string | null,
        top: number | null = 100,
        term?: string | null,
        tag?: string | null,
        starred?: boolean | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PR_Project>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects`,
            query: {
                '$skip': skip,
                '$top': top,
                'term': term,
                'tag': tag,
                'starred': starred,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Projects by Member
     * Get all projects for a member.
     * @param member
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService58(
        member: string,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PR_Project>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/member:${member}`,
            query: {
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Projects with Right
     * @param rightCode
     * @param skip
     * @param top
     * @param term
     * @param path
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService59(
        rightCode: string,
        skip?: string | null,
        top: number | null = 100,
        term?: string | null,
        path?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PR_Project>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/right-code:${rightCode}`,
            query: {
                '$skip': skip,
                '$top': top,
                'term': term,
                'path': path,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Projects by Team
     * Get all projects for a team.
     * @param team
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService60(
        team: string,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PR_Project>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/team:${team}`,
            query: {
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Project
     * Get project by id or project key.
     * @param project
     * @param fields
     * @result PR_Project Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService61(
        project: string,
        fields?: string,
    ): Promise<PR_Project | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Project
     * Update an existing project. Optional parameters will be ignored when not specified, and updated otherwise.
     * @param project
     * @param fields
     * @param requestBody
     * @result PR_Project Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService13(
        project: string,
        fields?: string,
        requestBody?: {
            key?: ProjectKey | null,
            name?: string | null,
            description?: string | null,
            private?: boolean | null,
            tags?: Array<string> | null,
            icon?: string | null,
        },
    ): Promise<PR_Project | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/${project}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Archive Project
     * Archive a project.
     * @param project
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService17(
        project: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}`,
        });
        return result.body;
    }

    /**
     * Stop
     * Stop execution by ExecutionId.
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async postService48(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/automation/graph-executions/${id}/stop`,
        });
        return result.body;
    }

    /**
     * Get Graph Execution
     * @param id
     * @param fields
     * @result JobExecutionDTO Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService62(
        id: string,
        fields?: string,
    ): Promise<JobExecutionDTO | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/automation/graph-executions/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Parameter
     * @param stepExecId
     * @param key
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService63(
        stepExecId: string,
        key: string,
    ): Promise<string | null | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/automation/step-executions/${stepExecId}/parameters/${key}`,
        });
        return result.body;
    }

    /**
     * Update Parameter
     * @param stepExecId
     * @param key
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService14(
        stepExecId: string,
        key: string,
        requestBody: {
            value: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/automation/step-executions/${stepExecId}/parameters/${key}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Parameter
     * @param stepExecId
     * @param key
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService18(
        stepExecId: string,
        key: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/automation/step-executions/${stepExecId}/parameters/${key}`,
        });
        return result.body;
    }

    /**
     * Create Param
     * Create a new project parameter in a parameter bundle
     * @param requestBody
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService49(
        requestBody: {
            bundleId: string,
            key: string,
            value: string,
        },
    ): Promise<string | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/params`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Params
     * List project parameters in a parameter bundle
     * @param bundleId
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService64(
        bundleId: string,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PlainParameterRecord>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/params`,
            query: {
                'bundleId': bundleId,
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Param
     * Update an existing project parameter.
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService15(
        id: string,
        requestBody: {
            value: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/params/${id}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Param
     * Delete an existing project parameter.
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService19(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/params/${id}`,
        });
        return result.body;
    }

    /**
     * Create In Default Bundle
     * Create a new project parameter in the default parameter bundle
     * @param requestBody
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService50(
        requestBody: {
            projectId: string,
            key: string,
            value: string,
        },
    ): Promise<string | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/params/in-default-bundle`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Request Access to Project
     * Request access to a project.
     * @param project
     * @result any Success
     * @throws ApiError
     */
    public static async postService51(
        project: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/private-projects/${project}/request-access`,
        });
        return result.body;
    }

    /**
     * Get All Private Projects
     * List private projects in the current organisation.
     * @param fields
     * @result PR_PrivateProject Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService65(
        fields?: string,
    ): Promise<Array<PR_PrivateProject> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/private-projects`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Add Responsibility
     * Add a responsibility for a given subject id.
     * @param requestBody
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService52(
        requestBody: {
            subjectId: string,
            summary: string,
            notes?: string | null,
        },
    ): Promise<string | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/responsibilities`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Update Responsibility
     * Edit an existing responsibility.
     * @param responsibilityId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService16(
        responsibilityId: string,
        requestBody: {
            summary: string,
            notes?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/responsibilities/${responsibilityId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Responsibility
     * Delete an existing responsibility.
     * @param responsibilityId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService20(
        responsibilityId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/responsibilities/${responsibilityId}`,
        });
        return result.body;
    }

    /**
     * Delete Responsibility Subject
     * Delete an existing responsibility subject for a given project id.
     * @param subjectId
     * @param project
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService21(
        subjectId: string,
        project?: string | null,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/responsibilities/subjects/${subjectId}`,
            query: {
                'project': project,
            },
        });
        return result.body;
    }

    /**
     * Create Secret
     * Create a new secret in a parameter bundle. Value is base64 encoded bytes of the secret value, possibly after client side encryption. If the secret value bytes are encrypted then the id of the Space public key must be provided
     * @param requestBody
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService53(
        requestBody: {
            bundleId: string,
            key: string,
            valueBase64: string,
            publicKeyId?: string | null,
        },
    ): Promise<string | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/secrets`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Secrets
     * List project secrets in a parameter bundle
     * @param bundleId
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService66(
        bundleId: string,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<SecretParameterRecord>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/secrets`,
            query: {
                'bundleId': bundleId,
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Secret
     * Update an existing project secret.
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService17(
        id: string,
        requestBody: {
            valueBase64: string,
            publicKeyId?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/secrets/${id}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Secret
     * Delete an existing project secret.
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService22(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/secrets/${id}`,
        });
        return result.body;
    }

    /**
     * Create In Default Bundle
     * Create a new secret in the default parameter bundle. Value is base64 encoded bytes of the secret value, possibly after client side encryption. If the secret value bytes are encrypted then the id of the Space public key must be provided
     * @param requestBody
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService54(
        requestBody: {
            projectId: string,
            key: string,
            valueBase64: string,
            publicKeyId?: string | null,
        },
    ): Promise<string | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/secrets/in-default-bundle`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Track Tag Access
     * Track a tag has been accessed.
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService55(
        requestBody: {
            tag: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/tags/track-access`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Tags
     * List all tags, mapped to the number of projects they are used in.
     * @param fields
     * @result PR_Tag Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService67(
        fields?: string,
    ): Promise<Array<PR_Tag> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/tags`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Admins
     * Returns the list of all project administrators
     * @param project
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService68(
        project: string,
        fields?: string,
    ): Promise<Array<TD_MemberProfile> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/access/admins`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Add Administrator
     * Add a member as administrator to a project.
     * @param project
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService56(
        project: string,
        requestBody: {
            profile: ProfileIdentifier,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/access/admins/profiles`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Remove Administrator
     * Remove a member as administrator from a project.
     * @param project
     * @param profile
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService23(
        project: string,
        profile: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/access/admins/profiles/${profile}`,
        });
        return result.body;
    }

    /**
     * Add Administrators Team
     * Add a team as administrators to a project.
     * @param project
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService57(
        project: string,
        requestBody: {
            teamId: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/access/admins/teams`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Remove Administrators Team
     * Remove a team as administrators from a project.
     * @param project
     * @param teamId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService24(
        project: string,
        teamId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/access/admins/teams/${teamId}`,
        });
        return result.body;
    }

    /**
     * Get all collaborators' profiles
     * @param project
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService69(
        project: string,
        fields?: string,
    ): Promise<Array<TD_MemberProfile> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/access/collaborators`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Add a collaborator
     * @param project
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService58(
        project: string,
        requestBody: {
            profile: ProfileIdentifier,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/access/collaborators/profiles`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get all individual collaborators
     * @param project
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService70(
        project: string,
        fields?: string,
    ): Promise<Array<TD_MemberProfile> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/access/collaborators/profiles`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Remove an individual collaborators
     * @param project
     * @param profile
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService25(
        project: string,
        profile: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/access/collaborators/profiles`,
            query: {
                'profile': profile,
            },
        });
        return result.body;
    }

    /**
     * Add a collaborators team
     * @param project
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService59(
        project: string,
        requestBody: {
            teamId: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/access/collaborators/teams`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get all collaborators teams
     * @param project
     * @param fields
     * @result TD_Team Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService71(
        project: string,
        fields?: string,
    ): Promise<Array<TD_Team> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/access/collaborators/teams`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Remove a collaborators team
     * @param project
     * @param teamId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService26(
        project: string,
        teamId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/access/collaborators/teams`,
            query: {
                'teamId': teamId,
            },
        });
        return result.body;
    }

    /**
     * Get All Member Profiles
     * Get project members for a given project key.
     * @param project
     * @param skip
     * @param top
     * @param query
     * @param includingAdmins
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService72(
        project: string,
        skip?: string | null,
        top: number | null = 100,
        query: string = '',
        includingAdmins: boolean = false,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_MemberProfile>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/access/member-profiles`,
            query: {
                '$skip': skip,
                '$top': top,
                'query': query,
                'includingAdmins': includingAdmins,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Add Member
     * Add a member to a project.
     * @param project
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService60(
        project: string,
        requestBody: {
            profile: ProfileIdentifier,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/access/members/profiles`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Remove Member
     * Remove a member from a project.
     * @param project
     * @param profile
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService27(
        project: string,
        profile: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/access/members/profiles/${profile}`,
        });
        return result.body;
    }

    /**
     * Add Team
     * Add a team to a project.
     * @param project
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService61(
        project: string,
        requestBody: {
            teamId: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/access/members/teams`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Remove Team
     * Remove a team from a project.
     * @param project
     * @param teamId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService28(
        project: string,
        teamId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/access/members/teams/${teamId}`,
        });
        return result.body;
    }

    /**
     * Organization Profiles Who Can View the Project
     * Get organization members who can view a project.
     * @param project
     * @param term
     * @param skip
     * @param top
     * @param meOnTop
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService73(
        project: string,
        term: string,
        skip?: string | null,
        top: number | null = 100,
        meOnTop: boolean = false,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_MemberProfile>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/access/viewers`,
            query: {
                'term': term,
                '$skip': skip,
                '$top': top,
                'meOnTop': meOnTop,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Graph Executions
     * Search executions. Parameters are applied as 'AND' filters.
     * @param project
     * @param jobId
     * @param branchFilter
     * @param statusFilter
     * @param jobTriggerFilter
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService74(
        project: string,
        jobId: string,
        branchFilter?: string | null,
        statusFilter?: ExecutionStatus,
        jobTriggerFilter?: JobTriggerType,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<JobExecutionDTO>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/automation/graph-executions`,
            query: {
                'jobId': jobId,
                'branchFilter': branchFilter,
                'statusFilter': statusFilter,
                'jobTriggerFilter': jobTriggerFilter,
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Start
     * Start Job. Returns Execution id, see projects/automation/graph-executions/{id}
     * @param project
     * @param jobId
     * @param requestBody
     * @param fields
     * @result LaunchResult Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService62(
        project: string,
        jobId: string,
        requestBody: {
            branch: Branch,
        },
        fields?: string,
    ): Promise<LaunchResult | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/automation/jobs/${jobId}/start`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Jobs
     * Search jobs. Parameters are applied as 'AND' filters.
     * @param project
     * @param repoFilter
     * @param branchFilter
     * @param trigger
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService75(
        project: string,
        repoFilter: string,
        branchFilter: string,
        trigger?: JobTriggerType,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<JobDTO>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/automation/jobs`,
            query: {
                'repoFilter': repoFilter,
                'branchFilter': branchFilter,
                'trigger': trigger,
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Job
     * @param project
     * @param jobId
     * @param fields
     * @result JobDTO Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService76(
        project: string,
        jobId: string,
        fields?: string,
    ): Promise<JobDTO | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/automation/jobs/${jobId}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Code Reviews
     * @param project
     * @param skip
     * @param top
     * @param state
     * @param text
     * @param author
     * @param from
     * @param to
     * @param sort
     * @param reviewer
     * @param type
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService77(
        project: string,
        skip?: string | null,
        top: number | null = 100,
        state?: 'Opened',
        text?: string | null,
        author?: string | null,
        from?: string | null,
        to?: string | null,
        sort?: 'CreatedAtAsc',
        reviewer?: string | null,
        type?: ReviewType,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<CodeReviewWithCount>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/code-reviews`,
            query: {
                '$skip': skip,
                '$top': top,
                'state': state,
                'text': text,
                'author': author,
                'from': from,
                'to': to,
                'sort': sort,
                'reviewer': reviewer,
                'type': type,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Code Review
     * @param project
     * @param reviewId
     * @param fields
     * @result CodeReviewRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService78(
        project: string,
        reviewId: string,
        fields?: string,
    ): Promise<CodeReviewRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/code-reviews/${reviewId}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Merge Merge Request
     * @param project
     * @param reviewId
     * @param requestBody
     * @param fields
     * @result GitMergeResultHttp Success
     * @result any Error
     * @throws ApiError
     */
    public static async putService1(
        project: string,
        reviewId: string,
        requestBody: {
            deleteSourceBranch: boolean,
        },
        fields?: string,
    ): Promise<GitMergeResultHttp | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PUT',
            path: `/projects/${project}/code-reviews/${reviewId}/merge`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Rebase Merge Request
     * @param project
     * @param reviewId
     * @param requestBody
     * @param fields
     * @result GitRebaseResultHttp Success
     * @result any Error
     * @throws ApiError
     */
    public static async putService2(
        project: string,
        reviewId: string,
        requestBody: {
            deleteSourceBranch: boolean,
            squash: boolean,
            squashedCommitMessage?: string | null,
        },
        fields?: string,
    ): Promise<GitRebaseResultHttp | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PUT',
            path: `/projects/${project}/code-reviews/${reviewId}/rebase`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Review Details
     * @param project
     * @param reviewId
     * @param fields
     * @result CodeReviewDetailedInfo Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService79(
        project: string,
        reviewId: string,
        fields?: string,
    ): Promise<CodeReviewDetailedInfo | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/code-reviews/${reviewId}/details`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Add Review Participant
     * @param project
     * @param reviewId
     * @param user
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService63(
        project: string,
        reviewId: string,
        user: string,
        requestBody: {
            role: CodeReviewParticipantRole,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/code-reviews/${reviewId}/participants/${user}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Remove Review Participant
     * @param project
     * @param reviewId
     * @param user
     * @param role
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService29(
        project: string,
        reviewId: string,
        user: string,
        role: CodeReviewParticipantRole,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/code-reviews/${reviewId}/participants/${user}`,
            query: {
                'role': role,
            },
        });
        return result.body;
    }

    /**
     * Add Revisions to Review
     * @param project
     * @param reviewId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService64(
        project: string,
        reviewId: string,
        requestBody: {
            revisions: Array<RevisionInReview>,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/code-reviews/${reviewId}/revisions`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Remove Revisions from Review
     * @param project
     * @param reviewId
     * @param revisions
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService30(
        project: string,
        reviewId: string,
        revisions: Array<string>,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/code-reviews/${reviewId}/revisions`,
            query: {
                'revisions': revisions,
            },
        });
        return result.body;
    }

    /**
     * Edit Review State
     * @param project
     * @param reviewId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService18(
        project: string,
        reviewId: string,
        requestBody: {
            state: CodeReviewState,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/${project}/code-reviews/${reviewId}/state`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Suggested Reviewers
     * @param project
     * @param reviewId
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService80(
        project: string,
        reviewId: string,
        fields?: string,
    ): Promise<Array<TD_MemberProfile> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/code-reviews/${reviewId}/suggested-reviewers`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Edit Review Title
     * @param project
     * @param reviewId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService19(
        project: string,
        reviewId: string,
        requestBody: {
            title: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/${project}/code-reviews/${reviewId}/title`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Unread Revisions
     * @param project
     * @param reviewId
     * @param fields
     * @result RevisionInReview Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService81(
        project: string,
        reviewId: string,
        fields?: string,
    ): Promise<Array<RevisionInReview> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/code-reviews/${reviewId}/unread-revisions`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create New Repository
     * Creates a new package repository for a given project id.
     * @param project
     * @param requestBody
     * @param fields
     * @result ProjectPackageRepository Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService65(
        project: string,
        requestBody: {
            type: string,
            name: string,
            description?: string | null,
            public: boolean,
            settings: ES_PackageRepositorySettings,
            mode: PackageRepositoryMode,
            mirror?: PackageRepositoryMirror | null,
        },
        fields?: string,
    ): Promise<ProjectPackageRepository | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/packages/repositories`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Repositories
     * Gets a list of package repositories for a given project id.
     * @param project
     * @param type
     * @param query
     * @param fields
     * @result ProjectPackageRepository Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService82(
        project: string,
        type?: string | null,
        query?: string | null,
        fields?: string,
    ): Promise<Array<ProjectPackageRepository> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/packages/repositories`,
            query: {
                'type': type,
                'query': query,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Repository
     * Gets a package repository for a given project id by type and name.
     * @param project
     * @param repository
     * @param fields
     * @result ProjectPackageRepository Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService83(
        project: string,
        repository: string,
        fields?: string,
    ): Promise<ProjectPackageRepository | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/packages/repositories/${repository}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Repository
     * Updates package repository settings for a given project id.
     * @param project
     * @param repository
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService20(
        project: string,
        repository: string,
        requestBody?: {
            name?: string | null,
            description?: string | null,
            public?: boolean | null,
            settings?: ES_PackageRepositorySettings | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/${project}/packages/repositories/${repository}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Repository
     * Removes package repository for a given project id.
     * @param project
     * @param repository
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService31(
        project: string,
        repository: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/packages/repositories/${repository}`,
        });
        return result.body;
    }

    /**
     * Cleanup Repository
     * Cleanup specified package repository.
     * @param project
     * @param repository
     * @result any Success
     * @throws ApiError
     */
    public static async postService66(
        project: string,
        repository: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/packages/repositories/${repository}/cleanup`,
        });
        return result.body;
    }

    /**
     * Get All Packages
     * Gets a list of repository packages for a given project id.
     * @param project
     * @param repository
     * @param query
     * @param mirrorId
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService84(
        project: string,
        repository: string,
        query: string,
        mirrorId?: string | null,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PackageData>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/packages/repositories/${repository}/packages`,
            query: {
                'query': query,
                'mirrorId': mirrorId,
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Report Package Version Metadata
     * Report a package version metadata in repository for a given project id.
     * @param project
     * @param repository
     * @param packageName
     * @param packageVersion
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async putService3(
        project: string,
        repository: string,
        packageName: string,
        packageVersion: string,
        requestBody: {
            pin: boolean,
            comment?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/projects/${project}/packages/repositories/${repository}/packages/name:${packageName}/metadata/version:${packageVersion}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Package Versions
     * Gets a list of repository package versions for a given project id.
     * @param project
     * @param repository
     * @param packageName
     * @param query
     * @param mirrorId
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService85(
        project: string,
        repository: string,
        packageName: string,
        query: string,
        mirrorId?: string | null,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PackageVersionData>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/packages/repositories/${repository}/packages/name:${packageName}/versions`,
            query: {
                'query': query,
                'mirrorId': mirrorId,
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Package Version Details
     * Gets a details for repository package version for a given project id.
     * @param project
     * @param repository
     * @param packageName
     * @param packageVersion
     * @param fields
     * @result PackageVersionDetails Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService86(
        project: string,
        repository: string,
        packageName: string,
        packageVersion: string,
        fields?: string,
    ): Promise<PackageVersionDetails | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/packages/repositories/${repository}/packages/name:${packageName}/versions/version:${packageVersion}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete Package Version
     * Removes a package version in repository for a given project id.
     * @param project
     * @param repository
     * @param packageName
     * @param packageVersion
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService32(
        project: string,
        repository: string,
        packageName: string,
        packageVersion: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/packages/repositories/${repository}/packages/name:${packageName}/versions/version:${packageVersion}`,
        });
        return result.body;
    }

    /**
     * Get Repository URL
     * Gets a package repository URL for a given project id.
     * @param project
     * @param repository
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService87(
        project: string,
        repository: string,
    ): Promise<string | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/packages/repositories/${repository}/url`,
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get All Packages
     * Gets a list of repository packages for a given project id.
     * @param project
     * @param type
     * @param repositoryName
     * @param query
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService88(
        project: string,
        type: string,
        repositoryName: string,
        query: string,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PackageData>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/packages/repositories/type:${type}/repository:${repositoryName}/packages`,
            query: {
                'query': query,
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get All Package Versions
     * Gets a list of repository package versions for a given project id.
     * @param project
     * @param type
     * @param repositoryName
     * @param packageName
     * @param query
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService89(
        project: string,
        type: string,
        repositoryName: string,
        packageName: string,
        query: string,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PackageVersionData>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/packages/repositories/type:${type}/repository:${repositoryName}/packages/name:${packageName}/versions`,
            query: {
                'query': query,
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get Package Version Details
     * Gets a details for repository package version for a given project id.
     * @param project
     * @param type
     * @param repositoryName
     * @param packageName
     * @param packageVersion
     * @param fields
     * @result PackageVersionDetails Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService90(
        project: string,
        type: string,
        repositoryName: string,
        packageName: string,
        packageVersion: string,
        fields?: string,
    ): Promise<PackageVersionDetails | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/packages/repositories/type:${type}/repository:${repositoryName}/packages/name:${packageName}/versions/version:${packageVersion}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Delete Package Version
     * Removes a package version in repository for a given project id.
     * @param project
     * @param type
     * @param repositoryName
     * @param packageName
     * @param packageVersion
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService33(
        project: string,
        type: string,
        repositoryName: string,
        packageName: string,
        packageVersion: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/packages/repositories/type:${type}/repository:${repositoryName}/packages/name:${packageName}/versions/version:${packageVersion}`,
        });
        return result.body;
    }

    /**
     * Find Packages in Repository
     * Executes a package search for a given project id.
     * @param project
     * @param type
     * @param query
     * @param mirrorId
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService91(
        project: string,
        type: string,
        query: string,
        mirrorId?: string | null,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PackageVersionData>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/packages/search`,
            query: {
                'type': type,
                'query': query,
                'mirrorId': mirrorId,
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Types
     * Creates a new package repository for a given project id.
     * @param project
     * @param fields
     * @result PackageType Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService92(
        project: string,
        fields?: string,
    ): Promise<Array<PackageType> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/packages/types`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Checklist
     * @param project
     * @param requestBody
     * @param fields
     * @result Checklist Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService67(
        project: string,
        requestBody: {
            name: string,
        },
        fields?: string,
    ): Promise<Checklist | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/planning/checklists`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Checklists
     * @param project
     * @param skip
     * @param top
     * @param query
     * @param sorting
     * @param descending
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService93(
        project: string,
        skip?: string | null,
        top: number | null = 100,
        query?: string | null,
        sorting?: 'UPDATED',
        descending: boolean = false,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<Checklist>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/planning/checklists`,
            query: {
                '$skip': skip,
                '$top': top,
                'query': query,
                'sorting': sorting,
                'descending': descending,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Import Checklist
     * @param project
     * @param requestBody
     * @param fields
     * @result Checklist Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService68(
        project: string,
        requestBody: {
            name: string,
            tabIndentedLines: string,
        },
        fields?: string,
    ): Promise<Checklist | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/planning/checklists/import`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Import Checklist Lines
     * @param project
     * @param checklistId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService69(
        project: string,
        checklistId: string,
        requestBody: {
            targetParentId: string,
            afterItemId?: string | null,
            tabIndentedLines: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/planning/checklists/${checklistId}/import`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Update Checklist
     * @param project
     * @param checklistId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService21(
        project: string,
        checklistId: string,
        requestBody?: {
            name?: string,
            description?: string | null,
            owner?: string | null,
            tag?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/${project}/planning/checklists/${checklistId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Checklist
     * @param project
     * @param checklistId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService34(
        project: string,
        checklistId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/planning/checklists/${checklistId}`,
        });
        return result.body;
    }

    /**
     * Get All Starred Checklists
     * @param project
     * @param fields
     * @result Checklist Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService94(
        project: string,
        fields?: string,
    ): Promise<Array<Checklist> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/planning/checklists/starred`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Full Checklist Tree
     * @param project
     * @param checklistId
     * @param fields
     * @result PlanItemChildren Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService95(
        project: string,
        checklistId: string,
        fields?: string,
    ): Promise<Array<PlanItemChildren> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/planning/checklists/${checklistId}/full-checklist-tree`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Issue
     * @param project
     * @param requestBody
     * @param fields
     * @result Issue Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService70(
        project: string,
        requestBody: {
            title: string,
            description?: string | null,
            assignee?: ProfileIdentifier | null,
            status: string,
            dueDate?: string | null,
            tags?: Array<string>,
            checklists?: Array<string>,
            sprints?: Array<string>,
            attachments?: Array<AttachmentIn> | null,
            fromMessage?: MessageLink | null,
            customFields?: Array<CustomFieldInputValue> | null,
        },
        fields?: string,
    ): Promise<Issue | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/planning/issues`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Issues
     * @param project
     * @param assigneeId
     * @param statuses
     * @param sorting
     * @param descending
     * @param skip
     * @param top
     * @param createdByProfileId
     * @param tagId
     * @param query
     * @param tags
     * @param customFields
     * @param importTransaction
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService96(
        project: string,
        assigneeId: Array<string | null>,
        statuses: Array<string>,
        sorting: IssuesSorting,
        descending: boolean,
        skip?: string | null,
        top: number | null = 100,
        createdByProfileId?: string | null,
        tagId?: string | null,
        query?: string | null,
        tags?: Array<string> | null,
        customFields?: Array<string> | null,
        importTransaction?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<Issue>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/planning/issues`,
            query: {
                'assigneeId': assigneeId,
                'statuses': statuses,
                'sorting': sorting,
                'descending': descending,
                '$skip': skip,
                '$top': top,
                'createdByProfileId': createdByProfileId,
                'tagId': tagId,
                'query': query,
                'tags': tags,
                'customFields': customFields,
                'importTransaction': importTransaction,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Import issues
     * @param project
     * @param requestBody
     * @param fields
     * @result IssueImportResult Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService71(
        project: string,
        requestBody: {
            metadata: ImportMetadata,
            issues: Array<ExternalIssue>,
            assigneeMissingPolicy?: ImportMissingPolicy,
            statusMissingPolicy?: ImportMissingPolicy,
            onExistsPolicy?: ImportExistsPolicy,
            dryRun: boolean,
        },
        fields?: string,
    ): Promise<IssueImportResult | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/planning/issues/import`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Toggle Issue Resolved
     * @param project
     * @param issueId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService72(
        project: string,
        issueId: string,
        requestBody: {
            resolved: boolean,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/planning/issues/${issueId}/toggle-resolved`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Issue by Number
     * @param project
     * @param number
     * @param fields
     * @result Issue Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService97(
        project: string,
        number: number,
        fields?: string,
    ): Promise<Issue | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/planning/issues/number:${number}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Issue
     * @param project
     * @param issueId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService22(
        project: string,
        issueId: string,
        requestBody?: {
            title?: string,
            description?: string | null,
            assignee?: string | null,
            status?: string,
            dueDate?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/${project}/planning/issues/${issueId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Issue
     * @param project
     * @param issueId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService35(
        project: string,
        issueId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/planning/issues/${issueId}`,
        });
        return result.body;
    }

    /**
     * Get All Issue Statuses
     * @param project
     * @param fields
     * @result IssueStatus Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService98(
        project: string,
        fields?: string,
    ): Promise<Array<IssueStatus> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/planning/issues/statuses`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Status
     * @param project
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService23(
        project: string,
        requestBody: {
            statuses: Array<IssueStatusData>,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/${project}/planning/issues/statuses`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Issue Status Distribution
     * @param project
     * @param fields
     * @result IssueStatusWithUsages Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService99(
        project: string,
        fields?: string,
    ): Promise<Array<IssueStatusWithUsages> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/planning/issues/statuses/distribution`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Add Attachments
     * @param project
     * @param issueId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService73(
        project: string,
        issueId: string,
        requestBody: {
            attachments: Array<AttachmentIn>,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/planning/issues/${issueId}/attachments`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Remove Attachments
     * @param project
     * @param issueId
     * @param identities
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService36(
        project: string,
        issueId: string,
        identities: Array<string>,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/planning/issues/${issueId}/attachments`,
            query: {
                'identities': identities,
            },
        });
        return result.body;
    }

    /**
     * Add Issue Checklist
     * @param project
     * @param issueId
     * @param checklistId
     * @result any Success
     * @throws ApiError
     */
    public static async postService74(
        project: string,
        issueId: string,
        checklistId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/planning/issues/${issueId}/checklists/${checklistId}`,
        });
        return result.body;
    }

    /**
     * Remove Issue Checklist
     * @param project
     * @param issueId
     * @param checklistId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService37(
        project: string,
        issueId: string,
        checklistId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/planning/issues/${issueId}/checklists/${checklistId}`,
        });
        return result.body;
    }

    /**
     * Import Issue Comment History
     * @param project
     * @param issueId
     * @param requestBody
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService75(
        project: string,
        issueId: string,
        requestBody: {
            comments: Array<MessageForImport>,
        },
    ): Promise<Array<string> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/planning/issues/${issueId}/comments/import`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Add Issue Tag
     * @param project
     * @param issueId
     * @param tagId
     * @result any Success
     * @throws ApiError
     */
    public static async postService76(
        project: string,
        issueId: string,
        tagId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/planning/issues/${issueId}/tags/${tagId}`,
        });
        return result.body;
    }

    /**
     * Remove Issue Tag
     * @param project
     * @param issueId
     * @param tagId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService38(
        project: string,
        issueId: string,
        tagId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/planning/issues/${issueId}/tags/${tagId}`,
        });
        return result.body;
    }

    /**
     * Create Hierarchical Tag
     * @param project
     * @param requestBody
     * @param fields
     * @result PlanningTag Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService77(
        project: string,
        requestBody: {
            parentTagId?: string | null,
            path: Array<string>,
        },
        fields?: string,
    ): Promise<PlanningTag | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/planning/tags`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Hierarchical Tags
     * @param project
     * @param skip
     * @param top
     * @param query
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService100(
        project: string,
        skip?: string | null,
        top: number | null = 100,
        query?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PlanningTag>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/planning/tags`,
            query: {
                '$skip': skip,
                '$top': top,
                'query': query,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create new repository
     * @param project
     * @param repository
     * @param fields
     * @param requestBody
     * @result PR_RepositoryInfo Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService78(
        project: string,
        repository: string,
        fields?: string,
        requestBody?: {
            description?: string,
            defaultBranch?: string | null,
            initialize?: boolean,
            defaultSetup?: boolean,
        },
    ): Promise<PR_RepositoryInfo | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/repositories/${repository}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete repository
     * @param project
     * @param repository
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService39(
        project: string,
        repository: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/repositories/${repository}`,
        });
        return result.body;
    }

    /**
     * Invoke garbage collection on repository  [Not available in multi-org mode]
     * @param project
     * @param repository
     * @result any Success
     * @throws ApiError
     */
    public static async postService79(
        project: string,
        repository: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/repositories/${repository}/gc`,
        });
        return result.body;
    }

    /**
     * Create Commit Set Review
     * @param project
     * @param repository
     * @param requestBody
     * @param fields
     * @result CommitSetReviewRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService80(
        project: string,
        repository: string,
        requestBody: {
            revisions: Array<string>,
            title?: string | null,
        },
        fields?: string,
    ): Promise<CommitSetReviewRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/repositories/${repository}/commit-set-reviews`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Create Merge Request
     * @param project
     * @param repository
     * @param requestBody
     * @param fields
     * @result MergeRequestRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService81(
        project: string,
        repository: string,
        requestBody: {
            sourceBranch: string,
            targetBranch: string,
            title: string,
            reviewers?: Array<ReviewerParam> | null,
        },
        fields?: string,
    ): Promise<MergeRequestRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/repositories/${repository}/merge-requests`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Create Code Discussion
     * @param project
     * @param repository
     * @param revision
     * @param requestBody
     * @param fields
     * @result CodeDiscussionRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService82(
        project: string,
        repository: string,
        revision: string,
        requestBody: {
            text: string,
            diffContext?: DiffContext | null,
            filename?: string | null,
            line?: number | null,
            oldLine?: number | null,
            pending?: boolean,
        },
        fields?: string,
    ): Promise<CodeDiscussionRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/repositories/${repository}/revisions/${revision}/code-discussions`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Report External Check Status
     * @param project
     * @param repository
     * @param revision
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService83(
        project: string,
        repository: string,
        revision: string,
        requestBody: {
            branch?: string | null,
            changes?: Array<string> | null,
            executionStatus: CommitExecutionStatus,
            url: string,
            externalServiceName: string,
            taskName: string,
            taskId: string,
            timestamp?: number | null,
            description?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/repositories/${repository}/revisions/${revision}/external-checks`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get External Checks For Commit
     * @param project
     * @param repository
     * @param revision
     * @param fields
     * @result ExternalCheckDTO Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService101(
        project: string,
        repository: string,
        revision: string,
        fields?: string,
    ): Promise<Array<ExternalCheckDTO> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/repositories/${repository}/revisions/${revision}/external-checks`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Project Responsibility Scheme
     * Get the responsibilities schema for a given project id.
     * @param project
     * @param fields
     * @result SubjectResponsibilitiesTable Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService102(
        project: string,
        fields?: string,
    ): Promise<Array<SubjectResponsibilitiesTable> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/responsibilities/scheme`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Add Responsibility Subject
     * Add a responsibility subject for a given project id.
     * @param project
     * @param requestBody
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService84(
        project: string,
        requestBody?: {
            name?: string | null,
        },
    ): Promise<string | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/responsibilities/subjects`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Edit Responsibility Subject
     * Update an existing responsibility subject for a given project id.
     * @param project
     * @param subjectId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService24(
        project: string,
        subjectId: string,
        requestBody?: {
            name?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/projects/${project}/responsibilities/subjects/${subjectId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Assign Responsible
     * Assign a responsible person for a given project id and responsibility id.
     * @param project
     * @param responsibilityId
     * @param profileId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService85(
        project: string,
        responsibilityId: string,
        profileId: string,
        requestBody?: {
            role?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/projects/${project}/responsibilities/${responsibilityId}/assignees/${profileId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Remove Responsible
     * Remove a responsible person for a given project id and responsibility id.
     * @param project
     * @param responsibilityId
     * @param profileId
     * @param role
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService40(
        project: string,
        responsibilityId: string,
        profileId: string,
        role?: string | null,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/projects/${project}/responsibilities/${responsibilityId}/assignees/${profileId}`,
            query: {
                'role': role,
            },
        });
        return result.body;
    }

    /**
     * List commits matching query
     * @param project
     * @param repository
     * @param skip
     * @param top
     * @param query
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService103(
        project: string,
        repository: string,
        skip?: string | null,
        top: number | null = 100,
        query?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<GitCommitInfo>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${project}/${repository}/commits`,
            query: {
                '$skip': skip,
                '$top': top,
                'query': query,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Calendar
     * Create a public holiday calendar for a location.
     * @param requestBody
     * @param fields
     * @result PublicHolidayCalendarRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService86(
        requestBody: {
            name: string,
            location: string,
        },
        fields?: string,
    ): Promise<PublicHolidayCalendarRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/public-holidays/calendars`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Calendars
     * Get all public holiday calendars.
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService104(
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PublicHolidayCalendarRecord>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/public-holidays/calendars`,
            query: {
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Import
     * Import holidays in a public holiday calendar, using an attachment (.ics format) as the source.
     * @param requestBody
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService87(
        requestBody: {
            calendar: string,
            attachmentId: string,
        },
    ): Promise<string | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/public-holidays/calendars/import`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Update Calendar
     * Update an existing public holiday calendar.
     * @param id
     * @param requestBody
     * @param fields
     * @result PublicHolidayCalendarRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService25(
        id: string,
        requestBody: {
            name: string,
            location: string,
        },
        fields?: string,
    ): Promise<PublicHolidayCalendarRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/public-holidays/calendars/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Calendar
     * Delete
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService41(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/public-holidays/calendars/${id}`,
        });
        return result.body;
    }

    /**
     * Create Holiday
     * Add a holiday to a public holiday calendar, and specify if it is a working day or not.
     * @param requestBody
     * @param fields
     * @result PublicHoliday Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService88(
        requestBody: {
            calendar: string,
            name: string,
            date: string,
            workingDay: boolean,
            halfDay?: boolean | null,
        },
        fields?: string,
    ): Promise<PublicHoliday | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/public-holidays/holidays`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Holidays
     * Get/search all holidays in a public holiday calendar. Parameters are applied as 'AND' filters.
     * @param skip
     * @param top
     * @param calendar
     * @param location
     * @param startDate
     * @param endDate
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService105(
        skip?: string | null,
        top: number | null = 100,
        calendar?: string | null,
        location?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PublicHoliday>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/public-holidays/holidays`,
            query: {
                '$skip': skip,
                '$top': top,
                'calendar': calendar,
                'location': location,
                'startDate': startDate,
                'endDate': endDate,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Holiday
     * Update a holiday in a public holiday calendar. Optional parameters will be ignored when not specified, and updated otherwise.
     * @param id
     * @param fields
     * @param requestBody
     * @result PublicHoliday Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService26(
        id: string,
        fields?: string,
        requestBody?: {
            calendar?: string | null,
            name?: string | null,
            date?: string | null,
            workingDay?: boolean | null,
            halfDay?: boolean | null,
        },
    ): Promise<PublicHoliday | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/public-holidays/holidays/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Holiday
     * Delete a holiday from a public holiday calendar.
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService42(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/public-holidays/holidays/${id}`,
        });
        return result.body;
    }

    /**
     * Get All Profile Holidays
     * Get holidays observed in the location(s) of the current profile during the selected period.
     * @param startDate
     * @param endDate
     * @param profile
     * @param workingDays
     * @param fields
     * @result PublicHoliday Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService106(
        startDate: string,
        endDate: string,
        profile: string,
        workingDays?: boolean | null,
        fields?: string,
    ): Promise<Array<PublicHoliday> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/public-holidays/holidays/profile-holidays`,
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'profile': profile,
                'workingDays': workingDays,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Related Holidays
     * Search related holidays in all public holiday calendars, during the selected period.
     * @param skip
     * @param top
     * @param startDate
     * @param endDate
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService107(
        skip?: string | null,
        top: number | null = 100,
        startDate?: string | null,
        endDate?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<PublicHoliday>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/public-holidays/holidays/related-holidays`,
            query: {
                '$skip': skip,
                '$top': top,
                'startDate': startDate,
                'endDate': endDate,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Reset Access Token
     * @result any Success
     * @throws ApiError
     */
    public static async postService89(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/slack-import/reset-token`,
        });
        return result.body;
    }

    /**
     * Set Access Token
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService90(
        requestBody: {
            token: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/slack-import/set-token`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Slack OAuth Redirect Endpoint
     * Redirect URI for Space Slack App authentication method
     * @param code
     * @param state
     * @result any Success
     * @throws ApiError
     */
    public static async getService108(
        code: string,
        state?: string | null,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/slack-import/oauth`,
            query: {
                'code': code,
                'state': state,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get All Calendar Events
     * Get calendar events attached to an article in a specific time period.
     * @param dateFrom
     * @param dateTo
     * @param fields
     * @result MeetingRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService109(
        dateFrom: string,
        dateTo: string,
        fields?: string,
    ): Promise<Array<MeetingRecord> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/calendar-events`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get Calendar Event
     * Get a calendar event attached to an article.
     * @param id
     * @param fields
     * @result MeetingRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService110(
        id: string,
        fields?: string,
    ): Promise<MeetingRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/calendar-events/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get All Absence Events
     * Get/search absences. Parameters are applied as 'AND' filters.
     * @param dateFrom
     * @param dateTo
     * @param team
     * @param location
     * @param role
     * @param fields
     * @result AbsenceEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService111(
        dateFrom: string,
        dateTo: string,
        team?: string | null,
        location?: string | null,
        role?: string | null,
        fields?: string,
    ): Promise<Array<AbsenceEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/calendar-events/absence-events`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'team': team,
                'location': location,
                'role': role,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get All Birthday Events
     * Get/search birthdays. Parameters are applied as 'AND' filters.
     * @param dateFrom
     * @param dateTo
     * @param team
     * @param location
     * @param role
     * @param fields
     * @result BirthdayEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService112(
        dateFrom: string,
        dateTo: string,
        team?: string | null,
        location?: string | null,
        role?: string | null,
        fields?: string,
    ): Promise<Array<BirthdayEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/calendar-events/birthday-events`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'team': team,
                'location': location,
                'role': role,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get All Starred Birthday Events
     * Get/search birthdays in a specific time period for starred profiles.
     * @param dateFrom
     * @param dateTo
     * @param fields
     * @result BirthdayEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService113(
        dateFrom: string,
        dateTo: string,
        fields?: string,
    ): Promise<Array<BirthdayEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/calendar-events/birthday-events/starred`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get All Holidays
     * Get/search holidays. Parameters are applied as 'AND' filters.
     * @param startDate
     * @param endDate
     * @param team
     * @param location
     * @param role
     * @param workingDays
     * @param fields
     * @result HolidaysEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService114(
        startDate: string,
        endDate: string,
        team?: string | null,
        location?: string | null,
        role?: string | null,
        workingDays?: boolean | null,
        fields?: string,
    ): Promise<Array<HolidaysEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/calendar-events/holidays`,
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'team': team,
                'location': location,
                'role': role,
                'workingDays': workingDays,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Update Meeting Participation
     * Update RSVP / calendar event participation status for a calendar event attached to an article.
     * @param id
     * @param requestBody
     * @param fields
     * @result MeetingRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService27(
        id: string,
        requestBody: {
            newStatus: EventParticipationStatus,
        },
        fields?: string,
    ): Promise<MeetingRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/calendar-events/meeting-participations/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get All Membership Events
     * Get/search membership events. Parameters are applied as 'AND' filters.
     * @param dateFrom
     * @param dateTo
     * @param team
     * @param location
     * @param role
     * @param fields
     * @result MembershipEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService115(
        dateFrom: string,
        dateTo: string,
        team?: string | null,
        location?: string | null,
        role?: string | null,
        fields?: string,
    ): Promise<Array<MembershipEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/calendar-events/membership-events`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'team': team,
                'location': location,
                'role': role,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get All Non Working Days Events
     * Get/search non-working day events. Parameters are applied as 'AND' filters.
     * @param dateFrom
     * @param dateTo
     * @param member
     * @param team
     * @param location
     * @param role
     * @param fields
     * @result NonWorkingDaysEvent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService116(
        dateFrom: string,
        dateTo: string,
        member?: string | null,
        team?: string | null,
        location?: string | null,
        role?: string | null,
        fields?: string,
    ): Promise<Array<NonWorkingDaysEvent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/calendar-events/non-working-days-events`,
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'member': member,
                'team': team,
                'location': location,
                'role': role,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Invitation Link
     * Create an organization-wide invitation link
     * @param requestBody
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async postService91(
        requestBody: {
            name: string,
            expiresAt: string,
            inviteeLimit: number,
        },
        fields?: string,
    ): Promise<{
        first: string,
        second: InvitationLink,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/invitation-links`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Invitation Links
     * Get organization-wide invitation links
     * @param skip
     * @param top
     * @param withDeleted
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService117(
        skip?: string | null,
        top: number | null = 100,
        withDeleted: boolean = false,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<InvitationLink>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/invitation-links`,
            query: {
                '$skip': skip,
                '$top': top,
                'withDeleted': withDeleted,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Invitation Link
     * Update an organization-wide invitation link
     * @param invitationLinkId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService28(
        invitationLinkId: string,
        requestBody?: {
            name?: string | null,
            expiresAt?: string | null,
            inviteeLimit?: number | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/invitation-links/${invitationLinkId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Invitation Link
     * Delete currently active organization-wide invitation link
     * @param invitationLinkId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService43(
        invitationLinkId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/invitation-links/${invitationLinkId}`,
        });
        return result.body;
    }

    /**
     * Create Invitation
     * Create an invitation to join the current organisation. Optionally, the team and/or role to join when accepting the invitation can be specified.
     * @param requestBody
     * @param fields
     * @result Invitation Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService92(
        requestBody: {
            inviteeEmail: string,
            inviteeFirstName?: string | null,
            inviteeLastName?: string | null,
            team?: TD_Team | null,
            role?: TD_Role | null,
        },
        fields?: string,
    ): Promise<Invitation | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/invitations`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Invitations
     * Get a list of invitations.
     * @param skip
     * @param top
     * @param withDeleted
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService118(
        skip?: string | null,
        top: number | null = 100,
        withDeleted: boolean = false,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<Invitation>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/invitations`,
            query: {
                '$skip': skip,
                '$top': top,
                'withDeleted': withDeleted,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Invitation
     * Update an invitation. Optional parameters will be ignored when not specified, and updated otherwise.
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService29(
        id: string,
        requestBody?: {
            inviteeEmail?: string | null,
            inviteeFirstName?: string | null,
            inviteeLastName?: string | null,
            team?: TD_Team | null,
            role?: TD_Role | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/invitations/${id}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Invitation
     * Delete an invitation. Deleted invitations can no longer be used to join the organisation.
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService44(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/invitations/${id}`,
        });
        return result.body;
    }

    /**
     * Get All Languages
     * Get all languages.
     * @param fields
     * @result TD_Language Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService119(
        fields?: string,
    ): Promise<Array<TD_Language> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/languages`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Location Equipment Types
     * Get all equipment types.
     * @param withArchived
     * @param fields
     * @result TD_LocationEquipmentType Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService120(
        withArchived: boolean = false,
        fields?: string,
    ): Promise<Array<TD_LocationEquipmentType> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/location-equipment-types`,
            query: {
                'withArchived': withArchived,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete Location Equipment Type by Name
     * Archive/restore location equipment type. Setting delete to true will archive the equipment type, false will restore it.
     * @param name
     * @param delete
     * @result any Success
     * @throws ApiError
     */
    // public static async deleteService45(
    //     name: string,
    //     delete: boolean,
    // ): Promise<any> {
    //     const result = await __request({
    //         method: 'DELETE',
    //         path: `/team-directory/location-equipment-types/name:${name}`,
    //         query: {
    //             'delete': delete,
    //         },
    //     });
    //     return result.body;
    // }

    /**
     * Create Location Map Member Point
     * Mark member location's id position on a map.
     * @param requestBody
     * @param fields
     * @result TD_LocationMapPoint Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService93(
        requestBody: {
            memberLocationId: string,
            'x': number,
            'y': number,
            mapId: string,
        },
        fields?: string,
    ): Promise<TD_LocationMapPoint | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/location-map-member-points`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Location Map Member Points
     * Get members on map for a location id.
     * @param locationId
     * @param skip
     * @param top
     * @param includeUnmarked
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService121(
        locationId: string,
        skip?: string | null,
        top: number | null = 100,
        includeUnmarked: boolean = true,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_MemberInLocationMap>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/location-map-member-points`,
            query: {
                'locationId': locationId,
                '$skip': skip,
                '$top': top,
                'includeUnmarked': includeUnmarked,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Location Map Member Point
     * Update member location's position on a map.
     * @param locationPointId
     * @param fields
     * @param requestBody
     * @result TD_LocationMapPoint Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService30(
        locationPointId: string,
        fields?: string,
        requestBody?: {
            'x'?: number | null,
            'y'?: number | null,
        },
    ): Promise<TD_LocationMapPoint | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/location-map-member-points/${locationPointId}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Location Map Member Point
     * Delete member location from a map.
     * @param locationPointId
     * @param delete
     * @result any Success
     * @throws ApiError
     */
    // public static async deleteService46(
    //     locationPointId: string,
    //     delete: boolean,
    // ): Promise<any> {
    //     const result = await __request({
    //         method: 'DELETE',
    //         path: `/team-directory/location-map-member-points/${locationPointId}`,
    //         query: {
    //             'delete': delete,
    //         },
    //     });
    //     return result.body;
    // }

    /**
     * Create Location
     * Create a location.
     * @param requestBody
     * @param fields
     * @result TD_Location Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService94(
        requestBody: {
            name: string,
            timezone?: string | null,
            workdays?: Array<number> | null,
            phones?: Array<string> | null,
            emails?: Array<string> | null,
            equipment?: Array<string> | null,
            description?: string | null,
            address?: string | null,
            type?: string | null,
            parentId?: string | null,
            capacity?: number | null,
        },
        fields?: string,
    ): Promise<TD_Location | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/locations`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Locations
     * Get/search all locations. Parameters are applied as 'AND' filters.
     * @param query
     * @param type
     * @param withArchived
     * @param fields
     * @result TD_Location Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService122(
        query: string = '',
        type?: string | null,
        withArchived: boolean = false,
        fields?: string,
    ): Promise<Array<TD_Location> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/locations`,
            query: {
                'query': query,
                'type': type,
                'withArchived': withArchived,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Restore Multiple
     * Restore one or more archived locations.
     * @param requestBody
     * @param fields
     * @result TD_Location Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService95(
        requestBody: {
            ids: Array<string>,
        },
        fields?: string,
    ): Promise<Array<TD_Location> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/locations/restore`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Restore
     * Restore an archived location.
     * @param id
     * @param fields
     * @result TD_Location Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService96(
        id: string,
        fields?: string,
    ): Promise<TD_Location | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/locations/${id}/restore`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Location
     * Get a location by id.
     * @param id
     * @param fields
     * @result TD_Location Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService123(
        id: string,
        fields?: string,
    ): Promise<TD_Location | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/locations/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Location
     * Update a location. Optional parameters will be ignored when null, and updated otherwise.
     * @param id
     * @param fields
     * @param requestBody
     * @result TD_Location Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService31(
        id: string,
        fields?: string,
        requestBody?: {
            name?: string | null,
            timezone?: string | null,
            customWorkdays?: boolean | null,
            workdays?: Array<number> | null,
            phones?: Array<string> | null,
            emails?: Array<string> | null,
            equipment?: Array<string> | null,
            description?: string | null,
            address?: string | null,
            type?: string | null,
            parentId?: string | null,
            mapId?: string | null,
            capacity?: number | null,
        },
    ): Promise<TD_Location | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/locations/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Archive Location
     * Archive a location.
     * @param id
     * @param fields
     * @result TD_Location Success
     * @result any Error
     * @throws ApiError
     */
    public static async deleteService47(
        id: string,
        fields?: string,
    ): Promise<Array<TD_Location> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/locations/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Map
     * Get map for a location id.
     * @param id
     * @param fields
     * @result TD_LocationMap Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService124(
        id: string,
        fields?: string,
    ): Promise<TD_LocationMap | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/locations/${id}/map`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Map
     * Update the map for a location.
     * @param id
     * @param requestBody
     * @param fields
     * @result TD_LocationMap Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService32(
        id: string,
        requestBody: {
            mapPictureId: string,
        },
        fields?: string,
    ): Promise<TD_LocationMap | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/locations/${id}/map`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Locations With Timezone
     * Get all locations with their time zone.
     * @param fields
     * @result TD_LocationWithTimeZone Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService125(
        fields?: string,
    ): Promise<Array<TD_LocationWithTimeZone> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/locations-with-timezone`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Member Location
     * Add a member location, optionally from/until a given date.
     * @param requestBody
     * @param fields
     * @result TD_MemberLocation Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService97(
        requestBody: {
            member: ProfileIdentifier,
            location: string,
            since?: string | null,
            till?: string | null,
            previousLocation?: string | null,
        },
        fields?: string,
    ): Promise<TD_MemberLocation | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/member-locations`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Member Locations
     * Get/search member locations. Parameters are applied as 'AND' filters.
     * @param skip
     * @param top
     * @param profiles
     * @param locations
     * @param since
     * @param till
     * @param withArchived
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService126(
        skip?: string | null,
        top: number | null = 100,
        profiles?: Array<string> | null,
        locations?: Array<string> | null,
        since?: string | null,
        till?: string | null,
        withArchived: boolean = false,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_MemberLocation>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/member-locations`,
            query: {
                '$skip': skip,
                '$top': top,
                'profiles': profiles,
                'locations': locations,
                'since': since,
                'till': till,
                'withArchived': withArchived,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Member Location
     * Get a member location by its id.
     * @param memberLocationId
     * @param fields
     * @result TD_MemberLocation Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService127(
        memberLocationId: string,
        fields?: string,
    ): Promise<TD_MemberLocation | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/member-locations/${memberLocationId}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Member Location
     * Update member location. Optional parameters will be ignored when null, and updated otherwise.
     * @param memberLocationId
     * @param fields
     * @param requestBody
     * @result TD_MemberLocation Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService33(
        memberLocationId: string,
        fields?: string,
        requestBody?: {
            location?: string | null,
            since?: string | null,
            till?: string | null,
        },
    ): Promise<TD_MemberLocation | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/member-locations/${memberLocationId}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Member Location
     * Archive/unarchive a member location. Setting delete to true will archive the member location, false will restore it.
     * @param memberLocationId
     * @param delete
     * @result any Success
     * @throws ApiError
     */
    // public static async deleteService48(
    //     memberLocationId: string,
    //     delete: boolean = true,
    // ): Promise<any> {
    //     const result = await __request({
    //         method: 'DELETE',
    //         path: `/team-directory/member-locations/${memberLocationId}`,
    //         query: {
    //             'delete': delete,
    //         },
    //     });
    //     return result.body;
    // }

    /**
     * Get All Membership Events
     * Get/search membership events. Parameters are applied as 'AND' filters.
     * @param skip
     * @param top
     * @param teamId
     * @param locationId
     * @param roleId
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService128(
        skip?: string | null,
        top: number | null = 100,
        teamId?: string | null,
        locationId?: string | null,
        roleId?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_MergedEvent>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/membership-events`,
            query: {
                '$skip': skip,
                '$top': top,
                'teamId': teamId,
                'locationId': locationId,
                'roleId': roleId,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Membership
     * Create a team membership.
     * @param requestBody
     * @param fields
     * @result TD_Membership Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService98(
        requestBody: {
            member: ProfileIdentifier,
            teamId: string,
            roleId: string,
            lead?: boolean,
            manager?: ProfileIdentifier | null,
            activeSince?: string | null,
            activeTill?: string | null,
            previousMembershipId?: string | null,
            requiresApproval?: boolean,
            customFieldValues?: Array<CustomFieldInputValue> | null,
        },
        fields?: string,
    ): Promise<TD_Membership | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/memberships`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Memberships
     * Get/search all team memberships. Parameters are applied as 'AND' filters.
     * @param skip
     * @param top
     * @param profiles
     * @param teams
     * @param directTeams
     * @param roles
     * @param directRoles
     * @param since
     * @param till
     * @param requiresApproval
     * @param withArchived
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService129(
        skip?: string | null,
        top: number | null = 100,
        profiles?: Array<string> | null,
        teams?: Array<string> | null,
        directTeams: boolean = false,
        roles?: Array<string> | null,
        directRoles: boolean = false,
        since?: string | null,
        till?: string | null,
        requiresApproval?: boolean | null,
        withArchived: boolean = false,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_Membership>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/memberships`,
            query: {
                '$skip': skip,
                '$top': top,
                'profiles': profiles,
                'teams': teams,
                'directTeams': directTeams,
                'roles': roles,
                'directRoles': directRoles,
                'since': since,
                'till': till,
                'requiresApproval': requiresApproval,
                'withArchived': withArchived,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Membership
     * Update a team membership. Optional parameters will be ignored when null, and updated otherwise.
     * @param membershipId
     * @param fields
     * @param requestBody
     * @result TD_Membership Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService34(
        membershipId: string,
        fields?: string,
        requestBody?: {
            teamId?: string | null,
            roleId?: string | null,
            lead?: boolean | null,
            manager?: ProfileIdentifier | null,
            activeSince?: string | null,
            activeTill?: string | null,
            requiresApproval?: boolean,
            customFieldValues?: Array<CustomFieldInputValue> | null,
        },
    ): Promise<TD_Membership | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/memberships/${membershipId}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Membership
     * Archive/unarchive a team membership. Setting delete to true will archive the membership, false will restore it.
     * @param membershipId
     * @param delete
     * @result any Success
     * @throws ApiError
     */
    // public static async deleteService49(
    //     membershipId: string,
    //     delete: boolean = true,
    // ): Promise<any> {
    //     const result = await __request({
    //         method: 'DELETE',
    //         path: `/team-directory/memberships/${membershipId}`,
    //         query: {
    //             'delete': delete,
    //         },
    //     });
    //     return result.body;
    // }

    /**
     * Revoke
     * Revoke a team membership to end at a given date/time.
     * @param membershipId
     * @param till
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService50(
        membershipId: string,
        till?: string | null,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/memberships/${membershipId}/revoke`,
            query: {
                'till': till,
            },
        });
        return result.body;
    }

    /**
     * Get Manager Candidate
     * Query profiles that can be a manager
     * @param term
     * @param skip
     * @param top
     * @param teamId
     * @param excludedMemberId
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService130(
        term: string,
        skip?: string | null,
        top: number | null = 100,
        teamId?: string | null,
        excludedMemberId?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_MemberProfile>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/memberships/manager-candidates`,
            query: {
                'term': term,
                '$skip': skip,
                '$top': top,
                'teamId': teamId,
                'excludedMemberId': excludedMemberId,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Requests
     * Get/search all membership requests. Parameters are applied as 'AND' filters.
     * @param skip
     * @param top
     * @param teamId
     * @param direct
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService131(
        skip?: string | null,
        top: number | null = 100,
        teamId?: string | null,
        direct: boolean | null = true,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<{
            first: TD_MemberProfile,
            second: TD_Membership,
        }>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/memberships/requests`,
            query: {
                '$skip': skip,
                '$top': top,
                'teamId': teamId,
                'direct': direct,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Request
     * Approve/reject a team membership request. Setting approved to true will approve the membership request, false will reject it.
     * @param membershipRequestId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService35(
        membershipRequestId: string,
        requestBody: {
            approved: boolean,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/memberships/requests/${membershipRequestId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Request
     * Delete a team membership request.
     * @param membershipRequestId
     * @param fields
     * @result TD_Membership Success
     * @result any Error
     * @throws ApiError
     */
    public static async deleteService51(
        membershipRequestId: string,
        fields?: string,
    ): Promise<TD_Membership | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/memberships/requests/${membershipRequestId}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Request Revoke
     * Request a team membership to end at a given date/time. Will need approval.
     * @param membershipId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService36(
        membershipId: string,
        requestBody: {
            till: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/memberships/${membershipId}/request-revoke`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Create Profile
     * Create a profile.
     * @param requestBody
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService99(
        requestBody: {
            username: string,
            firstName: string,
            lastName: string,
            emails?: Array<string>,
            phones?: Array<string>,
            birthday?: string | null,
            about?: string | null,
            messengers?: Array<string>,
            links?: Array<string>,
            notAMember?: boolean,
            joined?: string | null,
            left?: string | null,
            leftAt?: string | null,
            speaksEnglish?: boolean | null,
            pictureAttachmentId?: string | null,
            avatarCropSquare?: AvatarCropSquare | null,
            customFieldValues?: Array<CustomFieldInputValue>,
        },
        fields?: string,
    ): Promise<TD_MemberProfile | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/profiles`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Profiles
     * Get/search all profiles. Parameters are applied as 'AND' filters.
     * @param skip
     * @param top
     * @param query
     * @param reportPastMembers
     * @param reportFutureMembers
     * @param teamId
     * @param locationId
     * @param roleId
     * @param meOnTop
     * @param order
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService132(
        skip?: string | null,
        top: number | null = 100,
        query: string = '',
        reportPastMembers: boolean = false,
        reportFutureMembers: boolean | null = false,
        teamId?: string | null,
        locationId?: string | null,
        roleId?: string | null,
        meOnTop: boolean = false,
        order?: ProfileOrder,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_MemberProfile>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles`,
            query: {
                '$skip': skip,
                '$top': top,
                'query': query,
                'reportPastMembers': reportPastMembers,
                'reportFutureMembers': reportFutureMembers,
                'teamId': teamId,
                'locationId': locationId,
                'roleId': roleId,
                'meOnTop': meOnTop,
                'order': order,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Profile by Email
     * Get profile information by email address.
     * @param email
     * @param verified
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService133(
        email: string,
        verified: boolean = true,
        fields?: string,
    ): Promise<TD_MemberProfile | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/email:${email}`,
            query: {
                'verified': verified,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Profile
     * Get profile information
     * @param profile
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService134(
        profile: string,
        fields?: string,
    ): Promise<TD_MemberProfile | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Profile
     * Update a profile. Optional parameters will be ignored when null, and updated otherwise.
     * @param profile
     * @param fields
     * @param requestBody
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService37(
        profile: string,
        fields?: string,
        requestBody?: {
            username?: string | null,
            firstName?: string | null,
            lastName?: string | null,
            emails?: Array<string> | null,
            phones?: Array<string> | null,
            birthday?: string | null,
            about?: string | null,
            messengers?: Array<string> | null,
            links?: Array<string> | null,
            notAMember?: boolean | null,
            joined?: string | null,
            left?: string | null,
            leftAt?: string | null,
            speaksEnglish?: boolean | null,
            pictureAttachmentId?: string | null,
            avatarCropSquare?: AvatarCropSquare | null,
            customFieldValues?: Array<CustomFieldInputValue> | null,
        },
    ): Promise<TD_MemberProfile | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/profiles/${profile}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Profile
     * Delete a profile.
     * @param profile
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async deleteService52(
        profile: string,
        fields?: string,
    ): Promise<TD_MemberProfile | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/${profile}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Check If Profile Is Team Member
     * Check if a user profile is a member of one or more teams.
     * @param profile
     * @param teamIds
     * @result boolean Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService135(
        profile: string,
        teamIds: Array<string>,
    ): Promise<boolean | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/is-team-member`,
            query: {
                'teamIds': teamIds,
            },
        });
        return result.body;
    }

    /**
     * Reactivate
     * Reactivate a user profile
     * @param profile
     * @param fields
     * @param requestBody
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService38(
        profile: string,
        fields?: string,
        requestBody?: {
            joined?: string | null,
        },
    ): Promise<TD_MemberProfile | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/profiles/${profile}/reactivate`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Deactivate
     * Deactivate a user profile
     * @param profile
     * @param at
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async deleteService53(
        profile: string,
        at: string,
        fields?: string,
    ): Promise<TD_MemberProfile | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/${profile}/deactivate`,
            query: {
                'at': at,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Authentication Sessions
     * Get the current authentication sessions for a given profile id.
     * @param owner
     * @param fields
     * @result ES_AuthenticationSession Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService136(
        owner: string,
        fields?: string,
    ): Promise<Array<ES_AuthenticationSession> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/authentication-sessions/${owner}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Terminate Own Authentication Session
     * Terminate an existing authentication session. Doing so will close the session, and logout.
     * @param owner
     * @param sessionId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService54(
        owner: string,
        sessionId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/authentication-sessions/${owner}/${sessionId}`,
        });
        return result.body;
    }

    /**
     * Get All OAuth Consents
     * Get all OAuth consents for a given profile id.
     * @param owner
     * @param fields
     * @result ES_OAuthConsent Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService137(
        owner: string,
        fields?: string,
    ): Promise<Array<ES_OAuthConsent> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/oauth-consents/${owner}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete Approved Scope
     * Remove a previously approved scope.
     * @param owner
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService55(
        owner: string,
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/oauth-consents/${owner}/approved-scopes/${id}`,
        });
        return result.body;
    }

    /**
     * Delete Refresh Token
     * Remove a refresh token. This will require the client to re-authenticate.
     * @param owner
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService56(
        owner: string,
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/oauth-consents/${owner}/refresh-tokens/${id}`,
        });
        return result.body;
    }

    /**
     * Query All Working Days
     * Returns pairs of profiles and their working days. If several working days settings are defined for the same profile then several pairs are returned.
     * @param skip
     * @param top
     * @param profiles
     * @param since
     * @param till
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService138(
        skip?: string | null,
        top: number | null = 100,
        profiles?: Array<string>,
        since?: string | null,
        till?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_ProfileWorkingDays>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/working-days`,
            query: {
                '$skip': skip,
                '$top': top,
                'profiles': profiles,
                'since': since,
                'till': till,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Two-Factor Authentication Status
     * Get two-factor authentication status for a given profile id. The response indicates whether two-factor authentication is active, not active, or not set up yet.
     * @param profile
     * @result TwoFactorAuthenticationStatus Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService139(
        profile: string,
    ): Promise<TwoFactorAuthenticationStatus | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/2-fa/status`,
        });
        return result.body;
    }

    /**
     * Set up TOTP Two-Factor Authentication
     * Set up two-factor authentication using TOTP (Time-based One-time Password) for a given profile id. The response will return a QR code (base64 encoded) that can be scanned with an app to setup two-factor authentication. The code that the app generates has to be confirmed in Space to enable TOTP.
     * @param profile
     * @param fields
     * @result TwoFactorAuthenticationSecret Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService100(
        profile: string,
        fields?: string,
    ): Promise<TwoFactorAuthenticationSecret | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/profiles/${profile}/2-fa/totp`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update TOTP Two-Factor Authentication Settings
     * Enable/disable two-factor authentication settings for a given profile id.
     * @param profile
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService39(
        profile: string,
        requestBody: {
            enabled: boolean,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/profiles/${profile}/2-fa/totp`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete current TOTP Two-Factor Authentication Settings
     * Remove two-factor authentication settings for a given profile id. Previously generated TOTP (Time-based One-time Password) are rendered invalid.
     * @param profile
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService57(
        profile: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/${profile}/2-fa/totp`,
        });
        return result.body;
    }

    /**
     * Confirm TOTP Two-Factor Authentication Settings
     * Confirm two-factor authentication for a given profile id using a TOTP (Time-based One-time Password) code from an app.
     * @param profile
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService101(
        profile: string,
        requestBody: {
            code: number,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/profiles/${profile}/2-fa/totp/confirm`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Create Application Password
     * @param profile
     * @param requestBody
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async postService102(
        profile: string,
        requestBody: {
            name: string,
            scope: string,
        },
        fields?: string,
    ): Promise<{
        first: ES_ApplicationPassword,
        second: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/profiles/${profile}/application-passwords`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Application Passwords
     * @param profile
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService140(
        profile: string,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<ES_ApplicationPassword>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/application-passwords`,
            query: {
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Application Password
     * @param profile
     * @param passwordId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService40(
        profile: string,
        passwordId: string,
        requestBody?: {
            name?: string | null,
            scope?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/profiles/${profile}/application-passwords/${passwordId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Application Password
     * @param profile
     * @param passwordId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService58(
        profile: string,
        passwordId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/${profile}/application-passwords/${passwordId}`,
        });
        return result.body;
    }

    /**
     * Create Checklist
     * @param profile
     * @param requestBody
     * @param fields
     * @result Checklist Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService103(
        profile: string,
        requestBody: {
            name: string,
        },
        fields?: string,
    ): Promise<Checklist | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/profiles/${profile}/checklists`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Checklists
     * @param profile
     * @param fields
     * @result Checklist Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService141(
        profile: string,
        fields?: string,
    ): Promise<Array<Checklist> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/checklists`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Import Checklist
     * @param profile
     * @param requestBody
     * @param fields
     * @result Checklist Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService104(
        profile: string,
        requestBody: {
            name: string,
            tabIndentedLines: string,
        },
        fields?: string,
    ): Promise<Checklist | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/profiles/${profile}/checklists/import`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Import Checklist Lines
     * @param profile
     * @param checklistId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService105(
        profile: string,
        checklistId: string,
        requestBody: {
            targetParentId: string,
            afterItemId?: string | null,
            tabIndentedLines: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/profiles/${profile}/checklists/${checklistId}/import`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Update Checklist
     * @param profile
     * @param checklistId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService41(
        profile: string,
        checklistId: string,
        requestBody?: {
            name?: string,
            description?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/profiles/${profile}/checklists/${checklistId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Checklist
     * @param profile
     * @param checklistId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService59(
        profile: string,
        checklistId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/${profile}/checklists/${checklistId}`,
        });
        return result.body;
    }

    /**
     * Get All Starred Checklists
     * @param profile
     * @param fields
     * @result Checklist Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService142(
        profile: string,
        fields?: string,
    ): Promise<Array<Checklist> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/checklists/starred`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Full Checklist Tree
     * @param profile
     * @param checklistId
     * @param fields
     * @result PlanItemChildren Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService143(
        profile: string,
        checklistId: string,
        fields?: string,
    ): Promise<Array<PlanItemChildren> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/checklists/${checklistId}/full-checklist-tree`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Leads
     * Get team leads for a given profile id.
     * @param profile
     * @param fields
     * @result TD_MemberProfile Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService144(
        profile: string,
        fields?: string,
    ): Promise<Array<TD_MemberProfile> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/leads`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Nav Bar Menu Items
     * @param profile
     * @param fields
     * @result NavBarMenuItem Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService145(
        profile: string,
        fields?: string,
    ): Promise<Array<NavBarMenuItem> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/nav-bar-menu-items`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Nav Bar Menu Item
     * Toggle visibility for a given navigation bar item.
     * @param profile
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService42(
        profile: string,
        requestBody: {
            item: string,
            enabled: boolean,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/profiles/${profile}/nav-bar-menu-items`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Create Nav Bar Project
     * Add a project to the navigation bar.
     * @param profile
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService106(
        profile: string,
        requestBody: {
            project: ProjectIdentifier,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/profiles/${profile}/nav-bar-projects`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Nav Bar Projects
     * Add a project to the navigation bar.
     * @param profile
     * @param fields
     * @result PR_Project Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService146(
        profile: string,
        fields?: string,
    ): Promise<Array<PR_Project> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/nav-bar-projects`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete Nav Bar Project
     * Remove a project from the navigation bar.
     * @param profile
     * @param project
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService60(
        profile: string,
        project: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/${profile}/nav-bar-projects/${project}`,
        });
        return result.body;
    }

    /**
     * Create Permanent Token
     * Create a personal token for a given profile id that can be used to access the current organisation.
     * @param profile
     * @param requestBody
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async postService107(
        profile: string,
        requestBody: {
            name: string,
            scope: string,
        },
        fields?: string,
    ): Promise<{
        first: ES_PermanentToken,
        second: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/profiles/${profile}/permanent-tokens`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Permanent Tokens
     * Get personal tokens used to access the current organisation for a given profile id.
     * @param profile
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService147(
        profile: string,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<ES_PermanentToken>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/permanent-tokens`,
            query: {
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Permanent Token
     * Update an existing personal token used to access the current organisation. The permanent token name and/or scope can be updated.
     * @param profile
     * @param tokenId
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService43(
        profile: string,
        tokenId: string,
        requestBody?: {
            name?: string | null,
            scope?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/profiles/${profile}/permanent-tokens/${tokenId}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Permanent Token
     * Delete a specific personal token used to access the current organisation.
     * @param profile
     * @param tokenId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService61(
        profile: string,
        tokenId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/${profile}/permanent-tokens/${tokenId}`,
        });
        return result.body;
    }

    /**
     * Delete Current Permanent Token
     * Delete personal token for a given profile id.
     * @param profile
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService62(
        profile: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/${profile}/permanent-tokens/current`,
        });
        return result.body;
    }

    /**
     * Get Profile's Space Personalization Data
     * This endpoint will return profile information, and Space personalisation data such as projects in the navigation bar, etc.
     * @param profile
     * @param fields
     * @result SettingsValue Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService148(
        profile: string,
        fields?: string,
    ): Promise<SettingsValue | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/settings`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Set Profile's Space Personalization Data
     * @param profile
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService44(
        profile: string,
        requestBody?: {
            themeName?: string | null,
            firstDayOfWeek?: Weekday | null,
            draftType?: DraftDocumentType | null,
            fontLigaturesEnabled?: boolean | null,
            todoFilters?: boolean | null,
            calendarView?: string | null,
            emailNotificationsEnabled?: boolean | null,
            notificationEmail?: string | null,
            preferredLanguage?: string | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/profiles/${profile}/settings`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Create Spoken Language
     * Update spoken language for a profile. Optionally, firstName and lastName can be specified to add a localized name to the profile.
     * @param profile
     * @param requestBody
     * @param fields
     * @result TD_ProfileLanguage Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService108(
        profile: string,
        requestBody: {
            language: string,
            firstName?: string | null,
            lastName?: string | null,
        },
        fields?: string,
    ): Promise<TD_ProfileLanguage | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/profiles/${profile}/spoken-languages`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Spoken Languages
     * Get spoken language of a profile.
     * @param profile
     * @param fields
     * @result TD_ProfileLanguage Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService149(
        profile: string,
        fields?: string,
    ): Promise<Array<TD_ProfileLanguage> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/spoken-languages`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete Spoken Language
     * Delete spoken language for a profile.
     * @param profile
     * @param language
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService63(
        profile: string,
        language: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/${profile}/spoken-languages/${language}`,
        });
        return result.body;
    }

    /**
     * Get Vcs Password
     * Get VCS password for a profile.
     * @param profile
     * @param fields
     * @result VcsHostingPassword Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService150(
        profile: string,
        fields?: string,
    ): Promise<VcsHostingPassword | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/vcs-password`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Vcs Password
     * Set VCS password for a profile. This password can be used to access Space repositories over HTTPS.
     * @param profile
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService45(
        profile: string,
        requestBody: {
            password: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/profiles/${profile}/vcs-password`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Vcs Password
     * Delete VCS password for a profile.
     * @param profile
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService64(
        profile: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/${profile}/vcs-password`,
        });
        return result.body;
    }

    /**
     * Add Working Days
     * @param profile
     * @param requestBody
     * @param fields
     * @result TD_WorkingDays Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService109(
        profile: string,
        requestBody: {
            dateStart?: string | null,
            dateEnd?: string | null,
            workingDaysSpec: WorkingDaysSpec,
        },
        fields?: string,
    ): Promise<TD_WorkingDays | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/profiles/${profile}/working-days`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Query Working Days for a Profile
     * @param profile
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService151(
        profile: string,
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_WorkingDays>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/profiles/${profile}/working-days`,
            query: {
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Working Days
     * @param profile
     * @param workingDaysId
     * @param requestBody
     * @param fields
     * @result TD_WorkingDays Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService46(
        profile: string,
        workingDaysId: string,
        requestBody: {
            dateStart?: string | null,
            dateEnd?: string | null,
            workingDaysSpec: WorkingDaysSpec,
        },
        fields?: string,
    ): Promise<TD_WorkingDays | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/profiles/${profile}/working-days/${workingDaysId}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Working Days
     * @param profile
     * @param workingDaysId
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService65(
        profile: string,
        workingDaysId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/profiles/${profile}/working-days/${workingDaysId}`,
        });
        return result.body;
    }

    /**
     * Create Role
     * Create a role.
     * @param requestBody
     * @param fields
     * @result TD_Role Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService110(
        requestBody: {
            name: string,
            parentId?: string | null,
        },
        fields?: string,
    ): Promise<TD_Role | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/roles`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Roles
     * Get/search all roles. Parameters are applied as 'AND' filters.
     * @param query
     * @param withArchived
     * @param fields
     * @result TD_Role Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService152(
        query: string = '',
        withArchived: boolean = false,
        fields?: string,
    ): Promise<Array<TD_Role> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/roles`,
            query: {
                'query': query,
                'withArchived': withArchived,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Restore
     * Restore an archived role.
     * @param id
     * @param fields
     * @result TD_Role Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService111(
        id: string,
        fields?: string,
    ): Promise<TD_Role | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/roles/${id}/restore`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Role
     * Get a role by id.
     * @param id
     * @param fields
     * @result TD_Role Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService153(
        id: string,
        fields?: string,
    ): Promise<TD_Role | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/roles/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Role
     * Update a role. Optional parameters will be ignored when null, and updated otherwise.
     * @param id
     * @param fields
     * @param requestBody
     * @result TD_Role Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService47(
        id: string,
        fields?: string,
        requestBody?: {
            name?: string | null,
            parentId?: string | null,
        },
    ): Promise<TD_Role | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/roles/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Archive Role
     * Archive a role.
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService66(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/roles/${id}`,
        });
        return result.body;
    }

    /**
     * Get All Stats
     * Get statistics of total members, and members per location, role, and team. Parameters are applied as 'AND' filters.
     * @param teamId
     * @param locationId
     * @param roleId
     * @param fields
     * @result TD_Stats Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService154(
        teamId?: string | null,
        locationId?: string | null,
        roleId?: string | null,
        fields?: string,
    ): Promise<TD_Stats | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/stats`,
            query: {
                'teamId': teamId,
                'locationId': locationId,
                'roleId': roleId,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Team
     * Create a new team.
     * @param requestBody
     * @param fields
     * @result TD_Team Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService112(
        requestBody: {
            name: string,
            description?: string | null,
            emails?: Array<string> | null,
            parentId?: string | null,
            customFieldValues?: Array<CustomFieldInputValue> | null,
            externalId?: string | null,
        },
        fields?: string,
    ): Promise<TD_Team | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/teams`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Teams
     * Get or search all teams. Parameters are applied as 'AND' filters.
     * @param skip
     * @param top
     * @param query
     * @param withArchived
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService155(
        skip?: string | null,
        top: number | null = 100,
        query: string = '',
        withArchived: boolean = false,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_Team>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/teams`,
            query: {
                '$skip': skip,
                '$top': top,
                'query': query,
                'withArchived': withArchived,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Cancel Team Disbanding
     * Cancel disbanding a team, and restore its members.
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async postService113(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/teams/${id}/cancel-disbanding`,
        });
        return result.body;
    }

    /**
     * Restore Team
     * Restore an archived team.
     * @param id
     * @param fields
     * @result TD_Team Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService114(
        id: string,
        fields?: string,
    ): Promise<TD_Team | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/team-directory/teams/${id}/restore`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get Team
     * Get a team by id.
     * @param id
     * @param fields
     * @result TD_Team Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService156(
        id: string,
        fields?: string,
    ): Promise<TD_Team | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/teams/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Team
     * Update a team.
     * @param id
     * @param fields
     * @param requestBody
     * @result TD_Team Success
     * @result any Error
     * @throws ApiError
     */
    public static async patchService48(
        id: string,
        fields?: string,
        requestBody?: {
            name?: string,
            description?: string | null,
            emails?: Array<string> | null,
            parentId?: string | null,
            customFieldValues?: Array<CustomFieldInputValue> | null,
            externalId?: string | null,
        },
    ): Promise<TD_Team | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'PATCH',
            path: `/team-directory/teams/${id}`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Archive Team
     * Archive a team.
     * @param id
     * @param fields
     * @result TD_Team Success
     * @result any Error
     * @throws ApiError
     */
    public static async deleteService67(
        id: string,
        fields?: string,
    ): Promise<Array<TD_Team> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/teams/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Disband Team
     * Disband a team.
     * @param id
     * @param fields
     * @result TD_Team Success
     * @result any Error
     * @throws ApiError
     */
    public static async deleteService68(
        id: string,
        fields?: string,
    ): Promise<Array<TD_Team> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'DELETE',
            path: `/team-directory/teams/${id}/disband`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get All Direct Members
     * Get or search direct members of a given team.
     * @param id
     * @param skip
     * @param top
     * @param query
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService157(
        id: string,
        skip?: string | null,
        top: number | null = 100,
        query: string = '',
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TD_MemberProfile>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/team-directory/teams/${id}/direct-members`,
            query: {
                '$skip': skip,
                '$top': top,
                'query': query,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create To-Do Item
     * Create a new To-Do item, with an optional due date.
     * @param requestBody
     * @param fields
     * @result TodoItemRecord Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService115(
        requestBody: {
            text: string,
            dueDate?: string | null,
        },
        fields?: string,
    ): Promise<TodoItemRecord | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/todo`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All To-Do Items
     * Get all To-Do items that match given parameters. Parameters are applied as 'AND' filters.
     * @param skip
     * @param top
     * @param open
     * @param from
     * @param till
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService158(
        skip?: string | null,
        top: number | null = 100,
        open?: boolean | null,
        from?: string | null,
        till?: string | null,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<TodoItemRecord>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/todo`,
            query: {
                '$skip': skip,
                '$top': top,
                'open': open,
                'from': from,
                'till': till,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Delete tasks
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService116(
        requestBody: {
            text: string,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/todo/deletetaskswithtext`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Update To-Do Item
     * Update an existing To-Do item. Optional parameters will be ignored when not specified, and updated otherwise.
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService49(
        id: string,
        requestBody?: {
            text?: string | null,
            dueDate?: string | null,
            open?: boolean | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/todo/${id}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete To-Do Item
     * Delete an existing To-Do item.
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService69(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/todo/${id}`,
        });
        return result.body;
    }

    /**
     * Create Trusted Certificate
     * @param requestBody
     * @param fields
     * @result TrustedCertificate Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService117(
        requestBody: {
            alias: string,
            data: string,
            archived: boolean,
        },
        fields?: string,
    ): Promise<TrustedCertificate | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/trusted-certificates`,
            query: {
                '$fields': fields,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get All Trusted Certificates
     * @param fields
     * @result TrustedCertificate Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService159(
        fields?: string,
    ): Promise<Array<TrustedCertificate> | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/trusted-certificates`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Info
     * @param data
     * @param fields
     * @result CertificateInfo Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService160(
        data: string,
        fields?: string,
    ): Promise<CertificateInfo | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/trusted-certificates/info`,
            query: {
                'data': data,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Update Trusted Certificate
     * @param id
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async patchService50(
        id: string,
        requestBody?: {
            alias?: string | null,
            data?: string | null,
            archived?: boolean | null,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/trusted-certificates/${id}`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete Trusted Certificate
     * @param id
     * @result any Success
     * @throws ApiError
     */
    public static async deleteService70(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/trusted-certificates/${id}`,
        });
        return result.body;
    }

    /**
     * Block Unfurl
     * Block link unfurling.
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService118(
        requestBody: {
            link: string,
            wholeHost: boolean,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/unfurls/block-unfurl`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Block Unfurl Global
     * Block link unfurling for organization.
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService119(
        requestBody: {
            link: string,
            wholeHost: boolean,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/unfurls/block-unfurl-global`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Check Blocked
     * @param requestBody
     * @result boolean Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService120(
        requestBody: {
            link: string,
        },
    ): Promise<boolean | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/unfurls/check-blocked`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Unblock Unfurl
     * Disable link unfurling.
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService121(
        requestBody: {
            link: string,
            wholeHost: boolean,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/unfurls/unblock-unfurl`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Unblock Unfurl Global
     * Disable blocking link unfurling for organization.
     * @param requestBody
     * @result any Success
     * @throws ApiError
     */
    public static async postService122(
        requestBody: {
            link: string,
            wholeHost: boolean,
        },
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/unfurls/unblock-unfurl-global`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * List Blocked
     * @param skip
     * @param top
     * @param fields
     * @result any Success
     * @throws ApiError
     */
    public static async getService161(
        skip?: string | null,
        top: number | null = 100,
        fields?: string,
    ): Promise<{
        next: string,
        totalCount?: number | null,
        data: Array<UnfurlsBlockListEntry>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/unfurls/list-blocked`,
            query: {
                '$skip': skip,
                '$top': top,
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Create Upload
     * Request a URL that can be used to upload an attachment.
     * An attachment can be uploaded to the URL that is returned, by making a PUT request that has a proper content-type header and the attachment data as the request body.
     * The 'storagePrefix' parameter can be one of file, maps, emoji or attachments.
     * The 'mediaType' parameter can be omitted for all uploads. For image uploads that need to be resized automatically for specific use, such as chat stickers or emoji, use one of `chat-image-attachment`, `chat-sticker`, `chat-animated-sticker`, `emoji`.
     * @param requestBody
     * @result string Success
     * @result any Error
     * @throws ApiError
     */
    public static async postService123(
        requestBody: {
            storagePrefix: string,
            mediaType?: string | null,
        },
    ): Promise<string | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/uploads`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get Image Attachment Metadata
     * Get meta information for a previously uploaded image.
     * @param id
     * @param fields
     * @result ImageAttachmentMeta Success
     * @result any Error
     * @throws ApiError
     */
    public static async getService162(
        id: string,
        fields?: string,
    ): Promise<ImageAttachmentMeta | {
        error: string,
        error_description: string,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/uploads/image/${id}`,
            query: {
                '$fields': fields,
            },
        });
        return result.body;
    }

    /**
     * Get repository url
     * @param projectId
     * @param repositoryName
     * @result RepositoryUrls
     * @result any Error
     * @throws ApiError
     */
    public static async getService163(
        projectId: string,
        repositoryName: string
    ): Promise<RepositoryUrls | {
        error: string,
        error_description: string
    }> {
        const result = await __request({
            method: 'GET',
            path: `/projects/${projectId}/repositories/${repositoryName}/url`,
        });

        return result.body;
    }

}

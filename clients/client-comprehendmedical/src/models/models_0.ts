import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { ComprehendMedicalServiceException as __BaseException } from "./ComprehendMedicalServiceException";

export enum EntityType {
  ANATOMY = "ANATOMY",
  MEDICAL_CONDITION = "MEDICAL_CONDITION",
  MEDICATION = "MEDICATION",
  PROTECTED_HEALTH_INFORMATION = "PROTECTED_HEALTH_INFORMATION",
  TEST_TREATMENT_PROCEDURE = "TEST_TREATMENT_PROCEDURE",
  TIME_EXPRESSION = "TIME_EXPRESSION",
}

export enum RelationshipType {
  ACUITY = "ACUITY",
  ADMINISTERED_VIA = "ADMINISTERED_VIA",
  DIRECTION = "DIRECTION",
  DOSAGE = "DOSAGE",
  DURATION = "DURATION",
  EVERY = "EVERY",
  FOR = "FOR",
  FORM = "FORM",
  FREQUENCY = "FREQUENCY",
  NEGATIVE = "NEGATIVE",
  OVERLAP = "OVERLAP",
  RATE = "RATE",
  ROUTE_OR_MODE = "ROUTE_OR_MODE",
  STRENGTH = "STRENGTH",
  SYSTEM_ORGAN_SITE = "SYSTEM_ORGAN_SITE",
  TEST_UNIT = "TEST_UNIT",
  TEST_UNITS = "TEST_UNITS",
  TEST_VALUE = "TEST_VALUE",
  WITH_DOSAGE = "WITH_DOSAGE",
}

export enum AttributeName {
  DIAGNOSIS = "DIAGNOSIS",
  NEGATION = "NEGATION",
  SIGN = "SIGN",
  SYMPTOM = "SYMPTOM",
}

/**
 * <p> Provides contextual information about the extracted entity. </p>
 */
export interface Trait {
  /**
   * <p> Provides a name or contextual description about the trait. </p>
   */
  Name?: AttributeName | string;

  /**
   * <p> The level of confidence that Comprehend Medical; has in the accuracy of this trait.</p>
   */
  Score?: number;
}

export namespace Trait {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Trait): any => ({
    ...obj,
  });
}

export enum EntitySubType {
  ACUITY = "ACUITY",
  ADDRESS = "ADDRESS",
  AGE = "AGE",
  BRAND_NAME = "BRAND_NAME",
  CONTACT_POINT = "CONTACT_POINT",
  DATE = "DATE",
  DIRECTION = "DIRECTION",
  DOSAGE = "DOSAGE",
  DURATION = "DURATION",
  DX_NAME = "DX_NAME",
  EMAIL = "EMAIL",
  FORM = "FORM",
  FREQUENCY = "FREQUENCY",
  GENERIC_NAME = "GENERIC_NAME",
  ID = "ID",
  IDENTIFIER = "IDENTIFIER",
  NAME = "NAME",
  PHONE_OR_FAX = "PHONE_OR_FAX",
  PROCEDURE_NAME = "PROCEDURE_NAME",
  PROFESSION = "PROFESSION",
  QUALITY = "QUALITY",
  QUANTITY = "QUANTITY",
  RATE = "RATE",
  ROUTE_OR_MODE = "ROUTE_OR_MODE",
  STRENGTH = "STRENGTH",
  SYSTEM_ORGAN_SITE = "SYSTEM_ORGAN_SITE",
  TEST_NAME = "TEST_NAME",
  TEST_UNIT = "TEST_UNIT",
  TEST_UNITS = "TEST_UNITS",
  TEST_VALUE = "TEST_VALUE",
  TIME_EXPRESSION = "TIME_EXPRESSION",
  TIME_TO_DX_NAME = "TIME_TO_DX_NAME",
  TIME_TO_MEDICATION_NAME = "TIME_TO_MEDICATION_NAME",
  TIME_TO_PROCEDURE_NAME = "TIME_TO_PROCEDURE_NAME",
  TIME_TO_TEST_NAME = "TIME_TO_TEST_NAME",
  TIME_TO_TREATMENT_NAME = "TIME_TO_TREATMENT_NAME",
  TREATMENT_NAME = "TREATMENT_NAME",
  URL = "URL",
}

/**
 * <p> An extracted segment of the text that is an attribute of an entity, or otherwise related
 *       to an entity, such as the dosage of a medication taken. It contains information about the
 *       attribute such as id, begin and end offset within the input text, and the segment of the input
 *       text. </p>
 */
export interface Attribute {
  /**
   * <p> The type of attribute. </p>
   */
  Type?: EntitySubType | string;

  /**
   * <p> The level of confidence that Comprehend Medical; has that the segment of text is correctly recognized
   *       as an attribute. </p>
   */
  Score?: number;

  /**
   * <p> The level of confidence that Comprehend Medical; has that this attribute is correctly related to this
   *       entity. </p>
   */
  RelationshipScore?: number;

  /**
   * <p>The type of relationship between the entity and attribute. Type for the relationship is
   *         <code>OVERLAP</code>, indicating that the entity occurred at the same time as the
   *         <code>Date_Expression</code>. </p>
   */
  RelationshipType?: RelationshipType | string;

  /**
   * <p> The numeric identifier for this attribute. This is a monotonically increasing id unique
   *       within this response rather than a global unique identifier. </p>
   */
  Id?: number;

  /**
   * <p> The 0-based character offset in the input text that shows where the attribute begins. The
   *       offset returns the UTF-8 code point in the string. </p>
   */
  BeginOffset?: number;

  /**
   * <p> The 0-based character offset in the input text that shows where the attribute ends. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * <p> The segment of input text extracted as this attribute.</p>
   */
  Text?: string;

  /**
   * <p> The category of attribute. </p>
   */
  Category?: EntityType | string;

  /**
   * <p> Contextual information for this attribute. </p>
   */
  Traits?: Trait[];
}

export namespace Attribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       The number of characters in the input text to be analyzed.
 *     </p>
 */
export interface Characters {
  /**
   * <p>
   *       The number of characters present in the input text document as processed by Comprehend Medical.
   *     </p>
   */
  OriginalTextCharacters?: number;
}

export namespace Characters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Characters): any => ({
    ...obj,
  });
}

export interface DescribeEntitiesDetectionV2JobRequest {
  /**
   * <p>The identifier that Comprehend Medical; generated for the job. The
   *         <code>StartEntitiesDetectionV2Job</code> operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeEntitiesDetectionV2JobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEntitiesDetectionV2JobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The input properties for an entities detection job. This includes the name of the S3
 *       bucket and the path to the files to be analyzed. </p>
 */
export interface InputDataConfig {
  /**
   * <p>The URI of the S3 bucket that contains the input data. The bucket must be in the same
   *       region as the API endpoint that you are calling.</p>
   *          <p>Each file in the document collection must be less than 40 KB. You can store a maximum of
   *       30 GB in the bucket.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>The path to the input data files in the S3 bucket.</p>
   */
  S3Key?: string;
}

export namespace InputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDataConfig): any => ({
    ...obj,
  });
}

export enum JobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PARTIAL_SUCCESS = "PARTIAL_SUCCESS",
  STOPPED = "STOPPED",
  STOP_REQUESTED = "STOP_REQUESTED",
  SUBMITTED = "SUBMITTED",
}

export enum LanguageCode {
  EN = "en",
}

/**
 * <p>The output properties for a detection job.</p>
 */
export interface OutputDataConfig {
  /**
   * <p>When you use the <code>OutputDataConfig</code> object with asynchronous operations, you
   *       specify the Amazon S3 location where you want to write the output data. The URI must be in the
   *       same region as the API endpoint that you are calling. The location is used as the prefix for
   *       the actual location of the output.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>The path to the output data files in the S3 bucket. Comprehend Medical; creates an output directory
   *       using the job ID so that the output from one job does not overwrite the output of
   *       another.</p>
   */
  S3Key?: string;
}

export namespace OutputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputDataConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a detection job.</p>
 */
export interface ComprehendMedicalAsyncJobProperties {
  /**
   * <p>The identifier assigned to the detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The name that you assigned to the detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the detection job. If the status is <code>FAILED</code>, the
   *         <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The date and time that job metadata is deleted from the server. Output files in your S3
   *       bucket will not be deleted. After the metadata is deleted, the job will no longer appear in
   *       the results of the <code>ListEntitiesDetectionV2Job</code> or the
   *         <code>ListPHIDetectionJobs</code> operation.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the detection job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the detection job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) that gives Comprehend Medical; read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The path to the file that describes the results of a batch job.</p>
   */
  ManifestFilePath?: string;

  /**
   * <p>The AWS Key Management Service key, if any, used to encrypt the output files. </p>
   */
  KMSKey?: string;

  /**
   * <p>The version of the model used to analyze the documents. The version number looks like
   *       X.X.X. You can use this information to track the model used for a particular batch of
   *       documents.</p>
   */
  ModelVersion?: string;
}

export namespace ComprehendMedicalAsyncJobProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComprehendMedicalAsyncJobProperties): any => ({
    ...obj,
  });
}

export interface DescribeEntitiesDetectionV2JobResponse {
  /**
   * <p>An object that contains the properties associated with a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

export namespace DescribeEntitiesDetectionV2JobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEntitiesDetectionV2JobResponse): any => ({
    ...obj,
  });
}

/**
 * <p> An internal server error occurred. Retry your request. </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> The request that you made is invalid. Check your request to determine why it's invalid
 *       and then retry the request.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource identified by the specified Amazon Resource Name (ARN) was not found. Check
 *       the ARN and try your request again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again. Contact customer support for more information about a service
 *       limit increase. </p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeICD10CMInferenceJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend Medical generated for the job. <code>The
   *         StartICD10CMInferenceJob</code> operation returns this identifier in its response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeICD10CMInferenceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeICD10CMInferenceJobRequest): any => ({
    ...obj,
  });
}

export interface DescribeICD10CMInferenceJobResponse {
  /**
   * <p>An object that contains the properties associated with a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

export namespace DescribeICD10CMInferenceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeICD10CMInferenceJobResponse): any => ({
    ...obj,
  });
}

export interface DescribePHIDetectionJobRequest {
  /**
   * <p>The identifier that Comprehend Medical; generated for the job. The <code>StartPHIDetectionJob</code>
   *       operation returns this identifier in its response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribePHIDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePHIDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface DescribePHIDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

export namespace DescribePHIDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePHIDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeRxNormInferenceJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend Medical generated for the job. The
   *       StartRxNormInferenceJob operation returns this identifier in its response.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeRxNormInferenceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRxNormInferenceJobRequest): any => ({
    ...obj,
  });
}

export interface DescribeRxNormInferenceJobResponse {
  /**
   * <p>An object that contains the properties associated with a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

export namespace DescribeRxNormInferenceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRxNormInferenceJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeSNOMEDCTInferenceJobRequest {
  /**
   * <p>
   *       The identifier that Amazon Comprehend Medical generated for the job. The StartSNOMEDCTInferenceJob operation returns this identifier in its response.
   *     </p>
   */
  JobId: string | undefined;
}

export namespace DescribeSNOMEDCTInferenceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSNOMEDCTInferenceJobRequest): any => ({
    ...obj,
  });
}

export interface DescribeSNOMEDCTInferenceJobResponse {
  /**
   * <p>Provides information about a detection job.</p>
   */
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}

export namespace DescribeSNOMEDCTInferenceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSNOMEDCTInferenceJobResponse): any => ({
    ...obj,
  });
}

export interface DetectEntitiesRequest {
  /**
   * <p> A UTF-8 text string containing the clinical content being examined for entities. Each
   *       string must contain fewer than 20,000 bytes of characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectEntitiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectEntitiesRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Provides information about an extracted medical entity.</p>
 */
export interface Entity {
  /**
   * <p> The numeric identifier for the entity. This is a monotonically increasing id unique
   *       within this response rather than a global unique identifier. </p>
   */
  Id?: number;

  /**
   * <p> The 0-based character offset in the input text that shows where the entity begins. The
   *       offset returns the UTF-8 code point in the string. </p>
   */
  BeginOffset?: number;

  /**
   * <p> The 0-based character offset in the input text that shows where the entity ends. The
   *       offset returns the UTF-8 code point in the string. </p>
   */
  EndOffset?: number;

  /**
   * <p>The level of confidence that Comprehend Medical; has in the accuracy of the detection.</p>
   */
  Score?: number;

  /**
   * <p> The segment of input text extracted as this entity.</p>
   */
  Text?: string;

  /**
   * <p> The category of the entity.</p>
   */
  Category?: EntityType | string;

  /**
   * <p> Describes the specific type of entity with category of entities.</p>
   */
  Type?: EntitySubType | string;

  /**
   * <p>Contextual information for the entity.</p>
   */
  Traits?: Trait[];

  /**
   * <p> The extracted attributes that relate to this entity.</p>
   */
  Attributes?: Attribute[];
}

export namespace Entity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Entity): any => ({
    ...obj,
  });
}

/**
 * <p> An attribute that was extracted, but Comprehend Medical; was unable to relate to an entity. </p>
 */
export interface UnmappedAttribute {
  /**
   * <p> The type of the unmapped attribute, could be one of the following values: "MEDICATION",
   *       "MEDICAL_CONDITION", "ANATOMY", "TEST_AND_TREATMENT_PROCEDURE" or
   *       "PROTECTED_HEALTH_INFORMATION". </p>
   */
  Type?: EntityType | string;

  /**
   * <p> The specific attribute that has been extracted but not mapped to an entity. </p>
   */
  Attribute?: Attribute;
}

export namespace UnmappedAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnmappedAttribute): any => ({
    ...obj,
  });
}

export interface DetectEntitiesResponse {
  /**
   * <p> The collection of medical entities extracted from the input text and their associated
   *       information. For each entity, the response provides the entity text, the entity category,
   *       where the entity text begins and ends, and the level of confidence that Comprehend Medical; has in the
   *       detection and analysis. Attributes and traits of the entity are also returned.</p>
   */
  Entities: Entity[] | undefined;

  /**
   * <p> Attributes extracted from the input text that we were unable to relate to an
   *       entity.</p>
   */
  UnmappedAttributes?: UnmappedAttribute[];

  /**
   * <p> If the result of the previous request to <code>DetectEntities</code> was truncated,
   *       include the <code>PaginationToken</code> to fetch the next page of entities.</p>
   */
  PaginationToken?: string;

  /**
   * <p>The version of the model used to analyze the documents. The version number looks like
   *       X.X.X. You can use this information to track the model used for a particular batch of
   *       documents.</p>
   */
  ModelVersion: string | undefined;
}

export namespace DetectEntitiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectEntitiesResponse): any => ({
    ...obj,
  });
}

/**
 * <p> The input text was not in valid UTF-8 character encoding. Check your text then retry your
 *       request.</p>
 */
export class InvalidEncodingException extends __BaseException {
  readonly name: "InvalidEncodingException" = "InvalidEncodingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEncodingException, __BaseException>) {
    super({
      name: "InvalidEncodingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEncodingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> The Comprehend Medical; service is temporarily unavailable. Please wait and then retry your request.
 *     </p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or
 *       use a smaller document and then retry your request. </p>
 */
export class TextSizeLimitExceededException extends __BaseException {
  readonly name: "TextSizeLimitExceededException" = "TextSizeLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TextSizeLimitExceededException, __BaseException>) {
    super({
      name: "TextSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TextSizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

export interface DetectEntitiesV2Request {
  /**
   * <p>A UTF-8 string containing the clinical content being examined for entities. Each string
   *       must contain fewer than 20,000 bytes of characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectEntitiesV2Request {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectEntitiesV2Request): any => ({
    ...obj,
  });
}

export interface DetectEntitiesV2Response {
  /**
   * <p>The collection of medical entities extracted from the input text and their associated
   *       information. For each entity, the response provides the entity text, the entity category,
   *       where the entity text begins and ends, and the level of confidence in the detection and
   *       analysis. Attributes and traits of the entity are also returned.</p>
   */
  Entities: Entity[] | undefined;

  /**
   * <p>Attributes extracted from the input text that couldn't be related to an entity.</p>
   */
  UnmappedAttributes?: UnmappedAttribute[];

  /**
   * <p>If the result to the <code>DetectEntitiesV2</code> operation was truncated, include the
   *         <code>PaginationToken</code> to fetch the next page of entities.</p>
   */
  PaginationToken?: string;

  /**
   * <p>The version of the model used to analyze the documents. The version number looks like
   *       X.X.X. You can use this information to track the model used for a particular batch of
   *       documents.</p>
   */
  ModelVersion: string | undefined;
}

export namespace DetectEntitiesV2Response {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectEntitiesV2Response): any => ({
    ...obj,
  });
}

export interface DetectPHIRequest {
  /**
   * <p> A UTF-8 text string containing the clinical content being examined for PHI entities. Each
   *       string must contain fewer than 20,000 bytes of characters.</p>
   */
  Text: string | undefined;
}

export namespace DetectPHIRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectPHIRequest): any => ({
    ...obj,
  });
}

export interface DetectPHIResponse {
  /**
   * <p> The collection of PHI entities extracted from the input text and their associated
   *       information. For each entity, the response provides the entity text, the entity category,
   *       where the entity text begins and ends, and the level of confidence that Comprehend Medical; has in its
   *       detection. </p>
   */
  Entities: Entity[] | undefined;

  /**
   * <p> If the result of the previous request to <code>DetectPHI</code> was truncated, include
   *       the <code>PaginationToken</code> to fetch the next page of PHI entities. </p>
   */
  PaginationToken?: string;

  /**
   * <p>The version of the model used to analyze the documents. The version number looks like
   *       X.X.X. You can use this information to track the model used for a particular batch of
   *       documents.</p>
   */
  ModelVersion: string | undefined;
}

export namespace DetectPHIResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectPHIResponse): any => ({
    ...obj,
  });
}

export interface InferICD10CMRequest {
  /**
   * <p>The input text used for analysis. The input for InferICD10CM is a string from 1 to 10000
   *       characters.</p>
   */
  Text: string | undefined;
}

export namespace InferICD10CMRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferICD10CMRequest): any => ({
    ...obj,
  });
}

export enum ICD10CMEntityType {
  DX_NAME = "DX_NAME",
  TIME_EXPRESSION = "TIME_EXPRESSION",
}

export enum ICD10CMRelationshipType {
  OVERLAP = "OVERLAP",
  SYSTEM_ORGAN_SITE = "SYSTEM_ORGAN_SITE",
}

export enum ICD10CMTraitName {
  DIAGNOSIS = "DIAGNOSIS",
  NEGATION = "NEGATION",
  SIGN = "SIGN",
  SYMPTOM = "SYMPTOM",
}

/**
 * <p>Contextual information for the entity. The traits recognized by InferICD10CM are
 *         <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and
 *       <code>NEGATION</code>.</p>
 */
export interface ICD10CMTrait {
  /**
   * <p>Provides a name or contextual description about the trait.</p>
   */
  Name?: ICD10CMTraitName | string;

  /**
   * <p>The level of confidence that Comprehend Medical; has that the segment of text is correctly recognized
   *       as a trait.</p>
   */
  Score?: number;
}

export namespace ICD10CMTrait {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ICD10CMTrait): any => ({
    ...obj,
  });
}

export enum ICD10CMAttributeType {
  ACUITY = "ACUITY",
  DIRECTION = "DIRECTION",
  QUALITY = "QUALITY",
  QUANTITY = "QUANTITY",
  SYSTEM_ORGAN_SITE = "SYSTEM_ORGAN_SITE",
  TIME_EXPRESSION = "TIME_EXPRESSION",
  TIME_TO_DX_NAME = "TIME_TO_DX_NAME",
}

/**
 * <p>The detected attributes that relate to an entity. This includes an extracted segment of
 *       the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM
 *       detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>,
 *       and <code>Acuity</code>.</p>
 */
export interface ICD10CMAttribute {
  /**
   * <p>The type of attribute. InferICD10CM detects entities of the type <code>DX_NAME</code>.
   *     </p>
   */
  Type?: ICD10CMAttributeType | string;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has that the segment of text is
   *       correctly recognized as an attribute.</p>
   */
  Score?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has that this attribute is
   *       correctly related to this entity.</p>
   */
  RelationshipScore?: number;

  /**
   * <p>The numeric identifier for this attribute. This is a monotonically increasing id unique
   *       within this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * <p>The 0-based character offset in the input text that shows where the attribute begins. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The 0-based character offset in the input text that shows where the attribute ends. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * <p>The segment of input text which contains the detected attribute.</p>
   */
  Text?: string;

  /**
   * <p>The contextual information for the attribute. The traits recognized by InferICD10CM are
   *         <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and
   *       <code>NEGATION</code>.</p>
   */
  Traits?: ICD10CMTrait[];

  /**
   * <p>The category of attribute. Can be either of <code>DX_NAME</code> or <code>TIME_EXPRESSION</code>.</p>
   */
  Category?: ICD10CMEntityType | string;

  /**
   * <p>The type of relationship between the entity and attribute. Type for the relationship can
   *         be either of <code>OVERLAP</code> or <code>SYSTEM_ORGAN_SITE</code>.</p>
   */
  RelationshipType?: ICD10CMRelationshipType | string;
}

export namespace ICD10CMAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ICD10CMAttribute): any => ({
    ...obj,
  });
}

export enum ICD10CMEntityCategory {
  MEDICAL_CONDITION = "MEDICAL_CONDITION",
}

/**
 * <p> The ICD-10-CM concepts that the entity could refer to, along with a score indicating the
 *       likelihood of the match.</p>
 */
export interface ICD10CMConcept {
  /**
   * <p>The long description of the ICD-10-CM code in the ontology.</p>
   */
  Description?: string;

  /**
   * <p>The ICD-10-CM code that identifies the concept found in the knowledge base from the
   *       Centers for Disease Control.</p>
   */
  Code?: string;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has that the entity is accurately
   *       linked to an ICD-10-CM concept.</p>
   */
  Score?: number;
}

export namespace ICD10CMConcept {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ICD10CMConcept): any => ({
    ...obj,
  });
}

/**
 * <p>The collection of medical entities extracted from the input text and their associated
 *       information. For each entity, the response provides the entity text, the entity category,
 *       where the entity text begins and ends, and the level of confidence that Amazon Comprehend
 *       Medical has in the detection and analysis. Attributes and traits of the entity are also
 *       returned. </p>
 */
export interface ICD10CMEntity {
  /**
   * <p>The numeric identifier for the entity. This is a monotonically increasing id unique within
   *       this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * <p>The segment of input text that is matched to the detected entity.</p>
   */
  Text?: string;

  /**
   * <p> The category of the entity. InferICD10CM detects entities in the
   *         <code>MEDICAL_CONDITION</code> category. </p>
   */
  Category?: ICD10CMEntityCategory | string;

  /**
   * <p>Describes the specific type of entity with category of entities. InferICD10CM detects
   *       entities of the type <code>DX_NAME</code> and <code>TIME_EXPRESSION</code>.</p>
   */
  Type?: ICD10CMEntityType | string;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;

  /**
   * <p>The 0-based character offset in the input text that shows where the entity begins. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The 0-based character offset in the input text that shows where the entity ends. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * <p>The detected attributes that relate to the entity. An extracted segment of the text that
   *       is an attribute of an entity, or otherwise related to an entity, such as the nature of a
   *       medical condition.</p>
   */
  Attributes?: ICD10CMAttribute[];

  /**
   * <p>Provides Contextual information for the entity. The traits recognized by InferICD10CM are
   *         <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and
   *       <code>NEGATION.</code>
   *          </p>
   */
  Traits?: ICD10CMTrait[];

  /**
   * <p>The ICD-10-CM concepts that the entity could refer to, along with a score indicating the
   *       likelihood of the match.</p>
   */
  ICD10CMConcepts?: ICD10CMConcept[];
}

export namespace ICD10CMEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ICD10CMEntity): any => ({
    ...obj,
  });
}

export interface InferICD10CMResponse {
  /**
   * <p>The medical conditions detected in the text linked to ICD-10-CM concepts. If the action is
   *       successful, the service sends back an HTTP 200 response, as well as the entities
   *       detected.</p>
   */
  Entities: ICD10CMEntity[] | undefined;

  /**
   * <p>If the result of the previous request to <code>InferICD10CM</code> was truncated, include
   *       the <code>PaginationToken</code> to fetch the next page of medical condition entities. </p>
   */
  PaginationToken?: string;

  /**
   * <p>The version of the model used to analyze the documents, in the format
   *         <i>n</i>.<i>n</i>.<i>n</i> You can use this
   *       information to track the model used for a particular batch of documents.</p>
   */
  ModelVersion?: string;
}

export namespace InferICD10CMResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferICD10CMResponse): any => ({
    ...obj,
  });
}

export interface InferRxNormRequest {
  /**
   * <p>The input text used for analysis. The input for InferRxNorm is a string from 1 to 10000
   *       characters.</p>
   */
  Text: string | undefined;
}

export namespace InferRxNormRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferRxNormRequest): any => ({
    ...obj,
  });
}

export enum RxNormTraitName {
  NEGATION = "NEGATION",
}

/**
 * <p>The contextual information for the entity. InferRxNorm recognizes the trait
 *         <code>NEGATION</code>, which is any indication that the patient is not taking a medication.
 *     </p>
 */
export interface RxNormTrait {
  /**
   * <p>Provides a name or contextual description about the trait.</p>
   */
  Name?: RxNormTraitName | string;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected
   *       trait.</p>
   */
  Score?: number;
}

export namespace RxNormTrait {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RxNormTrait): any => ({
    ...obj,
  });
}

export enum RxNormAttributeType {
  DOSAGE = "DOSAGE",
  DURATION = "DURATION",
  FORM = "FORM",
  FREQUENCY = "FREQUENCY",
  RATE = "RATE",
  ROUTE_OR_MODE = "ROUTE_OR_MODE",
  STRENGTH = "STRENGTH",
}

/**
 * <p>The extracted attributes that relate to this entity. The attributes recognized by
 *       InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>,
 *         <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>.</p>
 */
export interface RxNormAttribute {
  /**
   * <p>The type of attribute. The types of attributes recognized by InferRxNorm are
   *         <code>BRAND_NAME</code> and <code>GENERIC_NAME</code>.</p>
   */
  Type?: RxNormAttributeType | string;

  /**
   * <p>The level of confidence that Comprehend Medical has that the segment of text is correctly
   *       recognized as an attribute.</p>
   */
  Score?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has that the attribute is
   *       accurately linked to an entity.</p>
   */
  RelationshipScore?: number;

  /**
   * <p>The numeric identifier for this attribute. This is a monotonically increasing id unique
   *       within this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * <p>The 0-based character offset in the input text that shows where the attribute begins. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The 0-based character offset in the input text that shows where the attribute ends. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * <p>The segment of input text which corresponds to the detected attribute.</p>
   */
  Text?: string;

  /**
   * <p>Contextual information for the attribute. InferRxNorm recognizes the trait
   *         <code>NEGATION</code> for attributes, i.e. that the patient is not taking a specific dose or
   *       form of a medication.</p>
   */
  Traits?: RxNormTrait[];
}

export namespace RxNormAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RxNormAttribute): any => ({
    ...obj,
  });
}

export enum RxNormEntityCategory {
  MEDICATION = "MEDICATION",
}

/**
 * <p>The RxNorm concept that the entity could refer to, along with a score indicating the
 *       likelihood of the match.</p>
 */
export interface RxNormConcept {
  /**
   * <p>The description of the RxNorm concept.</p>
   */
  Description?: string;

  /**
   * <p>RxNorm concept ID, also known as the RxCUI.</p>
   */
  Code?: string;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has that the entity is accurately
   *       linked to the reported RxNorm concept.</p>
   */
  Score?: number;
}

export namespace RxNormConcept {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RxNormConcept): any => ({
    ...obj,
  });
}

export enum RxNormEntityType {
  BRAND_NAME = "BRAND_NAME",
  GENERIC_NAME = "GENERIC_NAME",
}

/**
 * <p>The collection of medical entities extracted from the input text and their associated
 *       information. For each entity, the response provides the entity text, the entity category,
 *       where the entity text begins and ends, and the level of confidence that Amazon Comprehend
 *       Medical has in the detection and analysis. Attributes and traits of the entity are also
 *       returned. </p>
 */
export interface RxNormEntity {
  /**
   * <p>The numeric identifier for the entity. This is a monotonically increasing id unique within
   *       this response rather than a global unique identifier.</p>
   */
  Id?: number;

  /**
   * <p>The segment of input text extracted from which the entity was detected.</p>
   */
  Text?: string;

  /**
   * <p>The category of the entity. The recognized categories are <code>GENERIC</code> or
   *         <code>BRAND_NAME</code>.</p>
   */
  Category?: RxNormEntityCategory | string;

  /**
   * <p> Describes the specific type of entity. For InferRxNorm, the recognized entity type is
   *         <code>MEDICATION</code>.</p>
   */
  Type?: RxNormEntityType | string;

  /**
   * <p>The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected
   *       entity.</p>
   */
  Score?: number;

  /**
   * <p>The 0-based character offset in the input text that shows where the entity begins. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The 0-based character offset in the input text that shows where the entity ends. The
   *       offset returns the UTF-8 code point in the string.</p>
   */
  EndOffset?: number;

  /**
   * <p>The extracted attributes that relate to the entity. The attributes recognized by
   *       InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>,
   *         <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>, and
   *         <code>STRENGTH</code>.</p>
   */
  Attributes?: RxNormAttribute[];

  /**
   * <p> Contextual information for the entity.</p>
   */
  Traits?: RxNormTrait[];

  /**
   * <p> The RxNorm concepts that the entity could refer to, along with a score indicating the
   *       likelihood of the match.</p>
   */
  RxNormConcepts?: RxNormConcept[];
}

export namespace RxNormEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RxNormEntity): any => ({
    ...obj,
  });
}

export interface InferRxNormResponse {
  /**
   * <p>The medication entities detected in the text linked to RxNorm concepts. If the action is
   *       successful, the service sends back an HTTP 200 response, as well as the entities
   *       detected.</p>
   */
  Entities: RxNormEntity[] | undefined;

  /**
   * <p>If the result of the previous request to <code>InferRxNorm</code> was truncated, include
   *       the <code>PaginationToken</code> to fetch the next page of medication entities.</p>
   */
  PaginationToken?: string;

  /**
   * <p>The version of the model used to analyze the documents, in the format
   *         <i>n</i>.<i>n</i>.<i>n</i> You can use this
   *       information to track the model used for a particular batch of documents.</p>
   */
  ModelVersion?: string;
}

export namespace InferRxNormResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferRxNormResponse): any => ({
    ...obj,
  });
}

export interface InferSNOMEDCTRequest {
  /**
   * <p>
   *       The input text to be analyzed using InferSNOMEDCT. The text should be a string with 1 to 10000 characters.
   *     </p>
   */
  Text: string | undefined;
}

export namespace InferSNOMEDCTRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferSNOMEDCTRequest): any => ({
    ...obj,
  });
}

export enum SNOMEDCTEntityCategory {
  ANATOMY = "ANATOMY",
  MEDICAL_CONDITION = "MEDICAL_CONDITION",
  TEST_TREATMENT_PROCEDURE = "TEST_TREATMENT_PROCEDURE",
}

export enum SNOMEDCTRelationshipType {
  ACUITY = "ACUITY",
  DIRECTION = "DIRECTION",
  QUALITY = "QUALITY",
  SYSTEM_ORGAN_SITE = "SYSTEM_ORGAN_SITE",
  TEST_UNITS = "TEST_UNITS",
  TEST_VALUE = "TEST_VALUE",
}

/**
 * <p>
 *       The SNOMED-CT concepts that the entity could refer to, along with a score indicating the likelihood of the match.
 *     </p>
 */
export interface SNOMEDCTConcept {
  /**
   * <p>
   *       The description of the SNOMED-CT concept.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *       The numeric ID for the SNOMED-CT concept.
   *     </p>
   */
  Code?: string;

  /**
   * <p>
   *       The level of confidence Comprehend Medical has that the entity should be linked to the identified SNOMED-CT concept.
   *     </p>
   */
  Score?: number;
}

export namespace SNOMEDCTConcept {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNOMEDCTConcept): any => ({
    ...obj,
  });
}

export enum SNOMEDCTTraitName {
  DIAGNOSIS = "DIAGNOSIS",
  NEGATION = "NEGATION",
  SIGN = "SIGN",
  SYMPTOM = "SYMPTOM",
}

/**
 * <p>
 *       Contextual information for an entity.
 *     </p>
 */
export interface SNOMEDCTTrait {
  /**
   * <p>
   *       The name or contextual description of a detected trait.
   *     </p>
   */
  Name?: SNOMEDCTTraitName | string;

  /**
   * <p>
   *       The level of confidence that Comprehend Medical has in the accuracy of a detected trait.
   *     </p>
   */
  Score?: number;
}

export namespace SNOMEDCTTrait {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNOMEDCTTrait): any => ({
    ...obj,
  });
}

export enum SNOMEDCTAttributeType {
  ACUITY = "ACUITY",
  DIRECTION = "DIRECTION",
  QUALITY = "QUALITY",
  SYSTEM_ORGAN_SITE = "SYSTEM_ORGAN_SITE",
  TEST_UNIT = "TEST_UNIT",
  TEST_VALUE = "TEST_VALUE",
}

/**
 * <p>
 *       The extracted attributes that relate to an entity. An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken.
 *     </p>
 */
export interface SNOMEDCTAttribute {
  /**
   * <p>
   *       The category of the detected attribute. Possible categories include MEDICAL_CONDITION, ANATOMY, and TEST_TREATMENT_PROCEDURE.
   *     </p>
   */
  Category?: SNOMEDCTEntityCategory | string;

  /**
   * <p>
   *       The type of attribute. Possible types include DX_NAME, ACUITY, DIRECTION, SYSTEM_ORGAN_SITE,TEST_NAME, TEST_VALUE, TEST_UNIT, PROCEDURE_NAME, and TREATMENT_NAME.
   *     </p>
   */
  Type?: SNOMEDCTAttributeType | string;

  /**
   * <p>
   *       The level of confidence that Comprehend Medical has that the segment of text is correctly recognized as an attribute.
   *     </p>
   */
  Score?: number;

  /**
   * <p>
   *       The level of confidence that Comprehend Medical has that this attribute is correctly related to this entity.
   *     </p>
   */
  RelationshipScore?: number;

  /**
   * <p>
   *       The type of relationship that exists between the entity and the related attribute.
   *     </p>
   */
  RelationshipType?: SNOMEDCTRelationshipType | string;

  /**
   * <p>
   *       The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *     </p>
   */
  Id?: number;

  /**
   * <p>
   *       The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string.
   *     </p>
   */
  BeginOffset?: number;

  /**
   * <p>
   *       The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string.
   *     </p>
   */
  EndOffset?: number;

  /**
   * <p>
   *       The segment of input text extracted as this attribute.
   *     </p>
   */
  Text?: string;

  /**
   * <p>
   *       Contextual information for an attribute. Examples include signs, symptoms, diagnosis, and negation.
   *     </p>
   */
  Traits?: SNOMEDCTTrait[];

  /**
   * <p>
   *       The SNOMED-CT concepts specific to an attribute, along with a score indicating the likelihood of the match.
   *     </p>
   */
  SNOMEDCTConcepts?: SNOMEDCTConcept[];
}

export namespace SNOMEDCTAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNOMEDCTAttribute): any => ({
    ...obj,
  });
}

export enum SNOMEDCTEntityType {
  DX_NAME = "DX_NAME",
  PROCEDURE_NAME = "PROCEDURE_NAME",
  TEST_NAME = "TEST_NAME",
  TREATMENT_NAME = "TREATMENT_NAME",
}

/**
 * <p>
 *       The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
 *     </p>
 */
export interface SNOMEDCTEntity {
  /**
   * <p>
   *       The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier.
   *     </p>
   */
  Id?: number;

  /**
   * <p>
   *       The segment of input text extracted as this entity.
   *     </p>
   */
  Text?: string;

  /**
   * <p>
   *       The category of the detected entity. Possible categories are MEDICAL_CONDITION, ANATOMY, or TEST_TREATMENT_PROCEDURE.
   *     </p>
   */
  Category?: SNOMEDCTEntityCategory | string;

  /**
   * <p>
   *       Describes the specific type of entity with category of entities. Possible types include DX_NAME, ACUITY, DIRECTION, SYSTEM_ORGAN_SITE, TEST_NAME, TEST_VALUE, TEST_UNIT, PROCEDURE_NAME, or TREATMENT_NAME.
   *     </p>
   */
  Type?: SNOMEDCTEntityType | string;

  /**
   * <p>
   *       The level of confidence that Comprehend Medical has in the accuracy of the detected entity.
   *     </p>
   */
  Score?: number;

  /**
   * <p>
   *       The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string.
   *     </p>
   */
  BeginOffset?: number;

  /**
   * <p>
   *       The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string.
   *     </p>
   */
  EndOffset?: number;

  /**
   * <p>
   *       An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken.
   *     </p>
   */
  Attributes?: SNOMEDCTAttribute[];

  /**
   * <p>
   *       Contextual information for the entity.
   *     </p>
   */
  Traits?: SNOMEDCTTrait[];

  /**
   * <p>
   *       The SNOMED concepts that the entity could refer to, along with a score indicating the likelihood of the match.
   *     </p>
   */
  SNOMEDCTConcepts?: SNOMEDCTConcept[];
}

export namespace SNOMEDCTEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNOMEDCTEntity): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       The information about the revision of the SNOMED-CT ontology in the response. Specifically, the details include the SNOMED-CT edition, language, and version date.
 *     </p>
 */
export interface SNOMEDCTDetails {
  /**
   * <p>
   *       The edition of SNOMED-CT used. The edition used for the InferSNOMEDCT editions is the US edition.
   *     </p>
   */
  Edition?: string;

  /**
   * <p>
   *       The language used in the SNOMED-CT ontology. All Amazon Comprehend Medical operations are US English (en).
   *     </p>
   */
  Language?: string;

  /**
   * <p>
   *       The version date of the SNOMED-CT ontology used.
   *     </p>
   */
  VersionDate?: string;
}

export namespace SNOMEDCTDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNOMEDCTDetails): any => ({
    ...obj,
  });
}

export interface InferSNOMEDCTResponse {
  /**
   * <p>
   *       The collection of medical concept entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
   *     </p>
   */
  Entities: SNOMEDCTEntity[] | undefined;

  /**
   * <p>
   *       If the result of the request is truncated, the pagination token can be used to fetch the next page of entities.
   *     </p>
   */
  PaginationToken?: string;

  /**
   * <p>
   *       The version of the model used to analyze the documents, in the format n.n.n You can use this information to track the model used for a particular batch of documents.
   *     </p>
   */
  ModelVersion?: string;

  /**
   * <p>
   *       The details of the SNOMED-CT revision, including the edition, language, and version date.
   *     </p>
   */
  SNOMEDCTDetails?: SNOMEDCTDetails;

  /**
   * <p>
   *       The number of characters in the input request documentation.
   *     </p>
   */
  Characters?: Characters;
}

export namespace InferSNOMEDCTResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferSNOMEDCTResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for filtering a list of detection jobs.</p>
 */
export interface ComprehendMedicalAsyncJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

export namespace ComprehendMedicalAsyncJobFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComprehendMedicalAsyncJobFilter): any => ({
    ...obj,
  });
}

export interface ListEntitiesDetectionV2JobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs based on their names, status, or
   *       the date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListEntitiesDetectionV2JobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntitiesDetectionV2JobsRequest): any => ({
    ...obj,
  });
}

export interface ListEntitiesDetectionV2JobsResponse {
  /**
   * <p>A list containing the properties of each job returned.</p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListEntitiesDetectionV2JobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntitiesDetectionV2JobsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The filter that you specified for the operation is invalid. Check the filter values that
 *       you entered and try your request again.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

export interface ListICD10CMInferenceJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs based on their names, status, or
   *       the date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListICD10CMInferenceJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListICD10CMInferenceJobsRequest): any => ({
    ...obj,
  });
}

export interface ListICD10CMInferenceJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListICD10CMInferenceJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListICD10CMInferenceJobsResponse): any => ({
    ...obj,
  });
}

export interface ListPHIDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs based on their names, status, or
   *       the date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListPHIDetectionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPHIDetectionJobsRequest): any => ({
    ...obj,
  });
}

export interface ListPHIDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job returned.</p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListPHIDetectionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPHIDetectionJobsResponse): any => ({
    ...obj,
  });
}

export interface ListRxNormInferenceJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs based on their names, status, or
   *       the date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  MaxResults?: number;
}

export namespace ListRxNormInferenceJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRxNormInferenceJobsRequest): any => ({
    ...obj,
  });
}

export interface ListRxNormInferenceJobsResponse {
  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListRxNormInferenceJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRxNormInferenceJobsResponse): any => ({
    ...obj,
  });
}

export interface ListSNOMEDCTInferenceJobsRequest {
  /**
   * <p>Provides information for filtering a list of detection jobs.</p>
   */
  Filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * <p>
   *       Identifies the next page of InferSNOMEDCT results to return.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>
   *       The maximum number of results to return in each page. The default is 100.
   *     </p>
   */
  MaxResults?: number;
}

export namespace ListSNOMEDCTInferenceJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSNOMEDCTInferenceJobsRequest): any => ({
    ...obj,
  });
}

export interface ListSNOMEDCTInferenceJobsResponse {
  /**
   * <p>
   *       A list containing the properties of each job that is returned.
   *     </p>
   */
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * <p>
   *       Identifies the next page of results to return.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListSNOMEDCTInferenceJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSNOMEDCTInferenceJobsResponse): any => ({
    ...obj,
  });
}

export interface StartEntitiesDetectionV2JobRequest {
  /**
   * <p>The input configuration that specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output configuration that specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Comprehend Medical; read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Comprehend Medical;
   *       generates one for you.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>An AWS Key Management Service key to encrypt your output files. If you do not specify a
   *       key, the files are written in plain text.</p>
   */
  KMSKey?: string;

  /**
   * <p>The language of the input documents. All documents must be in the same language. Comprehend Medical; processes files in US English (en).</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace StartEntitiesDetectionV2JobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartEntitiesDetectionV2JobRequest): any => ({
    ...obj,
  });
}

export interface StartEntitiesDetectionV2JobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the <code>DescribeEntitiesDetectionV2Job</code> operation.</p>
   */
  JobId?: string;
}

export namespace StartEntitiesDetectionV2JobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartEntitiesDetectionV2JobResponse): any => ({
    ...obj,
  });
}

export interface StartICD10CMInferenceJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Comprehend Medical; read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Comprehend Medical;
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>An AWS Key Management Service key to encrypt your output files. If you do not specify a
   *       key, the files are written in plain text.</p>
   */
  KMSKey?: string;

  /**
   * <p>The language of the input documents. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace StartICD10CMInferenceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartICD10CMInferenceJobRequest): any => ({
    ...obj,
  });
}

export interface StartICD10CMInferenceJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the <code>StartICD10CMInferenceJob</code> operation.</p>
   */
  JobId?: string;
}

export namespace StartICD10CMInferenceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartICD10CMInferenceJobResponse): any => ({
    ...obj,
  });
}

export interface StartPHIDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Comprehend Medical; read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Comprehend Medical;
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>An AWS Key Management Service key to encrypt your output files. If you do not specify a
   *       key, the files are written in plain text.</p>
   */
  KMSKey?: string;

  /**
   * <p>The language of the input documents. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace StartPHIDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPHIDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StartPHIDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the <code>DescribePHIDetectionJob</code> operation.</p>
   */
  JobId?: string;
}

export namespace StartPHIDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPHIDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StartRxNormInferenceJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Comprehend Medical; read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Comprehend Medical;
   *       generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>An AWS Key Management Service key to encrypt your output files. If you do not specify a
   *       key, the files are written in plain text.</p>
   */
  KMSKey?: string;

  /**
   * <p>The language of the input documents. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace StartRxNormInferenceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRxNormInferenceJobRequest): any => ({
    ...obj,
  });
}

export interface StartRxNormInferenceJobResponse {
  /**
   * <p>The identifier of the job.</p>
   */
  JobId?: string;
}

export namespace StartRxNormInferenceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRxNormInferenceJobResponse): any => ({
    ...obj,
  });
}

export interface StartSNOMEDCTInferenceJobRequest {
  /**
   * <p>The input properties for an entities detection job. This includes the name of the S3
   *       bucket and the path to the files to be analyzed. </p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output properties for a detection job.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data.
   *     </p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>
   *       The user generated name the asynchronous InferSNOMEDCT job.
   *     </p>
   */
  JobName?: string;

  /**
   * <p>
   *       A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one.
   *     </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>
   *       An AWS Key Management Service key used to encrypt your output files. If you do not specify a key, the files are written in plain text.
   *     </p>
   */
  KMSKey?: string;

  /**
   * <p>
   *       The language of the input documents. All documents must be in the same language.
   *     </p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

export namespace StartSNOMEDCTInferenceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSNOMEDCTInferenceJobRequest): any => ({
    ...obj,
  });
}

export interface StartSNOMEDCTInferenceJobResponse {
  /**
   * <p>
   *       The identifier generated for the job. To get the status of a job, use this identifier with the StartSNOMEDCTInferenceJob operation.
   *     </p>
   */
  JobId?: string;
}

export namespace StartSNOMEDCTInferenceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSNOMEDCTInferenceJobResponse): any => ({
    ...obj,
  });
}

export interface StopEntitiesDetectionV2JobRequest {
  /**
   * <p>The identifier of the medical entities job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopEntitiesDetectionV2JobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopEntitiesDetectionV2JobRequest): any => ({
    ...obj,
  });
}

export interface StopEntitiesDetectionV2JobResponse {
  /**
   * <p>The identifier of the medical entities detection job that was stopped.</p>
   */
  JobId?: string;
}

export namespace StopEntitiesDetectionV2JobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopEntitiesDetectionV2JobResponse): any => ({
    ...obj,
  });
}

export interface StopICD10CMInferenceJobRequest {
  /**
   * <p>The identifier of the job.</p>
   */
  JobId: string | undefined;
}

export namespace StopICD10CMInferenceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopICD10CMInferenceJobRequest): any => ({
    ...obj,
  });
}

export interface StopICD10CMInferenceJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of job, use this identifier with
   *       the <code>DescribeICD10CMInferenceJob</code> operation.</p>
   */
  JobId?: string;
}

export namespace StopICD10CMInferenceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopICD10CMInferenceJobResponse): any => ({
    ...obj,
  });
}

export interface StopPHIDetectionJobRequest {
  /**
   * <p>The identifier of the PHI detection job to stop.</p>
   */
  JobId: string | undefined;
}

export namespace StopPHIDetectionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopPHIDetectionJobRequest): any => ({
    ...obj,
  });
}

export interface StopPHIDetectionJobResponse {
  /**
   * <p>The identifier of the PHI detection job that was stopped.</p>
   */
  JobId?: string;
}

export namespace StopPHIDetectionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopPHIDetectionJobResponse): any => ({
    ...obj,
  });
}

export interface StopRxNormInferenceJobRequest {
  /**
   * <p>The identifier of the job.</p>
   */
  JobId: string | undefined;
}

export namespace StopRxNormInferenceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopRxNormInferenceJobRequest): any => ({
    ...obj,
  });
}

export interface StopRxNormInferenceJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of job, use this identifier with
   *       the <code>DescribeRxNormInferenceJob</code> operation.</p>
   */
  JobId?: string;
}

export namespace StopRxNormInferenceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopRxNormInferenceJobResponse): any => ({
    ...obj,
  });
}

export interface StopSNOMEDCTInferenceJobRequest {
  /**
   * <p>
   *       The job id of the asynchronous InferSNOMEDCT job to be stopped.
   *     </p>
   */
  JobId: string | undefined;
}

export namespace StopSNOMEDCTInferenceJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSNOMEDCTInferenceJobRequest): any => ({
    ...obj,
  });
}

export interface StopSNOMEDCTInferenceJobResponse {
  /**
   * <p>
   *       The identifier generated for the job. To get the status of job, use this identifier with the DescribeSNOMEDCTInferenceJob operation.
   *     </p>
   */
  JobId?: string;
}

export namespace StopSNOMEDCTInferenceJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSNOMEDCTInferenceJobResponse): any => ({
    ...obj,
  });
}

import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { AppRunnerServiceException as __BaseException } from "./AppRunnerServiceException";

export interface AssociateCustomDomainRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to associate a custom domain name with.</p>
   */
  ServiceArn: string | undefined;

  /**
   * <p>A custom domain endpoint to associate. Specify a root domain (for example, <code>example.com</code>), a subdomain (for example,
   *         <code>login.example.com</code> or <code>admin.login.example.com</code>), or a wildcard (for example, <code>*.example.com</code>).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Set to <code>true</code> to associate the subdomain <code>www.<i>DomainName</i>
   *             </code> with the App Runner service in addition to the base
   *       domain.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  EnableWWWSubdomain?: boolean;
}

export namespace AssociateCustomDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateCustomDomainRequest): any => ({
    ...obj,
  });
}

export enum CertificateValidationRecordStatus {
  FAILED = "FAILED",
  PENDING_VALIDATION = "PENDING_VALIDATION",
  SUCCESS = "SUCCESS",
}

/**
 * <p>Describes a certificate CNAME record to add to your DNS. For more information, see <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html">AssociateCustomDomain</a>.</p>
 */
export interface CertificateValidationRecord {
  /**
   * <p>The certificate CNAME record name.</p>
   */
  Name?: string;

  /**
   * <p>The record type, always <code>CNAME</code>.</p>
   */
  Type?: string;

  /**
   * <p>The certificate CNAME record value.</p>
   */
  Value?: string;

  /**
   * <p>The current state of the certificate CNAME record validation. It should change to <code>SUCCESS</code> after App Runner completes validation with your
   *       DNS.</p>
   */
  Status?: CertificateValidationRecordStatus | string;
}

export namespace CertificateValidationRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateValidationRecord): any => ({
    ...obj,
  });
}

export enum CustomDomainAssociationStatus {
  ACTIVE = "ACTIVE",
  BINDING_CERTIFICATE = "BINDING_CERTIFICATE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  PENDING_CERTIFICATE_DNS_VALIDATION = "PENDING_CERTIFICATE_DNS_VALIDATION",
}

/**
 * <p>Describes a custom domain that's associated with an App Runner service.</p>
 */
export interface CustomDomain {
  /**
   * <p>An associated custom domain endpoint. It can be a root domain (for example, <code>example.com</code>), a subdomain (for example,
   *         <code>login.example.com</code> or <code>admin.login.example.com</code>), or a wildcard (for example, <code>*.example.com</code>).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>When <code>true</code>, the subdomain <code>www.<i>DomainName</i>
   *             </code> is associated with the App Runner service in addition to the base
   *       domain.</p>
   */
  EnableWWWSubdomain: boolean | undefined;

  /**
   * <p>A list of certificate CNAME records that's used for this domain name.</p>
   */
  CertificateValidationRecords?: CertificateValidationRecord[];

  /**
   * <p>The current state of the domain name association.</p>
   */
  Status: CustomDomainAssociationStatus | string | undefined;
}

export namespace CustomDomain {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDomain): any => ({
    ...obj,
  });
}

export interface AssociateCustomDomainResponse {
  /**
   * <p>The App Runner subdomain of the App Runner service. The custom domain name is mapped to this target name.</p>
   */
  DNSTarget: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service with which a custom domain name is associated.</p>
   */
  ServiceArn: string | undefined;

  /**
   * <p>A description of the domain name that's being associated.</p>
   */
  CustomDomain: CustomDomain | undefined;
}

export namespace AssociateCustomDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateCustomDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An unexpected service exception occurred.</p>
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
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
 * <p>You can't perform this action when the resource is in its current state.</p>
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Describes a tag that is applied to an App Runner resource. A tag is a metadata item consisting of a key-value pair.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateAutoScalingConfigurationRequest {
  /**
   * <p>A name for the auto scaling configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number <code>1</code> of this
   *       name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.</p>
   *          <note>
   *             <p>The name <code>DefaultConfiguration</code> is reserved (it's the configuration that App Runner uses if you don't provide a custome one). You can't use it
   *         to create a new auto scaling configuration, and you can't create a revision of it.</p>
   *             <p>When you want to use your own auto scaling configuration for your App Runner service, <i>create a configuration with a different name</i>,
   *         and then provide it when you create or update your service.</p>
   *          </note>
   */
  AutoScalingConfigurationName: string | undefined;

  /**
   * <p>The maximum number of concurrent requests that you want an instance to process. If the number of concurrent requests exceeds this limit, App Runner scales
   *       up your service.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   */
  MaxConcurrency?: number;

  /**
   * <p>The minimum number of instances that App Runner provisions for your service. The service always has at least <code>MinSize</code> provisioned instances.
   *       Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to
   *       be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.</p>
   *          <p>App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   */
  MinSize?: number;

  /**
   * <p>The maximum number of instances that your service scales up to. At most <code>MaxSize</code> instances actively serve traffic for your service.</p>
   *          <p>Default: <code>25</code>
   *          </p>
   */
  MaxSize?: number;

  /**
   * <p>A list of metadata items that you can associate with your auto scaling configuration resource. A tag is a key-value pair.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAutoScalingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAutoScalingConfigurationRequest): any => ({
    ...obj,
  });
}

export enum AutoScalingConfigurationStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * <p>Describes an App Runner automatic scaling configuration resource.</p>
 *          <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher
 *       minimal cost.</p>
 *          <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p>
 *          <p>Multiple revisions of a configuration might have the same <code>AutoScalingConfigurationName</code> and different
 *         <code>AutoScalingConfigurationRevision</code> values.</p>
 */
export interface AutoScalingConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of this auto scaling configuration.</p>
   */
  AutoScalingConfigurationArn?: string;

  /**
   * <p>The customer-provided auto scaling configuration name. It can be used in multiple revisions of a configuration.</p>
   */
  AutoScalingConfigurationName?: string;

  /**
   * <p>The revision of this auto scaling configuration. It's unique among all the active configurations (<code>"Status": "ACTIVE"</code>) that share the same
   *         <code>AutoScalingConfigurationName</code>.</p>
   */
  AutoScalingConfigurationRevision?: number;

  /**
   * <p>It's set to <code>true</code> for the configuration with the highest <code>Revision</code> among all configurations that share the same
   *         <code>AutoScalingConfigurationName</code>. It's set to <code>false</code> otherwise.</p>
   */
  Latest?: boolean;

  /**
   * <p>The current state of the auto scaling configuration. If the status of a configuration revision is <code>INACTIVE</code>, it was deleted and can't be
   *       used. Inactive configuration revisions are permanently removed some time after they are deleted.</p>
   */
  Status?: AutoScalingConfigurationStatus | string;

  /**
   * <p>The maximum number of concurrent requests that an instance processes. If the number of concurrent requests exceeds this limit, App Runner scales the service
   *       up.</p>
   */
  MaxConcurrency?: number;

  /**
   * <p>The minimum number of instances that App Runner provisions for a service. The service always has at least <code>MinSize</code> provisioned instances. Some
   *       of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be
   *       quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.</p>
   *          <p>App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.</p>
   */
  MinSize?: number;

  /**
   * <p>The maximum number of instances that a service scales up to. At most <code>MaxSize</code> instances actively serve traffic for your service.</p>
   */
  MaxSize?: number;

  /**
   * <p>The time when the auto scaling configuration was created. It's in Unix time stamp format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The time when the auto scaling configuration was deleted. It's in Unix time stamp format.</p>
   */
  DeletedAt?: Date;
}

export namespace AutoScalingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingConfiguration): any => ({
    ...obj,
  });
}

export interface CreateAutoScalingConfigurationResponse {
  /**
   * <p>A description of the App Runner auto scaling configuration that's created by this request.</p>
   */
  AutoScalingConfiguration: AutoScalingConfiguration | undefined;
}

export namespace CreateAutoScalingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAutoScalingConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>App Runner can't create this resource. You've reached your account quota for this resource type.</p>
 *          <p>For App Runner per-resource quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner endpoints and quotas</a> in the
 *         <i>Amazon Web Services General Reference</i>.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

export enum ProviderType {
  GITHUB = "GITHUB",
}

export interface CreateConnectionRequest {
  /**
   * <p>A name for the new connection. It must be unique across all App Runner connections for the Amazon Web Services account in the Amazon Web Services Region.</p>
   */
  ConnectionName: string | undefined;

  /**
   * <p>The source repository provider.</p>
   */
  ProviderType: ProviderType | string | undefined;

  /**
   * <p>A list of metadata items that you can associate with your connection resource. A tag is a key-value pair.</p>
   */
  Tags?: Tag[];
}

export namespace CreateConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectionRequest): any => ({
    ...obj,
  });
}

export enum ConnectionStatus {
  AVAILABLE = "AVAILABLE",
  DELETED = "DELETED",
  ERROR = "ERROR",
  PENDING_HANDSHAKE = "PENDING_HANDSHAKE",
}

/**
 * <p>Describes an App Runner connection resource.</p>
 */
export interface Connection {
  /**
   * <p>The customer-provided connection name.</p>
   */
  ConnectionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of this connection.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The source repository provider.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The current state of the App Runner connection. When the state is <code>AVAILABLE</code>, you can use the connection to create an App Runner service.</p>
   */
  Status?: ConnectionStatus | string;

  /**
   * <p>The App Runner connection creation time, expressed as a Unix time stamp.</p>
   */
  CreatedAt?: Date;
}

export namespace Connection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj,
  });
}

export interface CreateConnectionResponse {
  /**
   * <p>A description of the App Runner connection that's created by this request.</p>
   */
  Connection: Connection | undefined;
}

export namespace CreateConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectionResponse): any => ({
    ...obj,
  });
}

export enum TracingVendor {
  AWSXRAY = "AWSXRAY",
}

/**
 * <p>Describes the configuration of the tracing feature within an App Runner observability configuration.</p>
 */
export interface TraceConfiguration {
  /**
   * <p>The implementation provider chosen for tracing App Runner services.</p>
   */
  Vendor: TracingVendor | string | undefined;
}

export namespace TraceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TraceConfiguration): any => ({
    ...obj,
  });
}

export interface CreateObservabilityConfigurationRequest {
  /**
   * <p>A name for the observability configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number
   *         <code>1</code> of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.</p>
   *          <note>
   *             <p>The name <code>DefaultConfiguration</code> is reserved. You can't use it to create a new observability configuration, and you can't create a
   *         revision of it.</p>
   *             <p>When you want to use your own observability configuration for your App Runner service, <i>create a configuration with a different name</i>,
   *         and then provide it when you create or update your service.</p>
   *          </note>
   */
  ObservabilityConfigurationName: string | undefined;

  /**
   * <p>The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.</p>
   */
  TraceConfiguration?: TraceConfiguration;

  /**
   * <p>A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.</p>
   */
  Tags?: Tag[];
}

export namespace CreateObservabilityConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateObservabilityConfigurationRequest): any => ({
    ...obj,
  });
}

export enum ObservabilityConfigurationStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * <p>Describes an App Runner observability configuration resource. Multiple revisions of a configuration have the same
 *         <code>ObservabilityConfigurationName</code> and different <code>ObservabilityConfigurationRevision</code> values.</p>
 *          <p>The resource is designed to configure multiple features (currently one feature, tracing). This type contains optional members that describe the
 *       configuration of these features (currently one member, <code>TraceConfiguration</code>). If a feature member isn't specified, the feature isn't
 *       enabled.</p>
 */
export interface ObservabilityConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of this observability configuration.</p>
   */
  ObservabilityConfigurationArn?: string;

  /**
   * <p>The customer-provided observability configuration name. It can be used in multiple revisions of a configuration.</p>
   */
  ObservabilityConfigurationName?: string;

  /**
   * <p>The configuration of the tracing feature within this observability configuration. If not specified, tracing isn't enabled.</p>
   */
  TraceConfiguration?: TraceConfiguration;

  /**
   * <p>The revision of this observability configuration. It's unique among all the active configurations (<code>"Status": "ACTIVE"</code>) that share the
   *       same <code>ObservabilityConfigurationName</code>.</p>
   */
  ObservabilityConfigurationRevision?: number;

  /**
   * <p>It's set to <code>true</code> for the configuration with the highest <code>Revision</code> among all configurations that share the same
   *         <code>ObservabilityConfigurationName</code>. It's set to <code>false</code> otherwise.</p>
   */
  Latest?: boolean;

  /**
   * <p>The current state of the observability configuration. If the status of a configuration revision is <code>INACTIVE</code>, it was deleted and can't be
   *       used. Inactive configuration revisions are permanently removed some time after they are deleted.</p>
   */
  Status?: ObservabilityConfigurationStatus | string;

  /**
   * <p>The time when the observability configuration was created. It's in Unix time stamp format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The time when the observability configuration was deleted. It's in Unix time stamp format.</p>
   */
  DeletedAt?: Date;
}

export namespace ObservabilityConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObservabilityConfiguration): any => ({
    ...obj,
  });
}

export interface CreateObservabilityConfigurationResponse {
  /**
   * <p>A description of the App Runner observability configuration that's created by this request.</p>
   */
  ObservabilityConfiguration: ObservabilityConfiguration | undefined;
}

export namespace CreateObservabilityConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateObservabilityConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a custom encryption key that App Runner uses to encrypt copies of the source repository and service logs.</p>
 */
export interface EncryptionConfiguration {
  /**
   * <p>The ARN of the KMS key that's used for encryption.</p>
   */
  KmsKey: string | undefined;
}

export namespace EncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionConfiguration): any => ({
    ...obj,
  });
}

export enum HealthCheckProtocol {
  HTTP = "HTTP",
  TCP = "TCP",
}

/**
 * <p>Describes the settings for the health check that App Runner performs to monitor the health of a service.</p>
 */
export interface HealthCheckConfiguration {
  /**
   * <p>The IP protocol that App Runner uses to perform health checks for your service.</p>
   *          <p>If you set <code>Protocol</code> to <code>HTTP</code>, App Runner sends health check requests to the HTTP path specified by <code>Path</code>.</p>
   *          <p>Default: <code>TCP</code>
   *          </p>
   */
  Protocol?: HealthCheckProtocol | string;

  /**
   * <p>The URL that health check requests are sent to.</p>
   *          <p>
   *             <code>Path</code> is only applicable when you set <code>Protocol</code> to <code>HTTP</code>.</p>
   *          <p>Default: <code>"/"</code>
   *          </p>
   */
  Path?: string;

  /**
   * <p>The time interval, in seconds, between health checks.</p>
   *          <p>Default: <code>5</code>
   *          </p>
   */
  Interval?: number;

  /**
   * <p>The time, in seconds, to wait for a health check response before deciding it failed.</p>
   *          <p>Default: <code>2</code>
   *          </p>
   */
  Timeout?: number;

  /**
   * <p>The number of consecutive checks that must succeed before App Runner decides that the service is healthy.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   */
  HealthyThreshold?: number;

  /**
   * <p>The number of consecutive checks that must fail before App Runner decides that the service is unhealthy.</p>
   *          <p>Default: <code>5</code>
   *          </p>
   */
  UnhealthyThreshold?: number;
}

export namespace HealthCheckConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HealthCheckConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the runtime configuration of an App Runner service instance (scaling unit).</p>
 */
export interface InstanceConfiguration {
  /**
   * <p>The number of CPU units reserved for each instance of your App Runner service.</p>
   *          <p>Default: <code>1 vCPU</code>
   *          </p>
   */
  Cpu?: string;

  /**
   * <p>The amount of memory, in MB or GB, reserved for each instance of your App Runner service.</p>
   *          <p>Default: <code>2 GB</code>
   *          </p>
   */
  Memory?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that provides permissions to your App Runner service. These are permissions that your code needs when it calls
   *       any Amazon Web Services APIs.</p>
   */
  InstanceRoleArn?: string;
}

export namespace InstanceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceConfiguration): any => ({
    ...obj,
  });
}

export enum EgressType {
  DEFAULT = "DEFAULT",
  VPC = "VPC",
}

/**
 * <p>Describes configuration settings related to outbound network traffic of an App Runner service.</p>
 */
export interface EgressConfiguration {
  /**
   * <p>The type of egress configuration.</p>
   *          <p>Set to <code>DEFAULT</code> for access to resources hosted on public networks.</p>
   *          <p>Set to <code>VPC</code> to associate your service to a custom VPC specified by <code>VpcConnectorArn</code>.</p>
   */
  EgressType?: EgressType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to associate with your App Runner service. Only valid when <code>EgressType =
   *         VPC</code>.</p>
   */
  VpcConnectorArn?: string;
}

export namespace EgressConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EgressConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes configuration settings related to network traffic of an App Runner service. Consists of embedded objects for each configurable network
 *       feature.</p>
 */
export interface NetworkConfiguration {
  /**
   * <p>Network configuration settings for outbound message traffic.</p>
   */
  EgressConfiguration?: EgressConfiguration;
}

export namespace NetworkConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the observability configuration of an App Runner service. These are additional observability features, like tracing, that you choose to
 *       enable. They're configured in a separate resource that you associate with your service.</p>
 */
export interface ServiceObservabilityConfiguration {
  /**
   * <p>When <code>true</code>, an observability configuration resource is associated with the service, and an <code>ObservabilityConfigurationArn</code> is
   *       specified.</p>
   */
  ObservabilityEnabled: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the observability configuration that is associated with the service. Specified only when
   *         <code>ObservabilityEnabled</code> is <code>true</code>.</p>
   *          <p>Specify an ARN with a name and a revision number to associate that revision. For example:
   *           <code>arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing/3</code>
   *          </p>
   *          <p>Specify just the name to associate the latest revision. For example:
   *         <code>arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing</code>
   *          </p>
   */
  ObservabilityConfigurationArn?: string;
}

export namespace ServiceObservabilityConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceObservabilityConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.</p>
 */
export interface AuthenticationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner connection that enables the App Runner service to connect to a source repository. It's required for GitHub code
   *       repositories.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants the App Runner service access to a source repository. It's required for ECR image repositories
   *       (but not for ECR Public repositories).</p>
   */
  AccessRoleArn?: string;
}

export namespace AuthenticationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthenticationConfiguration): any => ({
    ...obj,
  });
}

export enum Runtime {
  CORRETTO_11 = "CORRETTO_11",
  CORRETTO_8 = "CORRETTO_8",
  NODEJS_12 = "NODEJS_12",
  NODEJS_14 = "NODEJS_14",
  PYTHON_3 = "PYTHON_3",
}

/**
 * <p>Describes the basic configuration needed for building and running an App Runner service. This type doesn't support the full set of possible
 *       configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository.</p>
 */
export interface CodeConfigurationValues {
  /**
   * <p>A runtime environment type for building and running an App Runner service.
   *        It represents a
   *       programming language runtime.</p>
   */
  Runtime: Runtime | string | undefined;

  /**
   * <p>The command App Runner runs to build your application.</p>
   */
  BuildCommand?: string;

  /**
   * <p>The command App Runner runs to start your application.</p>
   */
  StartCommand?: string;

  /**
   * <p>The port that your application listens to in the container.</p>
   *          <p>Default: <code>8080</code>
   *          </p>
   */
  Port?: string;

  /**
   * <p>The environment variables that are available to your running App Runner service. An array of key-value pairs. Keys with a prefix of
   *         <code>AWSAPPRUNNER</code> are reserved for system use and aren't valid.</p>
   */
  RuntimeEnvironmentVariables?: { [key: string]: string };
}

export namespace CodeConfigurationValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeConfigurationValues): any => ({
    ...obj,
    ...(obj.BuildCommand && { BuildCommand: SENSITIVE_STRING }),
    ...(obj.StartCommand && { StartCommand: SENSITIVE_STRING }),
    ...(obj.RuntimeEnvironmentVariables && { RuntimeEnvironmentVariables: SENSITIVE_STRING }),
  });
}

export enum ConfigurationSource {
  API = "API",
  REPOSITORY = "REPOSITORY",
}

/**
 * <p>Describes the configuration that App Runner uses to build and run an App Runner service from a source code repository.</p>
 */
export interface CodeConfiguration {
  /**
   * <p>The source of the App Runner configuration. Values are interpreted as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPOSITORY</code> – App Runner reads configuration values from the <code>apprunner.yaml</code> file in the source code repository and
   *           ignores <code>CodeConfigurationValues</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>API</code> – App Runner uses configuration values provided in <code>CodeConfigurationValues</code> and ignores the
   *             <code>apprunner.yaml</code> file in the source code repository.</p>
   *             </li>
   *          </ul>
   */
  ConfigurationSource: ConfigurationSource | string | undefined;

  /**
   * <p>The basic configuration for building and running the App Runner service. Use it to quickly launch an App Runner service without providing a
   *         <code>apprunner.yaml</code> file in the source code repository (or ignoring the file if it exists).</p>
   */
  CodeConfigurationValues?: CodeConfigurationValues;
}

export namespace CodeConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeConfiguration): any => ({
    ...obj,
    ...(obj.CodeConfigurationValues && {
      CodeConfigurationValues: CodeConfigurationValues.filterSensitiveLog(obj.CodeConfigurationValues),
    }),
  });
}

export enum SourceCodeVersionType {
  BRANCH = "BRANCH",
}

/**
 * <p>Identifies a version of code that App Runner refers to within a source code repository.</p>
 */
export interface SourceCodeVersion {
  /**
   * <p>The type of version identifier.</p>
   *          <p>For a git-based repository, branches represent versions.</p>
   */
  Type: SourceCodeVersionType | string | undefined;

  /**
   * <p>A source code version.</p>
   *          <p>For a git-based repository, a branch name maps to a specific version. App Runner uses the most recent commit to the branch.</p>
   */
  Value: string | undefined;
}

export namespace SourceCodeVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceCodeVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a source code repository.</p>
 */
export interface CodeRepository {
  /**
   * <p>The location of the repository that contains the source code.</p>
   */
  RepositoryUrl: string | undefined;

  /**
   * <p>The version that should be used within the source code repository.</p>
   */
  SourceCodeVersion: SourceCodeVersion | undefined;

  /**
   * <p>Configuration for building and running the service from a source code repository.</p>
   */
  CodeConfiguration?: CodeConfiguration;
}

export namespace CodeRepository {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeRepository): any => ({
    ...obj,
    ...(obj.CodeConfiguration && { CodeConfiguration: CodeConfiguration.filterSensitiveLog(obj.CodeConfiguration) }),
  });
}

/**
 * <p>Describes the configuration that App Runner uses to run an App Runner service using an image pulled from a source image repository.</p>
 */
export interface ImageConfiguration {
  /**
   * <p>Environment variables that are available to your running App Runner service. An array of key-value pairs. Keys with a prefix of <code>AWSAPPRUNNER</code>
   *       are reserved for system use and aren't valid.</p>
   */
  RuntimeEnvironmentVariables?: { [key: string]: string };

  /**
   * <p>An optional command that App Runner runs to start the application in the source image. If specified, this command overrides the Docker image’s default start
   *       command.</p>
   */
  StartCommand?: string;

  /**
   * <p>The port that your application listens to in the container.</p>
   *          <p>Default: <code>8080</code>
   *          </p>
   */
  Port?: string;
}

export namespace ImageConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageConfiguration): any => ({
    ...obj,
    ...(obj.RuntimeEnvironmentVariables && { RuntimeEnvironmentVariables: SENSITIVE_STRING }),
    ...(obj.StartCommand && { StartCommand: SENSITIVE_STRING }),
  });
}

export enum ImageRepositoryType {
  ECR = "ECR",
  ECR_PUBLIC = "ECR_PUBLIC",
}

/**
 * <p>Describes a source image repository.</p>
 */
export interface ImageRepository {
  /**
   * <p>The identifier of an image.</p>
   *          <p>For an image in Amazon Elastic Container Registry (Amazon ECR), this is an image name. For the image name format, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an image</a> in the <i>Amazon ECR User Guide</i>.</p>
   */
  ImageIdentifier: string | undefined;

  /**
   * <p>Configuration for running the identified image.</p>
   */
  ImageConfiguration?: ImageConfiguration;

  /**
   * <p>The type of the image repository. This reflects the repository provider and whether the repository is private or public.</p>
   */
  ImageRepositoryType: ImageRepositoryType | string | undefined;
}

export namespace ImageRepository {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageRepository): any => ({
    ...obj,
    ...(obj.ImageConfiguration && {
      ImageConfiguration: ImageConfiguration.filterSensitiveLog(obj.ImageConfiguration),
    }),
  });
}

/**
 * <p>Describes the source deployed to an App Runner service. It can be a code or an image repository.</p>
 */
export interface SourceConfiguration {
  /**
   * <p>The description of a source code repository.</p>
   *          <p>You must provide either this member or <code>ImageRepository</code> (but not both).</p>
   */
  CodeRepository?: CodeRepository;

  /**
   * <p>The description of a source image
   *       repository.</p>
   *          <p>You must provide either this member or <code>CodeRepository</code> (but not both).</p>
   */
  ImageRepository?: ImageRepository;

  /**
   * <p>If <code>true</code>, continuous integration from the source repository is enabled for the App Runner service. Each repository change (including any source
   *       code commit or new image version) starts a deployment.</p>
   *          <p>Default: App Runner sets to <code>false</code> for a source image that uses an ECR Public repository or an ECR repository that's in an Amazon Web Services account other than the one that the service is in. App Runner sets to <code>true</code> in all other cases (which currently include a source code
   *       repository or a source image using a same-account ECR repository).</p>
   */
  AutoDeploymentsEnabled?: boolean;

  /**
   * <p>Describes the resources that are needed to authenticate access to some source repositories.</p>
   */
  AuthenticationConfiguration?: AuthenticationConfiguration;
}

export namespace SourceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceConfiguration): any => ({
    ...obj,
    ...(obj.CodeRepository && { CodeRepository: CodeRepository.filterSensitiveLog(obj.CodeRepository) }),
    ...(obj.ImageRepository && { ImageRepository: ImageRepository.filterSensitiveLog(obj.ImageRepository) }),
  });
}

export interface CreateServiceRequest {
  /**
   * <p>A name for the App Runner service. It must be unique across all the running App Runner services in your Amazon Web Services account in the Amazon Web Services Region.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>The source to deploy to the App Runner service. It can be a code or an image repository.</p>
   */
  SourceConfiguration: SourceConfiguration | undefined;

  /**
   * <p>The runtime configuration of instances (scaling units) of your service.</p>
   */
  InstanceConfiguration?: InstanceConfiguration;

  /**
   * <p>An optional list of metadata items that you can associate with the App Runner service resource. A tag is a key-value pair.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default,
   *       App Runner uses an Amazon Web Services managed key.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>The settings for the health check that App Runner performs to monitor the health of the App Runner service.</p>
   */
  HealthCheckConfiguration?: HealthCheckConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner
   *       associates the latest revision of a default auto scaling configuration.</p>
   *          <p>Specify an ARN with a name and a revision number to associate that revision. For example:
   *           <code>arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability/3</code>
   *          </p>
   *          <p>Specify just the name to associate the latest revision. For example:
   *         <code>arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability</code>
   *          </p>
   */
  AutoScalingConfigurationArn?: string;

  /**
   * <p>Configuration settings related to network traffic of the web application that the App Runner service runs.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * <p>The observability configuration of your service.</p>
   */
  ObservabilityConfiguration?: ServiceObservabilityConfiguration;
}

export namespace CreateServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceRequest): any => ({
    ...obj,
    ...(obj.SourceConfiguration && {
      SourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.SourceConfiguration),
    }),
  });
}

/**
 * <p>Provides summary information about an App Runner automatic scaling configuration resource.</p>
 *          <p>This type contains limited information about an auto scaling configuration. It includes only identification information, without configuration
 *       details. It's returned by the <a>ListAutoScalingConfigurations</a> action. Complete configuration information is returned by the <a>CreateAutoScalingConfiguration</a>, <a>DescribeAutoScalingConfiguration</a>, and <a>DeleteAutoScalingConfiguration</a>
 *       actions using the <a>AutoScalingConfiguration</a> type.</p>
 */
export interface AutoScalingConfigurationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of this auto scaling configuration.</p>
   */
  AutoScalingConfigurationArn?: string;

  /**
   * <p>The customer-provided auto scaling configuration name. It can be used in multiple revisions of a configuration.</p>
   */
  AutoScalingConfigurationName?: string;

  /**
   * <p>The revision of this auto scaling configuration. It's unique among all the active configurations (<code>"Status": "ACTIVE"</code>) with the same
   *         <code>AutoScalingConfigurationName</code>.</p>
   */
  AutoScalingConfigurationRevision?: number;
}

export namespace AutoScalingConfigurationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingConfigurationSummary): any => ({
    ...obj,
  });
}

export enum ServiceStatus {
  CREATE_FAILED = "CREATE_FAILED",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  OPERATION_IN_PROGRESS = "OPERATION_IN_PROGRESS",
  PAUSED = "PAUSED",
  RUNNING = "RUNNING",
}

/**
 * <p>Describes an App Runner service. It can describe a service in any state, including deleted services.</p>
 *          <p>This type contains the full information about a service, including configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions. A subset of this
 *       information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html">ServiceSummary</a> type.</p>
 */
export interface Service {
  /**
   * <p>The customer-provided service name.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>An ID that App Runner generated for this service. It's unique within the Amazon Web Services Region.</p>
   */
  ServiceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of this service.</p>
   */
  ServiceArn: string | undefined;

  /**
   * <p>A subdomain URL that App Runner generated for this service. You can use this URL to access your service web application.</p>
   */
  ServiceUrl: string | undefined;

  /**
   * <p>The time when the App Runner service was created. It's in the Unix time stamp format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The time when the App Runner service was last updated at. It's in the Unix time stamp format.</p>
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The time when the App Runner service was deleted. It's in the Unix time stamp format.</p>
   */
  DeletedAt?: Date;

  /**
   * <p>The current state of the App Runner service. These particular values mean the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> – The service failed to create. To troubleshoot this failure, read the failure events and logs, change any
   *           parameters that need to be fixed, and retry the call to create the service.</p>
   *                <p>The failed service isn't usable, and still counts towards your service quota. When you're done analyzing the failure, delete the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> – The service failed to delete and can't be successfully recovered. Retry the service deletion call to ensure
   *           that all related resources are removed.</p>
   *             </li>
   *          </ul>
   */
  Status: ServiceStatus | string | undefined;

  /**
   * <p>The source deployed to the App Runner service. It can be a code or an image repository.</p>
   */
  SourceConfiguration: SourceConfiguration | undefined;

  /**
   * <p>The runtime configuration of instances (scaling units) of this service.</p>
   */
  InstanceConfiguration: InstanceConfiguration | undefined;

  /**
   * <p>The encryption key that App Runner uses to encrypt the service logs and the copy of the source repository that App Runner maintains for the service. It can be
   *       either a customer-provided encryption key or an Amazon Web Services managed key.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>The settings for the health check that App Runner performs to monitor the health of this service.</p>
   */
  HealthCheckConfiguration?: HealthCheckConfiguration;

  /**
   * <p>Summary information for the App Runner automatic scaling configuration resource that's associated with this service.</p>
   */
  AutoScalingConfigurationSummary: AutoScalingConfigurationSummary | undefined;

  /**
   * <p>Configuration settings related to network traffic of the web application that this service runs.</p>
   */
  NetworkConfiguration: NetworkConfiguration | undefined;

  /**
   * <p>The observability configuration of this service.</p>
   */
  ObservabilityConfiguration?: ServiceObservabilityConfiguration;
}

export namespace Service {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Service): any => ({
    ...obj,
    ...(obj.SourceConfiguration && {
      SourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.SourceConfiguration),
    }),
  });
}

export interface CreateServiceResponse {
  /**
   * <p>A description of the App Runner service that's created by this request.</p>
   */
  Service: Service | undefined;

  /**
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
   */
  OperationId: string | undefined;
}

export namespace CreateServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceResponse): any => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
}

export interface CreateVpcConnectorRequest {
  /**
   * <p>A name for the VPC connector.</p>
   */
  VpcConnectorName: string | undefined;

  /**
   * <p>A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single
   *         Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.</p>
   */
  Subnets: string[] | undefined;

  /**
   * <p>A list of IDs of security groups that App Runner should use for access to Amazon Web Services resources under the specified subnets. If not specified, App Runner uses the
   *       default security group of the Amazon VPC. The default security group allows all outbound traffic.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.</p>
   */
  Tags?: Tag[];
}

export namespace CreateVpcConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcConnectorRequest): any => ({
    ...obj,
  });
}

export enum VpcConnectorStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * <p>Describes an App Runner VPC connector resource. A VPC connector describes the Amazon Virtual Private Cloud (Amazon VPC) that an App Runner service is
 *       associated with, and the subnets and security group that are used.</p>
 *          <p>Multiple revisions of a connector might have the same <code>Name</code> and different <code>Revision</code> values.</p>
 *          <note>
 *             <p>At this time, App Runner supports only one revision per name.</p>
 *          </note>
 */
export interface VpcConnector {
  /**
   * <p>The customer-provided VPC connector name.</p>
   */
  VpcConnectorName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of this VPC connector.</p>
   */
  VpcConnectorArn?: string;

  /**
   * <p>The revision of this VPC connector. It's unique among all the active connectors (<code>"Status": "ACTIVE"</code>) that share the same
   *       <code>Name</code>.</p>
   *          <note>
   *             <p>At this time, App Runner supports only one revision per name.</p>
   *          </note>
   */
  VpcConnectorRevision?: number;

  /**
   * <p>A list of IDs of subnets that App Runner uses for your service. All IDs are of subnets of a single Amazon VPC.</p>
   */
  Subnets?: string[];

  /**
   * <p>A list of IDs of security groups that App Runner uses for access to Amazon Web Services resources under the specified subnets. If not specified, App Runner uses the default
   *       security group of the Amazon VPC. The default security group allows all outbound traffic.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The current state of the VPC connector. If the status of a connector revision is <code>INACTIVE</code>, it was deleted and can't be
   *       used. Inactive connector revisions are permanently removed some time after they are deleted.</p>
   */
  Status?: VpcConnectorStatus | string;

  /**
   * <p>The time when the VPC connector was created. It's in Unix time stamp format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The time when the VPC connector was deleted. It's in Unix time stamp format.</p>
   */
  DeletedAt?: Date;
}

export namespace VpcConnector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConnector): any => ({
    ...obj,
  });
}

export interface CreateVpcConnectorResponse {
  /**
   * <p>A description of the App Runner VPC connector that's created by this request.</p>
   */
  VpcConnector: VpcConnector | undefined;
}

export namespace CreateVpcConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcConnectorResponse): any => ({
    ...obj,
  });
}

export interface DeleteAutoScalingConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want to delete.</p>
   *          <p>The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either <code>.../<i>name</i>
   *             </code> or
   *           <code>.../<i>name</i>/<i>revision</i>
   *             </code>. If a revision isn't specified, the latest active revision is deleted.</p>
   */
  AutoScalingConfigurationArn: string | undefined;
}

export namespace DeleteAutoScalingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAutoScalingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAutoScalingConfigurationResponse {
  /**
   * <p>A description of the App Runner auto scaling configuration that this request just deleted.</p>
   */
  AutoScalingConfiguration: AutoScalingConfiguration | undefined;
}

export namespace DeleteAutoScalingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAutoScalingConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
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

export interface DeleteConnectionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner connection that you want to delete.</p>
   */
  ConnectionArn: string | undefined;
}

export namespace DeleteConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectionResponse {
  /**
   * <p>A description of the App Runner connection that this request just deleted.</p>
   */
  Connection?: Connection;
}

export namespace DeleteConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionResponse): any => ({
    ...obj,
  });
}

export interface DeleteObservabilityConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner observability configuration that you want to delete.</p>
   *          <p>The ARN can be a full observability configuration ARN, or a partial ARN ending with either <code>.../<i>name</i>
   *             </code> or
   *           <code>.../<i>name</i>/<i>revision</i>
   *             </code>. If a revision isn't specified, the latest active revision is deleted.</p>
   */
  ObservabilityConfigurationArn: string | undefined;
}

export namespace DeleteObservabilityConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteObservabilityConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteObservabilityConfigurationResponse {
  /**
   * <p>A description of the App Runner observability configuration that this request just deleted.</p>
   */
  ObservabilityConfiguration: ObservabilityConfiguration | undefined;
}

export namespace DeleteObservabilityConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteObservabilityConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteServiceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to delete.</p>
   */
  ServiceArn: string | undefined;
}

export namespace DeleteServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceRequest): any => ({
    ...obj,
  });
}

export interface DeleteServiceResponse {
  /**
   * <p>A description of the App Runner service that this request just deleted.</p>
   */
  Service: Service | undefined;

  /**
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track
   *       the operation's progress.</p>
   */
  OperationId: string | undefined;
}

export namespace DeleteServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceResponse): any => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
}

export interface DeleteVpcConnectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to delete.</p>
   *          <p>The ARN must be a full VPC connector ARN.</p>
   */
  VpcConnectorArn: string | undefined;
}

export namespace DeleteVpcConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcConnectorRequest): any => ({
    ...obj,
  });
}

export interface DeleteVpcConnectorResponse {
  /**
   * <p>A description of the App Runner VPC connector that this request just deleted.</p>
   */
  VpcConnector: VpcConnector | undefined;
}

export namespace DeleteVpcConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVpcConnectorResponse): any => ({
    ...obj,
  });
}

export interface DescribeAutoScalingConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want a description for.</p>
   *          <p>The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either <code>.../<i>name</i>
   *             </code> or
   *           <code>.../<i>name</i>/<i>revision</i>
   *             </code>. If a revision isn't specified, the latest active revision is
   *       described.</p>
   */
  AutoScalingConfigurationArn: string | undefined;
}

export namespace DescribeAutoScalingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAutoScalingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeAutoScalingConfigurationResponse {
  /**
   * <p>A full description of the App Runner auto scaling configuration that you specified in this request.</p>
   */
  AutoScalingConfiguration: AutoScalingConfiguration | undefined;
}

export namespace DescribeAutoScalingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAutoScalingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeCustomDomainsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want associated custom domain names to be described for.</p>
   */
  ServiceArn: string | undefined;

  /**
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones that are specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results that each response (result page) can include. It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;
}

export namespace DescribeCustomDomainsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomDomainsRequest): any => ({
    ...obj,
  });
}

export interface DescribeCustomDomainsResponse {
  /**
   * <p>The App Runner subdomain of the App Runner service. The associated custom domain names are mapped to this target name.</p>
   */
  DNSTarget: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service whose associated custom domain names you want to describe.</p>
   */
  ServiceArn: string | undefined;

  /**
   * <p>A list of descriptions of custom domain names that are associated with the service. In a paginated request, the request returns up to
   *         <code>MaxResults</code> records per call.</p>
   */
  CustomDomains: CustomDomain[] | undefined;

  /**
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

export namespace DescribeCustomDomainsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomDomainsResponse): any => ({
    ...obj,
  });
}

export interface DescribeObservabilityConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner observability configuration that you want a description for.</p>
   *          <p>The ARN can be a full observability configuration ARN, or a partial ARN ending with either <code>.../<i>name</i>
   *             </code> or
   *           <code>.../<i>name</i>/<i>revision</i>
   *             </code>. If a revision isn't specified, the latest active revision is
   *       described.</p>
   */
  ObservabilityConfigurationArn: string | undefined;
}

export namespace DescribeObservabilityConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeObservabilityConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeObservabilityConfigurationResponse {
  /**
   * <p>A full description of the App Runner observability configuration that you specified in this request.</p>
   */
  ObservabilityConfiguration: ObservabilityConfiguration | undefined;
}

export namespace DescribeObservabilityConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeObservabilityConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeServiceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want a description for.</p>
   */
  ServiceArn: string | undefined;
}

export namespace DescribeServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeServiceRequest): any => ({
    ...obj,
  });
}

export interface DescribeServiceResponse {
  /**
   * <p>A full description of the App Runner service that you specified in this request.</p>
   */
  Service: Service | undefined;
}

export namespace DescribeServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeServiceResponse): any => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
}

export interface DescribeVpcConnectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner VPC connector that you want a description for.</p>
   *          <p>The ARN must be a full VPC connector ARN.</p>
   */
  VpcConnectorArn: string | undefined;
}

export namespace DescribeVpcConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcConnectorRequest): any => ({
    ...obj,
  });
}

export interface DescribeVpcConnectorResponse {
  /**
   * <p>A description of the App Runner VPC connector that you specified in this request.</p>
   */
  VpcConnector: VpcConnector | undefined;
}

export namespace DescribeVpcConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVpcConnectorResponse): any => ({
    ...obj,
  });
}

export interface DisassociateCustomDomainRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to disassociate a custom domain name from.</p>
   */
  ServiceArn: string | undefined;

  /**
   * <p>The domain name that you want to disassociate from the App Runner service.</p>
   */
  DomainName: string | undefined;
}

export namespace DisassociateCustomDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateCustomDomainRequest): any => ({
    ...obj,
  });
}

export interface DisassociateCustomDomainResponse {
  /**
   * <p>The App Runner subdomain of the App Runner service. The disassociated custom domain name was mapped to this target name.</p>
   */
  DNSTarget: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service that a custom domain name is disassociated from.</p>
   */
  ServiceArn: string | undefined;

  /**
   * <p>A description of the domain name that's being disassociated.</p>
   */
  CustomDomain: CustomDomain | undefined;
}

export namespace DisassociateCustomDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateCustomDomainResponse): any => ({
    ...obj,
  });
}

export interface ListAutoScalingConfigurationsRequest {
  /**
   * <p>The name of the App Runner auto scaling configuration that you want to list. If specified, App Runner lists revisions that share this name. If not specified, App Runner
   *       returns revisions of all active configurations.</p>
   */
  AutoScalingConfigurationName?: string;

  /**
   * <p>Set to <code>true</code> to list only the latest revision for each requested configuration name.</p>
   *          <p>Set to <code>false</code> to list all revisions for each requested configuration name.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  LatestOnly?: boolean;

  /**
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones that are specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;
}

export namespace ListAutoScalingConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAutoScalingConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListAutoScalingConfigurationsResponse {
  /**
   * <p>A list of summary information records for auto scaling configurations. In a paginated request, the request returns up to <code>MaxResults</code>
   *       records for each call.</p>
   */
  AutoScalingConfigurationSummaryList: AutoScalingConfigurationSummary[] | undefined;

  /**
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

export namespace ListAutoScalingConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAutoScalingConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListConnectionsRequest {
  /**
   * <p>If specified, only this connection is returned. If not specified, the result isn't filtered by name.</p>
   */
  ConnectionName?: string;

  /**
   * <p>The maximum number of results to include in each response (result page). Used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token from a previous result page. Used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;
}

export namespace ListConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about an App Runner connection resource.</p>
 */
export interface ConnectionSummary {
  /**
   * <p>The customer-provided connection name.</p>
   */
  ConnectionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of this connection.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The source repository provider.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The current state of the App Runner connection. When the state is <code>AVAILABLE</code>, you can use the connection to create an App Runner service.</p>
   */
  Status?: ConnectionStatus | string;

  /**
   * <p>The App Runner connection creation time, expressed as a Unix time stamp.</p>
   */
  CreatedAt?: Date;
}

export namespace ConnectionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionSummary): any => ({
    ...obj,
  });
}

export interface ListConnectionsResponse {
  /**
   * <p>A list of summary information records for connections. In a paginated request, the request returns up to <code>MaxResults</code> records for each
   *       call.</p>
   */
  ConnectionSummaryList: ConnectionSummary[] | undefined;

  /**
   * <p>The token that you can pass in a subsequent request to get the next result page. Returned in a paginated request.</p>
   */
  NextToken?: string;
}

export namespace ListConnectionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConnectionsResponse): any => ({
    ...obj,
  });
}

export interface ListObservabilityConfigurationsRequest {
  /**
   * <p>The name of the App Runner observability configuration that you want to list. If specified, App Runner lists revisions that share this name. If not specified,
   *       App Runner returns revisions of all active configurations.</p>
   */
  ObservabilityConfigurationName?: string;

  /**
   * <p>Set to <code>true</code> to list only the latest revision for each requested configuration name.</p>
   *          <p>Set to <code>false</code> to list all revisions for each requested configuration name.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  LatestOnly?: boolean;

  /**
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones that are specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;
}

export namespace ListObservabilityConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListObservabilityConfigurationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about an App Runner observability configuration resource.</p>
 *          <p>This type contains limited information about an observability configuration. It includes only identification information, without configuration
 *       details. It's returned by the <a>ListObservabilityConfigurations</a> action. Complete configuration information is returned by the <a>CreateObservabilityConfiguration</a>, <a>DescribeObservabilityConfiguration</a>, and <a>DeleteObservabilityConfiguration</a>
 *       actions using the <a>ObservabilityConfiguration</a> type.</p>
 */
export interface ObservabilityConfigurationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of this observability configuration.</p>
   */
  ObservabilityConfigurationArn?: string;

  /**
   * <p>The customer-provided observability configuration name. It can be used in multiple revisions of a configuration.</p>
   */
  ObservabilityConfigurationName?: string;

  /**
   * <p>The revision of this observability configuration. It's unique among all the active configurations (<code>"Status": "ACTIVE"</code>) that share the
   *       same <code>ObservabilityConfigurationName</code>.</p>
   */
  ObservabilityConfigurationRevision?: number;
}

export namespace ObservabilityConfigurationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObservabilityConfigurationSummary): any => ({
    ...obj,
  });
}

export interface ListObservabilityConfigurationsResponse {
  /**
   * <p>A list of summary information records for observability configurations. In a paginated request, the request returns up to <code>MaxResults</code>
   *       records for each call.</p>
   */
  ObservabilityConfigurationSummaryList: ObservabilityConfigurationSummary[] | undefined;

  /**
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

export namespace ListObservabilityConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListObservabilityConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListOperationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want a list of operations for.</p>
   */
  ServiceArn: string | undefined;

  /**
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;
}

export namespace ListOperationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOperationsRequest): any => ({
    ...obj,
  });
}

export enum OperationStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  ROLLBACK_FAILED = "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS = "ROLLBACK_IN_PROGRESS",
  ROLLBACK_SUCCEEDED = "ROLLBACK_SUCCEEDED",
  SUCCEEDED = "SUCCEEDED",
}

export enum OperationType {
  CREATE_SERVICE = "CREATE_SERVICE",
  DELETE_SERVICE = "DELETE_SERVICE",
  PAUSE_SERVICE = "PAUSE_SERVICE",
  RESUME_SERVICE = "RESUME_SERVICE",
  START_DEPLOYMENT = "START_DEPLOYMENT",
}

/**
 * <p>Provides summary information for an operation that occurred on an App Runner service.</p>
 */
export interface OperationSummary {
  /**
   * <p>A unique ID of this operation. It's unique in the scope of the App Runner service.</p>
   */
  Id?: string;

  /**
   * <p>The type of operation. It indicates a specific action that occured.</p>
   */
  Type?: OperationType | string;

  /**
   * <p>The current state of the operation.</p>
   */
  Status?: OperationStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the operation acted on (for example, an App Runner service).</p>
   */
  TargetArn?: string;

  /**
   * <p>The time when the operation started. It's in the Unix time stamp format.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The time when the operation ended. It's in the Unix time stamp format.</p>
   */
  EndedAt?: Date;

  /**
   * <p>The time when the operation was last updated. It's in the Unix time stamp format.</p>
   */
  UpdatedAt?: Date;
}

export namespace OperationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationSummary): any => ({
    ...obj,
  });
}

export interface ListOperationsResponse {
  /**
   * <p>A list of operation summary information records. In a paginated request, the request returns up to <code>MaxResults</code> records for each
   *       call.</p>
   */
  OperationSummaryList?: OperationSummary[];

  /**
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

export namespace ListOperationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOperationsResponse): any => ({
    ...obj,
  });
}

export interface ListServicesRequest {
  /**
   * <p>A token from a previous result page. Used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;
}

export namespace ListServicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information for an App Runner service.</p>
 *          <p>This type contains limited information about a service. It doesn't include configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action. Complete service information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html">Service</a> type.</p>
 */
export interface ServiceSummary {
  /**
   * <p>The customer-provided service name.</p>
   */
  ServiceName?: string;

  /**
   * <p>An ID that App Runner generated for this service. It's unique within the Amazon Web Services Region.</p>
   */
  ServiceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of this service.</p>
   */
  ServiceArn?: string;

  /**
   * <p>A subdomain URL that App Runner generated for this service. You can use this URL to access your service web application.</p>
   */
  ServiceUrl?: string;

  /**
   * <p>The time when the App Runner service was created. It's in the Unix time stamp format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The time when the App Runner service was last updated. It's in theUnix time stamp format.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The current state of the App Runner service. These particular values mean the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> – The service failed to create. Read the failure events and logs, change any parameters that need to be fixed,
   *           and retry the call to create the service.</p>
   *                <p>The failed service isn't usable, and still counts towards your service quota. When you're done analyzing the failure, delete the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> – The service failed to delete and can't be successfully recovered. Retry the service deletion call to ensure
   *           that all related resources are removed.</p>
   *             </li>
   *          </ul>
   */
  Status?: ServiceStatus | string;
}

export namespace ServiceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceSummary): any => ({
    ...obj,
  });
}

export interface ListServicesResponse {
  /**
   * <p>A list of service summary information records. In a paginated request, the request returns up to <code>MaxResults</code> records for each call.</p>
   */
  ServiceSummaryList: ServiceSummary[] | undefined;

  /**
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

export namespace ListServicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServicesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that a tag list is requested for.</p>
   *          <p>It must be the ARN of an App Runner resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of the tag key-value pairs that are associated with the resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListVpcConnectorsRequest {
  /**
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones that are specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;
}

export namespace ListVpcConnectorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVpcConnectorsRequest): any => ({
    ...obj,
  });
}

export interface ListVpcConnectorsResponse {
  /**
   * <p>A list of information records for VPC connectors. In a paginated request, the request returns up to <code>MaxResults</code> records for each
   *       call.</p>
   */
  VpcConnectors: VpcConnector[] | undefined;

  /**
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

export namespace ListVpcConnectorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVpcConnectorsResponse): any => ({
    ...obj,
  });
}

export interface PauseServiceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to pause.</p>
   */
  ServiceArn: string | undefined;
}

export namespace PauseServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PauseServiceRequest): any => ({
    ...obj,
  });
}

export interface PauseServiceResponse {
  /**
   * <p>A description of the App Runner service that this request just paused.</p>
   */
  Service: Service | undefined;

  /**
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track
   *       the operation's progress.</p>
   */
  OperationId?: string;
}

export namespace PauseServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PauseServiceResponse): any => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
}

export interface ResumeServiceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to resume.</p>
   */
  ServiceArn: string | undefined;
}

export namespace ResumeServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResumeServiceRequest): any => ({
    ...obj,
  });
}

export interface ResumeServiceResponse {
  /**
   * <p>A description of the App Runner service that this request just resumed.</p>
   */
  Service: Service | undefined;

  /**
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track
   *       the operation's progress.</p>
   */
  OperationId?: string;
}

export namespace ResumeServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResumeServiceResponse): any => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
}

export interface StartDeploymentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to manually deploy to.</p>
   */
  ServiceArn: string | undefined;
}

export namespace StartDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDeploymentRequest): any => ({
    ...obj,
  });
}

export interface StartDeploymentResponse {
  /**
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track
   *       the operation's progress.</p>
   */
  OperationId: string | undefined;
}

export namespace StartDeploymentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDeploymentResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to update tags for.</p>
   *          <p>It must be the ARN of an App Runner resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag key-value pairs to add or update. If a key is new to the resource, the tag is added with the provided value. If a key is already
   *       associated with the resource, the value of the tag is updated.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p>
   *          <p>It must be the ARN of an App Runner resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag keys that you want to remove.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateServiceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to update.</p>
   */
  ServiceArn: string | undefined;

  /**
   * <p>The source configuration to apply to the App Runner service.</p>
   *          <p>You can change the configuration of the code or image repository that the service uses. However, you can't switch from code to image or the other way
   *       around. This means that you must provide the same structure member of <code>SourceConfiguration</code> that you originally included when you created the
   *       service. Specifically, you can include either <code>CodeRepository</code> or <code>ImageRepository</code>. To update the source configuration, set the
   *       values to members of the structure that you include.</p>
   */
  SourceConfiguration?: SourceConfiguration;

  /**
   * <p>The runtime configuration to apply to instances (scaling units) of your service.</p>
   */
  InstanceConfiguration?: InstanceConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with the App Runner service.</p>
   */
  AutoScalingConfigurationArn?: string;

  /**
   * <p>The settings for the health check that App Runner performs to monitor the health of the App Runner service.</p>
   */
  HealthCheckConfiguration?: HealthCheckConfiguration;

  /**
   * <p>Configuration settings related to network traffic of the web application that the App Runner service runs.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * <p>The observability configuration of your service.</p>
   */
  ObservabilityConfiguration?: ServiceObservabilityConfiguration;
}

export namespace UpdateServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceRequest): any => ({
    ...obj,
    ...(obj.SourceConfiguration && {
      SourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.SourceConfiguration),
    }),
  });
}

export interface UpdateServiceResponse {
  /**
   * <p>A description of the App Runner service updated by this request. All configuration values in the returned <code>Service</code> structure reflect
   *       configuration changes that are being applied by this request.</p>
   */
  Service: Service | undefined;

  /**
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track
   *       the operation's progress.</p>
   */
  OperationId: string | undefined;
}

export namespace UpdateServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceResponse): any => ({
    ...obj,
    ...(obj.Service && { Service: Service.filterSensitiveLog(obj.Service) }),
  });
}

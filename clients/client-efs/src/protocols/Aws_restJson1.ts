import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "../commands/CreateAccessPointCommand";
import { CreateFileSystemCommandInput, CreateFileSystemCommandOutput } from "../commands/CreateFileSystemCommand";
import { CreateMountTargetCommandInput, CreateMountTargetCommandOutput } from "../commands/CreateMountTargetCommand";
import {
  CreateReplicationConfigurationCommandInput,
  CreateReplicationConfigurationCommandOutput,
} from "../commands/CreateReplicationConfigurationCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "../commands/CreateTagsCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "../commands/DeleteAccessPointCommand";
import { DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput } from "../commands/DeleteFileSystemCommand";
import {
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput,
} from "../commands/DeleteFileSystemPolicyCommand";
import { DeleteMountTargetCommandInput, DeleteMountTargetCommandOutput } from "../commands/DeleteMountTargetCommand";
import {
  DeleteReplicationConfigurationCommandInput,
  DeleteReplicationConfigurationCommandOutput,
} from "../commands/DeleteReplicationConfigurationCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import {
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput,
} from "../commands/DescribeAccessPointsCommand";
import {
  DescribeAccountPreferencesCommandInput,
  DescribeAccountPreferencesCommandOutput,
} from "../commands/DescribeAccountPreferencesCommand";
import {
  DescribeBackupPolicyCommandInput,
  DescribeBackupPolicyCommandOutput,
} from "../commands/DescribeBackupPolicyCommand";
import {
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput,
} from "../commands/DescribeFileSystemPolicyCommand";
import {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "../commands/DescribeFileSystemsCommand";
import {
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput,
} from "../commands/DescribeLifecycleConfigurationCommand";
import {
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput,
} from "../commands/DescribeMountTargetsCommand";
import {
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput,
} from "../commands/DescribeMountTargetSecurityGroupsCommand";
import {
  DescribeReplicationConfigurationsCommandInput,
  DescribeReplicationConfigurationsCommandOutput,
} from "../commands/DescribeReplicationConfigurationsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput,
} from "../commands/ModifyMountTargetSecurityGroupsCommand";
import {
  PutAccountPreferencesCommandInput,
  PutAccountPreferencesCommandOutput,
} from "../commands/PutAccountPreferencesCommand";
import { PutBackupPolicyCommandInput, PutBackupPolicyCommandOutput } from "../commands/PutBackupPolicyCommand";
import {
  PutFileSystemPolicyCommandInput,
  PutFileSystemPolicyCommandOutput,
} from "../commands/PutFileSystemPolicyCommand";
import {
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput,
} from "../commands/PutLifecycleConfigurationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput } from "../commands/UpdateFileSystemCommand";
import { EFSServiceException as __BaseException } from "../models/EFSServiceException";
import {
  AccessPointAlreadyExists,
  AccessPointDescription,
  AccessPointLimitExceeded,
  AccessPointNotFound,
  AvailabilityZonesMismatch,
  BackupPolicy,
  BadRequest,
  CreationInfo,
  DependencyTimeout,
  Destination,
  DestinationToCreate,
  FileSystemAlreadyExists,
  FileSystemDescription,
  FileSystemInUse,
  FileSystemLimitExceeded,
  FileSystemNotFound,
  FileSystemSize,
  IncorrectFileSystemLifeCycleState,
  IncorrectMountTargetState,
  InsufficientThroughputCapacity,
  InternalServerError,
  InvalidPolicyException,
  IpAddressInUse,
  LifecyclePolicy,
  MountTargetConflict,
  MountTargetDescription,
  MountTargetNotFound,
  NetworkInterfaceLimitExceeded,
  NoFreeAddressesInSubnet,
  PolicyNotFound,
  PosixUser,
  ReplicationConfigurationDescription,
  ReplicationNotFound,
  Resource,
  ResourceIdPreference,
  RootDirectory,
  SecurityGroupLimitExceeded,
  SecurityGroupNotFound,
  SubnetNotFound,
  Tag,
  ThrottlingException,
  ThroughputLimitExceeded,
  TooManyRequests,
  UnsupportedAvailabilityZone,
  ValidationException,
} from "../models/models_0";

export const serializeAws_restJson1CreateAccessPointCommand = async (
  input: CreateAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/access-points";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
    ...(input.PosixUser !== undefined &&
      input.PosixUser !== null && { PosixUser: serializeAws_restJson1PosixUser(input.PosixUser, context) }),
    ...(input.RootDirectory !== undefined &&
      input.RootDirectory !== null && {
        RootDirectory: serializeAws_restJson1RootDirectory(input.RootDirectory, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateFileSystemCommand = async (
  input: CreateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/file-systems";
  let body: any;
  body = JSON.stringify({
    ...(input.AvailabilityZoneName !== undefined &&
      input.AvailabilityZoneName !== null && { AvailabilityZoneName: input.AvailabilityZoneName }),
    ...(input.Backup !== undefined && input.Backup !== null && { Backup: input.Backup }),
    CreationToken: input.CreationToken ?? generateIdempotencyToken(),
    ...(input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.PerformanceMode !== undefined &&
      input.PerformanceMode !== null && { PerformanceMode: input.PerformanceMode }),
    ...(input.ProvisionedThroughputInMibps !== undefined &&
      input.ProvisionedThroughputInMibps !== null && {
        ProvisionedThroughputInMibps: __serializeFloat(input.ProvisionedThroughputInMibps),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
    ...(input.ThroughputMode !== undefined &&
      input.ThroughputMode !== null && { ThroughputMode: input.ThroughputMode }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateMountTargetCommand = async (
  input: CreateMountTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/mount-targets";
  let body: any;
  body = JSON.stringify({
    ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
    ...(input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_restJson1SecurityGroups(input.SecurityGroups, context),
      }),
    ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateReplicationConfigurationCommand = async (
  input: CreateReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration";
  if (input.SourceFileSystemId !== undefined) {
    const labelValue: string = input.SourceFileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceFileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{SourceFileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceFileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Destinations !== undefined &&
      input.Destinations !== null && {
        Destinations: serializeAws_restJson1DestinationsToCreate(input.Destinations, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/create-tags/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAccessPointCommand = async (
  input: DeleteAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/access-points/{AccessPointId}";
  if (input.AccessPointId !== undefined) {
    const labelValue: string = input.AccessPointId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AccessPointId.");
    }
    resolvedPath = resolvedPath.replace("{AccessPointId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AccessPointId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteFileSystemCommand = async (
  input: DeleteFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/file-systems/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteFileSystemPolicyCommand = async (
  input: DeleteFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/policy";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteMountTargetCommand = async (
  input: DeleteMountTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/mount-targets/{MountTargetId}";
  if (input.MountTargetId !== undefined) {
    const labelValue: string = input.MountTargetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MountTargetId.");
    }
    resolvedPath = resolvedPath.replace("{MountTargetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MountTargetId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteReplicationConfigurationCommand = async (
  input: DeleteReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration";
  if (input.SourceFileSystemId !== undefined) {
    const labelValue: string = input.SourceFileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceFileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{SourceFileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceFileSystemId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/delete-tags/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeys(input.TagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeAccessPointsCommand = async (
  input: DescribeAccessPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/access-points";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.AccessPointId !== undefined && { AccessPointId: input.AccessPointId }),
    ...(input.FileSystemId !== undefined && { FileSystemId: input.FileSystemId }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeAccountPreferencesCommand = async (
  input: DescribeAccountPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/account-preferences";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeBackupPolicyCommand = async (
  input: DescribeBackupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/backup-policy";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeFileSystemPolicyCommand = async (
  input: DescribeFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/policy";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeFileSystemsCommand = async (
  input: DescribeFileSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/file-systems";
  const query: any = {
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.CreationToken !== undefined && { CreationToken: input.CreationToken }),
    ...(input.FileSystemId !== undefined && { FileSystemId: input.FileSystemId }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeLifecycleConfigurationCommand = async (
  input: DescribeLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeMountTargetsCommand = async (
  input: DescribeMountTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/mount-targets";
  const query: any = {
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.FileSystemId !== undefined && { FileSystemId: input.FileSystemId }),
    ...(input.MountTargetId !== undefined && { MountTargetId: input.MountTargetId }),
    ...(input.AccessPointId !== undefined && { AccessPointId: input.AccessPointId }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = async (
  input: DescribeMountTargetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
  if (input.MountTargetId !== undefined) {
    const labelValue: string = input.MountTargetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MountTargetId.");
    }
    resolvedPath = resolvedPath.replace("{MountTargetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MountTargetId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeReplicationConfigurationsCommand = async (
  input: DescribeReplicationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/replication-configurations";
  const query: any = {
    ...(input.FileSystemId !== undefined && { FileSystemId: input.FileSystemId }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/tags/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  const query: any = {
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/resource-tags/{ResourceId}";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = async (
  input: ModifyMountTargetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
  if (input.MountTargetId !== undefined) {
    const labelValue: string = input.MountTargetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MountTargetId.");
    }
    resolvedPath = resolvedPath.replace("{MountTargetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MountTargetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_restJson1SecurityGroups(input.SecurityGroups, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutAccountPreferencesCommand = async (
  input: PutAccountPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/account-preferences";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceIdType !== undefined &&
      input.ResourceIdType !== null && { ResourceIdType: input.ResourceIdType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutBackupPolicyCommand = async (
  input: PutBackupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/backup-policy";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BackupPolicy !== undefined &&
      input.BackupPolicy !== null && { BackupPolicy: serializeAws_restJson1BackupPolicy(input.BackupPolicy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutFileSystemPolicyCommand = async (
  input: PutFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/policy";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BypassPolicyLockoutSafetyCheck !== undefined &&
      input.BypassPolicyLockoutSafetyCheck !== null && {
        BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
      }),
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutLifecycleConfigurationCommand = async (
  input: PutLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.LifecyclePolicies !== undefined &&
      input.LifecyclePolicies !== null && {
        LifecyclePolicies: serializeAws_restJson1LifecyclePolicies(input.LifecyclePolicies, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/resource-tags/{ResourceId}";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/resource-tags/{ResourceId}";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateFileSystemCommand = async (
  input: UpdateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/file-systems/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileSystemId.");
    }
    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ProvisionedThroughputInMibps !== undefined &&
      input.ProvisionedThroughputInMibps !== null && {
        ProvisionedThroughputInMibps: __serializeFloat(input.ProvisionedThroughputInMibps),
      }),
    ...(input.ThroughputMode !== undefined &&
      input.ThroughputMode !== null && { ThroughputMode: input.ThroughputMode }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAccessPointCommandError(output, context);
  }
  const contents: CreateAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessPointArn: undefined,
    AccessPointId: undefined,
    ClientToken: undefined,
    FileSystemId: undefined,
    LifeCycleState: undefined,
    Name: undefined,
    OwnerId: undefined,
    PosixUser: undefined,
    RootDirectory: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessPointArn !== undefined && data.AccessPointArn !== null) {
    contents.AccessPointArn = __expectString(data.AccessPointArn);
  }
  if (data.AccessPointId !== undefined && data.AccessPointId !== null) {
    contents.AccessPointId = __expectString(data.AccessPointId);
  }
  if (data.ClientToken !== undefined && data.ClientToken !== null) {
    contents.ClientToken = __expectString(data.ClientToken);
  }
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
    contents.LifeCycleState = __expectString(data.LifeCycleState);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.OwnerId !== undefined && data.OwnerId !== null) {
    contents.OwnerId = __expectString(data.OwnerId);
  }
  if (data.PosixUser !== undefined && data.PosixUser !== null) {
    contents.PosixUser = deserializeAws_restJson1PosixUser(data.PosixUser, context);
  }
  if (data.RootDirectory !== undefined && data.RootDirectory !== null) {
    contents.RootDirectory = deserializeAws_restJson1RootDirectory(data.RootDirectory, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointAlreadyExists":
    case "com.amazonaws.efs#AccessPointAlreadyExists":
      throw await deserializeAws_restJson1AccessPointAlreadyExistsResponse(parsedOutput, context);
    case "AccessPointLimitExceeded":
    case "com.amazonaws.efs#AccessPointLimitExceeded":
      throw await deserializeAws_restJson1AccessPointLimitExceededResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.efs#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFileSystemCommandError(output, context);
  }
  const contents: CreateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    AvailabilityZoneId: undefined,
    AvailabilityZoneName: undefined,
    CreationTime: undefined,
    CreationToken: undefined,
    Encrypted: undefined,
    FileSystemArn: undefined,
    FileSystemId: undefined,
    KmsKeyId: undefined,
    LifeCycleState: undefined,
    Name: undefined,
    NumberOfMountTargets: undefined,
    OwnerId: undefined,
    PerformanceMode: undefined,
    ProvisionedThroughputInMibps: undefined,
    SizeInBytes: undefined,
    Tags: undefined,
    ThroughputMode: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AvailabilityZoneId !== undefined && data.AvailabilityZoneId !== null) {
    contents.AvailabilityZoneId = __expectString(data.AvailabilityZoneId);
  }
  if (data.AvailabilityZoneName !== undefined && data.AvailabilityZoneName !== null) {
    contents.AvailabilityZoneName = __expectString(data.AvailabilityZoneName);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.CreationToken !== undefined && data.CreationToken !== null) {
    contents.CreationToken = __expectString(data.CreationToken);
  }
  if (data.Encrypted !== undefined && data.Encrypted !== null) {
    contents.Encrypted = __expectBoolean(data.Encrypted);
  }
  if (data.FileSystemArn !== undefined && data.FileSystemArn !== null) {
    contents.FileSystemArn = __expectString(data.FileSystemArn);
  }
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.KmsKeyId !== undefined && data.KmsKeyId !== null) {
    contents.KmsKeyId = __expectString(data.KmsKeyId);
  }
  if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
    contents.LifeCycleState = __expectString(data.LifeCycleState);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.NumberOfMountTargets !== undefined && data.NumberOfMountTargets !== null) {
    contents.NumberOfMountTargets = __expectInt32(data.NumberOfMountTargets);
  }
  if (data.OwnerId !== undefined && data.OwnerId !== null) {
    contents.OwnerId = __expectString(data.OwnerId);
  }
  if (data.PerformanceMode !== undefined && data.PerformanceMode !== null) {
    contents.PerformanceMode = __expectString(data.PerformanceMode);
  }
  if (data.ProvisionedThroughputInMibps !== undefined && data.ProvisionedThroughputInMibps !== null) {
    contents.ProvisionedThroughputInMibps = __limitedParseDouble(data.ProvisionedThroughputInMibps);
  }
  if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
    contents.SizeInBytes = deserializeAws_restJson1FileSystemSize(data.SizeInBytes, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  if (data.ThroughputMode !== undefined && data.ThroughputMode !== null) {
    contents.ThroughputMode = __expectString(data.ThroughputMode);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemAlreadyExists":
    case "com.amazonaws.efs#FileSystemAlreadyExists":
      throw await deserializeAws_restJson1FileSystemAlreadyExistsResponse(parsedOutput, context);
    case "FileSystemLimitExceeded":
    case "com.amazonaws.efs#FileSystemLimitExceeded":
      throw await deserializeAws_restJson1FileSystemLimitExceededResponse(parsedOutput, context);
    case "InsufficientThroughputCapacity":
    case "com.amazonaws.efs#InsufficientThroughputCapacity":
      throw await deserializeAws_restJson1InsufficientThroughputCapacityResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "ThroughputLimitExceeded":
    case "com.amazonaws.efs#ThroughputLimitExceeded":
      throw await deserializeAws_restJson1ThroughputLimitExceededResponse(parsedOutput, context);
    case "UnsupportedAvailabilityZone":
    case "com.amazonaws.efs#UnsupportedAvailabilityZone":
      throw await deserializeAws_restJson1UnsupportedAvailabilityZoneResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateMountTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMountTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMountTargetCommandError(output, context);
  }
  const contents: CreateMountTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    AvailabilityZoneId: undefined,
    AvailabilityZoneName: undefined,
    FileSystemId: undefined,
    IpAddress: undefined,
    LifeCycleState: undefined,
    MountTargetId: undefined,
    NetworkInterfaceId: undefined,
    OwnerId: undefined,
    SubnetId: undefined,
    VpcId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AvailabilityZoneId !== undefined && data.AvailabilityZoneId !== null) {
    contents.AvailabilityZoneId = __expectString(data.AvailabilityZoneId);
  }
  if (data.AvailabilityZoneName !== undefined && data.AvailabilityZoneName !== null) {
    contents.AvailabilityZoneName = __expectString(data.AvailabilityZoneName);
  }
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.IpAddress !== undefined && data.IpAddress !== null) {
    contents.IpAddress = __expectString(data.IpAddress);
  }
  if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
    contents.LifeCycleState = __expectString(data.LifeCycleState);
  }
  if (data.MountTargetId !== undefined && data.MountTargetId !== null) {
    contents.MountTargetId = __expectString(data.MountTargetId);
  }
  if (data.NetworkInterfaceId !== undefined && data.NetworkInterfaceId !== null) {
    contents.NetworkInterfaceId = __expectString(data.NetworkInterfaceId);
  }
  if (data.OwnerId !== undefined && data.OwnerId !== null) {
    contents.OwnerId = __expectString(data.OwnerId);
  }
  if (data.SubnetId !== undefined && data.SubnetId !== null) {
    contents.SubnetId = __expectString(data.SubnetId);
  }
  if (data.VpcId !== undefined && data.VpcId !== null) {
    contents.VpcId = __expectString(data.VpcId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMountTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMountTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AvailabilityZonesMismatch":
    case "com.amazonaws.efs#AvailabilityZonesMismatch":
      throw await deserializeAws_restJson1AvailabilityZonesMismatchResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "IpAddressInUse":
    case "com.amazonaws.efs#IpAddressInUse":
      throw await deserializeAws_restJson1IpAddressInUseResponse(parsedOutput, context);
    case "MountTargetConflict":
    case "com.amazonaws.efs#MountTargetConflict":
      throw await deserializeAws_restJson1MountTargetConflictResponse(parsedOutput, context);
    case "NetworkInterfaceLimitExceeded":
    case "com.amazonaws.efs#NetworkInterfaceLimitExceeded":
      throw await deserializeAws_restJson1NetworkInterfaceLimitExceededResponse(parsedOutput, context);
    case "NoFreeAddressesInSubnet":
    case "com.amazonaws.efs#NoFreeAddressesInSubnet":
      throw await deserializeAws_restJson1NoFreeAddressesInSubnetResponse(parsedOutput, context);
    case "SecurityGroupLimitExceeded":
    case "com.amazonaws.efs#SecurityGroupLimitExceeded":
      throw await deserializeAws_restJson1SecurityGroupLimitExceededResponse(parsedOutput, context);
    case "SecurityGroupNotFound":
    case "com.amazonaws.efs#SecurityGroupNotFound":
      throw await deserializeAws_restJson1SecurityGroupNotFoundResponse(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.efs#SubnetNotFound":
      throw await deserializeAws_restJson1SubnetNotFoundResponse(parsedOutput, context);
    case "UnsupportedAvailabilityZone":
    case "com.amazonaws.efs#UnsupportedAvailabilityZone":
      throw await deserializeAws_restJson1UnsupportedAvailabilityZoneResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateReplicationConfigurationCommandError(output, context);
  }
  const contents: CreateReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreationTime: undefined,
    Destinations: undefined,
    OriginalSourceFileSystemArn: undefined,
    SourceFileSystemArn: undefined,
    SourceFileSystemId: undefined,
    SourceFileSystemRegion: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.Destinations !== undefined && data.Destinations !== null) {
    contents.Destinations = deserializeAws_restJson1Destinations(data.Destinations, context);
  }
  if (data.OriginalSourceFileSystemArn !== undefined && data.OriginalSourceFileSystemArn !== null) {
    contents.OriginalSourceFileSystemArn = __expectString(data.OriginalSourceFileSystemArn);
  }
  if (data.SourceFileSystemArn !== undefined && data.SourceFileSystemArn !== null) {
    contents.SourceFileSystemArn = __expectString(data.SourceFileSystemArn);
  }
  if (data.SourceFileSystemId !== undefined && data.SourceFileSystemId !== null) {
    contents.SourceFileSystemId = __expectString(data.SourceFileSystemId);
  }
  if (data.SourceFileSystemRegion !== undefined && data.SourceFileSystemRegion !== null) {
    contents.SourceFileSystemRegion = __expectString(data.SourceFileSystemRegion);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemLimitExceeded":
    case "com.amazonaws.efs#FileSystemLimitExceeded":
      throw await deserializeAws_restJson1FileSystemLimitExceededResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context);
    case "InsufficientThroughputCapacity":
    case "com.amazonaws.efs#InsufficientThroughputCapacity":
      throw await deserializeAws_restJson1InsufficientThroughputCapacityResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "ReplicationNotFound":
    case "com.amazonaws.efs#ReplicationNotFound":
      throw await deserializeAws_restJson1ReplicationNotFoundResponse(parsedOutput, context);
    case "ThroughputLimitExceeded":
    case "com.amazonaws.efs#ThroughputLimitExceeded":
      throw await deserializeAws_restJson1ThroughputLimitExceededResponse(parsedOutput, context);
    case "UnsupportedAvailabilityZone":
    case "com.amazonaws.efs#UnsupportedAvailabilityZone":
      throw await deserializeAws_restJson1UnsupportedAvailabilityZoneResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.efs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTagsCommandError(output, context);
  }
  const contents: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAccessPointCommandError(output, context);
  }
  const contents: DeleteAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFileSystemCommandError(output, context);
  }
  const contents: DeleteFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemInUse":
    case "com.amazonaws.efs#FileSystemInUse":
      throw await deserializeAws_restJson1FileSystemInUseResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteFileSystemPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFileSystemPolicyCommandError(output, context);
  }
  const contents: DeleteFileSystemPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFileSystemPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteMountTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMountTargetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMountTargetCommandError(output, context);
  }
  const contents: DeleteMountTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMountTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMountTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "DependencyTimeout":
    case "com.amazonaws.efs#DependencyTimeout":
      throw await deserializeAws_restJson1DependencyTimeoutResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      throw await deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteReplicationConfigurationCommandError(output, context);
  }
  const contents: DeleteReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "ReplicationNotFound":
    case "com.amazonaws.efs#ReplicationNotFound":
      throw await deserializeAws_restJson1ReplicationNotFoundResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTagsCommandError(output, context);
  }
  const contents: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeAccessPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccessPointsCommandError(output, context);
  }
  const contents: DescribeAccessPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessPoints: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessPoints !== undefined && data.AccessPoints !== null) {
    contents.AccessPoints = deserializeAws_restJson1AccessPointDescriptions(data.AccessPoints, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAccessPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeAccountPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccountPreferencesCommandError(output, context);
  }
  const contents: DescribeAccountPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ResourceIdPreference: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ResourceIdPreference !== undefined && data.ResourceIdPreference !== null) {
    contents.ResourceIdPreference = deserializeAws_restJson1ResourceIdPreference(data.ResourceIdPreference, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAccountPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeBackupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBackupPolicyCommandError(output, context);
  }
  const contents: DescribeBackupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupPolicy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupPolicy !== undefined && data.BackupPolicy !== null) {
    contents.BackupPolicy = deserializeAws_restJson1BackupPolicy(data.BackupPolicy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBackupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "PolicyNotFound":
    case "com.amazonaws.efs#PolicyNotFound":
      throw await deserializeAws_restJson1PolicyNotFoundResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.efs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeFileSystemPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFileSystemPolicyCommandError(output, context);
  }
  const contents: DescribeFileSystemPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    FileSystemId: undefined,
    Policy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = __expectString(data.Policy);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFileSystemPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "PolicyNotFound":
    case "com.amazonaws.efs#PolicyNotFound":
      throw await deserializeAws_restJson1PolicyNotFoundResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeFileSystemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFileSystemsCommandError(output, context);
  }
  const contents: DescribeFileSystemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    FileSystems: undefined,
    Marker: undefined,
    NextMarker: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FileSystems !== undefined && data.FileSystems !== null) {
    contents.FileSystems = deserializeAws_restJson1FileSystemDescriptions(data.FileSystems, context);
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFileSystemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeLifecycleConfigurationCommandError(output, context);
  }
  const contents: DescribeLifecycleConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    LifecyclePolicies: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LifecyclePolicies !== undefined && data.LifecyclePolicies !== null) {
    contents.LifecyclePolicies = deserializeAws_restJson1LifecyclePolicies(data.LifecyclePolicies, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeMountTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeMountTargetsCommandError(output, context);
  }
  const contents: DescribeMountTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Marker: undefined,
    MountTargets: undefined,
    NextMarker: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.MountTargets !== undefined && data.MountTargets !== null) {
    contents.MountTargets = deserializeAws_restJson1MountTargetDescriptions(data.MountTargets, context);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeMountTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      throw await deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetSecurityGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommandError(output, context);
  }
  const contents: DescribeMountTargetSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    SecurityGroups: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SecurityGroups !== undefined && data.SecurityGroups !== null) {
    contents.SecurityGroups = deserializeAws_restJson1SecurityGroups(data.SecurityGroups, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "IncorrectMountTargetState":
    case "com.amazonaws.efs#IncorrectMountTargetState":
      throw await deserializeAws_restJson1IncorrectMountTargetStateResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      throw await deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeReplicationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeReplicationConfigurationsCommandError(output, context);
  }
  const contents: DescribeReplicationConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Replications: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Replications !== undefined && data.Replications !== null) {
    contents.Replications = deserializeAws_restJson1ReplicationConfigurationDescriptions(data.Replications, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeReplicationConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "ReplicationNotFound":
    case "com.amazonaws.efs#ReplicationNotFound":
      throw await deserializeAws_restJson1ReplicationNotFoundResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.efs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTagsCommandError(output, context);
  }
  const contents: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Marker: undefined,
    NextMarker: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyMountTargetSecurityGroupsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommandError(output, context);
  }
  const contents: ModifyMountTargetSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyMountTargetSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "IncorrectMountTargetState":
    case "com.amazonaws.efs#IncorrectMountTargetState":
      throw await deserializeAws_restJson1IncorrectMountTargetStateResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      throw await deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context);
    case "SecurityGroupLimitExceeded":
    case "com.amazonaws.efs#SecurityGroupLimitExceeded":
      throw await deserializeAws_restJson1SecurityGroupLimitExceededResponse(parsedOutput, context);
    case "SecurityGroupNotFound":
    case "com.amazonaws.efs#SecurityGroupNotFound":
      throw await deserializeAws_restJson1SecurityGroupNotFoundResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutAccountPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAccountPreferencesCommandError(output, context);
  }
  const contents: PutAccountPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ResourceIdPreference: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceIdPreference !== undefined && data.ResourceIdPreference !== null) {
    contents.ResourceIdPreference = deserializeAws_restJson1ResourceIdPreference(data.ResourceIdPreference, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutAccountPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutBackupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBackupPolicyCommandError(output, context);
  }
  const contents: PutBackupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupPolicy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupPolicy !== undefined && data.BackupPolicy !== null) {
    contents.BackupPolicy = deserializeAws_restJson1BackupPolicy(data.BackupPolicy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutBackupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.efs#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutFileSystemPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFileSystemPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutFileSystemPolicyCommandError(output, context);
  }
  const contents: PutFileSystemPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    FileSystemId: undefined,
    Policy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = __expectString(data.Policy);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutFileSystemPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFileSystemPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidPolicyException":
    case "com.amazonaws.efs#InvalidPolicyException":
      throw await deserializeAws_restJson1InvalidPolicyExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutLifecycleConfigurationCommandError(output, context);
  }
  const contents: PutLifecycleConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    LifecyclePolicies: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LifecyclePolicies !== undefined && data.LifecyclePolicies !== null) {
    contents.LifecyclePolicies = deserializeAws_restJson1LifecyclePolicies(data.LifecyclePolicies, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFileSystemCommandError(output, context);
  }
  const contents: UpdateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    AvailabilityZoneId: undefined,
    AvailabilityZoneName: undefined,
    CreationTime: undefined,
    CreationToken: undefined,
    Encrypted: undefined,
    FileSystemArn: undefined,
    FileSystemId: undefined,
    KmsKeyId: undefined,
    LifeCycleState: undefined,
    Name: undefined,
    NumberOfMountTargets: undefined,
    OwnerId: undefined,
    PerformanceMode: undefined,
    ProvisionedThroughputInMibps: undefined,
    SizeInBytes: undefined,
    Tags: undefined,
    ThroughputMode: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AvailabilityZoneId !== undefined && data.AvailabilityZoneId !== null) {
    contents.AvailabilityZoneId = __expectString(data.AvailabilityZoneId);
  }
  if (data.AvailabilityZoneName !== undefined && data.AvailabilityZoneName !== null) {
    contents.AvailabilityZoneName = __expectString(data.AvailabilityZoneName);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.CreationToken !== undefined && data.CreationToken !== null) {
    contents.CreationToken = __expectString(data.CreationToken);
  }
  if (data.Encrypted !== undefined && data.Encrypted !== null) {
    contents.Encrypted = __expectBoolean(data.Encrypted);
  }
  if (data.FileSystemArn !== undefined && data.FileSystemArn !== null) {
    contents.FileSystemArn = __expectString(data.FileSystemArn);
  }
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.KmsKeyId !== undefined && data.KmsKeyId !== null) {
    contents.KmsKeyId = __expectString(data.KmsKeyId);
  }
  if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
    contents.LifeCycleState = __expectString(data.LifeCycleState);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.NumberOfMountTargets !== undefined && data.NumberOfMountTargets !== null) {
    contents.NumberOfMountTargets = __expectInt32(data.NumberOfMountTargets);
  }
  if (data.OwnerId !== undefined && data.OwnerId !== null) {
    contents.OwnerId = __expectString(data.OwnerId);
  }
  if (data.PerformanceMode !== undefined && data.PerformanceMode !== null) {
    contents.PerformanceMode = __expectString(data.PerformanceMode);
  }
  if (data.ProvisionedThroughputInMibps !== undefined && data.ProvisionedThroughputInMibps !== null) {
    contents.ProvisionedThroughputInMibps = __limitedParseDouble(data.ProvisionedThroughputInMibps);
  }
  if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
    contents.SizeInBytes = deserializeAws_restJson1FileSystemSize(data.SizeInBytes, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  if (data.ThroughputMode !== undefined && data.ThroughputMode !== null) {
    contents.ThroughputMode = __expectString(data.ThroughputMode);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await deserializeAws_restJson1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context);
    case "InsufficientThroughputCapacity":
    case "com.amazonaws.efs#InsufficientThroughputCapacity":
      throw await deserializeAws_restJson1InsufficientThroughputCapacityResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "ThroughputLimitExceeded":
    case "com.amazonaws.efs#ThroughputLimitExceeded":
      throw await deserializeAws_restJson1ThroughputLimitExceededResponse(parsedOutput, context);
    case "TooManyRequests":
    case "com.amazonaws.efs#TooManyRequests":
      throw await deserializeAws_restJson1TooManyRequestsResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessPointAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessPointAlreadyExists> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.AccessPointId !== undefined && data.AccessPointId !== null) {
    contents.AccessPointId = __expectString(data.AccessPointId);
  }
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessPointAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1AccessPointLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessPointLimitExceeded> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessPointLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1AccessPointNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessPointNotFound> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessPointNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1AvailabilityZonesMismatchResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AvailabilityZonesMismatch> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AvailabilityZonesMismatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1BadRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequest> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DependencyTimeoutResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyTimeout> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new DependencyTimeout({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1FileSystemAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemAlreadyExists> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new FileSystemAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1FileSystemInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemInUse> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new FileSystemInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1FileSystemLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemLimitExceeded> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new FileSystemLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1FileSystemNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemNotFound> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new FileSystemNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectFileSystemLifeCycleState> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new IncorrectFileSystemLifeCycleState({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1IncorrectMountTargetStateResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectMountTargetState> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new IncorrectMountTargetState({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InsufficientThroughputCapacityResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientThroughputCapacity> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InsufficientThroughputCapacity({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1IpAddressInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IpAddressInUse> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new IpAddressInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MountTargetConflictResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MountTargetConflict> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new MountTargetConflict({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MountTargetNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MountTargetNotFound> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new MountTargetNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NetworkInterfaceLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NetworkInterfaceLimitExceeded> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NetworkInterfaceLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NoFreeAddressesInSubnetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoFreeAddressesInSubnet> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NoFreeAddressesInSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1PolicyNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFound> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new PolicyNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ReplicationNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationNotFound> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ReplicationNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1SecurityGroupLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SecurityGroupLimitExceeded> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new SecurityGroupLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1SecurityGroupNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SecurityGroupNotFound> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new SecurityGroupNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1SubnetNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotFound> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new SubnetNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThroughputLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThroughputLimitExceeded> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThroughputLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyRequestsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequests> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TooManyRequests({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnsupportedAvailabilityZoneResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAvailabilityZone> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UnsupportedAvailabilityZone({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1BackupPolicy = (input: BackupPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_restJson1CreationInfo = (input: CreationInfo, context: __SerdeContext): any => {
  return {
    ...(input.OwnerGid !== undefined && input.OwnerGid !== null && { OwnerGid: input.OwnerGid }),
    ...(input.OwnerUid !== undefined && input.OwnerUid !== null && { OwnerUid: input.OwnerUid }),
    ...(input.Permissions !== undefined && input.Permissions !== null && { Permissions: input.Permissions }),
  };
};

const serializeAws_restJson1DestinationsToCreate = (input: DestinationToCreate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DestinationToCreate(entry, context);
    });
};

const serializeAws_restJson1DestinationToCreate = (input: DestinationToCreate, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZoneName !== undefined &&
      input.AvailabilityZoneName !== null && { AvailabilityZoneName: input.AvailabilityZoneName }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
  };
};

const serializeAws_restJson1LifecyclePolicies = (input: LifecyclePolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LifecyclePolicy(entry, context);
    });
};

const serializeAws_restJson1LifecyclePolicy = (input: LifecyclePolicy, context: __SerdeContext): any => {
  return {
    ...(input.TransitionToIA !== undefined &&
      input.TransitionToIA !== null && { TransitionToIA: input.TransitionToIA }),
    ...(input.TransitionToPrimaryStorageClass !== undefined &&
      input.TransitionToPrimaryStorageClass !== null && {
        TransitionToPrimaryStorageClass: input.TransitionToPrimaryStorageClass,
      }),
  };
};

const serializeAws_restJson1PosixUser = (input: PosixUser, context: __SerdeContext): any => {
  return {
    ...(input.Gid !== undefined && input.Gid !== null && { Gid: input.Gid }),
    ...(input.SecondaryGids !== undefined &&
      input.SecondaryGids !== null && {
        SecondaryGids: serializeAws_restJson1SecondaryGids(input.SecondaryGids, context),
      }),
    ...(input.Uid !== undefined && input.Uid !== null && { Uid: input.Uid }),
  };
};

const serializeAws_restJson1RootDirectory = (input: RootDirectory, context: __SerdeContext): any => {
  return {
    ...(input.CreationInfo !== undefined &&
      input.CreationInfo !== null && { CreationInfo: serializeAws_restJson1CreationInfo(input.CreationInfo, context) }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
  };
};

const serializeAws_restJson1SecondaryGids = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SecurityGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1AccessPointDescription = (
  output: any,
  context: __SerdeContext
): AccessPointDescription => {
  return {
    AccessPointArn: __expectString(output.AccessPointArn),
    AccessPointId: __expectString(output.AccessPointId),
    ClientToken: __expectString(output.ClientToken),
    FileSystemId: __expectString(output.FileSystemId),
    LifeCycleState: __expectString(output.LifeCycleState),
    Name: __expectString(output.Name),
    OwnerId: __expectString(output.OwnerId),
    PosixUser:
      output.PosixUser !== undefined && output.PosixUser !== null
        ? deserializeAws_restJson1PosixUser(output.PosixUser, context)
        : undefined,
    RootDirectory:
      output.RootDirectory !== undefined && output.RootDirectory !== null
        ? deserializeAws_restJson1RootDirectory(output.RootDirectory, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1Tags(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AccessPointDescriptions = (
  output: any,
  context: __SerdeContext
): AccessPointDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccessPointDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BackupPolicy = (output: any, context: __SerdeContext): BackupPolicy => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1CreationInfo = (output: any, context: __SerdeContext): CreationInfo => {
  return {
    OwnerGid: __expectLong(output.OwnerGid),
    OwnerUid: __expectLong(output.OwnerUid),
    Permissions: __expectString(output.Permissions),
  } as any;
};

const deserializeAws_restJson1Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    FileSystemId: __expectString(output.FileSystemId),
    LastReplicatedTimestamp:
      output.LastReplicatedTimestamp !== undefined && output.LastReplicatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastReplicatedTimestamp)))
        : undefined,
    Region: __expectString(output.Region),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1Destinations = (output: any, context: __SerdeContext): Destination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Destination(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FileSystemDescription = (output: any, context: __SerdeContext): FileSystemDescription => {
  return {
    AvailabilityZoneId: __expectString(output.AvailabilityZoneId),
    AvailabilityZoneName: __expectString(output.AvailabilityZoneName),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    CreationToken: __expectString(output.CreationToken),
    Encrypted: __expectBoolean(output.Encrypted),
    FileSystemArn: __expectString(output.FileSystemArn),
    FileSystemId: __expectString(output.FileSystemId),
    KmsKeyId: __expectString(output.KmsKeyId),
    LifeCycleState: __expectString(output.LifeCycleState),
    Name: __expectString(output.Name),
    NumberOfMountTargets: __expectInt32(output.NumberOfMountTargets),
    OwnerId: __expectString(output.OwnerId),
    PerformanceMode: __expectString(output.PerformanceMode),
    ProvisionedThroughputInMibps: __limitedParseDouble(output.ProvisionedThroughputInMibps),
    SizeInBytes:
      output.SizeInBytes !== undefined && output.SizeInBytes !== null
        ? deserializeAws_restJson1FileSystemSize(output.SizeInBytes, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1Tags(output.Tags, context)
        : undefined,
    ThroughputMode: __expectString(output.ThroughputMode),
  } as any;
};

const deserializeAws_restJson1FileSystemDescriptions = (
  output: any,
  context: __SerdeContext
): FileSystemDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FileSystemDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FileSystemSize = (output: any, context: __SerdeContext): FileSystemSize => {
  return {
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp)))
        : undefined,
    Value: __expectLong(output.Value),
    ValueInIA: __expectLong(output.ValueInIA),
    ValueInStandard: __expectLong(output.ValueInStandard),
  } as any;
};

const deserializeAws_restJson1LifecyclePolicies = (output: any, context: __SerdeContext): LifecyclePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LifecyclePolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LifecyclePolicy = (output: any, context: __SerdeContext): LifecyclePolicy => {
  return {
    TransitionToIA: __expectString(output.TransitionToIA),
    TransitionToPrimaryStorageClass: __expectString(output.TransitionToPrimaryStorageClass),
  } as any;
};

const deserializeAws_restJson1MountTargetDescription = (
  output: any,
  context: __SerdeContext
): MountTargetDescription => {
  return {
    AvailabilityZoneId: __expectString(output.AvailabilityZoneId),
    AvailabilityZoneName: __expectString(output.AvailabilityZoneName),
    FileSystemId: __expectString(output.FileSystemId),
    IpAddress: __expectString(output.IpAddress),
    LifeCycleState: __expectString(output.LifeCycleState),
    MountTargetId: __expectString(output.MountTargetId),
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
    OwnerId: __expectString(output.OwnerId),
    SubnetId: __expectString(output.SubnetId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1MountTargetDescriptions = (
  output: any,
  context: __SerdeContext
): MountTargetDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MountTargetDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PosixUser = (output: any, context: __SerdeContext): PosixUser => {
  return {
    Gid: __expectLong(output.Gid),
    SecondaryGids:
      output.SecondaryGids !== undefined && output.SecondaryGids !== null
        ? deserializeAws_restJson1SecondaryGids(output.SecondaryGids, context)
        : undefined,
    Uid: __expectLong(output.Uid),
  } as any;
};

const deserializeAws_restJson1ReplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationDescription => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destinations:
      output.Destinations !== undefined && output.Destinations !== null
        ? deserializeAws_restJson1Destinations(output.Destinations, context)
        : undefined,
    OriginalSourceFileSystemArn: __expectString(output.OriginalSourceFileSystemArn),
    SourceFileSystemArn: __expectString(output.SourceFileSystemArn),
    SourceFileSystemId: __expectString(output.SourceFileSystemId),
    SourceFileSystemRegion: __expectString(output.SourceFileSystemRegion),
  } as any;
};

const deserializeAws_restJson1ReplicationConfigurationDescriptions = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReplicationConfigurationDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceIdPreference = (output: any, context: __SerdeContext): ResourceIdPreference => {
  return {
    ResourceIdType: __expectString(output.ResourceIdType),
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_restJson1Resources(output.Resources, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Resources = (output: any, context: __SerdeContext): (Resource | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1RootDirectory = (output: any, context: __SerdeContext): RootDirectory => {
  return {
    CreationInfo:
      output.CreationInfo !== undefined && output.CreationInfo !== null
        ? deserializeAws_restJson1CreationInfo(output.CreationInfo, context)
        : undefined,
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_restJson1SecondaryGids = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectLong(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1SecurityGroups = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};

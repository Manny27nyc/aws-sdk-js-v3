import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ca-central-1": {
    variants: [
      {
        hostname: "fsx-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-1": {
    variants: [
      {
        hostname: "fsx-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-2": {
    variants: [
      {
        hostname: "fsx-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "fsx-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "fsx-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-1": {
    variants: [
      {
        hostname: "fsx-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2": {
    variants: [
      {
        hostname: "fsx-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "fips-ca-central-1",
      "fips-prod-ca-central-1",
      "fips-prod-us-east-1",
      "fips-prod-us-east-2",
      "fips-prod-us-west-1",
      "fips-prod-us-west-2",
      "fips-us-east-1",
      "fips-us-east-2",
      "fips-us-west-1",
      "fips-us-west-2",
      "me-south-1",
      "prod-ca-central-1",
      "prod-us-east-1",
      "prod-us-east-2",
      "prod-us-west-1",
      "prod-us-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "fsx.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "fsx-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "fsx.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "fsx.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "fsx-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "fsx-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "fsx.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "fsx.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "fsx-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "fsx.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "fsx-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: [
      "fips-prod-us-gov-east-1",
      "fips-prod-us-gov-west-1",
      "fips-us-gov-east-1",
      "fips-us-gov-west-1",
      "prod-us-gov-east-1",
      "prod-us-gov-west-1",
      "us-gov-east-1",
      "us-gov-west-1",
    ],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "fsx.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "fsx-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "fsx-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "fsx.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "fsx",
    regionHash,
    partitionHash,
  });

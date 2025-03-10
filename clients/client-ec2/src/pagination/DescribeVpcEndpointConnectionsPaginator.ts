import { Paginator } from "@aws-sdk/types";

import {
  DescribeVpcEndpointConnectionsCommand,
  DescribeVpcEndpointConnectionsCommandInput,
  DescribeVpcEndpointConnectionsCommandOutput,
} from "../commands/DescribeVpcEndpointConnectionsCommand";
import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeVpcEndpointConnectionsCommandInput,
  ...args: any
): Promise<DescribeVpcEndpointConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeVpcEndpointConnectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeVpcEndpointConnectionsCommandInput,
  ...args: any
): Promise<DescribeVpcEndpointConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.describeVpcEndpointConnections(input, ...args);
};
export async function* paginateDescribeVpcEndpointConnections(
  config: EC2PaginationConfiguration,
  input: DescribeVpcEndpointConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeVpcEndpointConnectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeVpcEndpointConnectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}

import { Paginator } from "@aws-sdk/types";

import {
  ListChildrenCommand,
  ListChildrenCommandInput,
  ListChildrenCommandOutput,
} from "../commands/ListChildrenCommand";
import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListChildrenCommandInput,
  ...args: any
): Promise<ListChildrenCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChildrenCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Organizations,
  input: ListChildrenCommandInput,
  ...args: any
): Promise<ListChildrenCommandOutput> => {
  // @ts-ignore
  return await client.listChildren(input, ...args);
};
export async function* paginateListChildren(
  config: OrganizationsPaginationConfiguration,
  input: ListChildrenCommandInput,
  ...additionalArguments: any
): Paginator<ListChildrenCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChildrenCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Organizations) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OrganizationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Organizations | OrganizationsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}

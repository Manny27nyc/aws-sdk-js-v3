import { Paginator } from "@aws-sdk/types";

import {
  ListMetricValuesCommand,
  ListMetricValuesCommandInput,
  ListMetricValuesCommandOutput,
} from "../commands/ListMetricValuesCommand";
import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListMetricValuesCommandInput,
  ...args: any
): Promise<ListMetricValuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMetricValuesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListMetricValuesCommandInput,
  ...args: any
): Promise<ListMetricValuesCommandOutput> => {
  // @ts-ignore
  return await client.listMetricValues(input, ...args);
};
export async function* paginateListMetricValues(
  config: IoTPaginationConfiguration,
  input: ListMetricValuesCommandInput,
  ...additionalArguments: any
): Paginator<ListMetricValuesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMetricValuesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}

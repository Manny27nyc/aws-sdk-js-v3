import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  ListThirdPartyFirewallFirewallPoliciesRequest,
  ListThirdPartyFirewallFirewallPoliciesResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListThirdPartyFirewallFirewallPoliciesCommand,
  serializeAws_json1_1ListThirdPartyFirewallFirewallPoliciesCommand,
} from "../protocols/Aws_json1_1";

export interface ListThirdPartyFirewallFirewallPoliciesCommandInput
  extends ListThirdPartyFirewallFirewallPoliciesRequest {}
export interface ListThirdPartyFirewallFirewallPoliciesCommandOutput
  extends ListThirdPartyFirewallFirewallPoliciesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListThirdPartyFirewallFirewallPoliciesCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListThirdPartyFirewallFirewallPoliciesCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListThirdPartyFirewallFirewallPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThirdPartyFirewallFirewallPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListThirdPartyFirewallFirewallPoliciesCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class ListThirdPartyFirewallFirewallPoliciesCommand extends $Command<
  ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ListThirdPartyFirewallFirewallPoliciesCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListThirdPartyFirewallFirewallPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListThirdPartyFirewallFirewallPoliciesCommandInput, ListThirdPartyFirewallFirewallPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "ListThirdPartyFirewallFirewallPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListThirdPartyFirewallFirewallPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListThirdPartyFirewallFirewallPoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListThirdPartyFirewallFirewallPoliciesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListThirdPartyFirewallFirewallPoliciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListThirdPartyFirewallFirewallPoliciesCommandOutput> {
    return deserializeAws_json1_1ListThirdPartyFirewallFirewallPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

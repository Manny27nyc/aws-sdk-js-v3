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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { ListDomainsRequest, ListDomainsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListDomainsCommand,
  serializeAws_restJson1ListDomainsCommand,
} from "../protocols/Aws_restJson1";

export interface ListDomainsCommandInput extends ListDomainsRequest {}
export interface ListDomainsCommandOutput extends ListDomainsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the domains for an AWS account that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListDomainsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListDomainsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainsCommandInput} for command's `input` shape.
 * @see {@link ListDomainsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 */
export class ListDomainsCommand extends $Command<
  ListDomainsCommandInput,
  ListDomainsCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDomainsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDomainsCommandInput, ListDomainsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListDomainsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDomainsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDomainsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDomainsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDomainsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDomainsCommandOutput> {
    return deserializeAws_restJson1ListDomainsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

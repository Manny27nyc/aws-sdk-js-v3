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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkInsightsAccessScopeRequest, DeleteNetworkInsightsAccessScopeResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteNetworkInsightsAccessScopeCommand,
  serializeAws_ec2DeleteNetworkInsightsAccessScopeCommand,
} from "../protocols/Aws_ec2";

export interface DeleteNetworkInsightsAccessScopeCommandInput extends DeleteNetworkInsightsAccessScopeRequest {}
export interface DeleteNetworkInsightsAccessScopeCommandOutput
  extends DeleteNetworkInsightsAccessScopeResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified Network Access Scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsAccessScopeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsAccessScopeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkInsightsAccessScopeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkInsightsAccessScopeCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsAccessScopeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteNetworkInsightsAccessScopeCommand extends $Command<
  DeleteNetworkInsightsAccessScopeCommandInput,
  DeleteNetworkInsightsAccessScopeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNetworkInsightsAccessScopeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteNetworkInsightsAccessScopeCommandInput, DeleteNetworkInsightsAccessScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteNetworkInsightsAccessScopeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNetworkInsightsAccessScopeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNetworkInsightsAccessScopeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteNetworkInsightsAccessScopeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteNetworkInsightsAccessScopeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNetworkInsightsAccessScopeCommandOutput> {
    return deserializeAws_ec2DeleteNetworkInsightsAccessScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

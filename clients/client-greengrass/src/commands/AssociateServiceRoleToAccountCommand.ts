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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { AssociateServiceRoleToAccountRequest, AssociateServiceRoleToAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateServiceRoleToAccountCommand,
  serializeAws_restJson1AssociateServiceRoleToAccountCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateServiceRoleToAccountCommandInput extends AssociateServiceRoleToAccountRequest {}
export interface AssociateServiceRoleToAccountCommandOutput
  extends AssociateServiceRoleToAccountResponse,
    __MetadataBearer {}

/**
 * Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, AssociateServiceRoleToAccountCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, AssociateServiceRoleToAccountCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new AssociateServiceRoleToAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateServiceRoleToAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateServiceRoleToAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 */
export class AssociateServiceRoleToAccountCommand extends $Command<
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateServiceRoleToAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateServiceRoleToAccountCommandInput, AssociateServiceRoleToAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "AssociateServiceRoleToAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateServiceRoleToAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateServiceRoleToAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateServiceRoleToAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateServiceRoleToAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateServiceRoleToAccountCommandOutput> {
    return deserializeAws_restJson1AssociateServiceRoleToAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

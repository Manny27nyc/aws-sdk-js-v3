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

import {
  UpdateIdentityProviderConfigurationRequest,
  UpdateIdentityProviderConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateIdentityProviderConfigurationCommand,
  serializeAws_restJson1UpdateIdentityProviderConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

export interface UpdateIdentityProviderConfigurationCommandInput extends UpdateIdentityProviderConfigurationRequest {}
export interface UpdateIdentityProviderConfigurationCommandOutput
  extends UpdateIdentityProviderConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the identity provider configuration for the fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateIdentityProviderConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateIdentityProviderConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateIdentityProviderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIdentityProviderConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityProviderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 */
export class UpdateIdentityProviderConfigurationCommand extends $Command<
  UpdateIdentityProviderConfigurationCommandInput,
  UpdateIdentityProviderConfigurationCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateIdentityProviderConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateIdentityProviderConfigurationCommandInput, UpdateIdentityProviderConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "UpdateIdentityProviderConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateIdentityProviderConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateIdentityProviderConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateIdentityProviderConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateIdentityProviderConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateIdentityProviderConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateIdentityProviderConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DeletePlaybackConfigurationRequest, DeletePlaybackConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeletePlaybackConfigurationCommand,
  serializeAws_restJson1DeletePlaybackConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface DeletePlaybackConfigurationCommandInput extends DeletePlaybackConfigurationRequest {}
export interface DeletePlaybackConfigurationCommandOutput
  extends DeletePlaybackConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the playback configuration for the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeletePlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeletePlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeletePlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeletePlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 */
export class DeletePlaybackConfigurationCommand extends $Command<
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePlaybackConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePlaybackConfigurationCommandInput, DeletePlaybackConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "DeletePlaybackConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePlaybackConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePlaybackConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePlaybackConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePlaybackConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePlaybackConfigurationCommandOutput> {
    return deserializeAws_restJson1DeletePlaybackConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

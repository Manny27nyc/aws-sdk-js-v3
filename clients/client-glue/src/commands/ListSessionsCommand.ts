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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListSessionsRequest, ListSessionsResponse } from "../models/models_1";
import {
  deserializeAws_json1_1ListSessionsCommand,
  serializeAws_json1_1ListSessionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListSessionsCommandInput extends ListSessionsRequest {}
export interface ListSessionsCommandOutput extends ListSessionsResponse, __MetadataBearer {}

/**
 * <p>Retrieve a session..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListSessionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListSessionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSessionsCommandInput} for command's `input` shape.
 * @see {@link ListSessionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class ListSessionsCommand extends $Command<
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSessionsCommandInput, ListSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSessionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSessionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSessionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSessionsCommandOutput> {
    return deserializeAws_json1_1ListSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

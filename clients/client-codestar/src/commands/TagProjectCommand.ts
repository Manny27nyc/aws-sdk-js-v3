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

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { TagProjectRequest, TagProjectResult } from "../models/models_0";
import {
  deserializeAws_json1_1TagProjectCommand,
  serializeAws_json1_1TagProjectCommand,
} from "../protocols/Aws_json1_1";

export interface TagProjectCommandInput extends TagProjectRequest {}
export interface TagProjectCommandOutput extends TagProjectResult, __MetadataBearer {}

/**
 * <p>Adds tags to a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, TagProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, TagProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new TagProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagProjectCommandInput} for command's `input` shape.
 * @see {@link TagProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 */
export class TagProjectCommand extends $Command<
  TagProjectCommandInput,
  TagProjectCommandOutput,
  CodeStarClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TagProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagProjectCommandInput, TagProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "TagProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagProjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TagProjectResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TagProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagProjectCommandOutput> {
    return deserializeAws_json1_1TagProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

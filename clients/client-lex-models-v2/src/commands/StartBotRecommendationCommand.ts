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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { StartBotRecommendationRequest, StartBotRecommendationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartBotRecommendationCommand,
  serializeAws_restJson1StartBotRecommendationCommand,
} from "../protocols/Aws_restJson1";

export interface StartBotRecommendationCommandInput extends StartBotRecommendationRequest {}
export interface StartBotRecommendationCommandOutput extends StartBotRecommendationResponse, __MetadataBearer {}

/**
 * <p>Use this to provide your transcript data, and to start the bot
 *          recommendation process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, StartBotRecommendationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, StartBotRecommendationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new StartBotRecommendationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBotRecommendationCommandInput} for command's `input` shape.
 * @see {@link StartBotRecommendationCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class StartBotRecommendationCommand extends $Command<
  StartBotRecommendationCommandInput,
  StartBotRecommendationCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartBotRecommendationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartBotRecommendationCommandInput, StartBotRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "StartBotRecommendationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartBotRecommendationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartBotRecommendationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartBotRecommendationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartBotRecommendationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartBotRecommendationCommandOutput> {
    return deserializeAws_restJson1StartBotRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

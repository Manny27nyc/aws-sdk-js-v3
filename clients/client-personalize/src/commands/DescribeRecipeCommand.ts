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

import { DescribeRecipeRequest, DescribeRecipeResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  deserializeAws_json1_1DescribeRecipeCommand,
  serializeAws_json1_1DescribeRecipeCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeRecipeCommandInput extends DescribeRecipeRequest {}
export interface DescribeRecipeCommandOutput extends DescribeRecipeResponse, __MetadataBearer {}

/**
 * <p>Describes a recipe.</p>
 *          <p>A recipe contains three items:</p>
 *          <ul>
 *             <li>
 *                <p>An algorithm that trains a model.</p>
 *             </li>
 *             <li>
 *                <p>Hyperparameters that govern the training.</p>
 *             </li>
 *             <li>
 *                <p>Feature transformation information for modifying the input data before training.</p>
 *             </li>
 *          </ul>
 *          <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a
 *       solution with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> API.
 *       <code>CreateSolution</code> trains a model by using the algorithm
 *       in the specified recipe and a training dataset. The solution, when deployed as a campaign,
 *       can provide recommendations using the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeRecipeCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeRecipeCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecipeCommandInput} for command's `input` shape.
 * @see {@link DescribeRecipeCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 */
export class DescribeRecipeCommand extends $Command<
  DescribeRecipeCommandInput,
  DescribeRecipeCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRecipeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRecipeCommandInput, DescribeRecipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeRecipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRecipeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRecipeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRecipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRecipeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRecipeCommandOutput> {
    return deserializeAws_json1_1DescribeRecipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

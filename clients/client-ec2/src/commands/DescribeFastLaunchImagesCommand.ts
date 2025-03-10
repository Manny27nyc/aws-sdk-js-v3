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
import { DescribeFastLaunchImagesRequest, DescribeFastLaunchImagesResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeFastLaunchImagesCommand,
  serializeAws_ec2DescribeFastLaunchImagesCommand,
} from "../protocols/Aws_ec2";

export interface DescribeFastLaunchImagesCommandInput extends DescribeFastLaunchImagesRequest {}
export interface DescribeFastLaunchImagesCommandOutput extends DescribeFastLaunchImagesResult, __MetadataBearer {}

/**
 * <p>Describe details for Windows AMIs that are configured for faster launching.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFastLaunchImagesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFastLaunchImagesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFastLaunchImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFastLaunchImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeFastLaunchImagesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeFastLaunchImagesCommand extends $Command<
  DescribeFastLaunchImagesCommandInput,
  DescribeFastLaunchImagesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFastLaunchImagesCommandInput) {
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
  ): Handler<DescribeFastLaunchImagesCommandInput, DescribeFastLaunchImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeFastLaunchImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFastLaunchImagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFastLaunchImagesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFastLaunchImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeFastLaunchImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFastLaunchImagesCommandOutput> {
    return deserializeAws_ec2DescribeFastLaunchImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

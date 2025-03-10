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
import { DescribePublicIpv4PoolsRequest, DescribePublicIpv4PoolsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribePublicIpv4PoolsCommand,
  serializeAws_ec2DescribePublicIpv4PoolsCommand,
} from "../protocols/Aws_ec2";

export interface DescribePublicIpv4PoolsCommandInput extends DescribePublicIpv4PoolsRequest {}
export interface DescribePublicIpv4PoolsCommandOutput extends DescribePublicIpv4PoolsResult, __MetadataBearer {}

/**
 * <p>Describes the specified IPv4 address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePublicIpv4PoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePublicIpv4PoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribePublicIpv4PoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePublicIpv4PoolsCommandInput} for command's `input` shape.
 * @see {@link DescribePublicIpv4PoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribePublicIpv4PoolsCommand extends $Command<
  DescribePublicIpv4PoolsCommandInput,
  DescribePublicIpv4PoolsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePublicIpv4PoolsCommandInput) {
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
  ): Handler<DescribePublicIpv4PoolsCommandInput, DescribePublicIpv4PoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribePublicIpv4PoolsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePublicIpv4PoolsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePublicIpv4PoolsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePublicIpv4PoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribePublicIpv4PoolsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePublicIpv4PoolsCommandOutput> {
    return deserializeAws_ec2DescribePublicIpv4PoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { ListTranscriptionJobsRequest, ListTranscriptionJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTranscriptionJobsCommand,
  serializeAws_json1_1ListTranscriptionJobsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface ListTranscriptionJobsCommandInput extends ListTranscriptionJobsRequest {}
export interface ListTranscriptionJobsCommandOutput extends ListTranscriptionJobsResponse, __MetadataBearer {}

/**
 * <p>Lists transcription jobs with the specified status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListTranscriptionJobsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListTranscriptionJobsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListTranscriptionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTranscriptionJobsCommandInput} for command's `input` shape.
 * @see {@link ListTranscriptionJobsCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class ListTranscriptionJobsCommand extends $Command<
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTranscriptionJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTranscriptionJobsCommandInput, ListTranscriptionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListTranscriptionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTranscriptionJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTranscriptionJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTranscriptionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTranscriptionJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTranscriptionJobsCommandOutput> {
    return deserializeAws_json1_1ListTranscriptionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

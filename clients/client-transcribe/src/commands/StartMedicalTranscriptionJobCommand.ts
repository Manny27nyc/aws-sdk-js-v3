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

import { StartMedicalTranscriptionJobRequest, StartMedicalTranscriptionJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartMedicalTranscriptionJobCommand,
  serializeAws_json1_1StartMedicalTranscriptionJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface StartMedicalTranscriptionJobCommandInput extends StartMedicalTranscriptionJobRequest {}
export interface StartMedicalTranscriptionJobCommandOutput
  extends StartMedicalTranscriptionJobResponse,
    __MetadataBearer {}

/**
 * <p>Starts a batch job to transcribe medical speech to text.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, StartMedicalTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, StartMedicalTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new StartMedicalTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMedicalTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link StartMedicalTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class StartMedicalTranscriptionJobCommand extends $Command<
  StartMedicalTranscriptionJobCommandInput,
  StartMedicalTranscriptionJobCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartMedicalTranscriptionJobCommandInput) {
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
  ): Handler<StartMedicalTranscriptionJobCommandInput, StartMedicalTranscriptionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "StartMedicalTranscriptionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMedicalTranscriptionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartMedicalTranscriptionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMedicalTranscriptionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartMedicalTranscriptionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartMedicalTranscriptionJobCommandOutput> {
    return deserializeAws_json1_1StartMedicalTranscriptionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

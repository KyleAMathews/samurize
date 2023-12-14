import {
  ConsoleSpanExporter,
  WebTracerProvider,
  SimpleSpanProcessor,
  StackContextManager,
} from "@opentelemetry/sdk-trace-web"
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http"
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base"
// import { ZoneContextManager } from "@opentelemetry/context-zone"
import { Resource } from "@opentelemetry/resources"
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions"

const options = {}
if (!window.location.host.includes(`localhost`)) {
  options.url = `https://wss-samurize.bricolage.io/v1/traces`
}
const exporter = new OTLPTraceExporter(options)
console.log({ exporter })
const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: `samurize`,
  }),
})
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()))
provider.addSpanProcessor(new BatchSpanProcessor(exporter))
provider.register({
  contextManager: new StackContextManager(),
})

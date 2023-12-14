import api from "@opentelemetry/api"

export const tracer = api.trace.getTracer(`my-tracer`)

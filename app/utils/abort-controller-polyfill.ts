// Polyfill for AbortSignal.timeout if not available
if (!AbortSignal.timeout) {
  AbortSignal.timeout = (ms: number) => {
    const controller = new AbortController()
    setTimeout(() => controller.abort(new DOMException("TimeoutError", "TimeoutError")), ms)
    return controller.signal
  }
}

export {}

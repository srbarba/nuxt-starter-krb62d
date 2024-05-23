export function useAsyncState<InputArgs extends [], Output>(
  handler: (...args: InputArgs) => Promise<Output>
) {
  const loading = shallowRef(false);
  const data = shallowRef<Output | undefined>();
  const error = shallowRef<Error | undefined>();

  async function execute(...args: InputArgs): Promise<Output | undefined> {
    loading.value = true;
    try {
      data.value = await handler(...args);
      return data.value;
    } catch (_error) {
      error.value = _error as Error;
    } finally {
      loading.value = false;
    }
  }

  function reset() {
    loading.value = false;
    data.value = undefined;
    error.value = undefined;
  }

  return {
    loading,
    data,
    error,
    reset,
    execute,
  };
}

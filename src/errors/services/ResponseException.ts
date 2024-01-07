export class ResponseException extends Error {
  constructor(e: unknown) {
    super();
    this.logError(e);
  }

  private logError(e: unknown) {
    console.error(e);
  }
}

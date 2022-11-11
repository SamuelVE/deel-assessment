export class TestContext {
  private static _instance: TestContext;

  private map = new Map<string, any>();

  static get(key: string): any {
    return this.CONTEXT().map.get(key);
  }

  /** saves the object in the second parameter as the name of the first parameter */
  static set(key: string, value: any) {
    this.CONTEXT().map.set(key, value);
    return this.CONTEXT();
  }

  /** returns `res.body` from the previous response */
  static prevResponse(): any {
    return this.CONTEXT().map.get('response');
  }

  static getResponse(responseName: string): any {
    return this.CONTEXT().map.get(responseName);
  }

  public static CONTEXT(): TestContext {
    return this._instance || (this._instance = new this());
  }
}

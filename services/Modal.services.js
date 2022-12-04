import { Subject } from "rxjs";

class NvgModalService {
  constructor() {
    this.nvg$ = new Subject();
    this._resolveSub$ = new Subject();
    this._rejectSub$ = new Subject();
  }

  Open(component, inputObj = {}) {
    return new Promise((resolve, reject) => {
      const res = {
        component: component,
        inputObj: inputObj,
      };

      this.nvg$.next(res);
      this._resolveSub$.subscribe((res) => {
        resolve(res);
      });
      this._rejectSub$.subscribe((res) => {
        reject(res);
      });
    });
  }

  close(result = null) {
    const res = {
      component: null,
      inputObj: null,
    };
    this.nvg$.next(res);
    this._resolveSub$.next(result);
  }

  dismiss(reason = null) {
    const res = {
      component: null,
      inputObj: null,
    };
    this.nvg$.next(res);
    this._resolveSub$.next(reason);
  }
}

export default new NvgModalService();

interface IStorage {
  get: (key: string) => any;
  set: (key: string, value: string) => any;
  remove: (key: string) => any;
  clear: () => void
}

const storage: IStorage = {
  get: (key: string) => {
    if (typeof window !== "undefined") {
      return (localStorage && localStorage.getItem(key)) || null;
    }
  },
  set: (key: string, value: string) => {
    if (typeof window !== "undefined") {
      if (!value || value.length <= 0) {
        return;
      }

      if (typeof window !== "undefined") {
        if (localStorage) {
          localStorage.setItem(key, value);
        }
      }
    }
  },
  remove: key => {
    if (window.localStorage && window.localStorage[key]) {
      window.localStorage.removeItem(key);
      return true;
    }
  },
  clear: () => window.localStorage.clear()
};

export default storage;

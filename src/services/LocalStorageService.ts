class LocalStorageService {
  setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key: string) {
    const data = localStorage.getItem(key);

    if (data) return JSON.parse(data);
  }
}

export default new LocalStorageService();

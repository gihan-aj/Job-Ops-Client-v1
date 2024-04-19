export interface GetResponse<T> {
  flag: boolean;
  count?: number;
  dataList?: T[];
}

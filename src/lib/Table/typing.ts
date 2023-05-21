export interface GridColDef<T extends object> {
  field: keyof T;
  headerName: string;
}

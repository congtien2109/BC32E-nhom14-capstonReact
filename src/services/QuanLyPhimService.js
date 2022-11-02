import { baseService } from "./baseService";
import { GROUPID } from "../util/setting/config";
export class QuanlyPhimService extends baseService {
  constructor() {
    super();
  }
  layDanhSachBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };
  layDanhSachPhim = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
}
export const quanLyPhimService = new QuanlyPhimService();

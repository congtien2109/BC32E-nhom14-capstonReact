import { baseService } from "./baseService";
import { GROUPID } from "../util/setting/config";
export class QuanlyRapService extends baseService {
  constructor() {
    super();
  }
  layDanhSachHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };
  layThongTinLichChieuPhim = (maPhim) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
  };
}
export const quanLyRapService = new QuanlyRapService();

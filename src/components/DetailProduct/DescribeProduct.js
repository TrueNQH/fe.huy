import Map from "./Map";
function DescribeProduct(){

     return (
        <div className="col-lg-8">
            <div class="card-body">
                            <div class="small text-muted">January 1, 2023</div>
                            <h2 class="card-title">Bán căn hộ tòa N4A Lê Văn Lương 76m2 . 4,65 tỷ.</h2>
                            <p class="card-text">Đường Lê Văn Lương, Phường Nhân Chính, Thanh Xuân, Hà Nội</p>
                            <a class="btn btn-danger" href="#!">Liên hệ ngay</a>
                           
                        </div>
                        <div class="tab-content" id="ex1-content">
                            <table class="table border mt-3 mb-2">
                                <tr>
                                  <th class="py-2">Mức giá</th>
                                  <td class="py-2">4,65 tỷ</td>
                                </tr>
                                <tr>
                                  <th class="py-2">Diện tích</th>
                                  <td class="py-2">76 m <sup>2</sup></td>
                                </tr>
                                <tr>
                                  <th class="py-2">Phòng ngủ</th>
                                  <td class="py-2">3 PN</td>
                                </tr>
                               
                              </table>
                             
                        </div>
                        <div class="detailProduct card-body">
                            <h1>Thông tin mô tả</h1>
                              <p>
                                Thiết Kế 3 Ngủ
                                    1 Khách
                                    -1Bếp
                                    -2 Wc-
                                    1 Lô Gia
                                    -Ban Công Hướng Tây Bắc Và Tây Nam-Cửa Vào Hướng Đông Nam.
                                    Vị Trí Mặt Phố Lê Văn Lương-Giáp Ranh Cầu Giấy-Thanh Xuân-Khu Vực Tiện Ích Bạt Ngàn-Sân Chơi Rộng-Công Viên.... ,
                                    ,
                                    -Gần Vincom Trần Duy Hưng-Big C Thăng Long-Công Viên Thanh Xuân....,
                                    Sổ đỏ lâu dài cất chủ chờ chủ mới đứng tên.
                                    Lh Văn 3 nghìn căn tham khảo và xem miễn phí.
                              </p>
                              <h1>Đặc điểm bất động sản</h1>
                        </div>
                           
                        <div class="tab-content" id="ex1-content">
                           
                            <table class="table border mt-3 mb-2">
                                <tr>
                                  <th class="py-2">Mức giá</th>
                                  <td class="py-2">4,65 tỷ</td>
                                  <th class="py-2">Số toilet</th>
                                  <td class="py-2">2 phòng</td>
                                </tr>
                                <tr>
                                  <th class="py-2">Diện tích</th>
                                  <td class="py-2">76 m <sup>2</sup></td>
                                  <th class="py-2">Số phòng ngủ</th>
                                  <td class="py-2">3 phòng</td>
                                </tr>
                               
                               
                              </table>
                             
                        </div>
                        <div class="detailProduct card-body">
                            <h1>Địa chỉ</h1>
                            <Map />
                        </div>
                        <div class="detailProduct card-body">
                            <h1>Bất động sản dành cho bạn</h1>
        </div>
                        
        </div>
     )
}
export default DescribeProduct;    
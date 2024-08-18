function Profile() {
    return (
        <div class="col-lg-4">
                   
                    <div class="card mb-4">
                        <div class="card-body text-center">
                          <img id="img-avatar" src="https://chuyengianguyenngoan.com/wp-content/uploads/2021/07/doanh-nhan-thanh-dat-5-1.jpg" alt="avatar"
                            class="rounded-circle img-fluid img-avatar"/>
                          <h5 class="my-3">Sơn Sỹ</h5>
                          <p class="text-muted mb-1">Nhân viên tư vấn</p>
                          <p class="text-muted mb-4">Ngũ Hành Sơn, Đà Nẵng</p>
                          <div class="d-flex justify-content-center mb-2">
                            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-danger">Follow</button>
                            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-danger ms-1">Message</button>
                          </div>
                        </div>
                    
                   
               
                    <div class="card mb-4 text-center">
                        <div class="more">More</div>
                    </div>
                </div>
            </div>
    );
}
export default Profile;
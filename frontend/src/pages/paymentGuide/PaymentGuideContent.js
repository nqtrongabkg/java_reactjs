
import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class PaymentGuideContent extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
  <section className="section-pagetop bg-light">
    <div className="container">
      <h2 className="title-page">Hướng dẫn thanh toán</h2>
    </div> {/* container .// */}
  </section>
  <section className="section-content bg-white padding-y">
    <div className="container">
      Hướng dẫn thanh toán:
<br/>
1. Đăng nhập vào tài khoản của bạn hoặc tạo tài khoản mới nếu bạn chưa có.
<br/>
2. Chọn sản phẩm hoặc dịch vụ bạn muốn mua.
<br/>
3. Thêm sản phẩm vào giỏ hàng và kiểm tra thông tin đơn hàng.
<br/>
4. Chọn phương thức thanh toán phù hợp với bạn, như thẻ tín dụng hoặc chuyển khoản ngân hàng.
<br/>
5. Xác nhận đơn hàng và hoàn tất thanh toán.
<br/>
Sau khi hoàn tất thanh toán, bạn sẽ nhận được xác nhận đơn hàng và thông tin liên quan tới việc giao hàng hoặc sử dụng dịch vụ.
<br/>
Nếu bạn gặp bất kỳ vấn đề hoặc cần thêm thông tin, vui lòng liên hệ với chúng tôi qua trang Liên hệ.
<br/>
    </div> {/* container .//  */}
  </section>
</div>

        );
    }
}
export default PaymentGuideContent;
<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Spring boot - Login với Google Account</h2>
</p>
Thông qua hướng dẫn Spring Boot này, bạn sẽ học cách triển khai chức năng đăng nhập một lần bằng tài khoản Google cho ứng dụng web Spring Boot hiện có, sử dụng thư viện Spring OAuth2 Client - cho phép người dùng cuối đăng nhập bằng tài khoản Google của chính họ thay vì thông tin đăng nhập do ứng dụng quản lý .
Giả sử rằng bạn có một dự án Spring Boot hiện có với chức năng xác thực đã được triển khai bằng Spring Security và thông tin người dùng được lưu trữ trong cơ sở dữ liệu MySQL (Nếu không, hãy tải xuống dự án mẫu trong hướng dẫn này ). <br>
Sau đó, chúng tôi sẽ cập nhật trang đăng nhập cho phép người dùng đăng nhập bằng tài khoản Google của chính họ như sau:
<div align="center">
<img width="600px" src="https://www.codejava.net/images/articles/frameworks/springboot/oauth-google/Login_Google.png" align="center" alt="GitHub Readme Stats" />
</div>

# 1. Tạo thông tin đăng nhập Google OAuth

Trước tiên bạn hãy tạo ID ứng dụng khách Google OAuth nhằm nhận các khóa truy cập của Google đăng nhập một lần trên API (ID ứng dụng khách và bí mật ứng dụng khách). Lưu ý rằng bạn cần thêm một URI chuyển hướng được ủy quyền như sau:<br>
 <i> <b> http: // localhost: 8080 / login / oauth2 / code / google </b> </i> <br>
Trong trường hợp ứng dụng của bạn được lưu trữ với đường dẫn ngữ cảnh riêng, ví dụ / Shopme - thì hãy chỉ định URI chuyển hướng như sau:<br>
<i> <b> http: // localhost: 8080 / Shopme / login / oauth2 / code / google </b> </i> <br>

# 2. Khai báo sự phụ thuộc cho ứng dụng khách Spring Boot OAuth2

Bên cạnh phần phụ thuộc Spring Security, bạn cần thêm một phần phụ thuộc mới vào tệp dự án Maven để sử dụng Spring Boot OAuth2 Client API giúp đơn giản hóa đáng kể việc tích hợp một lần cho các ứng dụng Spring Boot. <br>
Vì vậy, hãy khai báo phụ thuộc sau: <br>
<img width="600px" src="https://experienceleaguecommunities.adobe.com/t5/adobe-experience-manager/include-3rd-party-dependencies-within-osgi-bundle/m-p/202385" align="left" alt="GitHub Readme Stats" />


# Back-end structure

📦src
 ┣ 📂apis
 ┃ ┣ 📜account.api.js
 ┃ ┣ 📜address.api.js
 ┃ ┣ 📜admin.api.js
 ┃ ┣ 📜comment.api.js
 ┃ ┣ 📜login.api.js
 ┃ ┣ 📜order.api.js
 ┃ ┣ 📜product.api.js
 ┃ ┣ 📜statistic.api.js
 ┃ ┗ 📜user.api.js
 ┣ 📂build
 ┃ ┗ 📜index.html
 ┣ 📂configs
 ┃ ┣ 📜cloudinary.config.js
 ┃ ┣ 📜cors.config.js
 ┃ ┣ 📜jwt.config.js
 ┃ ┗ 📜mail.config.js
 ┣ 📂constants
 ┃ ┗ 📜index.js
 ┣ 📂controllers
 ┃ ┣ 📜account.controller.js
 ┃ ┣ 📜address.controller.js
 ┃ ┣ 📜admin.controller.js
 ┃ ┣ 📜comment.controller.js
 ┃ ┣ 📜login.controller.js
 ┃ ┣ 📜order.controller.js
 ┃ ┣ 📜product.controller.js
 ┃ ┣ 📜statistic.controller.js
 ┃ ┗ 📜user.controller.js
 ┣ 📂helpers
 ┃ ┗ 📜index.js
 ┣ 📂middlewares
 ┃ ┗ 📜passport.middleware.js
 ┗ 📂models
 ┃ ┣ 📂account.models
 ┃ ┃ ┣ 📜account.model.js
 ┃ ┃ ┣ 📜admin.model.js
 ┃ ┃ ┣ 📜deliveryAddress.model.js
 ┃ ┃ ┣ 📜user.model.js
 ┃ ┃ ┗ 📜verify.model.js
 ┃ ┣ 📂product.models
 ┃ ┃ ┣ 📂camera.models
 ┃ ┃ ┃ ┣ 📜camera.model.js
 ┃ ┃ ┃ ┗ 📜webcam.model.js
 ┃ ┃ ┣ 📂computer.models
 ┃ ┃ ┃ ┣ 📜disk.model.js
 ┃ ┃ ┃ ┣ 📜display.model.js
 ┃ ┃ ┃ ┣ 📜laptop.model.js
 ┃ ┃ ┃ ┣ 📜mainboard.model.js
 ┃ ┃ ┃ ┗ 📜ram.model.js
 ┃ ┃ ┣ 📂mobile.models
 ┃ ┃ ┃ ┣ 📜backupCharger.model.js
 ┃ ┃ ┃ ┗ 📜mobile.model.js
 ┃ ┃ ┣ 📂peripherals.models
 ┃ ┃ ┃ ┣ 📜headphone.model.js
 ┃ ┃ ┃ ┣ 📜keyboard.model.js
 ┃ ┃ ┃ ┣ 📜monitor.model.js
 ┃ ┃ ┃ ┣ 📜mouse.model.js
 ┃ ┃ ┃ ┣ 📜router.model.js
 ┃ ┃ ┃ ┗ 📜speaker.model.js
 ┃ ┃ ┣ 📜description.model.js
 ┃ ┃ ┗ 📜product.model.js
 ┃ ┣ 📜address.model.js
 ┃ ┣ 📜comment.model.js
 ┃ ┗ 📜order.model.js

 # Front-end structure

 📦src
 ┣ 📂apis
 ┃ ┣ 📜accountApi.js
 ┃ ┣ 📜addressApi.js
 ┃ ┣ 📜adminApi.js
 ┃ ┣ 📜axiosClient.js
 ┃ ┣ 📜commentApi.js
 ┃ ┣ 📜loginApi.js
 ┃ ┣ 📜orderApi.js
 ┃ ┣ 📜productApi.js
 ┃ ┣ 📜statisticApi.js
 ┃ ┗ 📜userApi.js
 ┣ 📂assets
 ┃ ┣ 📂icon
 ┃ ┃ ┣ 📂products
 ┃ ┃ ┃ ┣ 📜camera_32px.png
 ┃ ┃ ┃ ┣ 📜display_32px.png
 ┃ ┃ ┃ ┣ 📜hdtv_32px.png
 ┃ ┃ ┃ ┣ 📜headphones_32px.png
 ┃ ┃ ┃ ┣ 📜keyboard_32px.png
 ┃ ┃ ┃ ┣ 📜laptop_32px.png
 ┃ ┃ ┃ ┣ 📜mainboard_32px.png
 ┃ ┃ ┃ ┣ 📜mobile_32px.png
 ┃ ┃ ┃ ┣ 📜mouse_32px.png
 ┃ ┃ ┃ ┣ 📜ram_32px.png
 ┃ ┃ ┃ ┣ 📜router_32px.png
 ┃ ┃ ┃ ┣ 📜speaker_32px.png
 ┃ ┃ ┃ ┗ 📜ssd_32px.png
 ┃ ┃ ┣ 📜gg-icon.png
 ┃ ┃ ┣ 📜guarantee_24px.png
 ┃ ┃ ┣ 📜ok_24px.png
 ┃ ┃ ┣ 📜return-product_24px.png
 ┃ ┃ ┣ 📜truck-2_24px.png
 ┃ ┃ ┣ 📜truck_24px.png
 ┃ ┃ ┣ 📜user_32px.png
 ┃ ┃ ┗ 📜wrench_24px.png
 ┃ ┗ 📂imgs
 ┃ ┃ ┣ 📜default-avt.png
 ┃ ┃ ┣ 📜icon-phone-footer.png
 ┃ ┃ ┣ 📜loading-img-failed.png
 ┃ ┃ ┣ 📜logo-message.png
 ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┣ 📜no-products-found.png
 ┃ ┃ ┣ 📜registered.png
 ┃ ┃ ┗ 📜sec_logo.png
 ┣ 📂commons
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜atomic.scss
 ┃ ┃ ┣ 📜container.scss
 ┃ ┃ ┣ 📜error.scss
 ┃ ┃ ┣ 📜index.scss
 ┃ ┃ ┣ 📜input.scss
 ┃ ┃ ┣ 📜layout.scss
 ┃ ┃ ┣ 📜reset.scss
 ┃ ┃ ┗ 📜text.scss
 ┃ ┗ 📂variables
 ┃ ┃ ┗ 📜color.scss
 ┣ 📂components
 ┃ ┣ 📂Cart
 ┃ ┃ ┣ 📂Overview
 ┃ ┃ ┃ ┣ 📜CartItem.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📂Payment
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂ContactIcon
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂Countdown
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂Custom
 ┃ ┃ ┗ 📂Field
 ┃ ┃ ┃ ┣ 📜CheckboxField.js
 ┃ ┃ ┃ ┣ 📜DatePickerField.js
 ┃ ┃ ┃ ┣ 📜InputField.js
 ┃ ┃ ┃ ┣ 📜RadioField.js
 ┃ ┃ ┃ ┗ 📜SelectField.js
 ┃ ┣ 📂Delay
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Filter
 ┃ ┃ ┣ 📂DetailFilter
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂MenuFilter
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂FooterView
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂HeaderView
 ┃ ┃ ┣ 📂CartView
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂Loading
 ┃ ┃ ┗ 📂Global
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂LoginGoogle
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂NotFound
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂ProductDetail
 ┃ ┃ ┣ 📂Description
 ┃ ┃ ┃ ┣ 📂Posts
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂Specification
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📂Evaluation
 ┃ ┃ ┃ ┣ 📂UserComment
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📂Overview
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📂Policy
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂RelatedProductList
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂ProductView
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂ResultSearch
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┗ 📂ScrollTo
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┣ 📂configs
 ┃ ┣ 📜configureStore.js
 ┃ ┣ 📜message.config.js
 ┃ ┗ 📜routesConfig.js
 ┣ 📂constants
 ┃ ┗ 📜index.js
 ┣ 📂containers
 ┃ ┣ 📂AccountPage
 ┃ ┃ ┣ 📂OrderList
 ┃ ┃ ┃ ┣ 📂OrderDetail
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂UpdateForm
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂UserAddressList
 ┃ ┃ ┃ ┣ 📂AddressAddForm
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂AdminPage
 ┃ ┃ ┣ 📂AdminUser
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂CustomersList
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂Dashboard
 ┃ ┃ ┃ ┣ 📂AnnualRevenue
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂MonthlyRevenue
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂TopOrders
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂Login
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂OrderList
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂ProductPage
 ┃ ┃ ┃ ┣ 📂ProductAddForm
 ┃ ┃ ┃ ┃ ┣ 📂BackupCharger
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Camera
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Disk
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Display
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Headphone
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Keyboard
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Laptop
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂MainBoard
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Mobile
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Monitor
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Mouse
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂ProductDetailModal
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Ram
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Router
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Speaker
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂Webcam
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂SeeProduct
 ┃ ┃ ┃ ┃ ┣ 📂EditProductModal
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂App
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂HomePage
 ┃ ┃ ┣ 📂AllProduct
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂DiscountList
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📂FamousBrand
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📂SaleOff
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂ForgotPassword
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂PaymentPage
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂ProductDetailPage
 ┃ ┃ ┣ 📂Evaluation
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂RelatedProduct
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂SearchFilterPage
 ┃ ┃ ┣ 📂Filter
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┣ 📂ProductCarousel
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.scss
 ┃ ┃ ┗ 📂Search
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂SignUp
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┣ 📂helpers
 ┃ ┗ 📜index.js
 ┣ 📂reducers
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜carts.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜user.js
 ┣ 📜.local.env
 ┗ 📜index.js

# Schemas

account:email,password,googleId,authType,failedLoginTimes,refreshToken
admin:userName,password,email,fullName,age,phone,fb,address
deliveryAddress:user,list:name,phone,address

 # APIs

 http://localhost:5000
 /api-docs
 /apis/admin
    /products GET
    /products/remove DELETE
    /products/add POST
    /products/update PUT
    /login POST
    /users GET
    /customer GET
    /customer/del DELETE
    /order GET
    /order POST
 /apis/address
    /province GET
    /district GET
    /street GET 
    /delivery GET
    /delivery POST
    /delivery DELETE
    /delivery PUT
 /apis/accounts
    /verify POST
    /signup POST
    /verify/forgot POST
    /reset-pw POST
 /apis/user
    / GET
    /update PUT
 /apis/login
    / POST
    /gg POST
    /auth GET
    /refresh_token POST
    /logout POST
 /apis/products
    / GET
    /list/related GET
    /all GET
    /search GET
    /filter GET
 /apis/comments
    / GET
    / POST
 /apis/orders
    /list GET
    / GET
    / POST
 /apis/statistic
    /monthly-revenue GET
    /annual-revenue GET
    /top-order GET

req.body
req.body.account
req.body
req.body.account
req.query
req.query
req.query
req.body
req.query
req.query
req.body
req.query
req.query
req.body
req.body
req.query
req.body
req.query
req.body
req.body.account
req
req.body.refresh_token
req.body.token
req.cookies.access_token
req.query
req.query
req.body
req.query
req.query
req.query
req.query
req.query
req.query
req.query
req.user
req.body

# Functions

postSendVerifyCode
postSignUp
postSendCodeForgotPW
postResetPassword
getProvince
getDistrict
getWardStreetList
getDeliveryAddressList
postAddDeliveryAddress
delDeliveryAddress
putSetDefaultDeliveryAddress
postAddProduct
getProductListByType
removeProduct
updateProduct
postLogin
getUserAdminList
getCustomerList
delCustomer
getOrderList
postUpdateOrderStatus
getCommentList
postComment
postLogin
postLoginWithGoogle
getAuth
postRefreshToken
postLogout
getOrderList
getOrderDetails
postCreateOrder
getProduct
getProductList
getAllProducts
getSearchProducts
getFilterProducts
getStaMonthlyRevenue
getStaAnnualRevenue
getTopProvinceOrder
getUser
putUpdateUser
onDelCartItem
onUpdateNumOfProd
onDelAllCarts
useState
useEffect
handleOnChange
useEffect
handleOnChange
handleOnChange
useState
useEffect
renderFilterMenu
onShowDetails
onCloseDetails
totalPrice
totalItemCarts
useSelector
useLocation
useState
onLogout
useEffect
useEffect
useDispatch
useHistory
onLoginSuccess
onLoginWithGoogle
listSpecification
showSpecification
Specification
useState
onSeeMore
useEffect
useState
useState
useSelector
useEffect
onComment
countItemInCart
useState
showCatalogs
showOverviewInfo
addCart
useRef
useState
useEffect
handleResize
paginate
showProductList
useEffect
useState
onSort
onFilterByPrice
showProducts
useState
useEffect
onScroll
configStore
renderRoutes
useState
useEffect
generateOrderStaFilter
useState
useSelector
showOrderList
useEffect
useSelector
useState
useDispatch
handleUpdate
useState
useEffect
getProvinceList
getWardStreetList
onAddAddress
useState
onDelDeliveryAdd
onSetDefaultDeliveryAdd
showAddressList
useEffect
useLocation
useSelector
useState
renderComponent
useEffect
useState
useEffect
getUserAdminList
useState
onDelCustomer
useEffect
getCustomerList
generateLabels
useState
useEffect
getStaAnnualRevenue
generateLabels
useState
useEffect
getStaMonthlyRevenue
useState
useEffect
onFinish
generateFilterOrder
useState
updateOrderStatus
UpdateOrderStatusModal
useEffect
useState
onCompressFile
onHandleSubmit
useState
onProductTypeChange
onRenderProduct
onCompressFile
onGetDetailDesc
onResetForm
onValBeforeSubmit
onSubmit
useState
onEdit
generateFilterType
useState
onDelete
onCloseEditModal
useEffect
useState
handleSelected
showTitleSelected
renderMenuItem
renderMenuComponent
onLogin
onLogout
useDispatch
useSelector
useEffect
useState
useEffect
showProducts
convertTime
useState
showBrandList
useState
onSendCode
onChangePassword
useHistory
useState
onLoginSuccess
onLogin
getUserDeliveryAdd
useDispatch
useSelector
useRef
useState
useSelector
showOrderInfo
onCheckout
useState
useEffect
useState
useEffect
useParams
useState
useEffect
addOptionToUrl
removeOptionToUrl
analysisQueryList
useState
useState
getFilterProducts
useEffect
useEffect
useState
onChecked
onCloseTag
onCloseAll
renderFilterOption
showTagList
useLocation
useState
getSearchProducts
useEffect
useEffect
useState
useRef
onSendCode
onSignUp
replaceMongoKeyword
queryString
analysisQuery
formatQueryString
reduceProductName
formatProductPrice
calStar
convertProductKey
convertWidthScreen
convertRateToText
formatDate
convertProductType
convertSeriesChipCpu
randomColor
autoSearchOptions
convertSeriesChip
convertDiskSize
convertDiskConnectionStd
convertMainboardSocket











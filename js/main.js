

// Khởi tạo bản đồ
var map = L.map('map').setView([21.0486556, 105.6152897], 15);

// Thêm lớp bản đồ từ OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Tọa độ của biểu tượng
var iconLocation = [21.048640184405983, 105.61513779001262];

// Tạo một biểu tượng
var customIcon = L.icon({
    iconUrl: '/images/location.png', // Đường dẫn đến biểu tượng của bạn
    iconSize: [32, 32], // Kích thước biểu tượng
    iconAnchor: [16, 32], // Điểm gốc của biểu tượng
});

// Tạo marker với biểu tượng tùy chỉnh
var marker = L.marker(iconLocation, { icon: customIcon }).addTo(map)
    .bindPopup('<strong>Nội thất Phạm Thức</strong><br>Địa chỉ: số nhà 14, đường Phúc lợi , Khu công nghiệp ,xã Canh Nậu , huyện Thạch Thất, Hà Nội ')
    .openPopup();

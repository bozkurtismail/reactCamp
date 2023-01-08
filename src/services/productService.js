import axios from "axios";

export default class ProductService {
    getProducts() {
        return axios.get("http://localhost:8080/api/products/getAll");
    }

    getByProductName(productName) {
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName);
    }
}

///api istekleri ve uygulama mantığı ile ilgili kodlar buraya yazılacaktır.Standart javascript kodu
///olduğu için productServicenin p harfi küçük yazıldı.
/// direk ismi ile kullanılacağı için default şeklinde tanımlandı.
/// axios.get("http://localhost:8080/api/products/getAll"); ürünü getiren servicenin adı yazıldı.
///apideki yani bir restfull servise request atmaya yarar.

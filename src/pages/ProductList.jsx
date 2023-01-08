import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function ProductList() {
  const dispatch = useDispatch(); // fonksiyon çağırmak için genellikle reflektion gibi mimarilerde çağırmak için kullanılır.

  const [products, setProducts] = useState([]); //2-destructure işlemi yapılıyor.useState([]) bir fonksiyon olup boş bir array almış.USESTATE bir nesne döndürüyor ve oda eşitliğin karşı tarafına
  //destructure edilecek.Döndürdüğü yapıda bir data(product) dönüyor,birde fonksiyon(setProducts) dönüyor.
  //products diye bir data olup sayfada kullanılacak ve default değeri boş bir array dir.Product sı değiştirmek içinde setProducts kullanılacak.
  //Elimizdeki datanın ilk başlangıç değeri boş arraydir.
  //lifecycle hook ,react in yaşam döngüsüne müdahale etmemizi sağlıyor .Yukarıda state kullanılan yapı.Products sa müdehale edildiği anda kullanıldığı yerde render edilir.

  useEffect(() => { //3-component yüklendiğinde yapılması istenen kod useffect() kodu içerisine yazılır.
    let productService = new ProductService();//endpoint classı newlendi
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));// ürün getirilirken then sonrası başarılı olursa her bir result için  setProducts doldurulur. 
  }, []); //boş array atılması gerekiyor çünkü boş olsada genede çalışır ama networka bakıldığında sürekli istek atıldığı tespit edilebilir
  //useEffect kullanımı ile bir tane nesnenin her değişikliğe uğradığını ve sayfanın render edildiği istenirse array içerisine state bilgisi yazılarak
  //takibi yapılabilinir.aksi taktide elemanlar sürekli değiştiğinde ürünler listeleniyor ama state değiştiği için sürekli tekrar çalışıyor.Sonsuz
  //bir şekilde uygulama api istekte bulunur.Hooklarla çalışıldığında [] eklenmesine dikkat edilmeli

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi!`);
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>  
          {products.map((product) => ( //javascript kodu yazılacaksa süslü parantez içinde yazılır.react mapping yapılan noktalarda key değeri ister.tüm veriler için uniq olmasını ister.
            <Table.Row key={product.id}> 
              <Table.Cell>
                <Link to={`/products/${product.productName}`}>
                  {" "}
                  {product.productName}
                </Link>
              </Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product.category.categoryName}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleAddtoCart(product)}>
                  Sepete Ekle
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
//1- bu sayfa bir data tutacak ,yani bu sayfanın bir datası var örneğin ürünler bu bu sayfanın state datası
//anlamına geliyor.Bunun için modern reacta kullanılan hook tekniği kullanılacak.



//NOT: Bir return () parantezi içerisinde iki tane div kullanılacaksa ya bir tane div yazılıp kapsayıcı olarak içerisine yerleştirilecek
//yada reactin vermiş olduğu fragment aracı kullanılacak  <> ...... </> ifadesi içerisine iki tane div kullanılabilir.yada 
//<React.fragment>....</React.fragment> fragment tanımı kullanılabilir.
//<>....</>       <React.fragment></React.fragment> ikisi aynı kullanım görevini görür.
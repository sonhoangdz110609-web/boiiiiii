import Image from 'next/image';
import styles from "../page.module.css"; // Đã sửa đường dẫn
import Link from "next/link";

const products = [
  { id: 1, name: "Nike Mercurial Vapor 15", price: "2.550.000₫", oldPrice: "3.200.000₫", percent: "-20%", remain: "Còn 5 đôi", image: "https://images.unsplash.com/photo-1674023797493-e332aa4c6f4b?w=500" },
  { id: 2, name: "Adidas Predator Elite", price: "4.200.000₫", oldPrice: "5.500.000₫", percent: "-23%", remain: "Còn 3 đôi", image: "https://images.unsplash.com/photo-1612387605830-d452ad0ab7c2?w=500" },
  { id: 3, name: "Puma Future Ultimate", price: "3.100.000₫", oldPrice: "3.800.000₫", percent: "-18%", remain: "Còn 7 đôi", image: "https://images.unsplash.com/photo-1715702725758-c43b33431938?w=500" },
  { id: 4, name: "Mizuno Morelia Neo IV", price: "5.200.000₫", oldPrice: "5.800.000₫", percent: "-10%", remain: "Hàng hiếm", image: "https://images.unsplash.com/photo-1768647417516-a58e45362709?w=500" },
  { id: 5, name: "Nike Phantom GX 2", price: "2.800.000₫", oldPrice: "3.500.000₫", percent: "-20%", remain: "Còn 10 đôi", image: "https://images.unsplash.com/photo-1612387604874-e75a5820637a?w=500" },
  { id: 6, name: "Adidas X Crazyfast", price: "1.950.000₫", oldPrice: "2.600.000₫", percent: "-25%", remain: "Bán chạy", image: "https://images.unsplash.com/photo-1684355414454-ed132f6c41cd?w=500" }
];

export default function ProductListPage() {
  return (
    <div className={styles.container} style={{padding: '50px 5%'}}>
      <h1 style={{textAlign: 'center', marginBottom: '30px'}}>TẤT CẢ SẢN PHẨM</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div style={{ position: 'relative', height: '250px' }}>
              <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.prodName}>{product.name}</h3>
              <p className={styles.price}>{product.price}</p>
              <Link href={`/product/${product.id}`} className={styles.btn}>Xem chi tiết</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { products } from "./data";

export default function Home() {
  return (
    <div className={styles.container}>

      {/* HEADER */}
      <header className={styles.header}>
        <h2 className={styles.logo}>⚽ MOCHII SHOP</h2>
        <nav>
          <ul className={styles.menu}>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/">Giày cỏ tự nhiên</Link></li>
            <li><Link href="/">Giày cỏ nhân tạo</Link></li>
            <li><Link href="/">Phụ kiện</Link></li>
          </ul>
        </nav>
      </header>

      {/* BANNER */}
      <div className={styles.banner}>
        <h1>BỨT TỐC TRÊN SÂN CỎ ⚽</h1>
        <p>BST Giày bóng đá mới nhất 2026 - Giảm đến 30%</p>
        <button className={styles.bannerBtn}>Mua ngay</button>
      </div>

      {/* PRODUCT GRID */}
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.prodName}>{product.name}</h3>
              <div className={styles.priceBox}>
                <span className={styles.price}>{product.price}</span>
                <span className={styles.old}>{product.oldPrice}</span>
                <span className={styles.percent}>{product.percent}</span>
              </div>
              <p className={styles.remain}>⚽ {product.remain}</p>
              <Link href={`/product/${product.id}`} className={styles.btn}>
                Chi tiết sản phẩm
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerCol}>
            <h3>⚽ MOCHII SHOP</h3>
            <p>Đồng hành cùng đam mê sân cỏ của bạn. Cam kết hàng chính hãng 100%.</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Hỗ trợ</h4>
            <ul>
              <li>Chính sách bảo hành</li>
              <li>Đổi trả size</li>
              <li>Hướng dẫn chọn giày</li>
              <li>Hệ thống cửa hàng</li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Liên hệ</h4>
            <p>📍 453 Đường HT13, Quận 12, TP. HCM</p>
            <p>📞 Hotline: 1900 6789</p>
            <p>📧 sonhoangdz110609@gmail.com</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © 2026 Mochii Shop | Authentic Football Boots
        </div>
      </footer>

    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./product.module.css";

const products = [
  { id: 1, name: "Nike Mercurial Vapor 15", price: "2.550.000₫", oldPrice: "3.200.000₫", percent: "-20%", remain: "Còn 5 đôi", desc: "Dòng giày tốc độ đỉnh cao của Nike. Thiết kế siêu nhẹ, đế Flyknit ôm chân hoàn hảo, giúp bạn bứt phá mọi giới hạn trên sân cỏ.", image: "https://images.unsplash.com/photo-1674023797493-e332aa4c6f4b?w=500&auto=format&fit=crop&q=60" },
  { id: 2, name: "Adidas Predator Elite", price: "4.200.000₫", oldPrice: "5.500.000₫", percent: "-23%", remain: "Còn 3 đôi", desc: "Kiểm soát bóng tuyệt đối với công nghệ Controlskin. Lựa chọn của các tiền vệ chuyên nghiệp trên toàn thế giới.", image: "https://images.unsplash.com/photo-1612387605830-d452ad0ab7c2?w=500&auto=format&fit=crop&q=60" },
  { id: 3, name: "Puma Future Ultimate", price: "3.100.000₫", oldPrice: "3.800.000₫", percent: "-18%", remain: "Còn 7 đôi", desc: "Linh hoạt và sáng tạo như chính phong cách chơi bóng của bạn. Dây buộc FUZIONFIT360 thích ứng mọi hình dạng bàn chân.", image: "https://images.unsplash.com/photo-1715702725758-c43b33431938?w=500&auto=format&fit=crop&q=60" },
  { id: 4, name: "Mizuno Morelia Neo IV", price: "5.200.000₫", oldPrice: "5.800.000₫", percent: "-10%", remain: "Hàng hiếm", desc: "Kiệt tác thủ công từ da kangaroo cao cấp. Trọng lượng siêu nhẹ, cảm giác chạm bóng tự nhiên như không đi giày.", image: "https://images.unsplash.com/photo-1768647417516-a58e45362709?w=500&auto=format&fit=crop&q=60" },
  { id: 5, name: "Nike Phantom GX 2", price: "2.800.000₫", oldPrice: "3.500.000₫", percent: "-20%", remain: "Còn 10 đôi", desc: "Chính xác tuyệt đối với Gripknit upper. Thiết kế Ghost Lace giấu dây giúp tối ưu diện tích tiếp xúc bóng.", image: "https://images.unsplash.com/photo-1612387604874-e75a5820637a?w=500&auto=format&fit=crop&q=60" },
  { id: 6, name: "Adidas X Crazyfast", price: "1.950.000₫", oldPrice: "2.600.000₫", percent: "-25%", remain: "Bán chạy", desc: "Nhanh như chớp với đế Speedframe siêu thoáng. Trọng lượng chỉ 165g — nhẹ nhất trong dòng giày thi đấu của Adidas.", image: "https://images.unsplash.com/photo-1684355414454-ed132f6c41cd?w=500&auto=format&fit=crop&q=60" },
];

export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) return notFound();

  return (
    <div className={styles.page}>

      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>⚽ MOCHII SHOP</Link>
        <Link href="/" className={styles.backBtn}>← Quay lại trang chủ</Link>
      </header>

      {/* DETAIL CONTENT */}
      <main className={styles.main}>
        <div className={styles.wrapper}>

          {/* IMAGE */}
          <div className={styles.imageBox}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* INFO */}
          <div className={styles.infoBox}>
            <span className={styles.remain}>⚽ {product.remain}</span>
            <h1 className={styles.name}>{product.name}</h1>

            <div className={styles.priceBox}>
              <span className={styles.price}>{product.price}</span>
              <span className={styles.oldPrice}>{product.oldPrice}</span>
              <span className={styles.percent}>{product.percent}</span>
            </div>

            <p className={styles.desc}>{product.desc}</p>

            <div className={styles.sizeSection}>
              <p className={styles.sizeLabel}>Chọn size:</p>
              <div className={styles.sizeList}>
                {[39, 40, 41, 42, 43, 44].map((s) => (
                  <button key={s} className={styles.sizeBtn}>{s}</button>
                ))}
              </div>
            </div>

            <div className={styles.guarantee}>
              <div className={styles.guaranteeItem}>✅ Hàng chính hãng 100%</div>
              <div className={styles.guaranteeItem}>🔄 Đổi trả trong 30 ngày</div>
              <div className={styles.guaranteeItem}>🛡️ Bảo hành 6 tháng</div>
              <div className={styles.guaranteeItem}>🚚 Giao hàng toàn quốc</div>
            </div>

            <div className={styles.actions}>
              <button className={styles.buyNow}>🛒 MUA NGAY</button>
              <button className={styles.addCart}>+ THÊM VÀO GIỎ HÀNG</button>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
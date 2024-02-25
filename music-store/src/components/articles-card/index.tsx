import { article } from "../../types/articlesType";
import styles from '../../pages/home/Home.module.css'

type ArticlesCardProps = {
  Articles: article;
}

function ArticlesCard ( { Articles: { id, article, color, instrument, qty_stock, price, imagePath } }: ArticlesCardProps) {
  return (
    <>
      <table className={styles.articlesTable}>
          <tr className={styles.tableRow}>
              <td className={styles.tableCell}>{ id }</td>
              <td className={styles.tableCell}>{ article }</td>
              <td className={styles.tableCell}>{ color }</td>
              <td className={styles.tableCell}>{ instrument }</td>
              <td className={styles.tableCell}>{ qty_stock }</td>
              <td className={styles.tableCell}>{ price }</td>
              <td className={styles.tableCell}><img className={styles.tableImage} src={ imagePath } width='100px'/></td>
          </tr>
      </table>
    </>
    
  );
}

export default ArticlesCard;
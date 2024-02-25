import articles from '../../services/articlesData';
import ArticlesCard from '../../components/articles-card';
import styles from '../home/Home.module.css';

function ArticlesList() {
  return (
    <>
      <h1 className={ styles.tableTitle }>Articles List</h1>
      <table className={styles.articlesTable}>
        <tr className={styles.tableHeader}>
            <th className={styles.tableHeaderCell}>Id</th>
            <th className={styles.tableHeaderCell}>Name</th>
            <th className={styles.tableHeaderCell}>Color</th>
            <th className={styles.tableHeaderCell}>Instrument</th>
            <th className={styles.tableHeaderCell}>Qty Stock</th>
            <th className={styles.tableHeaderCell}>Price</th>
            <th className={styles.tableHeaderCell}>Img</th>
        </tr>
        {articles.map((article) => (
          <ArticlesCard key={article.id} Articles={article} />
        ))}
      </table>
    </>
  );
}

export default ArticlesList;


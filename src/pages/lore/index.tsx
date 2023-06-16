import '../styles/globals.css';
import styles from '../components/modules/research-index.module.css'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const ResearchIndex = () => {
  // Placeholder data for the table
  const papers = [
    {
      date: "2023-01-01",
      name: "Paper 1",
      category: "Category 1",
      link: "#"
    },
    {
      date: "2023-01-02",
      name: "Paper 2",
      category: "Category 2",
      link: "#"
    },
    {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
      {
        date: "2023-01-02",
        name: "Paper 2",
        category: "Category 2",
        link: "#"
      },
    // ... add more paper data here
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.header}>Research Index</h1>
        <div className={styles.searchBar}>
          <input type="text" className={styles.searchInput} placeholder="Search" />
          <button className={styles.searchButton}>Search</button>
        </div>
        <hr className={styles.line} />
        <div className={styles.filterSortButtons}>
          <button className={styles.filterSortButton}>Filter</button>
          <button className={styles.filterSortButton}>Sort</button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name of Paper</th>
              <th>Category</th>
              <th>Read Paper</th>
            </tr>
          </thead>
          <tbody>
            {papers.map((paper, index) => (
              <tr key={index}>
                <td>{paper.date}</td>
                <td>{paper.name}</td>
                <td>{paper.category}</td>
                <td>
                  <Link href={paper.link}
                className={styles.button}>Read Paper
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        <hr />
        <h1 className={styles.title}>Join us to make a brighter future.</h1>
        <div className={styles.buttons}>
            <Link href="/companyCareers" className={styles.button}>Begin Session</Link>
        </div>
        <hr />
            <Footer />
        </div>
    );
}

export default ResearchIndex;

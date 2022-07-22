import { ReactNode } from 'react';

import styles from './table.module.css';

type TableProps = {
  trHead: Readonly<ReactNode>;
  trData: ReadonlyArray<ReactNode>;
};

export const Table = ({ trHead, trData }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.row}>{trHead}</tr>
      </thead>
      <tbody>
        {trData.map((trItem, i) => (
          <tr key={i} className={styles.row}>
            {trItem}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

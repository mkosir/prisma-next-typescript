import styles from 'common/styles/Home.module.css';
import { ServerSidePropsBatches } from 'pages/batches';

export const BatchesPage = ({ batches }: ServerSidePropsBatches) => {
  console.log('🔎 Log ~ batches', batches);

  return <div className={styles.container}>Batches</div>;
};

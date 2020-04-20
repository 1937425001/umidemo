import styles from './index.css';
import { PageHeader } from 'antd';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
    <PageHeader
      style={{
        border: '1px solid rgb(235, 237, 240)',
      }}
      onBack={() => null}
      title="军事课程表"
      subTitle="This is a subtitle"
    />
  {props.children}

    </div>
  );
}
//<div className={styles.normal}>
//  <h1 className={styles.title}>Yay! Welcome to umi!</h1>
//  {props.children}
export default BasicLayout;

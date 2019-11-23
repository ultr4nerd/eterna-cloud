import { ToastProvider } from 'react-toast-notifications';

import Layout from '../components/Layout';
import Form from '../components/Form';

const Sender = () => (
  <ToastProvider>
    <Layout>
      <Form />
    </Layout>
  </ToastProvider>
);

export default Sender;
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'JumpStart eCommerce',
  description: 'Your Fashion and Electronics Store, all in one place, at the best prices!',
  keywords: 'electronics, buy electronics, cheap electroincs',
};

export default Meta;

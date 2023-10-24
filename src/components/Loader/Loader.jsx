import { Hourglass } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.style';

export const Loading = () => {
  return (
    <LoaderStyle>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </LoaderStyle>
  );
};

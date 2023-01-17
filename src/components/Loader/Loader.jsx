import { Hearts } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Hearts
      height="80"
      width="80"
      color="#FF4500"
      ariaLabel="hearts-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px',
      }}
      wrapperClass=""
      visible={true}
    />
  );
}

import { useRouter } from 'next/router';
import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  const router = useRouter();

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img width={size} height={size} src={`${router.basePath}/assets/images/logo-2.svg`} />
      {/* <svg
        className="text-primary-500 stroke-current mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <img src={`${router.basePath}/assets/images/feature.svg`} alt={"logo"} />
      </svg> */}

      {AppConfig.company_name}
    </span>
  );
};

export { Logo };

import { SocialLinks } from '../';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="tw-text-center">
        <hr
          className="primary"
          data-aos="lengthen"
          data-aos-duration="1300"
        />
        <div className="tw-flex tw-flex-wrap tw-items-end">
          <div className="tw-flex-1" />
          <p className="tw-w-2/5">
            Powered by{' '}
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noreferrer"
            >
              React
            </a>
            ,{' '}
            <a
              href="https://vite.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Vite
            </a>{' '}
            and{' '}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
            >
              Tailwind
            </a>
            .
            <br />
            Designed and developed with <span className="heart">❤</span> by Alex Hetrick
            <br />
            <div className="tw-text-[0.9rem] tw-text-foreground-secondary tw-mt-5">© 2024 | All Rights Reserved.</div>
          </p>
          <div className="tw-flex tw-flex-1 tw-justify-end">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

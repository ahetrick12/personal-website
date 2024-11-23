import { SocialLinks } from '../';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="content has-text-centered">
        <hr
          className="primary"
          data-aos="lengthen"
          data-aos-duration="1300"
        />
        <div className="columns is-desktop is-multiline">
          <div className="column" />
          <p className="column is-two-fifths is-full-touch">
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
              href="https://bulma.io"
              target="_blank"
              rel="noreferrer"
            >
              Bulma
            </a>
            .
            <br />
            Designed and developed with <span className="heart">❤</span> by Alex Hetrick
            <br />
            <div className="copyright">© 2024 | All Rights Reserved.</div>
          </p>
          <div className="column links is-full-touch">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

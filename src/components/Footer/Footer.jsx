import SocialLinks from '../SocialLinks';

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
            Powered using{' '}
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noreferrer"
            >
              React
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
            Designed and developed by Alex Hetrick | © 2024 <br />
            All Rights Reserved.
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

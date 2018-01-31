/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a
            href={this.props.config.projectURL}
            className="nav-home"
            title="Check out our open source project, Newsroom in a Box"
          >
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Contact Info</h5>
            <p>
              <a href="mailto:info@phillypublishing.com">info@phillypublishing.com</a><br />
              <a href="tel:8566711634">(856) 671-1634</a><br />
              <a href="https://www.google.com/maps/dir/''/google+maps+pipeline+philly/">Philadelphia Publishing Company<br />
              30 South 15th Street, 15 Floor<br />
              Philadelphia, PA 19102</a>
            </p>
          </div>
          <div>
            <h5>Social Media</h5>
            <a href="https://www.facebook.com/phillypublishing/">Facebook</a>
            <a href="https://twitter.com/phillypubco">Twitter</a>
            <a href="https://www.linkedin.com/company/27233911/">LinkedIn</a>
          </div>
          <div>
            <h5>Legal</h5>
            <a href={this.docUrl('privacy.html', this.props.language)}>
              Privacy Policy
            </a>
          </div>
        </section>

        <a
          href="https://phillypublishing.com"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/ppc.png'}
            alt="Facebook Open Source"
            width="170"
            height="170"
          />
        </a>
        <section className="copyright">
          Copyright &copy; {currentYear} Philadelphia Publishing Company
        </section>
      </footer>
    );
  }
}

module.exports = Footer;

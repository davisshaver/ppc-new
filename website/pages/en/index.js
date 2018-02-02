/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function blogUrl(blog, language) {
  return siteConfig.baseUrl + 'blog/' + (language ? language + '/' : '') + blog;
}
function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('audit.html', language)}>Request your free site audit</Button>
         </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Fill any size order & make money by helping coop members do the same.',
        title: 'Cooperative Audience Extension',
      },
      {
        content: 'Maximize CPM from demand side partners while filling all direct sold ads & not annoying users.',
        title: 'Tame & Capture Indirect Revenue',
      },
      {
        content: 'New distribution channels you can tap & monetize.',
        title: 'Monetize New Channels',
      },
      {
        content: 'We support metered paywalls, membership programs, and a la carte content purchases.',
        title: 'Reader Revenue Opportunites',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'I am NOT an agency, I am a <strong>FULL-SERVICE VIRTUAL CTO</strong> committed to the long-term financial success and independence of publishers like yourself.<br /><br />I offer a full-service hosting and optimization service that puts you in control of your digital strategy like never before. I read docs, document best practices, and handle the tech so you can <strong>FOCUS on your relationships with readers and advertisers</strong><br /><br />Join now and get access to:<br /><br />- Best-in-class managed WordPress hosting<br />- Monthly performance reporting<br />- Weekly ["Junto"](https://en.wikipedia.org/wiki/Junto_(club)) hangout focused on revenue<br />- Exclusive tutorials, analysis, case studies, and other practical information<br /><br /><h3>Are you a cowboy coder?</h3><br /><br />Stop messing around with code you don\'t understand and agencies who don\'t understand you!<br /><br />You deserve 24/7 support. Your total cost of ownership based on audience size should NEVER go up. And your website should always remain accessible – and fast!<br /><br /><h3>Have other consultants left you high and dry?</h3><br /><br />Unlike other companies in this space, we are pursuing long-term subscription & service relationships with publishers, not short-term "consulting" as a pivot or a cash grab. In fact, Philly Publishing does not use a typical agency business model at all, and we are able to offer such low costs because of scale efficiencies on the backend. We have no outside funding and minimal overhead, and are looking to form long-term relationships with publishers looking to grow.<br /><br />Philly Publishing hopes to help the next thousand local publishers flourish, and we believe local ownership is critical to that vision. Even if someone could build the next Gannett, should they? We think no.<br /><br />Have other consultants left you high and dry? As a bootstrapped upstart publisher, _your livelihood is my business_.<br /><br />**My promises to partner publishers:**<br /><br />- Committed to you and this industry, and have spent my career so far proving it. [Read my bio.](/docs/about.html)<br />- You get a personal cell number to use in case of site emergency.<br />- 100% aligned incentives. Never get penalized for a traffic spike & benefit from reduced marginal costs as you scale.',
        title: 'This is an exclusive offer to Indy local and niche publishers.<br /><br />',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Competitive market analysis and technical audit. Free, no obligations, no sales call.<br /><br />[Request yours now.](/docs/audit.html#request-your-site-audit-now)',
        title: 'Request Your Site Audit Now!',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: '<br />It once seemed crazy that digital revenue would overtake print.<br /><br />**Now it seems inevitable.** <br /><br />The New York Times & Washington Post are trailblazing business models built on digital advertising & subscription revenue. The Denver Post expects [crossover](https://www.denverpost.com/2018/01/16/mac-tully-the-denver-post-resigns/) this year.<br /><br />**Are you doing everything you can to be ready?**',
        image: imgUrl('recode.png'),
        imageAlign: 'right',
        title: 'Fellow Publisher,',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Description />
          <LearnHow />
          <Features />
          <TryOut />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;

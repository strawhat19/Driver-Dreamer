import { Link } from 'expo-router';
import './SupportingPage.scss';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '../SiteFooter/SiteFooter';
import { supportingPages, type SupportingPageKey } from './SupportingPage.content';

type SupportingPageProps = {
  page: SupportingPageKey;
};

export function SupportingPage({ page }: SupportingPageProps) {
  const content = supportingPages[page];

  return (
    <div className={`supporting-page`} id={`supporting-page-${page}`}>
      <SiteHeader />
      <main className={`supporting-page-content`} id={`supporting-page-content-${page}`}>
        <p className={`supporting-page-eyebrow`} id={`supporting-page-eyebrow-${page}`}>
          {content.eyebrow}
        </p>
        <h1 className={`supporting-page-title`} id={`supporting-page-title-${page}`}>
          {content.title}
        </h1>
        <p className={`supporting-page-introduction`} id={`supporting-page-introduction-${page}`}>
          {content.introduction}
        </p>
        {content.sections.map((section, index) => (
          <section
            key={section.title}
            className={`supporting-page-section`}
            id={`supporting-page-section-${page}-${index}`}
          >
            <h2
              className={`supporting-page-section-title`}
              id={`supporting-page-section-title-${page}-${index}`}
            >
              {section.title}
            </h2>
            <p
              className={`supporting-page-section-body`}
              id={`supporting-page-section-body-${page}-${index}`}
            >
              {section.body}
            </p>
            {section.link && (
              <a
                className={`supporting-page-external-link`}
                id={`supporting-page-external-link-${page}-${index}`}
                href={section.link.href}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                {section.link.label}
              </a>
            )}
          </section>
        ))}
        <Link
          className={`supporting-page-back-link`}
          id={`supporting-page-back-link-${page}`}
          href={`/`}
        >
          {`← Back to the collection`}
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

export default SupportingPage;

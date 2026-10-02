import { Link } from 'expo-router';
import { styles } from './SupportingPage.styles';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '../SiteFooter/SiteFooter';
import { ScrollView, Text, View } from 'react-native';
import { elementProps } from '../../shared/elementProps';
import { supportingPages, type SupportingPageKey } from './SupportingPage.content';

type SupportingPageProps = {
  page: SupportingPageKey;
};

export function SupportingPage({ page }: SupportingPageProps) {
  const content = supportingPages[page];

  return (
    <ScrollView
      {...elementProps(`supporting-page`, `supporting-page-${page}`)}
      style={styles.page}
    >
      <SiteHeader />
      <View
        {...elementProps(`supporting-page-content`, `supporting-page-content-${page}`)}
        style={styles.content}
      >
        <Text
          {...elementProps(`supporting-page-eyebrow`, `supporting-page-eyebrow-${page}`)}
          style={styles.eyebrow}
        >
          {content.eyebrow}
        </Text>
        <Text
          {...elementProps(`supporting-page-title`, `supporting-page-title-${page}`)}
          style={styles.title}
        >
          {content.title}
        </Text>
        <Text
          {...elementProps(`supporting-page-introduction`, `supporting-page-introduction-${page}`)}
          style={styles.introduction}
        >
          {content.introduction}
        </Text>
        {content.sections.map((section, index) => (
          <View
            key={section.title}
            {...elementProps(`supporting-page-section`, `supporting-page-section-${page}-${index}`)}
            style={styles.section}
          >
            <Text
              {...elementProps(`supporting-page-section-title`, `supporting-page-section-title-${page}-${index}`)}
              style={styles.sectionTitle}
            >
              {section.title}
            </Text>
            <Text
              {...elementProps(`supporting-page-section-body`, `supporting-page-section-body-${page}-${index}`)}
              style={styles.body}
            >
              {section.body}
            </Text>
            {section.link && (
              <Link
                {...elementProps(`supporting-page-external-link`, `supporting-page-external-link-${page}-${index}`)}
                href={section.link.href}
                style={styles.link}
              >
                {section.link.label}
              </Link>
            )}
          </View>
        ))}
        <Link
          {...elementProps(`supporting-page-back-link`, `supporting-page-back-link-${page}`)}
          href={`/`}
          style={styles.backLink}
        >
          {`← Back to the collection`}
        </Link>
      </View>
      <SiteFooter />
    </ScrollView>
  );
}

export default SupportingPage;

import Hero from '../Hero/Hero';
import { ScrollView } from 'react-native';
import styles from './LandingPage.styles';
import SiteFooter from '../SiteFooter/SiteFooter';
import { elementProps } from '../../shared/elementProps';
import { SafeAreaView } from 'react-native-safe-area-context';
import CollectionSection from '../CollectionSection/CollectionSection';

export function LandingPage() {
    return (
        <SafeAreaView
            {...elementProps(`landing-page`)}
            style={styles.page}
            edges={[`bottom`]}
        >
            <ScrollView
                {...elementProps(`landing-page-scroll`)}
                contentContainerStyle={styles.content}
            >
                <Hero />
                <CollectionSection />
                <SiteFooter />
            </ScrollView>
        </SafeAreaView>
    );
}

export default LandingPage;

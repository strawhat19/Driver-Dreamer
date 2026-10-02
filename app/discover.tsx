import { Redirect } from 'expo-router';

export default function DiscoverPage() {
  return <Redirect href={{ pathname: `/garage`, params: { view: `discover` } }} />;
}

import { Redirect } from 'expo-router';

export default function CollectionsPage() {
  return <Redirect href={{ pathname: `/garage`, params: { view: `discover` } }} />;
}

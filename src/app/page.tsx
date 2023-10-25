import {
  About,
  Angela,
  Breath,
  Collaborate,
  Connect,
  Navbar,
} from '@/Components';

export default function Page() {
  return (
    <div className="space-y-8">
      <Navbar />
      <Angela />
      <Breath />
      <div className="p-4 md:p-8">
        <About />
        <Collaborate />
        <Connect />
      </div>
    </div>
  );
}

import { SocialLinks } from './about-section'

export default function Footer() {
  return (
    <footer className="text-stone-800 text-center space-y-4 py-10">
      <p className="font-junicode text-3xl">Thanks for scrolling this far.</p>
      <p className="text-sm">If you made it here, we probably have something to talk about. <br/>Whether it's redesigning a product, discussing UX, or just sharing ideas,
      my inbox is always open.</p>
      <SocialLinks />
    </footer>
  );
}

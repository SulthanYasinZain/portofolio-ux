import { SocialLinks } from './about-section'

export default function Footer({title,description} : {title: string; description: string}) {
  return (
    <footer className="text-stone-800 text-center space-y-4 py-10">
      <p className="font-junicode text-3xl">{title}</p>
      <p className="text-sm">{description}</p>
      <SocialLinks />
    </footer>
  );
}

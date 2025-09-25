import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t py-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          © {currentYear} Jeevaa M M. Made with 
          <Heart className="h-4 w-4 text-red-500 fill-current" />
          using React & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
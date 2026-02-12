interface IconProps {
  type: string;
  size: string;
  position: string;
  className?: string;
}

const Icons = ({ type, size, position, className }: IconProps) => {
  const iconMap = {
    androidstudio: require('../public/icons/androidstudio.svg').default,
    appwrite: require('../public/icons/appwrite.svg').default,
    canva: require('../public/icons/canva.svg').default,
    csharp: require('../public/icons/csharp.svg').default,
    css: require('../public/icons/css.svg').default,
    dart: require('../public/icons/dart.svg').default,
    django: require('../public/icons/django.svg').default,
    docker: require('../public/icons/docker.svg').default,
    facebook: require('../public/icons/facebook.svg').default,
    figma: require('../public/icons/figma.svg').default,
    firebase: require('../public/icons/firebase.svg').default,
    flutter: require('../public/icons/flutter.svg').default,
    gallery: require('../public/icons/gallery.svg').default,
    git: require('../public/icons/git.svg').default,
    github: require('../public/icons/github.svg').default,
    html: require('../public/icons/html.svg').default,
    instagram: require('../public/icons/instagram.svg').default,
    javascript: require('../public/icons/javascript.svg').default,
    linkedin: require('../public/icons/linkedin.svg').default,
    mysql: require('../public/icons/mysql.svg').default,
    nextjs: require('../public/icons/nextjs.svg').default,
    nodejs: require('../public/icons/nodejs.svg').default,
    odoo: require('../public/icons/odoo.svg').default,
    photoshop: require('../public/icons/photoshop.svg').default,
    postgresql: require('../public/icons/postgresql.svg').default,
    postman: require('../public/icons/postman.svg').default,
    python: require('../public/icons/python.svg').default,
    react: require('../public/icons/react.svg').default,
    sass: require('../public/icons/sass.svg').default,
    sqlite: require('../public/icons/sqlite.svg').default,
    supabase: require('../public/icons/supabase.svg').default,
    tailwindcss: require('../public/icons/tailwindcss.svg').default,
    typescript: require('../public/icons/typescript.svg').default,
    unity: require('../public/icons/unity.svg').default,
    vscode: require('../public/icons/vscode.svg').default,
    vercel: require('../public/icons/vercel.svg').default,
    wordpress: require('../public/icons/wordpress.svg').default,
  };

  const badgeColorMap = {
    androidstudio: 'bg-customGreen',
    appwrite: 'bg-customPink',
    canva: 'bg-customBlue-light',
    csharp: 'bg-customViolet',
    css: 'bg-customBlue-dark',
    dart: 'bg-customBlue-light',
    django: 'bg-customGreen',
    docker: 'bg-customBlue-light',
    facebook: 'bg-customBlue',
    figma: 'bg-customOrange',
    firebase: 'bg-customYellow',
    flutter: 'bg-customBlue-light',
    git: 'bg-customOrange',
    github: 'bg-gray-600',
    html: 'bg-customOrange',
    instagram: 'bg-customPink',
    javascript: 'bg-customYellow',
    linkedin: 'bg-customBlue',
    mysql: 'bg-customBlue-dark',
    nextjs: 'bg-customGreen',
    nodejs: 'bg-customGreen',
    odoo: 'bg-customViolet',
    photoshop: 'bg-customBlue-light',
    postgresql: 'bg-customBlue-light',
    postman: 'bg-customOrange',
    python: 'bg-customBlue-dark',
    react: 'bg-customBlue-light',
    sass: 'bg-customPink',
    sqlite: 'bg-customBlue',
    supabase: 'bg-customGreen',
    tailwindcss: 'bg-customBlue-light',
    typescript: 'bg-customBlue',
    unity: 'bg-gray-600',
    vscode: 'bg-customBlue-light',
    vercel: 'bg-customGreen',
    wordpress: 'bg-gray-600',
  };

  const Icon = iconMap[type];
  const badgeColor = badgeColorMap[type] || 'bg-neutral';

  return (
    <div className={`group/icon flex flex-col items-center ${className}`}>
      <Icon
        className={`duration-100 ease-in group-hover/icon:-translate-y-2 group-hover/icon:scale-110`}
        style={{ width: size, height: size }}
      />
      <span
        className={`absolute ${position} rounded-lg px-1.5 py-0.5 text-xs font-bold whitespace-nowrap opacity-0 group-hover/icon:text-white group-hover/icon:opacity-100 ${badgeColor}`}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    </div>
  );
};

export default Icons;

// for Career translate-y-6
// for TechStacks translate-y-10

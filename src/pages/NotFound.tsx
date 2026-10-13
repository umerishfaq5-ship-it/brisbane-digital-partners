import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const popular = [
  { label: "SEO Brisbane", to: "/locations/brisbane-seo/" },
  { label: "Local SEO", to: "/services/local-seo/" },
  { label: "Google Ads Management", to: "/services/ppc-google-ads/" },
  { label: "Web Development", to: "/services/web-development/" },
  { label: "SEO Packages", to: "/services/seo-packages/" },
  { label: "Blog", to: "/blog/" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <SEO
        title="Page Not Found"
        description="The page you were looking for doesn't exist. Browse Next Tab Agency's SEO, Google Ads and web development services."
        noIndex
      />
      <div className="text-center max-w-xl">
        <h1 className="mb-4 text-4xl font-bold">404 – Page not found</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          Sorry, this page doesn't exist or has moved. Try one of our most popular pages instead:
        </p>
        <ul className="mb-6 flex flex-wrap justify-center gap-3">
          {popular.map((p) => (
            <li key={p.to}>
              <Link to={p.to} className="text-primary underline hover:text-primary/90">{p.label}</Link>
            </li>
          ))}
        </ul>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

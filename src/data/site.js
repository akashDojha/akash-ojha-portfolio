export const site = {
  name: "Akash Ojha",
  title: "Full-Stack WordPress Developer",
  headline:
    "Backend & Frontend · Custom Plugins & Themes · WooCommerce · PHP · APIs",
  positioning:
    "I'm a Full-Stack WordPress Developer with 6+ years of experience building custom WordPress websites, WooCommerce platforms, themes, plugins, APIs and complex business solutions.",
  experienceYears: "6+",
  location: "Ahmedabad, Gujarat, India",
  email: "ojhaakash1996@gmail.com",
  phone: "+91 8673877639",
  linkedin: "https://www.linkedin.com/in/akash-ojha-6a825b129/",
  github: "https://github.com/akashDojha",
  resumePath: "/resume.pdf",
  siteUrl: "https://[ADD-SITE-URL]",
};

export const navLinks = [
  { href: "#about",      label: "About"      },
  { href: "#expertise",  label: "Expertise"  },
  { href: "#projects",   label: "Work"       },
  { href: "#services",   label: "Services"   },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact"    },
];

/**
 * Returns true if the value is a real URL (not a placeholder like [ADD ...]).
 */
export const hasRealUrl = (value) =>
  Boolean(value) && !value.includes("[ADD");

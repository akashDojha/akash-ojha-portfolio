import { themePluginItems } from "../data/content";

const codeA = `<?php
/**
 * Register custom post type.
 * Generic pattern — not client code.
 */
function ao_register_cpt() {
  register_post_type( 'solution', [
    'public'       => true,
    'show_in_rest' => true,
    'supports'     => [
      'title', 'editor', 'thumbnail'
    ],
    'labels' => [
      'name'          => 'Solutions',
      'singular_name' => 'Solution',
    ],
  ] );
}
add_action( 'init', 'ao_register_cpt' );`;

const codeB = `<?php
// WooCommerce hook example
add_filter(
  'woocommerce_checkout_fields',
  'ao_custom_checkout_fields'
);

function ao_custom_checkout_fields( $fields ) {
  // add / modify fields
  return $fields;
}

// REST endpoint
register_rest_route( 'ao/v1', '/items',
  [
    'methods'  => 'GET',
    'callback' => 'ao_get_items',
    'permission_callback' => '__return_true',
  ]
);`;

export default function ThemesPlugins() {
  return (
    <section className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-kicker">03 — Custom WordPress Themes &amp; Plugins</p>
        <h2 className="display mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
          Not just installing WordPress — I build custom WordPress solutions.
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted dark:text-dark-muted">
          I develop custom WordPress themes and plugins based on business requirements — custom
          functionality, integrations, WooCommerce features and API-driven solutions that off-the-shelf
          plugins can't deliver.
        </p>

        {/* Main grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Code panels */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-md border border-line shadow-md dark:border-dark-line">
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1f18] px-3.5 py-2">
                <span className="h-2 w-2 rounded-full bg-[#c46b2d]" />
                <span className="h-2 w-2 rounded-full bg-[#c4b35a]" />
                <span className="h-2 w-2 rounded-full bg-[#2f6b4f]" />
                <span className="ml-2 font-mono text-[9px] text-white/40">custom-post-type.php</span>
              </div>
              <pre className="code-panel overflow-x-auto bg-[#0f1310] p-4 text-[#b8cfb9]">
                <code>{codeA}</code>
              </pre>
            </div>
            <div className="overflow-hidden rounded-md border border-line shadow-md dark:border-dark-line">
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1f18] px-3.5 py-2">
                <span className="h-2 w-2 rounded-full bg-[#c46b2d]" />
                <span className="h-2 w-2 rounded-full bg-[#c4b35a]" />
                <span className="h-2 w-2 rounded-full bg-[#2f6b4f]" />
                <span className="ml-2 font-mono text-[9px] text-white/40">woo-hooks.php</span>
              </div>
              <pre className="code-panel overflow-x-auto bg-[#0f1310] p-4 text-[#b8cfb9]">
                <code>{codeB}</code>
              </pre>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
              Generic WordPress patterns — not client source code
            </p>
          </div>

          {/* Capability cards */}
          <div className="grid content-start gap-3 sm:grid-cols-2">
            {themePluginItems.map((item) => (
              <article
                key={item.title}
                className="card-hover rounded-md border border-line bg-white p-4 dark:border-dark-line dark:bg-dark-card"
              >
                <h3 className="text-[13px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted dark:text-dark-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

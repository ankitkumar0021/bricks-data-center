import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Mission', href: '/mission' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' }
    ],
    services: [
      { name: 'Web Hosting', href: '/web-hosting' },
      { name: 'Cloud Servers', href: '/cloud' },
      { name: 'VPS', href: '/vps' },
      { name: 'GPU Cloud', href: '/gpu-cloud' }
    ],
    support: [
      { name: 'Knowledge Base', href: '/support' },
      { name: '24/7 Live Chat', href: '/chat' },
      { name: 'Ticket System', href: '/tickets' },
      { name: 'SLA Guarantee', href: '/sla' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Acceptable Use', href: '/aup' },
      { name: 'GDPR Compliance', href: '/gdpr' }
    ]
  };

  const trustBadges = [
    { name: '99.9% Uptime', icon: '🔄' },
    { name: 'DDoS Protection', icon: '🛡️' },
    { name: 'SSL Security', icon: '🔒' }
  ];

  const paymentMethods = ['Visa', 'Mastercard', 'PayPal', 'Bitcoin'];
  const socialMedia = ['Twitter', 'LinkedIn', 'Facebook'];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-500 w-10 h-10 rounded-md flex items-center justify-center">
                <span className="font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-white">
                <span className="text-blue-400">Bricks</span> Data Center
              </span>
            </div>
            <p className="mb-6 max-w-md">
              We are committed to delivering exceptional web hosting solutions tailored to the unique requirements of our clients. 
              Our comprehensive range of services includes GPU cloud, cloud servers, VPS, and web hosting server.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
                  <span className="mr-2">{badge.icon}</span>
                  <span>{badge.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index}>
              <h3 className="text-white text-lg font-semibold mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="hover:text-blue-400 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-xl font-semibold mb-4">
              Stay Updated with Bricks Data Center
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-md"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition whitespace-nowrap">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Bricks Data Center. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialMedia.map((platform, index) => (
                <a 
                  key={index} 
                  href={`https://${platform.toLowerCase()}.com/bricks-datacenter`} 
                  className="hover:text-blue-400 transition"
                  aria-label={platform}
                >
                  {platform}
                </a>
              ))}
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              {paymentMethods.map((method, index) => (
                <span key={index} className="bg-gray-800 px-2 py-1 rounded text-xs">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
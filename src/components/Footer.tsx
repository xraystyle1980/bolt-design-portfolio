export function Footer() {
  return (
    <footer className="bg-black text-white py-24 px-8 md:px-16 lg:px-24">
      <div className="mb-12">
        <p className="text-neutral-400 mb-4">showcasy.</p>
        <p className="text-sm">A stunning digital designer portfolio website template for you.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {['Home v1', 'About v1', 'Work v1', 'Insights'].map((item, index) => (
          <div key={index}>
            <h3 className="font-bold mb-4">{item}</h3>
            <ul className="space-y-2">
              {[1, 2, 3].map((subItem) => (
                <li key={subItem} className="text-neutral-400 text-sm">
                  {item} {subItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-12 border-t border-neutral-800">
        <div className="flex gap-4">
          {['Instagram', 'Behance', 'Twitter', 'Dribbble'].map((social) => (
            <a key={social} href="#" className="text-sm text-neutral-400 hover:text-white">
              {social}
            </a>
          ))}
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Drop a message at me"
            className="bg-transparent border-b border-neutral-800 py-2 pr-8 text-sm focus:outline-none focus:border-white"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2">→</button>
        </div>
      </div>
    </footer>
  );
}
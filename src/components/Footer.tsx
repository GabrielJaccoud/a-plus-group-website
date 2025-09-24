import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="text-2xl font-bold text-white">
              A+ Group
            </div>
            <p className="text-gray-300 text-base">
              Construindo o futuro com excelência, inovação e sustentabilidade.
            </p>
            <div className="flex space-x-6">
              {/* Social media icons can be added here */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Empresa
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/" className="text-base text-gray-300 hover:text-white">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="/projetos" className="text-base text-gray-300 hover:text-white">
                      Projetos
                    </Link>
                  </li>
                  <li>
                    <Link href="/investidores" className="text-base text-gray-300 hover:text-white">
                      Investidores
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-base text-gray-300 hover:text-white">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Contato
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <span className="text-base text-gray-300">
                      contato@aplusgroup.com.br
                    </span>
                  </li>
                  <li>
                    <span className="text-base text-gray-300">
                      (11) 9999-9999
                    </span>
                  </li>
                  <li>
                    <span className="text-base text-gray-300">
                      São Paulo, SP
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 A+ Group. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}


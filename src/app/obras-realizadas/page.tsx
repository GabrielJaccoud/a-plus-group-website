'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './obras.module.css';

const obras = [
  {
    id: 1,
    title: 'Residencial Jardim das Flores',
    location: 'Macaé, RJ',
    year: '2023',
    description: 'Condomínio residencial com 120 unidades, infraestrutura completa e áreas de lazer.',
    image: '/images/obra_1.jpg',
    category: 'Residencial'
  },
  {
    id: 2,
    title: 'Edifício Empresarial Centro',
    location: 'Rio de Janeiro, RJ',
    year: '2022',
    description: 'Edifício comercial de alto padrão com 15 andares e tecnologia sustentável.',
    image: '/images/obra_2.jpg',
    category: 'Comercial'
  },
  {
    id: 3,
    title: 'Condomínio Parque das Águas',
    location: 'Cabo Frio, RJ',
    year: '2023',
    description: 'Empreendimento de luxo com vista para o mar e acabamento premium.',
    image: '/images/obras_realizadas_1.jpg',
    category: 'Residencial'
  },
  {
    id: 4,
    title: 'Shopping Center Norte',
    location: 'Macaé, RJ',
    year: '2021',
    description: 'Centro comercial moderno com mais de 100 lojas e cinema multiplex.',
    image: '/images/obra_3.jpg',
    category: 'Comercial'
  },
  {
    id: 5,
    title: 'Residencial Vista Verde',
    location: 'Niterói, RJ',
    year: '2022',
    description: 'Condomínio sustentável com captação de água da chuva e energia solar.',
    image: '/images/obra_4.jpg',
    category: 'Residencial'
  },
  {
    id: 6,
    title: 'Hospital Regional Sul',
    location: 'Rio de Janeiro, RJ',
    year: '2020',
    description: 'Complexo hospitalar com 200 leitos e equipamentos de última geração.',
    image: '/images/obra_5.jpg',
    category: 'Institucional'
  }
];

export default function ObrasRealizadas() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroBadge}>
              <div className={styles.heroBadgeDot} />
              PORTFÓLIO
            </div>
            
            <h1 className={styles.heroTitle}>
              Obras Realizadas
            </h1>
            
            <p className={styles.heroDescription}>
              Conheça alguns dos projetos que transformamos em realidade. Cada obra representa nosso compromisso com a excelência, inovação e satisfação dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>Projetos Concluídos</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Anos de Experiência</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>5000+</div>
              <div className={styles.statLabel}>Famílias Atendidas</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Obras Grid Section */}
      <section className={styles.obras}>
        <div className={styles.container}>
          <div className={styles.obrasGrid}>
            {obras.map((obra) => (
              <div key={obra.id} className={styles.obraCard}>
                <div className={styles.obraImage}>
                  <Image 
                    src={obra.image} 
                    alt={obra.title}
                    width={600}
                    height={400}
                    className={styles.obraImg}
                  />
                  <div className={styles.obraCategory}>{obra.category}</div>
                </div>
                <div className={styles.obraContent}>
                  <h3 className={styles.obraTitle}>{obra.title}</h3>
                  <div className={styles.obraInfo}>
                    <span className={styles.obraLocation}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {obra.location}
                    </span>
                    <span className={styles.obraYear}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {obra.year}
                    </span>
                  </div>
                  <p className={styles.obraDescription}>{obra.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Quer Fazer Parte da Nossa História?
            </h2>
            <p className={styles.ctaDescription}>
              Entre em contato conosco e descubra como podemos transformar seu projeto em realidade.
            </p>
            <Link href="/contato" className={styles.ctaButton}>
              Solicite um Orçamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


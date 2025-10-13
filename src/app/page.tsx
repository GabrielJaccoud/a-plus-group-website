'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroLeft}>
                <div className={styles.heroBadge}>
                  <div className={styles.heroBadgeDot} />
                  Inovação em Engenharia
                </div>
                
                <h1 className={styles.heroTitle}>
                  Mais do que casas, <span className={styles.heroTitleHighlight}>histórias de vida</span>
                </h1>
                
                <p className={styles.heroDescription}>
                  A A+ Engenharia integra excelência em construção, neuroarquitetura e tecnologia financeira para criar empreendimentos com propósito e valorização exponencial. Transformamos sonhos em realidade e investimentos em valor.
                </p>
                
                <div className={styles.heroButtons}>
                  <Link href="/projetos" className={styles.heroBtnPrimary}>
                    <span>Conheça Nossos Projetos</span>
                    <span className={styles.heroArrow}>→</span>
                  </Link>
                  
                  <Link href="/contato" className={styles.heroBtnSecondary}>
                    Fale Conosco
                  </Link>
                </div>
                
                <div className={styles.heroFeatures}>
                  <div className={styles.heroFeature}>
                    <div className={`${styles.heroFeatureDot} ${styles.dotGreen}`} />
                    <span>Projetos Certificados</span>
                  </div>
                  <div className={styles.heroFeature}>
                    <div className={`${styles.heroFeatureDot} ${styles.dotOrange}`} />
                    <span>Tecnologia Avançada</span>
                  </div>
                  <div className={styles.heroFeature}>
                    <div className={`${styles.heroFeatureDot} ${styles.dotPurple}`} />
                    <span>Equipe Especializada</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.heroRight}>
                <div className={styles.statCard}>
                  <div className={styles.statCardAccent} />
                  <div className={styles.statNumber}>200+</div>
                  <div className={styles.statLabel}>Projetos Executados</div>
                </div>
                
                <div className={styles.statsGrid}>
                  <div className={`${styles.statCardSmall} ${styles.statCardGreen}`}>
                    <div className={styles.statNumberSmall}>25+</div>
                    <div className={styles.statLabelSmall}>Anos de Experiência</div>
                  </div>
                  
                  <div className={`${styles.statCardSmall} ${styles.statCardOrange}`}>
                    <div className={styles.statNumberSmall}>100%</div>
                    <div className={styles.statLabelSmall}>Projetos Aprovados</div>
                  </div>
                </div>
                
                <div className={styles.certBadge}>
                  <div className={styles.certIcon}>A+</div>
                  <div>
                    <div className={styles.certTitle}>CREA Certificado</div>
                    <div className={styles.certSubtitle}>Engenharia Registrada</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais Section */}
      <section className={styles.diferenciais}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <div className={styles.sectionBadgeDot} />
              NOSSA ESSÊNCIA
            </div>
            
            <h2 className={styles.sectionTitle}>
              A+ Engenharia: Inovação que Constrói o Amanhã
            </h2>
            
            <p className={styles.sectionDescription}>
              Mais que uma construtora, somos um ecossistema de soluções integradas que redefine o mercado imobiliário.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardAccent} />
              <div className={styles.cardImage}>
                <Image 
                  src="/images/obras_realizadas_1.jpg" 
                  alt="Construtora + Fintech" 
                  width={400}
                  height={300}
                  className={styles.cardImg}
                />
              </div>
              <h3 className={styles.cardTitle}>
                Construtora + Fintech: A Sinergia Perfeita
              </h3>
              <p className={styles.cardDescription}>
                Integramos a solidez da engenharia com a agilidade das soluções de crédito digitais, otimizando cada etapa do seu investimento e tornando o sonho da casa própria uma realidade acessível.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardAccent} />
              <div className={styles.cardImage}>
                <Image 
                  src="/images/investidores_1.jpg" 
                  alt="Tokenização de Ativos" 
                  width={400}
                  height={300}
                  className={styles.cardImg}
                />
              </div>
              <h3 className={styles.cardTitle}>
                Tokenização de Ativos Imobiliários
              </h3>
              <p className={styles.cardDescription}>
                Democratizamos o acesso ao mercado imobiliário através da tokenização, permitindo investimentos fracionados com liquidez, transparência e retornos atrativos para todos os perfis de investidores.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardAccent} />
              <div className={styles.cardImage}>
                <Image 
                  src="/images/ambiente_interno_2.jpg" 
                  alt="Neuroarquitetura" 
                  width={400}
                  height={300}
                  className={styles.cardImg}
                />
              </div>
              <h3 className={styles.cardTitle}>
                Neuroarquitetura: Espaços que Transformam Vidas
              </h3>
              <p className={styles.cardDescription}>
                Aplicamos princípios de neuroarquitetura para criar ambientes que promovem bem-estar, produtividade e felicidade. Cada projeto é pensado para impactar positivamente a vida de quem o habita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className={styles.comoFunciona}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <div className={styles.sectionBadgeDot} />
              PROCESSO
            </div>
            
            <h2 className={styles.sectionTitle}>
              Como Transformamos Seu Sonho em Realidade
            </h2>
            
            <p className={styles.sectionDescription}>
              Um processo transparente e eficiente, do planejamento à entrega das chaves.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3 className={styles.stepTitle}>Consulta Inicial</h3>
              <p className={styles.stepDescription}>
                Entendemos suas necessidades, sonhos e objetivos para criar uma solução personalizada.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.stepTitle}>Planejamento Estratégico</h3>
              <p className={styles.stepDescription}>
                Desenvolvemos um projeto detalhado com cronograma, orçamento e soluções de crédito adequadas.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.stepTitle}>Execução com Excelência</h3>
              <p className={styles.stepDescription}>
                Nossa equipe especializada executa o projeto com qualidade, segurança e dentro do prazo.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <h3 className={styles.stepTitle}>Entrega e Pós-Venda</h3>
              <p className={styles.stepDescription}>
                Entregamos seu imóvel pronto e oferecemos suporte contínuo para sua total satisfação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className={styles.depoimentos}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <div className={styles.sectionBadgeDot} />
              DEPOIMENTOS
            </div>
            
            <h2 className={styles.sectionTitle}>
              O Que Nossos Clientes Dizem
            </h2>
            
            <p className={styles.sectionDescription}>
              Histórias reais de pessoas que realizaram seus sonhos com a A+ Engenharia.
            </p>
          </div>

          <div className={styles.depoimentosGrid}>
            <div className={styles.depoimento}>
              <div className={styles.depoimentoStars}>★★★★★</div>
              <p className={styles.depoimentoText}>
                "A A+ Engenharia não apenas construiu minha casa, mas transformou minha vida. O atendimento foi excepcional e o resultado superou todas as minhas expectativas."
              </p>
              <div className={styles.depoimentoAuthor}>
                <div className={styles.depoimentoAvatar}>MF</div>
                <div>
                  <div className={styles.depoimentoName}>Maria Fernanda</div>
                  <div className={styles.depoimentoRole}>Cliente Residencial</div>
                </div>
              </div>
            </div>

            <div className={styles.depoimento}>
              <div className={styles.depoimentoStars}>★★★★★</div>
              <p className={styles.depoimentoText}>
                "Como investidor, encontrei na A+ a parceira ideal. A tokenização de ativos me permitiu diversificar meu portfólio com segurança e transparência total."
              </p>
              <div className={styles.depoimentoAuthor}>
                <div className={styles.depoimentoAvatar}>RS</div>
                <div>
                  <div className={styles.depoimentoName}>Roberto Silva</div>
                  <div className={styles.depoimentoRole}>Investidor</div>
                </div>
              </div>
            </div>

            <div className={styles.depoimento}>
              <div className={styles.depoimentoStars}>★★★★★</div>
              <p className={styles.depoimentoText}>
                "A solução de crédito da A+ foi fundamental para realizar meu sonho. Processo rápido, transparente e com condições justas. Recomendo!"
              </p>
              <div className={styles.depoimentoAuthor}>
                <div className={styles.depoimentoAvatar}>AC</div>
                <div>
                  <div className={styles.depoimentoName}>Ana Carolina</div>
                  <div className={styles.depoimentoRole}>Cliente Financeiro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Pronto para Transformar Seu Sonho em Realidade?
            </h2>
            <p className={styles.ctaDescription}>
              Entre em contato conosco e descubra como a A+ Engenharia pode ajudá-lo a construir o futuro que você sempre imaginou.
            </p>
            <Link href="/contato" className={styles.ctaButton}>
              Fale com Nossos Especialistas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


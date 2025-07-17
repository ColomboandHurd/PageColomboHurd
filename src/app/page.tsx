// Comentario de prueba para commit y push
import Navbar from '@/components/Navbar';
import ImmigrationBlocks from '@/components/ImmigrationBlocks';
import ConsultaGratis from '@/components/ConsultaGratis';
import FooterContacto from '@/components/FooterContacto';
import AbogadosBanner from '@/components/AbogadosBanner';

export default function Home() {
  return (
    <main className="pt-0 md:pt-0">
      <Navbar />
      <ConsultaGratis />
      <div className="mb-20 md:mb-28" />
      <AbogadosBanner />
      <div style={{ height: '30px' }} />
      <ImmigrationBlocks />
      <div className="mt-16 md:mt-20" />
      <FooterContacto />
    </main>
  );
}

import HeroSection from '@/components/homeComponents/HeroSection';
import SchoolsSection from '@/components/homeComponents/SchoolsSection';
import CustomSection from '@/components/homeComponents/CustomSection';
import WhyChooseSection from '@/components/homeComponents/WhyUs';
import LocationsSection from '@/components/homeComponents/LocationSection';
import FinalCTA from '@/components/homeComponents/FinalCTA';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full screen with split layout */}
      <HeroSection />

      {/* School Uniforms Section - Featured uniform cards */}
      <SchoolsSection />

      {/* Custom Products Section - Category cards with animations */}
      <CustomSection />

      {/* Why Choose Us Section - Features and stats */}
      <WhyChooseSection />

      {/* Locations Section - 3 shop locations */}
      <LocationsSection />
      
    </main>
  );
}
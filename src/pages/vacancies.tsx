import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Vacancies from "@/components/Vacancies";

export default function VacanciesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Vacancies />
      </main>
      <Footer />
    </div>
  );
}

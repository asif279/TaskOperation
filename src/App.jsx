import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import TaskBoard from "./components/Task/TaskBoard.jsx/TaskBoard";

const TaskOperation = () => {
  return (
    <section className="bg-[#191D26] font-[Inter] text-white">
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </section>
  );
};

export default TaskOperation;

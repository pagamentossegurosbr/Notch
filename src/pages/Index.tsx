import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Plans } from "@/components/Plans";
import { PaymentInfo } from "@/components/PaymentInfo";
import { Testimonials } from "@/components/Testimonials";
import { Social } from "@/components/Social";
import { About } from "@/components/About";
import { KpiChart } from "@/components/KpiChart";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/ui/section-divider";
import { motion } from "framer-motion";
import { Contrast } from "@/components/Contrast";

const Index = () => {
  return (
    <div className="min-h-screen select-none">
      <Navbar />
      <Hero />
      <SectionDivider className="my-12" />
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <Projects />
      </motion.div>
      <SectionDivider className="my-12" />
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <Contrast />
      </motion.div>
      <SectionDivider className="my-12" />
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <Plans />
      </motion.div>
      <SectionDivider className="my-12" />
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <PaymentInfo />
      </motion.div>
      <SectionDivider className="my-12" />
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <Testimonials />
      </motion.div>
      <SectionDivider className="my-12" />
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <Social />
      </motion.div>
      <SectionDivider className="my-12" />
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <About />
      </motion.div>
      <SectionDivider className="my-12" />
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <KpiChart />
      </motion.div>
      <SectionDivider className="my-12" />
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <FAQ />
      </motion.div>
      <SectionDivider className="my-12" />
      <Footer />
    </div>
  );
};

export default Index;

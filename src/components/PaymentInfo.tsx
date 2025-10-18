import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import pixImage from "@/assets/img-pix-card.png";

export const PaymentInfo = () => {
  return (
    <section id="payment-info" className="container py-8 md:py-12">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center">
        <h2 className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-4xl">
          Pagamento e Garantia
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-base sm:leading-6">
          Oferecemos as melhores condições para você.
        </p>
      </div>

      <div className="mx-auto mt-8 grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={pixImage}
            alt="Cartão PIX"
            loading="lazy"
            decoding="async"
            className="w-full max-w-xs h-auto opacity-90"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="max-w-xs opacity-90">
            <CardHeader>
              <CardTitle>Garantia de 60 dias</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Sua segurança em primeiro lugar. Garantimos a entrega e o
                funcionamento do seu projeto.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-xs opacity-90">
            <CardHeader>
              <CardTitle>Condição de Pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                50% de entrada e 50% na entrega do projeto.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
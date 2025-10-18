import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const chartData = [
  { month: "Jan", traffic: 1000 },
  { month: "Fev", traffic: 1200 },
  { month: "Mar", traffic: 1800 },
  { month: "Abr", traffic: 2500 },
  { month: "Mai", traffic: 3200 },
  { month: "Jun", traffic: 4500 },
];

const kpis = [
    { value: "+350%", label: "Aumento de Tráfego Orgânico", icon: TrendingUp },
    { value: "+150%", label: "Geração de Leads Qualificados", icon: TrendingUp },
    { value: "+200%", label: "Visibilidade no Google", icon: TrendingUp },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-background/80 backdrop-blur-sm rounded-lg border">
        <p className="font-medium">Mês: {label}</p>
        <p className="text-muted-foreground">Visitas: {payload[0].value.toLocaleString('pt-BR')}</p>
      </div>
    );
  }
  return null;
};

export const KpiChart = () => {
  return (
    <section id="kpi" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados que <span className="text-gradient">Falam por Si</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Nossos sites são projetados para não apenas parecerem bons, mas para gerarem resultados mensuráveis. Veja o impacto que podemos causar no seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="glass card-hover text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full mb-2">
                    <kpi.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-primary">{kpi.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{kpi.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="h-[600x] w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Card className="glass p-6 h-full" aria-label="Gráfico de tráfego orgânico mensal: eixo X meses, eixo Y visitas">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-lg">Tráfego Orgânico Mensal</CardTitle>
              <CardDescription>Eixo X: meses. Eixo Y: visitas mensais.</CardDescription>
            </CardHeader>
            <div className="h-[440px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 30, bottom: 10 }}>
                  <defs>
                    <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" tickMargin={6}>
                    <Label value="Meses" position="insideBottom" offset={-98} fill="hsl(var(--muted-foreground))" />
                  </XAxis>
                  <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => v.toLocaleString('pt-BR')}>
                    <Label value="Tráfego (visitas)" offset={-20} angle={-90} position="insideLeft" fill="hsl(var(--muted-foreground))" />
                  </YAxis>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="traffic" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorTraffic)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

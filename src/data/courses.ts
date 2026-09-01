import thumbUsb from "@/assets/thumb-usb.jpg";
import thumbGoogle from "@/assets/thumb-google.jpg";
import thumbImei from "@/assets/thumb-imei.jpg";
import thumbSoftware from "@/assets/thumb-software.jpg";
import thumbHardware from "@/assets/thumb-hardware.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

export { heroBanner };

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  category: string;
  module: string;
  videoUrl: string;
}

const VIDEOS = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
];

let videoIndex = 0;
const nextVideo = () => VIDEOS[videoIndex++ % VIDEOS.length];

export const lessons: Lesson[] = [
  // Aulas Compradas
  {
    id: "comp-1",
    title: "Boas-vindas ao MétodoDone",
    description:
      "Conheça a plataforma, o método de ensino e como tirar o máximo proveito das aulas práticas.",
    duration: "12:40",
    thumbnail: thumbSoftware,
    category: "Aulas Compradas",
    module: "Módulo 1 — Fundamentos",
    videoUrl: nextVideo(),
  },
  {
    id: "comp-2",
    title: "Ferramentas Essenciais da Bancada",
    description:
      "Box, cabos, softwares e drivers: tudo que você precisa ter instalado antes da primeira aula prática.",
    duration: "18:22",
    thumbnail: thumbHardware,
    category: "Aulas Compradas",
    module: "Módulo 1 — Fundamentos",
    videoUrl: nextVideo(),
  },
  {
    id: "comp-3",
    title: "Diagnóstico Rápido de Aparelhos",
    description:
      "Aprenda a identificar em minutos se o problema é software, hardware ou conta vinculada.",
    duration: "21:05",
    thumbnail: thumbUsb,
    category: "Aulas Compradas",
    module: "Módulo 1 — Fundamentos",
    videoUrl: nextVideo(),
  },
  {
    id: "comp-4",
    title: "Segurança e Backup Antes do Procedimento",
    description:
      "Como preservar os dados do cliente e evitar perdas durante qualquer procedimento de desbloqueio.",
    duration: "15:48",
    thumbnail: thumbGoogle,
    category: "Aulas Compradas",
    module: "Módulo 2 — Prática",
    videoUrl: nextVideo(),
  },

  // Redirecionamento de USB
  {
    id: "usb-1",
    title: "O que é Redirecionamento de USB",
    description:
      "Entenda o conceito de USB over IP e por que ele é a base dos atendimentos remotos do método.",
    duration: "14:10",
    thumbnail: thumbUsb,
    category: "Redirecionamento de USB",
    module: "Módulo 1 — Conceitos",
    videoUrl: nextVideo(),
  },
  {
    id: "usb-2",
    title: "Configurando o Servidor Remoto",
    description:
      "Passo a passo completo para subir seu servidor de redirecionamento com estabilidade.",
    duration: "24:37",
    thumbnail: thumbSoftware,
    category: "Redirecionamento de USB",
    module: "Módulo 2 — Configuração",
    videoUrl: nextVideo(),
  },
  {
    id: "usb-3",
    title: "Conectando o Aparelho do Cliente",
    description:
      "Como guiar o cliente na instalação e conectar o aparelho à sua bancada virtual.",
    duration: "19:52",
    thumbnail: thumbHardware,
    category: "Redirecionamento de USB",
    module: "Módulo 2 — Configuração",
    videoUrl: nextVideo(),
  },
  {
    id: "usb-4",
    title: "Solucionando Falhas de Conexão",
    description:
      "Drivers, portas e firewalls: resolva os erros mais comuns de redirecionamento em minutos.",
    duration: "16:29",
    thumbnail: thumbUsb,
    category: "Redirecionamento de USB",
    module: "Módulo 3 — Troubleshooting",
    videoUrl: nextVideo(),
  },

  // Desbloqueios de Conta Google
  {
    id: "google-1",
    title: "Entendendo o FRP Lock",
    description:
      "O que é o Factory Reset Protection, quando ele aparece e quais cenários são desbloqueáveis.",
    duration: "13:15",
    thumbnail: thumbGoogle,
    category: "Desbloqueios de Conta Google",
    module: "Módulo 1 — Teoria",
    videoUrl: nextVideo(),
  },
  {
    id: "google-2",
    title: "FRP em Aparelhos Samsung",
    description:
      "Procedimento completo de remoção de conta Google na linha Galaxy, do A05 ao S24.",
    duration: "27:44",
    thumbnail: thumbGoogle,
    category: "Desbloqueios de Conta Google",
    module: "Módulo 2 — Por Fabricante",
    videoUrl: nextVideo(),
  },
  {
    id: "google-3",
    title: "FRP em Xiaomi e Motorola",
    description:
      "Métodos atualizados para MIUI, HyperOS e Android puro, com e sem box.",
    duration: "23:08",
    thumbnail: thumbHardware,
    category: "Desbloqueios de Conta Google",
    module: "Módulo 2 — Por Fabricante",
    videoUrl: nextVideo(),
  },
  {
    id: "google-4",
    title: "FRP via Redirecionamento Remoto",
    description:
      "Combine o redirecionamento de USB com as ferramentas de FRP para atender clientes à distância.",
    duration: "20:31",
    thumbnail: thumbSoftware,
    category: "Desbloqueios de Conta Google",
    module: "Módulo 3 — Atendimento Remoto",
    videoUrl: nextVideo(),
  },

  // Reparo de IMEI
  {
    id: "imei-1",
    title: "IMEI: O que é e Quando Reparar",
    description:
      "Aspectos técnicos e legais do reparo de IMEI, e como identificar aparelhos sem sinal por falha de NV.",
    duration: "17:26",
    thumbnail: thumbImei,
    category: "Reparo de IMEI",
    module: "Módulo 1 — Fundamentos",
    videoUrl: nextVideo(),
  },
  {
    id: "imei-2",
    title: "Reparo de IMEI em Qualcomm",
    description:
      "Escrita de QCN, backup de partições e restauração do IMEI original em chipsets Qualcomm.",
    duration: "29:12",
    thumbnail: thumbImei,
    category: "Reparo de IMEI",
    module: "Módulo 2 — Chipsets",
    videoUrl: nextVideo(),
  },
  {
    id: "imei-3",
    title: "Reparo de IMEI em MediaTek",
    description:
      "Procedimento completo para chipsets MTK usando ferramentas de meta mode e Maui Meta.",
    duration: "25:50",
    thumbnail: thumbUsb,
    category: "Reparo de IMEI",
    module: "Módulo 2 — Chipsets",
    videoUrl: nextVideo(),
  },
  {
    id: "imei-4",
    title: "Testes de Sinal e Validação Final",
    description:
      "Checklist pós-reparo: registro na rede, chamadas, dados móveis e entrega ao cliente.",
    duration: "14:57",
    thumbnail: thumbHardware,
    category: "Reparo de IMEI",
    module: "Módulo 3 — Validação",
    videoUrl: nextVideo(),
  },
];

export const categories = [
  "Aulas Compradas",
  "Redirecionamento de USB",
  "Desbloqueios de Conta Google",
  "Reparo de IMEI",
] as const;

export const heroLesson = lessons.find((l) => l.id === "google-2")!;

export function getLessonsByCategory(category: string): Lesson[] {
  return lessons.filter((l) => l.category === category);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function getCourseStructure(category: string) {
  const courseLessons = getLessonsByCategory(category);
  const modules = new Map<string, Lesson[]>();
  for (const lesson of courseLessons) {
    const list = modules.get(lesson.module) ?? [];
    list.push(lesson);
    modules.set(lesson.module, list);
  }
  return Array.from(modules.entries()).map(([name, items]) => ({
    name,
    lessons: items,
  }));
}

'use client';

import { useState } from 'react';
import ScannerPDF from '../components/ScannerPDF';
import CotacaoForm from '../components/CotacaoForm';
import CotacaoResult from '../components/CotacaoResult';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, TrendingUp, Users, DollarSign } from 'lucide-react';
import { CotacaoOutput } from '../services/api';

interface PDFExtraido {
  idades: number[];
  operadora: string | null;
  valor_atual: number | null;
  tipo_plano: string | null;
  nome_beneficiarios: string[];
  observacoes: string | null;
  confianca: string;
}

export default function DashboardPage() {
  const [resultado, setResultado] = useState<CotacaoOutput | null>(null);
  const [loading, setLoading] = useState(false);
  
  // Estados para preencher o formulário automaticamente
  const [idadesAutomaticas, setIdadesAutomaticas] = useState<number[]>([]);
  const [operadoraAutomatica, setOperadoraAutomatica] = useState<string>('');
  const [tipoAutomatico, setTipoAutomatico] = useState<string>('');

  const stats = [
    {
      title: 'Total de Cotações',
      value: '24',
      icon: Activity,
      change: '+12%',
    },
    {
      title: 'Beneficiários',
      value: '156',
      icon: Users,
      change: '+8%',
    },
    {
      title: 'Ticket Médio',
      value: 'R$ 850',
      icon: DollarSign,
      change: '+5%',
    },
    {
      title: 'Taxa de Conversão',
      value: '68%',
      icon: TrendingUp,
      change: '+3%',
    },
  ];

  const handleDadosExtraidosPDF = (dados: PDFExtraido) => {
    // Preencher formulário com dados do PDF
    setIdadesAutomaticas(dados.idades);
    
    if (dados.operadora) {
      setOperadoraAutomatica(dados.operadora);
    }
    
    if (dados.tipo_plano) {
      setTipoAutomatico(dados.tipo_plano);
    }

    // Scroll suave para o formulário
    setTimeout(() => {
      document.getElementById('formulario-cotacao')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 500);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard - Humano Saúde</h1>
        <p className="text-muted-foreground">
          Sistema de cotações de planos de saúde com IA
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Scanner de PDF - NOVO! */}
      <div className="mb-6">
        <ScannerPDF onDadosExtraidos={handleDadosExtraidosPDF} />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Formulário */}
        <div id="formulario-cotacao">
          <CotacaoForm 
            onCalculate={setResultado} 
            onLoading={setLoading}
            idadesIniciais={idadesAutomaticas}
            operadoraInicial={operadoraAutomatica}
            tipoInicial={tipoAutomatico}
          />
        </div>

        {/* Resultado */}
        <div>
          {loading && (
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Calculando cotação...</p>
                </div>
              </CardContent>
            </Card>
          )}

          {!loading && resultado && <CotacaoResult resultado={resultado} />}

          {!loading && !resultado && (
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center text-muted-foreground">
                  <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="mb-2">Faça upload de um PDF ou</p>
                  <p>Preencha o formulário para calcular uma cotação</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
